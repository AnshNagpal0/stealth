# 🚗 AI-Powered Car Leasing Platform MVP

## 📘 Overview

This is a prototype for an AI-enhanced Car Leasing Platform built to manage lessee registration, lease agreements, and payment processing. It includes a dashboard that visualizes key data such as vehicle availability, payment status, and lessee details. The project is structured into a monorepo with both frontend (Vite + TailwindCSS + React) and backend (Express + MongoDB) components.

## 🏗️ Project Structure

```
stealth/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── index.html
├── .gitignore
├── README.md
└── stealth-assignment.md  <-- AI Prompt & Metrics Documentation
```

## ✨ Features

### ✅ Lessee Registration

* Register name, email, phone, and assigned vehicle.

### 💳 Lease Payment Simulation

* Record simulated lease payments
* Track payment history for each lessee

### 📊 Dashboard (for Lease Manager)

* Number of vehicles leased vs available (out of 20)
* Total payments collected vs expected (assuming \$500 per month/vehicle)
* Table of lessees with pending or overdue payments

### 🎨 UX/UI

* Clean visual dashboard using TailwindCSS
* Interactive tables and summary cards

## 🚀 Getting Started

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

Ensure MongoDB is running locally or configure connection in `.env`.

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## 🔐 Environment Variables

Create `.env` file in `/backend`:

```env
PORT=5000
MONGO_URI=<your-mongo-connection-string>
```

## 📂 API Routes

| Route            | Method | Description           |
| ---------------- | ------ | --------------------- |
| `/api/lessees`   | POST   | Register new lessee   |
| `/api/payments`  | POST   | Submit a payment      |
| `/api/dashboard` | GET    | Fetch dashboard stats |
| `/api/lessees`   | GET    | List all lessees      |


