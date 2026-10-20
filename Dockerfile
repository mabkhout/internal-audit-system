version: "3.9"
services:
  api:
    build: .
    container_name: internal-audit-system
    ports:
      - "8000:8000"
    environment:
      DATABASE_URL: ${DATABASE_URL:-sqlite:///./audit_system.db}
      SECRET_KEY: ${SECRET_KEY:-internal-audit-system-dev-secret}
      ACCESS_TOKEN_EXPIRE_MINUTES: ${ACCESS_TOKEN_EXPIRE_MINUTES:-1440}
    volumes:
      - .:/app
    command: uvicorn main:app --host 0.0.0.0 --port 8000 --reload

  db:
    image: postgres:16-alpine
    container_name: internal-audit-db
    environment:
      POSTGRES_DB: internal_audit
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
