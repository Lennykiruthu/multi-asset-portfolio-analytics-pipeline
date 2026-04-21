import streamlit as st
import requests
import os

AUTH_SERVICE_URL = os.getenv("AUTH_SERVICE_URL", "http://auth:8000")

def show_auth_page():
    st.title("Portfolio Analytics Platform")
    st.markdown("---")
    
    tab_login, tab_register = st.tabs(["Login", "Create Account"])
    
    with tab_login:
        with st.form("login_form"):
            email = st.text_input("Email")
            password = st.text_input("Password", type="password")
            submitted = st.form_submit_button("Login", use_container_width=True)
            
            if submitted:
                try:
                    response = requests.post(
                        f"{AUTH_SERVICE_URL}/api/auth/login",
                        json={"email": email, "password": password}
                    )
                    if response.status_code == 200:
                        data = response.json()
                        st.session_state.user_id    = data["user_id"]
                        st.session_state.full_name  = data["full_name"]
                        st.session_state.token      = data["access_token"]
                        st.session_state.logged_in  = True
                        st.rerun()
                    else:
                        st.error("Invalid email or password")
                except Exception as e:
                    st.error(f"Could not connect to auth service: {e}")
    
    with tab_register:
        with st.form("register_form"):
            full_name = st.text_input("Full name")
            email     = st.text_input("Email")
            password  = st.text_input("Password", type="password")
            submitted = st.form_submit_button("Create Account", use_container_width=True)
            
            if submitted:
                try:
                    response = requests.post(
                        f"{AUTH_SERVICE_URL}/api/auth/register",
                        json={"email": email, "password": password, "full_name": full_name}
                    )
                    if response.status_code == 200:
                        data = response.json()
                        st.session_state.user_id    = data["user_id"]
                        st.session_state.full_name  = data["full_name"]
                        st.session_state.token      = data["access_token"]
                        st.session_state.logged_in  = True
                        st.rerun()
                    else:
                        st.error(response.json().get("detail", "Registration failed"))
                except Exception as e:
                    st.error(f"Could not connect to auth service: {e}")

def require_auth():
    """Call this at the top of every page."""
    if not st.session_state.get("logged_in"):
        show_auth_page()
        st.stop()  # Critical — stops the rest of the page from rendering