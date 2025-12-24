import { StatsCard } from '@/components/cards';
import { Calendar, TrendingUp, Users, CreditCard } from 'lucide-react';

export default function TraineeHome() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">Welcome Back!</h1>
        <p className="text-muted-foreground">Track your fitness journey</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard icon={Calendar} label="Workouts This Week" value="5" change="+2" changeType="positive" />
        <StatsCard icon={TrendingUp} label="Current Weight" value="72 kg" change="-1.5 kg" changeType="positive" />
        <StatsCard icon={Users} label="Attendance Rate" value="85%" change="+5%" changeType="positive" />
        <StatsCard icon={CreditCard} label="Membership" value="Pro" />
      </div>
      <div className="glass-card p-6">
        <h2 className="font-display text-lg font-semibold mb-4">Today's Workout</h2>
        <p className="text-muted-foreground">Upper Body Strength - 60 min session with Rahul Sharma at 5:00 PM</p>
      </div>
    </div>
  );
}
