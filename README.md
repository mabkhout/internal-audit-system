:root {
  --bg: #f4f7fb;
  --panel: #ffffff;
  --text: #122033;
  --muted: #5f7287;
  --primary: #1558d6;
  --primary-dark: #0f46b5;
  --success: #1f9d61;
  --warning: #e0a92f;
  --danger: #d9444d;
  --border: #dfe5ee;
  --shadow: 0 12px 28px rgba(18, 32, 51, 0.08);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Inter, Arial, sans-serif;
  background: var(--bg);
  color: var(--text);
}

button,
input,
textarea,
select {
  font: inherit;
}

.app-shell {
  display: flex;
  min-height: 100vh;
}

.app-shell.hidden {
  display: none;
}

.sidebar {
  width: 250px;
  background: linear-gradient(180deg, #0d1b2a 0%, #122847 100%);
  color: white;
  padding: 24px 18px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.sidebar h1 {
  margin: 0;
  font-size: 1.7rem;
}

.sidebar nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.sidebar a {
  color: #dfeeff;
  text-decoration: none;
  padding: 10px 12px;
  border-radius: 10px;
  transition: background 0.2s ease;
}

.sidebar a:hover {
  background: rgba(255, 255, 255, 0.08);
}

.logout-button {
  margin-top: auto;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: white;
  padding: 10px 14px;
  border-radius: 10px;
  cursor: pointer;
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
  margin: 0 0 6px;
  color: var(--muted);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 0.72rem;
}

.topbar h2 {
  margin: 0;
  font-size: 2rem;
}

.status-pill {
  background: #e3f7ee;
  color: #0d6f42;
  padding: 8px 12px;
  border-radius: 999px;
  font-weight: 600;
}

.export-controls {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.export-controls button {
  background: #0f172a;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px 14px;
  cursor: pointer;
}

.export-controls button.secondary {
  background: var(--primary);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(150px, 1fr));
  gap: 16px;
  margin-bottom: 22px;
}

.stat-card {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 14px;
  box-shadow: var(--shadow);
  padding: 18px;
}

.stat-card label {
  color: var(--muted);
  font-size: 0.8rem;
  display: block;
  margin-bottom: 12px;
}

.stat-card strong {
  font-size: 2rem;
  display: block;
}

.accent-blue { border-top: 4px solid #2563eb; }
.accent-orange { border-top: 4px solid #f59e0b; }
.accent-green { border-top: 4px solid #10b981; }
.accent-purple { border-top: 4px solid #8b5cf6; }
.accent-red { border-top: 4px solid #ef4444; }

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

input, select, textarea, button {
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 10px 12px;
}

textarea {
  min-height: 90px;
  resize: vertical;
}

button {
  cursor: pointer;
  background: var(--primary);
  color: white;
  border: none;
  font-weight: 600;
}

button:hover {
  background: var(--primary-dark);
}

.list {
  margin-top: 14px;
  padding-left: 18px;
  color: var(--muted);
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
  background: #f7f9fc;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-size: 0.75rem;
}

.auth-shell {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #eef4ff, #f3f8ff 50%, #edf7f1);
}

.auth-card {
  background: white;
  border: 1px solid var(--border);
  border-radius: 16px;
  box-shadow: var(--shadow);
  width: min(420px, calc(100vw - 30px));
  padding: 32px 24px;
}

.auth-card h1 {
  margin-top: 0;
  font-size: 2rem;
}

.auth-card p {
  color: var(--muted);
  margin-bottom: 20px;
}

.hidden {
  display: none;
}

@media (max-width: 980px) {
  .app-shell {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
  }

  .stats-grid,
  .two-column {
    grid-template-columns: 1fr;
  }
}
