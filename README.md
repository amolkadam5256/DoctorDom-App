# DoctorDom - Full Stack Doctor Appointment Booking System 

🚑 **DoctorDom** is a comprehensive Full Stack Doctor Appointment Booking System built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js). This application provides an efficient way for patients to schedule medical consultations, for doctors to manage their appointments, and for administrators to oversee operations—all while integrating a secure online payment system. 

---

## 🌟 **Project Overview**

DoctorDom is designed to simplify the doctor-patient interaction process, offering three levels of authentication and tailored dashboards:

1. **Patient Authentication** 👤: 
   - Sign up and log in easily.
   - Book and manage appointments with doctors.

2. **Doctor Authentication** 🩺:
   - View and manage appointments.
   - Track earnings via a dedicated dashboard.
   - Update profiles effortlessly.

3. **Admin Authentication** 👨‍💼:
   - Oversee all appointments and doctor profiles.
   - Perform administrative tasks with ease.

---

## 🛠️ **Technologies Used**

- **Frontend**: React.js ⚛️
- **Backend**: Node.js + Express.js 🌐
- **Database**: MongoDB 🗄️
- **Payment Integration**: Online Payment Gateway 💳

---

## ✨ **Key Features**

### Patient Interface 🧑‍⚕️:
- User-friendly registration and login system.
- Browse available doctors and book appointments.
- Manage and view appointment history.

### Doctor Dashboard 🩺:
- View upcoming appointments in a clean, organized layout.
- Manage profiles and track earnings.
- Access detailed patient records.

### Admin Dashboard 👨‍💼:
- Monitor doctor profiles and ensure quality control.
- Manage all appointments and system-level functions.
- Administrative-level access for smooth operation.

### Secure Payment Integration 💳:
- Patients can pay for appointments online using a secure payment gateway.
- Real-time payment status updates.

---

## 📌 **How to Run the Project Locally**

### Prerequisites 📋:
- Node.js installed locally.
- MongoDB database setup.
- Online Payment Gateway API keys (e.g., Razorpay/Stripe).

### Steps 🚀:
1. Clone the repository:
   ```bash
   git clone https://github.com/amolkadam5256/DoctorDom-App.git
   ```

2. Install dependencies:
   ```bash
   cd DoctorDom-App
   npm install
   cd client
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following keys:
     ```env
     MONGO_URI=<your-mongodb-connection-string>
     JWT_SECRET=<your-jwt-secret>
     PAYMENT_API_KEY=<your-payment-gateway-api-key>
     ```

4. Run the project:
   ```bash
   # Run backend server
   npm run server

   # Run frontend
   cd client
   npm start
   ```

5. Access the app at `http://localhost:3000`.

---

## 📁 **Project Structure**

### Frontend (React.js)
```plaintext
client
├── public               # Static files
├── src
│   ├── components       # Reusable React components
│   │   ├── Navbar.js    # Navigation bar
│   │   ├── Footer.js    # Footer section
│   │   ├── Auth         # Authentication components
│   │   │   ├── Login.js
│   │   │   └── Register.js
│   │   ├── Patient      # Patient-specific components
│   │   │   ├── PatientDashboard.js
│   │   │   └── AppointmentCard.js
│   │   ├── Doctor       # Doctor-specific components
│   │   │   ├── DoctorDashboard.js
│   │   │   └── EarningsChart.js
│   │   └── Admin        # Admin-specific components
│   │       ├── AdminDashboard.js
│   │       └── ManageDoctors.js
│   ├── pages            # Application pages
│   │   ├── Home.js      # Landing page
│   │   ├── About.js     # About page
│   │   └── Contact.js   # Contact page
│   ├── App.js           # Main React component
│   ├── index.js         # Entry point
│   └── styles           # CSS files
│       ├── App.css      # Global styles
│       ├── Navbar.css   # Navbar-specific styles
│       ├── Footer.css   # Footer-specific styles
│       └── Dashboard.css # Dashboard styles
└── package.json         # Frontend dependencies
```

### Backend (Node.js + Express.js)
```plaintext
server
├── models               # Database models
├── routes               # API routes
├── controllers          # Request handlers
├── middleware           # Authentication and other middleware
├── utils                # Utility functions
├── server.js            # Entry point for the backend
└── package.json         # Backend dependencies
```

---

## 🎯 **Future Enhancements**

- Multi-language support 🌍.
- Advanced search and filter options for doctors 🔍.
- Email and SMS notifications for appointments 📧.
- AI-based doctor recommendations 🤖.

---

## 📜 **License**

This project is licensed under the **MIT License**.

---

## 🖼️ **Screenshots**

1. **Patient Dashboard**
   ![Patient Dashboard Screenshot](link-to-image)

2. **Doctor Dashboard**
   ![Doctor Dashboard Screenshot](link-to-image)

3. **Admin Dashboard**
   ![Admin Dashboard Screenshot](link-to-image)

---

## 🤝 **Contributions**

Contributions, issues, and feature requests are welcome! Feel free to check out the [issues page](https://github.com/amolkadam5256/DoctorDom-App/issues).

---

## 📬 **Contact**

👨‍💻 Developed by: [Amol Kadam](mailto:amolkadam1274@gmail.com)  
🌐 [GitHub Profile](https://github.com/amolkadam5256)  
📂 [DoctorDom Repository](https://github.com/amolkadam5256/DoctorDom-App)

---
