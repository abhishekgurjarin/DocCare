# 🩺 DocCare – Doctor Appointment Booking System (Web + App)

**DocCare** is a full-featured **MERN stack** Doctor Appointment Booking System available as both a responsive **web application** and a mobile **React Native app**. It helps patients easily book appointments, allows doctors to manage their schedules, and gives admins full control — all from any device. Now with **PWA** and **mobile app** support, it ensures accessibility even in offline or low-network areas.

---

## 📌 Overview

DocCare streamlines healthcare appointment management with secure payment integration, role-based access, and an intuitive user experience for **patients**, **doctors**, and **admins**.

✨ Supports:

* **Web Application (React.js)** with PWA support
* **Mobile App (React Native)** for Android/iOS

---

## 🛠️ Tech Stack

| Layer              | Technologies                                         |
| ------------------ | ---------------------------------------------------- |
| **Frontend** (Web) | React.js, Tailwind CSS, Redux Toolkit, Workbox (PWA) |
| **Frontend** (App) | React Native, React Navigation, Redux Toolkit        |
| **Backend**        | Node.js, Express.js, MongoDB                         |
| **Authentication** | JWT, bcrypt                                          |
| **Payments**       | Razorpay, Stripe                                     |
| **Admin Panel**    | React Admin                                          |
| **PWA Tools**      | Workbox, `manifest.json`, service workers            |

---

## 🚀 Features

### 🌐 Common (Web + App)

* 🔐 Secure JWT Authentication
* 📅 Real-Time Doctor Appointment Booking
* 👨‍⚕️ Doctor Dashboard for Schedule Management
* ⚙️ Admin Panel to Manage Doctors & Users
* 💳 Razorpay & Stripe Payment Integration
* 🔍 Advanced Search & Filter by specialization/location
* 🔒 Encrypted API Communication

### 🌍 Web Specific (PWA)

* 📲 Installable PWA (Add to Home Screen)
* 🔁 Background Sync for failed requests
* 💾 Intelligent Caching for faster load times
* 📴 Offline Access to key pages

### 📱 App Specific

* 🎯 Native-like performance and navigation
* 🔔 Push Notification (planned)
* 📷 Camera/File support (for uploading reports - future)
* 🌐 Works on both **Android** and **iOS**

---

## 🏗️ Project Structure

```
doccare/
├── backend/           # Node.js + Express API
├── frontend/          # React.js Web Application (PWA)
├── admin/             # React Admin Panel
└── app/               # React Native Mobile Application
```

---

## 🔧 Installation Guide

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/abhishekboadgurjar/doccare.git
cd doccare
```

---

### 2️⃣ Install Dependencies

#### Web Frontend

```bash
cd frontend
npm install
```

#### Mobile App (React Native)

```bash
cd app
npm install
```

#### Backend

```bash
cd backend
npm install
```

#### Admin Panel

```bash
cd admin
npm install
```

---

### 3️⃣ Configure Environment Variables

In the **`backend/.env`** file:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

---

### 4️⃣ Run the Project

#### 🧠 Backend Server

```bash
cd backend
npm start
```

#### 🌐 Web Frontend (PWA)

```bash
cd frontend
npm start
```

#### 📱 React Native App

Use [Expo](https://docs.expo.dev/) or React Native CLI:

```bash
cd app
npx expo start
```

#### 🛠️ Admin Panel

```bash
cd admin
npm start
```

---

## 📸 Screenshots

> Add screenshots for:

* Web homepage
* Doctor listing
* Booking page
* Mobile UI
* Admin panel

---

## 🔗 Live Demo

🌐 [Live Web App](https://doccare-app.vercel.app/)
📱 [Mobile App (Expo/Play Store/iOS)](https://doccare-website.vercel.app/)

---

## 🌱 Future Enhancements

* 🎥 Teleconsultation (Video Calling)
* 💊 Prescription Upload & Sharing
* 🔔 Push Notifications (App + Web)
* ⏰ Appointment Reminders via SMS/Email
* 🌐 Multi-language Support
* 🧾 Reports Upload for Patients

---

## 📝 License

This project is licensed under the **MIT License**.

---

## 📬 Contact

* GitHub: [@abhishekboadgurjar](https://github.com/abhishekboadgurjar)

