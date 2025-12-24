import { revenueData, membershipDistribution } from '@/data/mockData';
import { BarChart3, TrendingUp, Users, CreditCard } from 'lucide-react';

export default function AdminAnalytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">Analytics</h1>
        <p className="text-muted-foreground">Business insights and reports</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="glass-card p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
              <CreditCard className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Monthly Revenue</p>
              <p className="text-xl font-bold">₹1.95L</p>
            </div>
          </div>
        </div>
        <div className="glass-card p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-green-400" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Growth</p>
              <p className="text-xl font-bold">+18%</p>
            </div>
          </div>
        </div>
        <div className="glass-card p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
              <Users className="h-5 w-5 text-secondary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">New Members</p>
              <p className="text-xl font-bold">24</p>
            </div>
          </div>
        </div>
        <div className="glass-card p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center">
              <BarChart3 className="h-5 w-5 text-yellow-400" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Retention Rate</p>
              <p className="text-xl font-bold">92%</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card p-6">
          <h2 className="font-display text-lg font-semibold mb-4">Revenue Trend</h2>
          <div className="space-y-3">
            {revenueData.map((data) => (
              <div key={data.month} className="flex items-center gap-4">
                <span className="w-10 text-sm text-muted-foreground">{data.month}</span>
                <div className="flex-1 h-8 bg-muted/30 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                    style={{ width: `${(data.revenue / 200000) * 100}%` }}
                  />
                </div>
                <span className="text-sm font-medium">₹{(data.revenue / 1000).toFixed(0)}K</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="glass-card p-6">
          <h2 className="font-display text-lg font-semibold mb-4">Membership Distribution</h2>
          <div className="space-y-4">
            {membershipDistribution.map((plan) => (
              <div key={plan.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{plan.name}</span>
                  <span className="font-medium">{plan.value} members</span>
                </div>
                <div className="h-3 bg-muted/30 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full"
                    style={{ 
                      width: `${(plan.value / 250) * 100}%`,
                      backgroundColor: plan.color
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
