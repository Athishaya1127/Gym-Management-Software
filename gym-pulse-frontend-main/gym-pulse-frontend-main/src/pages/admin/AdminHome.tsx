import { StatsCard } from '@/components/cards';
import { Users, CreditCard, UserCheck, TrendingUp } from 'lucide-react';

export default function AdminHome() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">Admin Dashboard</h1>
        <p className="text-muted-foreground">Overview of your gym operations</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard icon={Users} label="Total Members" value="250" change="+12" changeType="positive" />
        <StatsCard icon={CreditCard} label="Revenue (MTD)" value="₹1.95L" change="+18%" changeType="positive" />
        <StatsCard icon={UserCheck} label="Today's Attendance" value="78" />
        <StatsCard icon={TrendingUp} label="Renewals Due" value="15" changeType="neutral" />
      </div>
      <div className="glass-card p-6">
        <h2 className="font-display text-lg font-semibold mb-4">Recent Activity</h2>
        <p className="text-muted-foreground">5 new member registrations today, 3 payments received</p>
      </div>
    </div>
  );
}
