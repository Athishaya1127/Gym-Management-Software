// Mock data for the entire gym management application

// User types
export type UserRole = 'admin' | 'trainer' | 'trainee';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  phone?: string;
  joinDate: string;
}

// Membership plans
export interface MembershipPlan {
  id: string;
  name: string;
  duration: string;
  price: number;
  features: string[];
  popular?: boolean;
}

// Trainer data
export interface Trainer {
  id: string;
  name: string;
  specialization: string;
  experience: string;
  avatar: string;
  rating: number;
  clients: number;
}

// Trainee data
export interface Trainee {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  membershipPlan: string;
  joinDate: string;
  trainerId?: string;
  weight: number;
  height: number;
  bmi: number;
  goal: string;
  attendance: number;
}

// Workout plan
export interface WorkoutPlan {
  id: string;
  name: string;
  exercises: Exercise[];
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface Exercise {
  name: string;
  sets: number;
  reps: string;
  rest: string;
}

// Diet plan
export interface DietPlan {
  id: string;
  name: string;
  meals: Meal[];
  calories: number;
}

export interface Meal {
  time: string;
  name: string;
  items: string[];
  calories: number;
}

// Class/Session
export interface GymClass {
  id: string;
  name: string;
  trainer: string;
  time: string;
  duration: string;
  capacity: number;
  enrolled: number;
  day: string;
}

// Payment
export interface Payment {
  id: string;
  memberId: string;
  memberName: string;
  amount: number;
  date: string;
  status: 'Paid' | 'Pending' | 'Overdue';
  plan: string;
}

// Attendance record
export interface AttendanceRecord {
  id: string;
  date: string;
  checkIn: string;
  checkOut?: string;
  duration?: string;
}

// Achievement
export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  earnedDate: string;
}

// Testimonial
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

// Feature card
export interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}

// Service
export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

// =============== MOCK DATA ===============

export const mockUsers: User[] = [
  { id: '1', name: 'Admin User', email: 'admin@gymforge.com', role: 'admin', phone: '+91 98765 43210', joinDate: '2023-01-01' },
  { id: '2', name: 'John Trainer', email: 'trainer@gymforge.com', role: 'trainer', phone: '+91 98765 43211', joinDate: '2023-02-15' },
  { id: '3', name: 'Mike Trainee', email: 'trainee@gymforge.com', role: 'trainee', phone: '+91 98765 43212', joinDate: '2024-01-10' },
];

export const membershipPlans: MembershipPlan[] = [
  {
    id: '1',
    name: 'Basic',
    duration: 'Monthly',
    price: 999,
    features: ['Gym Access', 'Locker Facility', 'Free Parking', 'Basic Equipment'],
  },
  {
    id: '2',
    name: 'Pro',
    duration: 'Quarterly',
    price: 2499,
    features: ['All Basic Features', 'Personal Trainer (2x/week)', 'Diet Plan', 'Group Classes', 'Sauna Access'],
    popular: true,
  },
  {
    id: '3',
    name: 'Elite',
    duration: 'Yearly',
    price: 7999,
    features: ['All Pro Features', 'Unlimited PT Sessions', 'Nutrition Consultation', 'Premium Locker', 'Guest Pass (2/month)', 'Priority Booking'],
  },
];

export const trainers: Trainer[] = [
  { id: '1', name: 'Rahul Sharma', specialization: 'Strength Training', experience: '8 years', avatar: '/placeholder.svg', rating: 4.9, clients: 45 },
  { id: '2', name: 'Priya Patel', specialization: 'Yoga & Pilates', experience: '6 years', avatar: '/placeholder.svg', rating: 4.8, clients: 38 },
  { id: '3', name: 'Vikram Singh', specialization: 'CrossFit', experience: '5 years', avatar: '/placeholder.svg', rating: 4.7, clients: 32 },
  { id: '4', name: 'Neha Gupta', specialization: 'Cardio & HIIT', experience: '4 years', avatar: '/placeholder.svg', rating: 4.9, clients: 41 },
];

export const trainees: Trainee[] = [
  { id: '1', name: 'Amit Kumar', email: 'amit@email.com', phone: '+91 98765 11111', avatar: '/placeholder.svg', membershipPlan: 'Pro', joinDate: '2024-01-15', trainerId: '1', weight: 75, height: 175, bmi: 24.5, goal: 'Muscle Gain', attendance: 85 },
  { id: '2', name: 'Sneha Reddy', email: 'sneha@email.com', phone: '+91 98765 22222', avatar: '/placeholder.svg', membershipPlan: 'Elite', joinDate: '2024-02-01', trainerId: '2', weight: 58, height: 162, bmi: 22.1, goal: 'Weight Loss', attendance: 92 },
  { id: '3', name: 'Raj Mehta', email: 'raj@email.com', phone: '+91 98765 33333', avatar: '/placeholder.svg', membershipPlan: 'Basic', joinDate: '2024-03-10', weight: 82, height: 180, bmi: 25.3, goal: 'General Fitness', attendance: 78 },
  { id: '4', name: 'Ananya Shah', email: 'ananya@email.com', phone: '+91 98765 44444', avatar: '/placeholder.svg', membershipPlan: 'Pro', joinDate: '2024-01-20', trainerId: '4', weight: 62, height: 165, bmi: 22.8, goal: 'Endurance', attendance: 88 },
];

