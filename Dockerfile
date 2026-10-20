# Internal Audit System

A production-minded MVP for managing internal audit engagements, risks, controls, findings, and remediation actions.

## Features
- Audit engagement lifecycle management
- Risk register and control library
- Findings with severity and ownership
- Action item tracking and due dates
- Dashboard summary and reporting
- User authentication and role-based access
- SQLite-backed persistence for local deployment
- Optional Docker deployment

## Tech stack
- Backend: FastAPI
- Database: SQLite (dev) / PostgreSQL-ready SQLAlchemy models
- Frontend: Lightweight static dashboard
- Auth: JWT with role checks

## Quick start

1. Create a virtual environment
   ```bash
   python -m venv .venv
   source .venv/bin/activate
   ```

2. Install dependencies
   ```bash
   pip install -r requirements.txt
   ```

3. Run the app
   ```bash
   uvicorn main:app --reload
   ```

4. Open the dashboard
   - http://localhost:8000/

## Default credentials
- Username: `admin`
- Password: `admin123`

## API examples
- Login:
  ```bash
  curl -X POST http://localhost:8000/api/auth/login \
    -H "Content-Type: application/json" \
    -d '{"username":"admin","password":"admin123"}'
  ```
- Dashboard:
  ```bash
  curl http://localhost:8000/api/dashboard
  ```

## Production notes
- Replace the default JWT secret in `SECRET_KEY`.
- Move from SQLite to PostgreSQL for multi-user production deployments.
- Add CI/CD, automated tests, and report exports for enterprise use.

## Core modules
- Departments
- Audit engagements
- Risk register
- Controls library
- Findings
- Action items
- Users and roles
- Reporting

## Roadmap
- Document repository and evidence management
- Workflow approvals and signoff
- Report exports to PDF/Excel
- Audit scheduling calendar
- SSO and enterprise user provisioning
- Notifications and SLA tracking
