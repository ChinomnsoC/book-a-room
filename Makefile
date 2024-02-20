frontend-install:
	@{ \
		pushd ./frontend-app ;\
		npm install ;\
		popd ;\
	}

frontend-build:
	@{ \
		pushd ./frontend-app ;\
		npm run build ;\
		popd ;\
	}

frontend-start: frontend-install
	cd frontend-app && npm run start &

# Backend commands
backend-start:
	@{ \
		pushd ./book-a-room-backend ;\
		poetry install ;\
		poetry run uvicorn app:app --reload ;\
		popd ;\
	}
	
# Combined commands
start: frontend-start backend-start
