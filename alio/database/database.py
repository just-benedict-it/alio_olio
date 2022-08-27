from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

SQLALCHEMY_DATABASE_URL = "sqlite:///./alio.db"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread":False}
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

# ("Nene", "오리엔탈"||char(10)||"파닭", "#FFCB42", 59, False), ("Kyochon", "레드콤보", "#FF1E00", 50, False), ("Nene", "스노윙"||char(10)||"치즈", "#FF7F3F", 49, False), ("Goubne", "고추"||char(10)||"바사삭", "#F94892", 48, False), ("Hosigi", "매운"||char(10)||"간장치킨", "#FF7F3F", 60, False), ("bhc", "맛초킹", "#7DCE13", 50, False), ("Cheogazip", "슈프림"||char(10)||"양념치킨", "#FF6666", 50, False), ("Kyochon", "허니콤보", "#FBDF07", 50, False)