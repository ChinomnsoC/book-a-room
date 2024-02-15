frontend-install:
	cd frontend-app && npm install

frontend-build:
	cd frontend-app && npm run build

# Backend commands
backend-install:
	cd book-a-room-backend && poetry install

backend-run:
	cd book-a-room-backend && poetry run uvicorn app:app --reload

# Combined commands
install: frontend-install backend-install
build: frontend-build
start: build backend-run
