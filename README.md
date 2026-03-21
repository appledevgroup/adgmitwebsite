# ADG Technical Club Website

built with the MERN stack (MongoDB, Express, React, Node.js) and Tailwind CSS.

## Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS, Framer Motion, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Styling**: Tailwind CSS with custom gradients and animations

## Project Structure

```
ADG Website/
├── frontend/          # React + Vite frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.jsx        # Main app component
│   │   └── main.jsx      # Entry point
│   └── package.json
├── backend/           # Express.js backend
│   ├── server.js      # Express server
│   └── package.json
└── package.json       # Root package.json
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn

### Installation

1. **Install all dependencies:**

   ```bash
   npm run install-all
   ```

   Or install separately:

   ```bash
   npm install
   cd frontend && npm install
   cd ../backend && npm install
   ```

   ```

   ```

2. **Start the development servers:**

   run them separately by splitting terminal:

   ```bash
   # Terminal 1 - Backend
   cd backend
   node server.js

   # Terminal 2 - Frontend
   cd frontend
   npm run dev
   ```

   frontend runs at: http://localhost:3000/
   backend runs at: http://localhost:5000/

## Customization

### Adding Your Club Logo

1. Place your logo file in `frontend/public/logo.png` (or any image format)
2. Update the logo in `frontend/src/components/Header.jsx`:
   ```jsx
   <img src="/logo.png" alt="ADG Logo" className="w-12 h-12" />
   ```

### Updating Club Information

- **Club Name**: Update in `Header.jsx`, `Hero.jsx`, and `Footer.jsx`
- **Stats**: Modify the `stats` array in `About.jsx`
- **Events**: Update the `events` array in `Events.jsx`
- **Contact Info**: Edit the `contactInfo` array in `Contact.jsx`

### Styling

- Global styles: `frontend/src/index.css`
