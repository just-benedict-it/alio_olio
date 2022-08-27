from sqlalchemy import Boolean, Column, Integer, String
from database import Base

class Chicken(Base):
    __tablename__ = "chickens"

    id = Column(Integer, primary_key=True, index=True)
    brand = Column(String)
    name = Column(String)
    bgcolor = Column(String)
    completed = Column(Integer)
    btnLimit = Column(Boolean, default=False)
