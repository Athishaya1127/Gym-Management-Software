import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import ProtectedRoute from "../components/ProtectedRoute";

// Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Classes from "../pages/Classes";
import Trainers from "../pages/Trainers";
import MembershipPlans from "../pages/MembershipPlans";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Payment from "../pages/Payment";

// Dashboard Pages
import TraineeDashboard from "../pages/TraineeDashboard";
import TrainerDashboard from "../pages/TrainerDashboard";
import AdminDashboard from "../pages/AdminDashboard";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes with MainLayout */}
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/about" element={<MainLayout><About /></MainLayout>} />
        <Route path="/services" element={<MainLayout><Services /></MainLayout>} />
        <Route path="/classes" element={<MainLayout><Classes /></MainLayout>} />
        <Route path="/trainers" element={<MainLayout><Trainers /></MainLayout>} />
        <Route path="/membership-plans" element={<MainLayout><MembershipPlans /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/payment" element={<MainLayout><Payment /></MainLayout>} />

        {/* Protected Dashboard Routes (without MainLayout) */}
        <Route 
          path="/dashboard/trainee" 
          element={
            <ProtectedRoute allowedRoles={["trainee"]}>
              <TraineeDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/dashboard/trainer" 
          element={
            <ProtectedRoute allowedRoles={["trainer"]}>
              <TrainerDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/dashboard/admin" 
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
