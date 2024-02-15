from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
import os

app = FastAPI()

# Serve static files from the build directory of the frontend app
frontend_build_dir = os.path.abspath("../frontend/build")
app.mount("/", StaticFiles(directory=frontend_build_dir), name="static")
