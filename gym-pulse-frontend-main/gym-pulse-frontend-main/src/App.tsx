import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HomePage, AboutPage, ServicesPage, FeaturesPage, PlansPage, ContactPage } from "./pages/public";
import LoginPage from "./pages/auth/LoginPage";
import NotFound from "./pages/NotFound";

// Layout imports
import { TraineeDashboardLayout } from "./components/layout/TraineeDashboardLayout";
import { TrainerDashboardLayout } from "./components/layout/TrainerDashboardLayout";
import { AdminDashboardLayout } from "./components/layout/AdminDashboardLayout";

// Trainee pages
import TraineeHome from "./pages/trainee/TraineeHome";
import TraineeWorkout from "./pages/trainee/TraineeWorkout";
import TraineeDiet from "./pages/trainee/TraineeDiet";
import TraineeBookSession from "./pages/trainee/TraineeBookSession";
import TraineeAttendance from "./pages/trainee/TraineeAttendance";
import TraineeProgress from "./pages/trainee/TraineeProgress";
import TraineeAchievements from "./pages/trainee/TraineeAchievements";
import TraineeMembership from "./pages/trainee/TraineeMembership";
import TraineeSettings from "./pages/trainee/TraineeSettings";

// Trainer pages
import TrainerHome from "./pages/trainer/TrainerHome";
import TrainerTrainees from "./pages/trainer/TrainerTrainees";
import TrainerWorkouts from "./pages/trainer/TrainerWorkouts";
import TrainerDietPlans from "./pages/trainer/TrainerDietPlans";
import TrainerSchedule from "./pages/trainer/TrainerSchedule";
import TrainerAttendance from "./pages/trainer/TrainerAttendance";
import TrainerProgress from "./pages/trainer/TrainerProgress";
import TrainerSettings from "./pages/trainer/TrainerSettings";

// Admin pages
import AdminHome from "./pages/admin/AdminHome";
import AdminMembers from "./pages/admin/AdminMembers";
import AdminTrainers from "./pages/admin/AdminTrainers";
import AdminSchedules from "./pages/admin/AdminSchedules";
import AdminPayments from "./pages/admin/AdminPayments";
import AdminAttendance from "./pages/admin/AdminAttendance";
import AdminAnalytics from "./pages/admin/AdminAnalytics";
import AdminMessages from "./pages/admin/AdminMessages";
import AdminSettings from "./pages/admin/AdminSettings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          
          {/* Trainee Dashboard Routes */}
          <Route path="/trainee" element={<TraineeDashboardLayout />}>
            <Route index element={<TraineeHome />} />
            <Route path="dashboard" element={<TraineeHome />} />
            <Route path="workout" element={<TraineeWorkout />} />
            <Route path="diet" element={<TraineeDiet />} />
            <Route path="book" element={<TraineeBookSession />} />
            <Route path="attendance" element={<TraineeAttendance />} />
            <Route path="progress" element={<TraineeProgress />} />
            <Route path="achievements" element={<TraineeAchievements />} />
            <Route path="membership" element={<TraineeMembership />} />
            <Route path="settings" element={<TraineeSettings />} />
          </Route>
          
          {/* Trainer Dashboard Routes */}
          <Route path="/trainer" element={<TrainerDashboardLayout />}>
            <Route index element={<TrainerHome />} />
            <Route path="dashboard" element={<TrainerHome />} />
            <Route path="trainees" element={<TrainerTrainees />} />
            <Route path="workouts" element={<TrainerWorkouts />} />
            <Route path="diet-plans" element={<TrainerDietPlans />} />
            <Route path="schedule" element={<TrainerSchedule />} />
            <Route path="attendance" element={<TrainerAttendance />} />
            <Route path="progress" element={<TrainerProgress />} />
            <Route path="settings" element={<TrainerSettings />} />
          </Route>
          
          {/* Admin Dashboard Routes */}
          <Route path="/admin" element={<AdminDashboardLayout />}>
            <Route index element={<AdminHome />} />
            <Route path="dashboard" element={<AdminHome />} />
            <Route path="members" element={<AdminMembers />} />
            <Route path="trainers" element={<AdminTrainers />} />
            <Route path="schedules" element={<AdminSchedules />} />
            <Route path="payments" element={<AdminPayments />} />
            <Route path="attendance" element={<AdminAttendance />} />
            <Route path="analytics" element={<AdminAnalytics />} />
            <Route path="messages" element={<AdminMessages />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
