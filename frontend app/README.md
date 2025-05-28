# 🩺 DocCare – Doctor Appointment Booking System (PWA)

**DocCare** is a full-featured **MERN stack Progressive Web App (PWA)** that simplifies the process of booking doctor appointments. It offers a seamless and mobile-friendly experience for patients, doctors, and admins — now enhanced with **PWA capabilities** like offline access, installability, and faster load times.

---

## 📌 Overview

DocCare is designed to streamline healthcare appointment management. Built using the **MERN stack**, it ensures secure transactions through Razorpay and Stripe, with role-based access for patients, doctors, and admins.

Now with **PWA support**, users can:

* Access the app offline or in low-network areas.
* Install it directly on their device like a native app.
* Enjoy faster performance via caching and background sync.

---

## 🏗️ Project Structure

The project is organized into three main parts:

* **Frontend (React.js + PWA Support):** Manages user interface, service worker registration, and offline functionality.
* **Backend (Node.js + Express.js + MongoDB):** Handles APIs, user auth, payments, and business logic.
* **Admin Panel (React Admin):** Allows admins to oversee users and doctors.

---

## 🚀 Features

* 🔐 **User Authentication** – JWT-based secure login and signup
* 📅 **Doctor Appointment Booking** – Book appointments based on real-time availability
* 👨‍⚕️ **Doctor Dashboard** – Doctors manage their schedules
* ⚙️ **Admin Panel** – Admin can control users and doctors
* 💳 **Payments** – Integrated Razorpay and Stripe gateways
* 🔍 **Search & Filters** – Based on specialization, location, and availability
* 📱 **Mobile-First Design** – Fully responsive and optimized for devices
* 🔒 **Secure API** – JWT, bcrypt, and data encryption
* 📲 **PWA Features**:

  * **Offline Support** – Access critical pages offline
  * **Add to Home Screen** – Install the app like a native application
  * **Caching** – Faster page loads with intelligent caching
  * **Background Sync** – Handle failed requests when offline

---

## 🛠️ Tech Stack

* **Frontend**: React.js, Redux Toolkit, Tailwind CSS, Workbox (PWA)
* **Backend**: Node.js, Express.js, MongoDB
* **Authentication**: JWT, bcrypt
* **Payments**: Razorpay, Stripe
* **Admin Panel**: React Admin
* **PWA Tools**: Workbox, manifest.json, service workers

---

## 🔧 Installation Guide

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/abhishekboadgurjar/doccare-app.git
cd doccare
```

### 2️⃣ Install Dependencies

**Frontend**

```bash
cd frontend
npm install
```

**Backend**

```bash
cd backend
npm install
```

**Admin Panel**

```bash
cd admin
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file inside the `backend` folder and add:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

### 4️⃣ Run the Application

**Start Backend**

```bash
cd backend
npm start
```

**Start Frontend (with PWA support)**

```bash
cd frontend
npm start
```

**Start Admin Panel**

```bash
cd admin
npm start
```

---

## 🧪 PWA Implementation Details

* `manifest.json` configured with name, icons, theme color, and start\_url.
* Custom `service-worker.js` or Workbox auto-generated for caching assets.
* React app registered for `serviceWorkerRegistration`.
* App is installable on Android, iOS, and Desktop via "Add to Home Screen".

---

## 🔗 Live Demo

🌐 [Live Demo Here](https://doc-care-app-native.vercel.app/)

---

## 🌱 Future Enhancements

* 🩺 **Teleconsultation** – Video calling with doctors
* 💊 **Prescription Management** – Digital prescription sharing
* ⏰ **Automated Reminders** – Email & SMS alerts
* 🌐 **Multi-Language Support** – Enhanced accessibility
* 📡 **Push Notifications** – Real-time updates (PWA-specific)

---

## 📝 License

Licensed under the [MIT License](LICENSE).

---

## 📬 Contact

**GitHub**: [@abhishekboadgurjar](https://github.com/abhishekgurjar-in)

---
