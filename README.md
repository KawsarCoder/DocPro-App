# DocPro: Healthcare Platform

**Client Live Link:** [DocPro Frontend](https://docpro-app.vercel.app/)

**Server Live Link:** [DocPro Backend](https://docpro-app-backend.onrender.com/)

**Client Github Link:** [Frontend Github](https://github.com/KawsarCoder/DocPro-App)

**Server Github Link:** [Backend Backend](https://github.com/KawsarCoder/DocPro-APP-Backend)

## Overview

DocPro is a healthcare platform designed to connect users with trusted doctors and simplify health management. The platform offers features like appointment booking, doctor profile viewing, and user-friendly search options. Built with modern web technologies, it ensures a seamless and efficient user experience.

## Features

### Frontend

- User-friendly interface for easy navigation.
- Doctor search by categories and specialties.
- Appointment booking with real-time updates.
- Responsive design compatible with all devices.
- Secure login/signup functionality using Kende.
- Modern UI with TailwindCSS, Radix UI, and ShadCN UI.

### Backend

- Secure and scalable server using Strapi.
- API endpoints for managing appointments, users, and doctor data.
- Cloudinary integration for image management.
- Query-based filtering for efficient data retrieval.

## Tech Stack

### Frontend:

- **Framework**: Next.js
- **Styling**: TailwindCSS, Radix UI, ShadCN UI
- **State Management & Requests**: Axios
- **Authentication**: Kende
- **Deployment**: Vercel

### Backend:

- **Framework**: Strapi (Node.js-based CMS)
- **Database**: SQLite/PostgreSQL (customizable)
- **Cloud Integration**: Cloudinary for image storage
- **Deployment**: Render

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Clone the Repository

```bash
# Clone the repository
git clone https://github.com/KawsarCoder/DocPro-App
cd docpro
```

### Backend Setup

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with the following:
   ```env
   DATABASE_URL=your-database-url
   CLOUDINARY_NAME=your-cloudinary-name
   CLOUDINARY_API_KEY=your-cloudinary-api-key
   CLOUDINARY_API_SECRET=your-cloudinary-api-secret
   ```
4. Start the Strapi server:
   ```bash
   npm run develop
   ```

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables in `.env.local`:
   ```env
   NEXT_PUBLIC_API_URL=https://docpro-app-backend.onrender.com
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment

### Frontend:

- Hosted on Vercel. Push changes to the `main` branch for automatic deployment.

### Backend:

- Hosted on Render. Push changes to the configured branch for deployment.

## API Endpoints

### Appointments

- **Get all appointments for a user:**
  ```http
  GET /appointments?filters[email][$eq]=userEmail&populate=physician.picture
  ```

### Doctors

- **Get all doctors:**
  ```http
  GET /phycisian?populate=*
  ```

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a Pull Request.

## License

This project is licensed under the MIT License.

## Contact

For queries or support, contact us at [support@docpro.com](https://md-kawsar.netlify.app/).
