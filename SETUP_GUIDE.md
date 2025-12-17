# GymX Role-Based Authentication System

## ✅ Setup Complete!

Your gym management system now has complete role-based authentication with three different user types:

### 🎯 User Roles

1. **Trainee** - Gym members who track their fitness journey
2. **Trainer** - Fitness trainers who manage members and create workout plans
3. **Admin** - System administrators who manage the entire gym

## 🚀 Running the Application

### Backend Server (Already Running)
- **URL**: http://localhost:5000
- **Status**: ✅ Connected to MongoDB
- **Terminal**: Running in background with nodemon (auto-restart on changes)

### Frontend Application (Already Running)
- **URL**: http://localhost:5173
- **Status**: ✅ Ready
- **Framework**: Vite + React

## 📝 How to Test

### 1. Create Test Users

You need to create at least one user for each role. Go to: http://localhost:5173/signup

**Create these test accounts:**

#### Admin Account
- Name: Admin User
- Email: admin@gymx.com
- Password: admin123
- Role: Admin

#### Trainer Account
- Name: John Trainer
- Email: trainer@gymx.com
- Password: trainer123
- Role: Trainer

#### Trainee Account
- Name: Jane Member
- Email: trainee@gymx.com
- Password: trainee123
- Role: Trainee (Gym Member)

### 2. Login Flow

1. Go to http://localhost:5173/login
2. Enter email and password
3. System automatically redirects to the correct dashboard based on role:
   - **Admin** → `/dashboard/admin`
   - **Trainer** → `/dashboard/trainer`
   - **Trainee** → `/dashboard/trainee`

### 3. Test the Logout Feature

Each dashboard has a "Logout" button in the header. Click it to:
- Clear authentication
- Redirect to login page
- Login with a different user to see their dashboard

## 📊 Dashboard Features

### Trainee Dashboard
- Current Weight tracking
- BMI calculation
- Monthly workout count
- Membership status
- Progress circle visualization
- Quick access menu for workouts, diet plans, attendance, etc.

### Trainer Dashboard
- Associated trainers count
- Today's sessions
- Workout plans created
- Average rating with reviews
- Quick action buttons for common tasks
- Member and trainer management menu

### Admin Dashboard
- Total members with growth percentage
- Active trainers count
- Monthly revenue tracking
- Today's attendance
- Recent activity feed
- Quick action buttons for management tasks

## 🔐 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcrypt encryption for passwords
- **Protected Routes**: Role-based access control
- **LocalStorage**: Persistent login sessions
- **Auto-redirect**: Unauthorized access automatically redirected

## 🗄️ Database

- **MongoDB**: Running locally on 127.0.0.1:27017
- **Database Name**: gymx
- **User Collection**: Stores all users with roles

## 📱 API Endpoints

### Authentication
- `POST /api/auth/register` - Create new user
- `POST /api/auth/login` - Login user

### Request Format (Register)
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "trainee" // or "trainer" or "admin"
}
```

### Request Format (Login)
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

### Response Format
```json
{
  "message": "Login successful",
  "user": {
    "id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "trainee"
  },
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

## 🎨 UI Features

- **Modern Dark Theme**: Professional gym aesthetic
- **Gradient Accents**: Yellow/orange brand colors
- **Responsive Design**: Works on all screen sizes
- **Smooth Transitions**: Professional animations
- **Icon Library**: Lucide React icons throughout

## 🛠️ Tech Stack

### Frontend
- React 18
- React Router DOM (routing)
- Tailwind CSS (styling)
- Lucide React (icons)
- Vite (build tool)

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (authentication)
- bcrypt (password hashing)
- CORS enabled

## 📖 Next Steps

1. **Test all three roles** - Create users and login with each role
2. **Customize dashboards** - Add real data and features
3. **Add more pages** - Implement workout plans, diet plans, etc.
4. **Connect APIs** - Replace sample data with real API calls
5. **Add features** - Implement all menu items in sidebars

## 🐛 Troubleshooting

### Backend won't start
- Check if MongoDB is running
- Verify port 5000 is not in use
- Check .env file exists with correct values

### Frontend won't connect to backend
- Verify backend is running on port 5000
- Check browser console for CORS errors
- Verify API_URL in AuthContext.jsx

### Can't login
- Verify you created a user first via signup
- Check MongoDB has the user data
- Verify password is correct

## 🎉 You're All Set!

Your gym management system with role-based dashboards is now running!

Visit: **http://localhost:5173** to get started!