export const gymClasses: GymClass[] = [
  { id: '1', name: 'Morning Yoga', trainer: 'Priya Patel', time: '06:00 AM', duration: '60 min', capacity: 20, enrolled: 15, day: 'Mon, Wed, Fri' },
  { id: '2', name: 'HIIT Blast', trainer: 'Neha Gupta', time: '07:00 AM', duration: '45 min', capacity: 15, enrolled: 12, day: 'Tue, Thu' },
  { id: '3', name: 'Strength Circuit', trainer: 'Rahul Sharma', time: '05:00 PM', duration: '60 min', capacity: 12, enrolled: 10, day: 'Mon, Wed, Fri' },
  { id: '4', name: 'CrossFit WOD', trainer: 'Vikram Singh', time: '06:00 PM', duration: '45 min', capacity: 10, enrolled: 8, day: 'Tue, Thu, Sat' },
  { id: '5', name: 'Zumba Dance', trainer: 'Neha Gupta', time: '07:00 PM', duration: '60 min', capacity: 25, enrolled: 22, day: 'Mon, Wed' },
];

export const workoutPlans: WorkoutPlan[] = [
  {
    id: '1',
    name: 'Beginner Full Body',
    duration: '45 min',
    difficulty: 'Beginner',
    exercises: [
      { name: 'Squats', sets: 3, reps: '12', rest: '60s' },
      { name: 'Push-ups', sets: 3, reps: '10', rest: '60s' },
      { name: 'Lunges', sets: 3, reps: '10 each', rest: '60s' },
      { name: 'Plank', sets: 3, reps: '30s hold', rest: '45s' },
    ],
  },
  {
    id: '2',
    name: 'Intermediate Upper Body',
    duration: '60 min',
    difficulty: 'Intermediate',
    exercises: [
      { name: 'Bench Press', sets: 4, reps: '8-10', rest: '90s' },
      { name: 'Bent Over Rows', sets: 4, reps: '10', rest: '90s' },
      { name: 'Shoulder Press', sets: 3, reps: '10', rest: '75s' },
      { name: 'Bicep Curls', sets: 3, reps: '12', rest: '60s' },
      { name: 'Tricep Dips', sets: 3, reps: '12', rest: '60s' },
    ],
  },
];

export const dietPlans: DietPlan[] = [
  {
    id: '1',
    name: 'Muscle Gain Diet',
    calories: 2800,
    meals: [
      { time: '7:00 AM', name: 'Breakfast', items: ['6 Egg Whites', '2 Whole Eggs', 'Oats with Banana', 'Black Coffee'], calories: 600 },
      { time: '10:00 AM', name: 'Mid-Morning', items: ['Protein Shake', 'Handful of Almonds'], calories: 350 },
      { time: '1:00 PM', name: 'Lunch', items: ['Grilled Chicken (200g)', 'Brown Rice', 'Mixed Vegetables', 'Curd'], calories: 700 },
      { time: '4:00 PM', name: 'Pre-Workout', items: ['Banana', 'Peanut Butter Toast'], calories: 300 },
      { time: '7:00 PM', name: 'Post-Workout', items: ['Protein Shake', 'Sweet Potato'], calories: 400 },
      { time: '9:00 PM', name: 'Dinner', items: ['Fish/Paneer', 'Quinoa', 'Salad'], calories: 450 },
    ],
  },
];

export const payments: Payment[] = [
  { id: '1', memberId: '1', memberName: 'Amit Kumar', amount: 2499, date: '2024-01-15', status: 'Paid', plan: 'Pro - Quarterly' },
  { id: '2', memberId: '2', memberName: 'Sneha Reddy', amount: 7999, date: '2024-02-01', status: 'Paid', plan: 'Elite - Yearly' },
  { id: '3', memberId: '3', memberName: 'Raj Mehta', amount: 999, date: '2024-03-10', status: 'Pending', plan: 'Basic - Monthly' },
  { id: '4', memberId: '4', memberName: 'Ananya Shah', amount: 2499, date: '2024-01-20', status: 'Paid', plan: 'Pro - Quarterly' },
  { id: '5', memberId: '5', memberName: 'Karan Joshi', amount: 999, date: '2024-03-01', status: 'Overdue', plan: 'Basic - Monthly' },
];

export const attendanceHistory: AttendanceRecord[] = [
  { id: '1', date: '2024-03-18', checkIn: '06:30 AM', checkOut: '08:15 AM', duration: '1h 45m' },
  { id: '2', date: '2024-03-17', checkIn: '05:45 AM', checkOut: '07:30 AM', duration: '1h 45m' },
  { id: '3', date: '2024-03-16', checkIn: '06:00 AM', checkOut: '07:45 AM', duration: '1h 45m' },
  { id: '4', date: '2024-03-15', checkIn: '06:15 AM', checkOut: '08:00 AM', duration: '1h 45m' },
  { id: '5', date: '2024-03-14', checkIn: '05:30 AM', checkOut: '07:15 AM', duration: '1h 45m' },
];

