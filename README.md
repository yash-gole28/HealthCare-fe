# Healthcare Portal Frontend

## Overview

This is the frontend application for the Healthcare Portal built using React, TypeScript, Vite, and Tailwind CSS.

---

## Features

### Client Portal

* Login
* Dashboard
* View Profile
* Latest Health Report
* Report History
* Pagination
* Protected Routes

### Admin Portal

* Login
* Search Clients
* Filter Clients
* View Client Details
* Upload Health Report CSV
* Role-Based Access Control (RBAC)

---

## Tech Stack

* React
* TypeScript
* Vite
* React Router
* Axios
* Tailwind CSS

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd HealthCare-fe
```

### Install Dependencies

```bash
npm install
```

### Create Environment File

Create a `.env` file in the project root.

```env
VITE_API_BASE_URL=http://localhost:5000/api

VITE_SECRET_KEY=<your-encryption-secret>
```

### Run Development Server

```bash
npm run dev
```

### Build Project

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## Authentication

The application supports:

### Admin/User Login

Use the credentials provided in the submission email.

### Client Login

Use any client email from the imported dataset.

Default Password:

```txt
Test@123
```

---

## Route Protection

Protected routes are implemented using:

* JWT Authentication
* Role-Based Access Control (RBAC)
* Route Middleware

Users can only access pages permitted for their role.

---

## Project Structure

```txt
src/

features/
components/
layouts/
routes/
services/
utils/

App.tsx
main.tsx
```

---

## Build for Production

```bash
npm run build
```

The generated build will be available in:

```txt
dist/
```

---

## Deployment

Frontend can be deployed using:

* Vercel
* Netlify
