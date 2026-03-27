# Vertex-Connect – Video Meeting Application

A full-stack **real-time video conferencing web application** that allows users to create and join video meetings directly from the browser.
The platform uses **WebRTC for peer-to-peer media streaming** and **Socket.io for real-time signaling** to enable seamless video communication.

The application supports authentication, meeting rooms, and live video/audio interaction, providing a lightweight alternative to platforms like Zoom or Google Meet.

---

## Live Demo

Frontend:
https://vertex-connect-theta.vercel.app/

---

## Features

* Secure user authentication and account management
* Create and join meeting rooms using unique meeting IDs
* Real-time video and audio communication
* Peer-to-peer video streaming using WebRTC
* Real-time signaling using Socket.io
* Responsive UI for desktop and mobile devices
* Backend API for managing users and meetings
* MongoDB database for persistent data storage

---

## Tech Stack

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3

### Backend

* Node.js
* Express.js

### Real-Time Communication

* Socket.io
* WebRTC

### Database

* MongoDB

### Deployment

* Render (Frontend + Backend)

---

## System Architecture

User opens meeting page
→ Frontend connects to backend server
→ Socket.io establishes signaling connection
→ WebRTC creates peer-to-peer connection between users
→ Audio & video streams are exchanged directly between participants

---

## Project Structure

```
convocall
│
├── backend
│   ├── src
│   │   ├── controllers
│   │   │   ├── socketManager.js
│   │   │   └── user.controller.js
│   │   │
│   │   ├── models
│   │   │   ├── user.model.js
│   │   │   └── meeting.model.js
│   │   │
│   │   ├── routes
│   │   │   └── users.routes.js
│   │   │
│   │   └── app.js
│   │
│   └── package.json
│
├── frontend
│   ├── src
│   │   ├── contexts
│   │   ├── components
│   │   └── App.jsx
│   │
│   └── package.json
│
└── README.md
```

---

## Installation and Setup

### 1. Clone the repository

```
git clone https://github.com/saurav-jorwal/Vertex-Connect.git
cd Vertex-Connect
```

---

### 2. Backend Setup

```
cd backend
npm install
```

Create a `.env` file:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Run the backend server:

```
npm start
```

---

### 3. Frontend Setup

```
cd frontend
npm install
npm start
```

Frontend will run on:

```
http://localhost:3000
```

---

## Key Concepts Used

### WebRTC

WebRTC enables real-time peer-to-peer communication between browsers without requiring a central server for media streaming.

### Socket.io

Socket.io is used for signaling between users to exchange connection data required for establishing WebRTC connections.

### MongoDB

MongoDB stores user information and meeting data, enabling persistent storage.

---

## Future Improvements

* Screen sharing functionality
* In-meeting chat system
* Meeting recording
* Participant controls (mute / remove)
* Waiting rooms and host permissions
* Improved UI/UX

---

## Author

**Saurav Kumar Meena**
B.Tech CSE – RTU Kota

LinkedIn
https://linkedin.com/in/saurav-kumar-meena-b633b83b5/

GitHub
https://github.com/saurav-jorwal