export const achievements: Achievement[] = [
  { id: '1', name: 'First Step', description: 'Complete your first workout', icon: '🏃', earnedDate: '2024-01-15' },
  { id: '2', name: 'Week Warrior', description: 'Attend gym 7 days in a row', icon: '🔥', earnedDate: '2024-01-22' },
  { id: '3', name: 'Goal Crusher', description: 'Reach your first fitness goal', icon: '🎯', earnedDate: '2024-02-10' },
  { id: '4', name: 'Early Bird', description: 'Check in before 6 AM 10 times', icon: '🌅', earnedDate: '2024-02-28' },
];

export const testimonials: Testimonial[] = [
  { id: '1', name: 'Arjun Reddy', role: 'Business Owner', content: 'GymForge transformed how I manage my fitness center. The WhatsApp automation alone saved me 10+ hours per week!', avatar: '/placeholder.svg', rating: 5 },
  { id: '2', name: 'Meera Iyer', role: 'Fitness Studio Owner', content: 'The analytics dashboard gives me insights I never had before. Revenue is up 40% since we started using this software.', avatar: '/placeholder.svg', rating: 5 },
  { id: '3', name: 'Rohit Kapoor', role: 'CrossFit Gym Owner', content: 'Trainer scheduling and class booking have never been easier. Our members love the seamless experience!', avatar: '/placeholder.svg', rating: 5 },
];

export const features: FeatureCard[] = [
  { icon: 'Users', title: 'Membership Management', description: 'Effortlessly manage members, plans, and renewals with our intuitive dashboard.' },
  { icon: 'Calendar', title: 'Trainer Scheduling', description: 'Smart scheduling system for trainers and classes with conflict detection.' },
  { icon: 'CreditCard', title: 'Payment & Billing', description: 'Automated invoicing, payment reminders, and multiple payment gateway support.' },
  { icon: 'UserCheck', title: 'Attendance Tracking', description: 'Biometric integration, QR check-ins, and detailed attendance reports.' },
  { icon: 'MessageSquare', title: 'WhatsApp Reminders', description: 'Automated reminders for payments, sessions, and announcements.' },
  { icon: 'BarChart3', title: 'Reports & Analytics', description: 'Comprehensive reports on revenue, attendance, and member engagement.' },
];

export const services: Service[] = [
  {
    icon: 'Users',
    title: 'Membership Management',
    description: 'Complete member lifecycle management from registration to renewal.',
    features: ['Member Registration', 'Plan Upgrades', 'Renewal Automation', 'Member Portal'],
  },
  {
    icon: 'CalendarDays',
    title: 'Trainer Scheduling',
    description: 'Efficient scheduling for personal training and group classes.',
    features: ['Trainer Availability', 'Session Booking', 'Conflict Prevention', 'Calendar Sync'],
  },
  {
    icon: 'Dumbbell',
    title: 'Class Booking',
    description: 'Easy booking system for group fitness classes.',
    features: ['Online Booking', 'Waitlist Management', 'Class Capacity', 'Recurring Classes'],
  },
  {
    icon: 'Receipt',
    title: 'Payment & Billing',
    description: 'Streamlined payment processing and invoice management.',
    features: ['Multiple Gateways', 'Auto Invoicing', 'Payment History', 'Due Reminders'],
  },
  {
    icon: 'MessageCircle',
    title: 'WhatsApp Automation',
    description: 'Automated messaging for better member engagement.',
    features: ['Payment Reminders', 'Session Alerts', 'Birthday Wishes', 'Announcements'],
  },
  {
    icon: 'LineChart',
    title: 'Reports & Analytics',
    description: 'Data-driven insights for business growth.',
    features: ['Revenue Reports', 'Attendance Analytics', 'Member Insights', 'Custom Reports'],
  },
];

// Analytics data for charts
export const revenueData = [
  { month: 'Jan', revenue: 125000 },
  { month: 'Feb', revenue: 148000 },
  { month: 'Mar', revenue: 162000 },
  { month: 'Apr', revenue: 155000 },
  { month: 'May', revenue: 178000 },
  { month: 'Jun', revenue: 195000 },
];

export const attendanceData = [
  { day: 'Mon', attendance: 85 },
  { day: 'Tue', attendance: 72 },
  { day: 'Wed', attendance: 90 },
  { day: 'Thu', attendance: 68 },
  { day: 'Fri', attendance: 95 },
  { day: 'Sat', attendance: 110 },
  { day: 'Sun', attendance: 45 },
];

export const membershipDistribution = [
  { name: 'Basic', value: 120, color: 'hsl(var(--primary))' },
  { name: 'Pro', value: 85, color: 'hsl(var(--secondary))' },
  { name: 'Elite', value: 45, color: 'hsl(var(--success))' },
];
