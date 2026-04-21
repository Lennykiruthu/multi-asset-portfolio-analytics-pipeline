from fastapi import FastAPI, HTTPException
import psycopg2
import os
from models import UserRegister, UserLogin, TokenResponse
from auth import hash_password, verify_password, create_token

app = FastAPI()

def get_db():
    return psycopg2.connect(os.getenv("DATABASE_URL"))

@app.post("/api/auth/register", response_model=TokenResponse)
def register(user: UserRegister):
    conn = get_db()
    cur = conn.cursor()
    
    # Check if email already exists
    cur.execute("SELECT id FROM users WHERE email = %s", (user.email,))
    if cur.fetchone():
        raise HTTPException(status_code=400, detail="Email already registered")
    
    # Insert new user
    cur.execute(
        """
        INSERT INTO users (email, password_hash, full_name)
        VALUES (%s, %s, %s)
        RETURNING id, full_name
        """,
        (user.email, hash_password(user.password), user.full_name)
    )
    user_id, full_name = cur.fetchone()
    conn.commit()
    cur.close()
    conn.close()
    
    token = create_token(user_id, user.email, full_name)
    return TokenResponse(access_token=token, user_id=user_id, full_name=full_name)

@app.post("/api/auth/login", response_model=TokenResponse)
def login(credentials: UserLogin):
    conn = get_db()
    cur = conn.cursor()
    
    cur.execute(
        "SELECT id, password_hash, full_name FROM users WHERE email = %s",
        (credentials.email,)
    )
    row = cur.fetchone()
    cur.close()
    conn.close()
    
    if not row or not verify_password(credentials.password, row[1]):
        raise HTTPException(status_code=401, detail="Invalid email or password")
    
    user_id, _, full_name = row
    token = create_token(user_id, credentials.email, full_name)
    return TokenResponse(access_token=token, user_id=user_id, full_name=full_name)

@app.get("/api/auth/health")
def health():
    return {"status": "ok"}