# Modern Travel Website

A full-stack travel website built with React and Express, featuring dynamic destination and tour package listings.

## Features

- Modern, responsive design using Material-UI
- Dynamic destination and tour package listings
- RESTful API backend
- Real-time data fetching with loading states
- Mobile-first approach

## Tech Stack

### Frontend
- React with Hooks
- Material-UI (MUI)
- Axios for API calls
- React Icons
- Responsive design

### Backend
- Node.js with Express
- MongoDB with Mongoose
- RESTful API endpoints
- CORS enabled

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm run install:all
   ```
3. Start the development servers:
   ```bash
   npm start
   ```

This will start both the frontend (port 3000) and backend (port 5000) servers concurrently.

## Project Structure

```
travel-website/
├── frontend/          # React frontend application
├── backend/           # Express backend server
├── package.json       # Root package.json for monorepo
└── README.md         # This file
```

## API Endpoints

### Destinations
- GET `/api/destinations` - Get all destinations

### Tour Packages
- GET `/api/packages/top-selling` - Get top-selling tour packages

## Development

- Frontend runs on: http://localhost:3000
- Backend runs on: http://localhost:5000 