import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Mail, Settings, Search, X, TrendingUp, TrendingDown } from "lucide-react";

const AdminDashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // Sample data - will be replaced with API calls
  const dashboardData = {
    totalMembers: 165,
    membersChange: 12,
    activeTrainers: 12,
    newHires: 2,
    monthlyRevenue: 18562,
    revenueChange: -2,
    todaysAttendance: 45
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
                A
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-white">Admin User</p>
                <p className="text-xs text-gray-400">Admin</p>
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

              <h2 className="text-xl font-bold mb-5 text-green-400">Admin Panel</h2>

              {/* Menu Items */}
              <nav className="space-y-2 flex-1">
                <button className="w-full px-3 py-2.5 rounded-lg bg-[#8B7355] text-white text-sm font-medium hover:bg-[#9d8364] transition text-left">
                  Dashboards
                </button>
                <button className="w-full px-3 py-2.5 rounded-lg bg-[#8B7355] text-white text-sm font-medium hover:bg-[#9d8364] transition text-left">
                  Manage Members
                </button>
                <button className="w-full px-3 py-2.5 rounded-lg bg-[#8B7355] text-white text-sm font-medium hover:bg-[#9d8364] transition text-left">
                  Manage Trainers
                </button>
                <button className="w-full px-3 py-2.5 rounded-lg bg-[#8B7355] text-white text-sm font-medium hover:bg-[#9d8364] transition text-left">
                  Payments & Billing
                </button>
                <button className="w-full px-3 py-2.5 rounded-lg bg-[#8B7355] text-white text-sm font-medium hover:bg-[#9d8364] transition text-left">
                  Class Scheduling
                </button>
                <button className="w-full px-3 py-2.5 rounded-lg bg-[#8B7355] text-white text-sm font-medium hover:bg-[#9d8364] transition text-left">
                  Reports
                </button>
                <button className="w-full px-3 py-2.5 rounded-lg bg-[#8B7355] text-white text-sm font-medium hover:bg-[#9d8364] transition text-left">
                  WhatsApp Reminders
                </button>
                <button className="w-full px-3 py-2.5 rounded-lg bg-[#8B7355] text-white text-sm font-medium hover:bg-[#9d8364] transition text-left">
                  Settings
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
              <h2 className="text-3xl font-bold text-green-400 mb-2">Admin Dashboard</h2>
              <p className="text-gray-400">Manage your gym operations efficiently</p>
            </div>

            {/* Stats Grid */}
            <div className="grid sm:grid-cols-2 gap-5 mb-8">
              {/* Total Members */}
              <div className="bg-gradient-to-br from-[#1a2332] to-[#0f1821] p-6 rounded-xl border border-gray-800/50 hover:border-yellow-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/10">
                <h3 className="text-sm font-medium text-gray-400 mb-3 uppercase tracking-wide">Total Members</h3>
                <p className="text-4xl font-bold mb-2 text-white">{dashboardData.totalMembers}</p>
                <div className="flex items-center gap-2">
                  <TrendingUp className="text-green-400" size={16} />
                  <p className="text-green-400 text-sm font-medium">+{dashboardData.membersChange}% this month</p>
                </div>
              </div>

              {/* Active Trainers */}
              <div className="bg-gradient-to-br from-[#1a2332] to-[#0f1821] p-6 rounded-xl border border-gray-800/50 hover:border-yellow-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/10">
                <h3 className="text-sm font-medium text-gray-400 mb-3 uppercase tracking-wide">Active Trainers</h3>
                <p className="text-4xl font-bold mb-2 text-white">{dashboardData.activeTrainers}</p>
                <p className="text-green-400 text-sm font-medium">{dashboardData.newHires} new hires</p>
              </div>

              {/* Monthly Revenue */}
              <div className="bg-gradient-to-br from-[#1a2332] to-[#0f1821] p-6 rounded-xl border border-gray-800/50 hover:border-yellow-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/10">
                <h3 className="text-sm font-medium text-gray-400 mb-3 uppercase tracking-wide">Monthly Revenue</h3>
                <p className="text-4xl font-bold mb-2 text-white">${dashboardData.monthlyRevenue.toLocaleString()}</p>
                <div className="flex items-center gap-2">
                  <TrendingDown className="text-red-400" size={16} />
                  <p className="text-red-400 text-sm font-medium">{dashboardData.revenueChange}% this month</p>
                </div>
              </div>

              {/* Today's Attendance */}
              <div className="bg-gradient-to-br from-[#1a2332] to-[#0f1821] p-6 rounded-xl border border-gray-800/50 hover:border-yellow-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/10">
                <h3 className="text-sm font-medium text-gray-400 mb-3 uppercase tracking-wide">Today's Attendance</h3>
                <p className="text-4xl font-bold mb-2 text-white">{dashboardData.todaysAttendance}</p>
                <p className="text-gray-400 text-sm font-medium">out of {dashboardData.totalMembers} members</p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-400 p-5 rounded-xl text-black font-semibold hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 hover:scale-105">
                Add Member
              </button>
              <button className="bg-gradient-to-r from-green-400 to-emerald-400 p-5 rounded-xl text-black font-semibold hover:shadow-lg hover:shadow-green-400/30 transition-all duration-300 hover:scale-105">
                Add Trainer
              </button>
              <button className="bg-gradient-to-r from-blue-400 to-cyan-400 p-5 rounded-xl text-black font-semibold hover:shadow-lg hover:shadow-blue-400/30 transition-all duration-300 hover:scale-105">
                View Reports
              </button>
              <button className="bg-gradient-to-r from-purple-400 to-pink-400 p-5 rounded-xl text-black font-semibold hover:shadow-lg hover:shadow-purple-400/30 transition-all duration-300 hover:scale-105">
                Billing
              </button>
            </div>

            {/* Recent Activity */}
            <div className="bg-gradient-to-br from-[#1a2332] to-[#0f1821] p-6 rounded-xl border border-gray-800/50 hover:border-yellow-400/30 transition-all duration-300">
              <h3 className="text-xl font-bold mb-5 text-white">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-[#0a0f1e]/60 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300">
                  <div>
                    <p className="font-semibold text-white">New member registered</p>
                    <p className="text-sm text-gray-400 mt-1">John Doe - Premium Plan</p>
                  </div>
                  <span className="text-xs text-gray-500">2 hours ago</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-[#0a0f1e]/60 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300">
                  <div>
                    <p className="font-semibold text-white">Payment received</p>
                    <p className="text-sm text-gray-400 mt-1">$149 - Sarah Smith</p>
                  </div>
                  <span className="text-xs text-gray-500">5 hours ago</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-[#0a0f1e]/60 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300">
                  <div>
                    <p className="font-semibold text-white">New trainer hired</p>
                    <p className="text-sm text-gray-400 mt-1">Mike Johnson - Strength Training</p>
                  </div>
                  <span className="text-xs text-gray-500">1 day ago</span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
