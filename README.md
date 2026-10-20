const API = '/api';

async function fetchJson(url, options = {}) {
  const response = await fetch(`${API}${url}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || 'Request failed');
  }

  return response.json();
}

async function loadDashboard() {
  const summary = await fetchJson('/dashboard');
  document.getElementById('engagements-count').textContent = summary.engagements;
  document.getElementById('risks-count').textContent = summary.risks;
  document.getElementById('controls-count').textContent = summary.controls;
  document.getElementById('findings-count').textContent = summary.open_findings;
  document.getElementById('actions-count').textContent = summary.action_items;
}

async function loadDepartments() {
  const departments = await fetchJson('/departments');
  const departmentSelect = document.getElementById('department-select');
  departmentSelect.innerHTML = departments
    .map(d => `<option value="${d.id}">${d.name}</option>`)
    .join('');

  const list = document.getElementById('department-list');
  list.innerHTML = departments.map(d => `<li>${d.name}</li>`).join('');
}

async function loadEngagements() {
  const engagements = await fetchJson('/audit-engagements');
  const table = document.getElementById('engagement-table');
  const select = document.getElementById('engagement-select');

  table.innerHTML = engagements.map((item) => `
    <tr>
      <td>${item.name}</td>
      <td>${item.status}</td>
      <td>${item.department_id}</td>
      <td>${item.start_date}</td>
      <td>${item.end_date || '—'}</td>
    </tr>
  `).join('');

  select.innerHTML = engagements.map(item => `<option value="${item.id}">${item.name}</option>`).join('');
}

async function loadRisks() {
  const risks = await fetchJson('/risks');
  document.getElementById('risk-table').innerHTML = risks.map(item => `
    <tr>
      <td>${item.title}</td>
      <td>${item.owner || '—'}</td>
      <td>${item.category}</td>
      <td>${item.likelihood}</td>
      <td>${item.impact}</td>
      <td>${item.status}</td>
    </tr>
  `).join('');
}

async function loadControls() {
  const controls = await fetchJson('/controls');
  document.getElementById('control-table').innerHTML = controls.map(item => `
    <tr>
      <td>${item.title}</td>
      <td>${item.owner || '—'}</td>
      <td>${item.category}</td>
      <td>${item.control_type}</td>
      <td>${item.status}</td>
    </tr>
  `).join('');
}

async function loadFindings() {
  const findings = await fetchJson('/findings');
  const select = document.getElementById('finding-select');
  document.getElementById('finding-table').innerHTML = findings.map(item => `
    <tr>
      <td>${item.title}</td>
      <td>${item.severity}</td>
      <td>${item.status}</td>
      <td>${item.owner || '—'}</td>
      <td>${item.engagement_id}</td>
    </tr>
  `).join('');

  select.innerHTML = findings.map(item => `<option value="${item.id}">${item.title}</option>`).join('');
}

async function loadActions() {
  const actions = await fetchJson('/action-items');
  document.getElementById('action-table').innerHTML = actions.map(item => `
    <tr>
      <td>${item.title}</td>
      <td>${item.owner || '—'}</td>
      <td>${item.due_date || '—'}</td>
      <td>${item.status}</td>
    </tr>
  `).join('');
}

async function refreshAll() {
  await Promise.all([
    loadDashboard(),
    loadDepartments(),
    loadEngagements(),
    loadRisks(),
    loadControls(),
    loadFindings(),
    loadActions(),
  ]);
}

function bindForm(formId, endpoint, serializer) {
  const form = document.getElementById(formId);
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const payload = serializer(formData);

    try {
      await fetchJson(endpoint, {
        method: 'POST',
        body: JSON.stringify(payload),
      });
      form.reset();
      await refreshAll();
    } catch (error) {
      alert(error.message);
    }
  });
}

function serializeDepartment(formData) {
  const name = formData.get('name');
  return { name: String(name).trim() };
}

function serializeEngagement(formData) {
  return {
    name: String(formData.get('name')).trim(),
    description: String(formData.get('description') || '').trim(),
    department_id: Number(formData.get('department_id')),
    status: String(formData.get('status') || 'Planned'),
    start_date: formData.get('start_date') || new Date().toISOString().slice(0, 10),
    end_date: formData.get('end_date') || null,
  };
}

function serializeRisk(formData) {
  return {
    title: String(formData.get('title')).trim(),
    owner: String(formData.get('owner') || '').trim(),
    category: String(formData.get('category') || 'Operational'),
    likelihood: String(formData.get('likelihood') || 'Medium'),
    impact: String(formData.get('impact') || 'Medium'),
    status: String(formData.get('status') || 'Open'),
  };
}

function serializeControl(formData) {
  return {
    title: String(formData.get('title')).trim(),
    owner: String(formData.get('owner') || '').trim(),
    category: String(formData.get('category') || 'Process'),
    control_type: String(formData.get('control_type') || 'Preventive'),
    status: String(formData.get('status') || 'Effective'),
  };
}

function serializeFinding(formData) {
  const riskId = formData.get('risk_id');
  const controlId = formData.get('control_id');
  return {
    engagement_id: Number(formData.get('engagement_id')),
    title: String(formData.get('title')).trim(),
    description: String(formData.get('description') || '').trim(),
    owner: String(formData.get('owner') || '').trim(),
    severity: String(formData.get('severity') || 'Moderate'),
    status: String(formData.get('status') || 'Open'),
    risk_id: riskId ? Number(riskId) : null,
    control_id: controlId ? Number(controlId) : null,
  };
}

function serializeAction(formData) {
  return {
    finding_id: Number(formData.get('finding_id')),
    title: String(formData.get('title')).trim(),
    owner: String(formData.get('owner') || '').trim(),
    due_date: formData.get('due_date') || null,
    status: String(formData.get('status') || 'Open'),
  };
}

bindForm('department-form', '/departments', serializeDepartment);
bindForm('engagement-form', '/audit-engagements', serializeEngagement);
bindForm('risk-form', '/risks', serializeRisk);
bindForm('control-form', '/controls', serializeControl);
bindForm('finding-form', '/findings', serializeFinding);
bindForm('action-form', '/action-items', serializeAction);

refreshAll();
