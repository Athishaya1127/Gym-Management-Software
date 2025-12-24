import { StatsCard } from '@/components/cards';
import { Users, Calendar, ClipboardList, TrendingUp } from 'lucide-react';

export default function TrainerHome() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">Trainer Dashboard</h1>
        <p className="text-muted-foreground">Manage your trainees and schedules</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard icon={Users} label="Active Trainees" value="12" change="+2" changeType="positive" />
        <StatsCard icon={Calendar} label="Sessions Today" value="6" />
        <StatsCard icon={ClipboardList} label="Plans Created" value="24" />
        <StatsCard icon={TrendingUp} label="Avg. Progress" value="78%" changeType="positive" />
      </div>
      <div className="glass-card p-6">
        <h2 className="font-display text-lg font-semibold mb-4">Upcoming Sessions</h2>
        <p className="text-muted-foreground">You have 3 sessions scheduled for today</p>
      </div>
    </div>
  );
}
