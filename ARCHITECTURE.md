# Full-Stack Learning Application

A complete web application with React frontend and Express backend service layer.

## Project Structure

```
├── frontend/                  # React application
│   ├── public/               # Static files
│   ├── src/
│   │   ├── components/       # Reusable React components
│   │   ├── App.jsx          # Main App component
│   │   ├── App.css          # App styles
│   │   └── index.jsx        # React entry point
│   └── package.json
│
├── backend/                   # Express API service
│   ├── routes/              # API route definitions
│   │   └── api.js           # CRUD endpoints
│   ├── middleware/          # Custom middleware
│   ├── server.js            # Express server setup
│   ├── package.json
│   └── .env                 # Environment variables
│
└── README.md
```

## Features

### Frontend (React)
- Modern React 18 with functional components and hooks
- Beautiful gradient UI with responsive design
- Real-time communication with backend API
- Item management (Create, Read, Delete)
- Error handling and loading states
- Styled components with smooth animations

### Backend (Express)
- RESTful API with full CRUD operations
- CORS enabled for frontend communication
- Error handling middleware
- Health check endpoint
- Environment configuration

## Getting Started

### Prerequisites
- Node.js 14+ and npm/yarn
- Two terminal windows (one for backend, one for frontend)

### Installation

#### Backend Setup
```bash
cd backend
npm install
npm run dev  # Runs with nodemon for auto-restart
```

#### Frontend Setup
```bash
cd frontend
npm install
npm start
```

The frontend will open at `http://localhost:3000` and automatically proxy API requests to `http://localhost:5000`.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/items` | Get all items |
| GET | `/api/items/:id` | Get single item |
| POST | `/api/items` | Create new item |
| PUT | `/api/items/:id` | Update item |
| DELETE | `/api/items/:id` | Delete item |
| GET | `/health` | Health check |

## Technologies Used

- **Frontend**: React 18, CSS3, JavaScript ES6+
- **Backend**: Node.js, Express 4
- **Tools**: npm, nodemon

## Environment Variables

Backend `.env`:
```
PORT=5000
NODE_ENV=development
```

## Learning Objectives

This project demonstrates:
✅ Full-stack JavaScript development
✅ React components and hooks
✅ Express REST API design
✅ Client-server communication
✅ State management in React
✅ HTTP methods and CRUD operations
✅ CORS and middleware concepts
✅ Error handling and user feedback

## Next Steps

Consider extending this project with:
- Database integration (MongoDB, PostgreSQL)
- User authentication
- Input validation and sanitization
- Unit and integration tests
- Deployment configuration
- TypeScript migration
- GraphQL API option
