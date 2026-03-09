# 🎓 PFE Project Boilerplate — MERN Stack

Full-stack boilerplate: **React + Tailwind CSS** (frontend) + **MongoDB + Express + Node.js** (backend)

---

## 📁 Project Structure

```
pfe-boilerplate/
├── frontend/          # React + Tailwind CSS
└── backend/           # Node.js + Express + MongoDB
```

---

## 🚀 Quick Start

### 1. Clone & Install

```bash
# Install frontend dependencies
cd frontend && npm install

# Install backend dependencies
cd ../backend && npm install
```

### 2. Configure Environment Variables

```bash
# Backend
cp backend/.env.example backend/.env
# Edit backend/.env with your MongoDB URI, JWT secret, etc.

# Frontend
cp frontend/.env.example frontend/.env
```

### 3. Run Development Servers

```bash
# Terminal 1 — Backend (port 5000)
cd backend && npm run dev

# Terminal 2 — Frontend (port 5173)
cd frontend && npm run dev
```

---

## 🛠 Tech Stack

| Layer      | Technology                        |
|------------|-----------------------------------|
| Frontend   | React 18, Tailwind CSS, React Router v6, Axios |
| Backend    | Node.js, Express.js               |
| Database   | MongoDB + Mongoose                |
| Auth       | JWT + bcryptjs                    |
| Dev Tools  | Nodemon, Vite, ESLint             |
