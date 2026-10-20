* {
  box-sizing: border-box;
}

:root {
  --bg: #f5f7fb;
  --panel: #ffffff;
  --text: #1f2937;
  --muted: #6b7280;
  --border: #e5e7eb;
  --blue: #2563eb;
  --orange: #f59e0b;
  --green: #10b981;
  --purple: #8b5cf6;
  --red: #ef4444;
  --shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
}

body {
  margin: 0;
  font-family: Inter, Arial, sans-serif;
  background: var(--bg);
  color: var(--text);
}

.app-shell {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 240px;
  background: #0f172a;
  color: white;
  padding: 24px 18px;
}

.sidebar h1 {
  margin: 0 0 26px;
  font-size: 1.6rem;
}

.sidebar nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.sidebar a {
  color: #dbeafe;
  text-decoration: none;
  padding: 10px 12px;
  border-radius: 8px;
}

.sidebar a:hover {
  background: rgba(255, 255, 255, 0.08);
}

.content {
  flex: 1;
  padding: 24px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--muted);
  font-size: 0.72rem;
  margin: 0;
}

.topbar h2 {
  margin: 6px 0 0;
  font-size: 2rem;
}

.status-pill {
  background: #dcfce7;
  color: #166534;
  border-radius: 999px;
  padding: 8px 12px;
  font-weight: 600;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(120px, 1fr));
  gap: 16px;
  margin-bottom: 22px;
}

.stat-card {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 18px;
  box-shadow: var(--shadow);
}

.stat-card label {
  display: block;
  color: var(--muted);
  font-size: 0.8rem;
  margin-bottom: 12px;
}

.stat-card strong {
  font-size: 2rem;
}

.accent-blue { border-top: 4px solid var(--blue); }
.accent-orange { border-top: 4px solid var(--orange); }
.accent-green { border-top: 4px solid var(--green); }
.accent-purple { border-top: 4px solid var(--purple); }
.accent-red { border-top: 4px solid var(--red); }

.two-column {
  display: grid;
  grid-template-columns: repeat(2, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 22px;
}

.panel {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 18px;
  box-shadow: var(--shadow);
}

.panel h3 {
  margin-top: 0;
}

form {
  display: grid;
  gap: 12px;
}

input, textarea, select, button {
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 10px 12px;
  font: inherit;
}

textarea {
  min-height: 80px;
  resize: vertical;
}

button {
  background: var(--blue);
  color: white;
  font-weight: 600;
  border: none;
  cursor: pointer;
}

button:hover {
  opacity: 0.96;
}

.list {
  padding-left: 18px;
  color: var(--muted);
  margin-top: 12px;
}

.table-panel {
  margin-bottom: 22px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

th, td {
  padding: 12px 10px;
  border-bottom: 1px solid var(--border);
  text-align: left;
}

th {
  background: #f8fafc;
  color: var(--muted);
  font-size: 0.84rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

@media (max-width: 980px) {
  .stats-grid,
  .two-column {
    grid-template-columns: 1fr;
  }

  .app-shell {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
  }
}
