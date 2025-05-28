# DocCare - Doctor Appointment Booking System

## 📌 Overview
DocCare is a **MERN stack** web application designed to streamline the process of booking doctor appointments. The platform offers an intuitive interface for patients, doctors, and administrators, ensuring a seamless experience. With integrated **Razorpay and Stripe** payment gateways, users can make secure transactions for their appointments. The system includes role-based access, allowing patients to book appointments, doctors to manage their schedules, and admins to oversee the platform’s functionality.

## 🏗️ Project Structure
The project is divided into three main components:

- **Frontend** (React.js): Handles the user interface and interactions.
- **Backend** (Node.js, Express.js, MongoDB): Manages API requests, authentication, and database operations.
- **Admin Panel** (React Admin): Provides tools for the admin to manage doctors and users efficiently.

## 🚀 Features
- **User Authentication:** Secure login/signup functionality using JWT authentication.
- **Doctor Appointment Booking:** Users can book appointments with doctors based on availability.
- **Doctor Dashboard:** Doctors have access to a dashboard to manage their appointments.
- **Admin Panel:** Allows administrators to manage doctors and users.
- **Payment Integration:** Secure payment processing via **Razorpay and Stripe**.
- **Advanced Search and Filtering:** Users can find doctors based on specialization, availability, and location.
- **Mobile-Friendly UI:** The interface is fully responsive, ensuring accessibility on all devices.
- **Secure API:** Built-in security features such as JWT authentication and data encryption.

## 🛠️ Tech Stack
- **Frontend:** React.js, Redux, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** JWT, bcrypt
- **Payments:** Razorpay, Stripe
- **State Management:** Redux Toolkit
- **Admin Panel:** React Admin

## 🔧 Installation Guide
Follow these steps to set up the project on your local machine.

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/abhishekgurjar-in/doccare.git
cd doccare
```

### 2️⃣ Install Dependencies
#### Frontend
```sh
cd frontend
npm install
```

#### Backend
```sh
cd backend
npm install
```

#### Admin Panel
```sh
cd admin
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the `backend` folder and add the following:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

### 4️⃣ Run the Application
#### Start Backend
```sh
cd backend
npm start
```

#### Start Frontend
```sh
cd frontend
npm start
```

#### Start Admin Panel
```sh
cd admin
npm start
```

## 📸 Screenshots
*(Include UI screenshots showcasing the homepage, doctor listing, booking page, dashboard, and payment page.)*

## 🔗 Live Demo
[Live Demo](https://doc-care-user.vercel.app/)

## 📌 Future Enhancements
- **Teleconsultation:** Video calling feature for virtual consultations.
- **Prescription Management:** Allow doctors to provide digital prescriptions.
- **Automated Reminders:** Email and SMS notifications for upcoming appointments.
- **Multi-Language Support:** Enhance accessibility with support for multiple languages.

## 📝 License
This project is licensed under the **MIT License**.

## 📬 Contact
- **GitHub**: [@abhishekboadgurjar](https://github.com/abhishekboadgurjar)
