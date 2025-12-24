import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Dumbbell,
  LayoutDashboard,
  Users,
  Calendar,
  CreditCard,
  UserCheck,
  BarChart3,
  MessageSquare,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Utensils,
  Target,
  Trophy,
  ClipboardList,
} from 'lucide-react';
import { UserRole } from '@/data/mockData';

interface SidebarLink {
  name: string;
  path: string;
  icon: React.ElementType;
}

const adminLinks: SidebarLink[] = [
  { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
  { name: 'Members', path: '/admin/members', icon: Users },
  { name: 'Trainers', path: '/admin/trainers', icon: Dumbbell },
  { name: 'Schedules', path: '/admin/schedules', icon: Calendar },
  { name: 'Payments', path: '/admin/payments', icon: CreditCard },
  { name: 'Attendance', path: '/admin/attendance', icon: UserCheck },
  { name: 'Analytics', path: '/admin/analytics', icon: BarChart3 },
  { name: 'Messages', path: '/admin/messages', icon: MessageSquare },
  { name: 'Settings', path: '/admin/settings', icon: Settings },
];

const trainerLinks: SidebarLink[] = [
  { name: 'Dashboard', path: '/trainer', icon: LayoutDashboard },
  { name: 'My Trainees', path: '/trainer/trainees', icon: Users },
  { name: 'Workouts', path: '/trainer/workouts', icon: Dumbbell },
  { name: 'Diet Plans', path: '/trainer/diet-plans', icon: Utensils },
  { name: 'Schedule', path: '/trainer/schedule', icon: Calendar },
  { name: 'Attendance', path: '/trainer/attendance', icon: UserCheck },
  { name: 'Progress', path: '/trainer/progress', icon: BarChart3 },
  { name: 'Settings', path: '/trainer/settings', icon: Settings },
];

const traineeLinks: SidebarLink[] = [
  { name: 'Dashboard', path: '/trainee', icon: LayoutDashboard },
  { name: 'My Workout', path: '/trainee/workout', icon: Dumbbell },
  { name: 'Diet Plan', path: '/trainee/diet', icon: Utensils },
  { name: 'Book Session', path: '/trainee/book', icon: Calendar },
  { name: 'Attendance', path: '/trainee/attendance', icon: UserCheck },
  { name: 'Progress', path: '/trainee/progress', icon: Target },
  { name: 'Achievements', path: '/trainee/achievements', icon: Trophy },
  { name: 'Membership', path: '/trainee/membership', icon: ClipboardList },
  { name: 'Settings', path: '/trainee/settings', icon: Settings },
];

interface DashboardSidebarProps {
  role: UserRole;
  userName: string;
}

export function DashboardSidebar({ role, userName }: DashboardSidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const links = role === 'admin' ? adminLinks : role === 'trainer' ? trainerLinks : traineeLinks;

  const handleLogout = () => {
    localStorage.removeItem('gymforge_user');
    navigate('/login');
  };

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 h-screen bg-sidebar border-r border-sidebar-border flex flex-col transition-all duration-300 z-40',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-sidebar-border">
        {!collapsed && (
          <Link to="/" className="flex items-center gap-2">
            <Dumbbell className="h-7 w-7 text-primary" />
            <span className="font-display text-lg font-bold gradient-text">GymForge</span>
          </Link>
        )}
        {collapsed && (
          <Dumbbell className="h-7 w-7 text-primary mx-auto" />
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={cn(
            'p-1.5 rounded-lg hover:bg-sidebar-accent transition-colors',
            collapsed && 'absolute -right-3 top-5 bg-sidebar border border-sidebar-border'
          )}
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>
      </div>

      {/* User Info */}
      {!collapsed && (
        <div className="p-4 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-semibold">
              {userName.charAt(0)}
            </div>
            <div>
              <p className="font-medium text-sidebar-foreground text-sm">{userName}</p>
              <p className="text-xs text-muted-foreground capitalize">{role}</p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 p-3 overflow-y-auto">
        <ul className="space-y-1">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200',
                    isActive
                      ? 'bg-sidebar-primary text-sidebar-primary-foreground shadow-lg shadow-primary/20'
                      : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
                    collapsed && 'justify-center px-2'
                  )}
                  title={collapsed ? link.name : undefined}
                >
                  <link.icon className="h-5 w-5 shrink-0" />
                  {!collapsed && <span>{link.name}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-3 border-t border-sidebar-border">
        <Button
          variant="ghost"
          className={cn(
            'w-full justify-start text-muted-foreground hover:text-destructive hover:bg-destructive/10',
            collapsed && 'justify-center px-2'
          )}
          onClick={handleLogout}
        >
          <LogOut className="h-5 w-5 shrink-0" />
          {!collapsed && <span className="ml-3">Logout</span>}
        </Button>
      </div>
    </aside>
  );
}
