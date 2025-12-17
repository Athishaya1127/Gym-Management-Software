import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Mail, Settings, Search, X } from "lucide-react";

const TraineeDashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // Sample data - will be replaced with API calls
  const dashboardData = {
    currentWeight: 68,
    weightChange: -2,
    bmi: 22.4,
    bmiStatus: "Healthy",
    workoutsThisMonth: 20,
    goalSessions: 25,
    membershipDays: 45,
    membershipExpiry: "Dec 225"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f1e] via-[#0d1425] to-[#111827] text-white">
      {/* Top Bar */}
      <div className="bg-[#1a2332]/50 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 text-transparent bg-clip-text">
            GymX
          </h1>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-800 rounded-lg transition">
              <Mail size={20} className="text-gray-400 hover:text-yellow-400" />
            </button>
            <button className="p-2 hover:bg-gray-800 rounded-lg transition">
              <Settings size={20} className="text-gray-400 hover:text-yellow-400" />
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-gray-700">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 flex items-center justify-center font-bold text-black">
                M
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-white">Member User</p>
                <p className="text-xs text-gray-400">Trainee</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-[#1a2332]/80 backdrop-blur-sm rounded-2xl p-5 border border-gray-800/50 sticky top-6 flex flex-col" style={{minHeight: 'calc(100vh - 120px)'}}>
              {/* Search */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-2.5 text-gray-500" size={16} />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-9 py-2 rounded-lg bg-[#0a0f1e]/60 border border-gray-700 text-sm focus:border-yellow-400 focus:outline-none transition"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery("")} className="absolute right-3 top-2.5 text-gray-500 hover:text-white">
                    <X size={16} />
                  </button>
                )}
              </div>

              <div className="flex items-center justify-end gap-3 mb-5">
                <Mail className="text-gray-400 hover:text-yellow-400 cursor-pointer transition" size={18} />
                <Settings className="text-gray-400 hover:text-yellow-400 cursor-pointer transition" size={18} />
              </div>

              <h2 className="text-xl font-bold mb-5 text-green-400">Trainee Panel</h2>

              {/* Menu Items */}
              <nav className="space-y-2 flex-1">
                <button className="w-full px-3 py-2.5 rounded-lg bg-[#8B7355] text-white text-sm font-medium hover:bg-[#9d8364] transition text-left">
                  Dashboards
                </button>
                <button className="w-full px-3 py-2.5 rounded-lg bg-[#8B7355] text-white text-sm font-medium hover:bg-[#9d8364] transition text-left">
                  Workout Plan
                </button>
                <button className="w-full px-3 py-2.5 rounded-lg bg-[#8B7355] text-white text-sm font-medium hover:bg-[#9d8364] transition text-left">
                  Diet Plan
                </button>
                <button className="w-full px-3 py-2.5 rounded-lg bg-[#8B7355] text-white text-sm font-medium hover:bg-[#9d8364] transition text-left">
                  Attendance History
                </button>
                <button className="w-full px-3 py-2.5 rounded-lg bg-[#8B7355] text-white text-sm font-medium hover:bg-[#9d8364] transition text-left">
                  Payment & Membership
                </button>
                <button className="w-full px-3 py-2.5 rounded-lg bg-[#8B7355] text-white text-sm font-medium hover:bg-[#9d8364] transition text-left">
                  Progress
                </button>
                <button className="w-full px-3 py-2.5 rounded-lg bg-[#8B7355] text-white text-sm font-medium hover:bg-[#9d8364] transition text-left">
                  Book Class
                </button>
                <button className="w-full px-3 py-2.5 rounded-lg bg-[#8B7355] text-white text-sm font-medium hover:bg-[#9d8364] transition text-left">
                  Chat with Trainer
                </button>
              </nav>

              {/* Logout Button at Bottom */}
              <button
                onClick={handleLogout}
                className="w-full px-3 py-2.5 mt-4 rounded-lg bg-red-500 text-white text-sm font-medium hover:bg-red-600 transition flex items-center justify-center gap-2"
              >
                <span>Logout</span>
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-green-400 mb-2">My Fitness Journey</h2>
              <p className="text-gray-400">Track your progress and achieve your goals</p>
            </div>

            {/* Stats Grid */}
            <div className="grid sm:grid-cols-2 gap-5 mb-8">
              {/* Current Weight */}
              <div className="bg-gradient-to-br from-[#1a2332] to-[#0f1821] p-6 rounded-xl border border-gray-800/50 hover:border-yellow-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/10">
                <h3 className="text-sm font-medium text-gray-400 mb-3 uppercase tracking-wide">Current Weight</h3>
                <p className="text-4xl font-bold mb-2 text-white">{dashboardData.currentWeight} <span className="text-2xl text-gray-400">kg</span></p>
                <p className="text-green-400 text-sm font-medium">{dashboardData.weightChange} this month</p>
              </div>

              {/* BMI */}
              <div className="bg-gradient-to-br from-[#1a2332] to-[#0f1821] p-6 rounded-xl border border-gray-800/50 hover:border-yellow-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/10">
                <h3 className="text-sm font-medium text-gray-400 mb-3 uppercase tracking-wide">BMI</h3>
                <p className="text-4xl font-bold mb-2 text-white">{dashboardData.bmi}</p>
                <p className="text-green-400 text-sm font-medium">{dashboardData.bmiStatus}</p>
              </div>

              {/* Workouts This Month */}
              <div className="bg-gradient-to-br from-[#1a2332] to-[#0f1821] p-6 rounded-xl border border-gray-800/50 hover:border-yellow-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/10">
                <h3 className="text-sm font-medium text-gray-400 mb-3 uppercase tracking-wide">Workouts This Month</h3>
                <p className="text-4xl font-bold mb-2 text-white">{dashboardData.workoutsThisMonth}</p>
                <p className="text-green-400 text-sm font-medium">Goal {dashboardData.goalSessions} Sessions</p>
              </div>

              {/* Membership Status */}
              <div className="bg-gradient-to-br from-[#1a2332] to-[#0f1821] p-6 rounded-xl border border-gray-800/50 hover:border-yellow-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/10">
                <h3 className="text-sm font-medium text-gray-400 mb-3 uppercase tracking-wide">Membership Status</h3>
                <p className="text-4xl font-bold mb-2 text-white">{dashboardData.membershipDays} <span className="text-xl text-gray-400">days</span></p>
                <p className="text-red-400 text-sm font-medium">Expires {dashboardData.membershipExpiry}</p>
              </div>
            </div>

            {/* Progress Circle */}
            <div className="bg-gradient-to-br from-[#1a2332] to-[#0f1821] p-8 rounded-xl border border-gray-800/50 hover:border-yellow-400/30 transition-all duration-300">
              <h3 className="text-lg font-semibold text-white mb-6">Monthly Progress</h3>
              <div className="flex items-center justify-center">
                <div className="relative w-48 h-48">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="96"
                    cy="96"
                    r="88"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="none"
                    className="text-gray-700"
                  />
                  <circle
                    cx="96"
                    cy="96"
                    r="88"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray={`${(dashboardData.workoutsThisMonth / dashboardData.goalSessions) * 553} 553`}
                    className="text-green-400"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-green-400">{Math.round((dashboardData.workoutsThisMonth / dashboardData.goalSessions) * 100)}%</p>
                    <p className="text-sm text-gray-400 mt-1">Complete</p>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default TraineeDashboard;
