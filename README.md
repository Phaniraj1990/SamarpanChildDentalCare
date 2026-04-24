# Samarpan Child Dental Care - Full Stack Application 🦷

A modern, decoupled web application built for a pediatric dental clinic. This project features a lightning-fast frontend UI, a secure relational database.

## 🚀 Architecture & Tech Stack

This project utilizes a Headless/Decoupled architecture, separating the client-side UI from the server-side logic and database administration.

**Frontend (Client)**
* **Framework:** React.js (built with Vite)
* **Styling:** Tailwind CSS (Mobile-first design approach)
* **Hosting / CI/CD:** Netlify

**Backend (API & Logic)**
* **Framework:** Python / Django
* **API Architecture:** Django REST Framework (DRF)
* **Hosting / CI/CD:** Render

**Database**
* **Engine:** PostgreSQL 
* **Hosting:** Neon.tech (Serverless Postgres)


## 🔐 Security Implementations
Security was a top priority for handling potential medical inquiries:
* **Strict CORS Policies:** API access is strictly whitelisted to the production Netlify URL.
* **Environment Variable Vaulting:** Database URLs, Django Secret Keys, and AI API Keys are completely scrubbed from the source code and managed securely via Render's environment dashboard.
* **Production Debugging Disabled:** Prevents code/stack trace leaks in the event of a server error.

## 💻 Local Development Setup

If you wish to run this project locally, follow these steps:

### Backend Setup
1. Navigate to the backend directory: `cd backend`
2. Create a virtual environment: `python -m venv venv`
3. Activate the environment: `source venv/bin/activate` (Mac/Linux) or `venv\Scripts\activate` (Windows)
4. Install dependencies: `pip install -r requirements.txt`
5. Create a `.env` file in the root directory and add your `DATABASE_URL`, `SECRET_KEY`
6. Run migrations: `python manage.py migrate`
7. Start the server: `python manage.py runserver`

### Frontend Setup
1. Navigate to the frontend directory: `cd frontend`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

---
*Developed by [Phaniraj KJ]*
