from fastapi import FastAPI, Depends
import models
from database import engine, SessionLocal
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

models.Base.metadata.create_all(bind=engine)

# class Chicken(BaseModel):
#     brand :str
#     name :str
#     bgcolor :str
#     completed : int
#     btnLimit :bool

def get_db():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()

@app.get("/chickens")
async def get_all_chickens(db:Session=Depends(get_db)):
    return db.query(models.Chicken).all()

@app.post("/chickens/{chicken_id}")
async def update_chicken_completed(chicken_id:int, db:Session=Depends(get_db)):
    chicken = db.query(models.Chicken).filter(models.Chicken.id == chicken_id).first()

    chicken.completed += 1

    db.add(chicken)
    db.commit()


# if __name__ == "__main__":
#     import uvicorn
#     uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)