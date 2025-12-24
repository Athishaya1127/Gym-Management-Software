import { membershipPlans, payments } from '@/data/mockData';
import { CreditCard, Calendar, CheckCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function TraineeMembership() {
  const currentPlan = membershipPlans.find(p => p.id === '2'); // Pro plan
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">My Membership</h1>
        <p className="text-muted-foreground">Manage your subscription and payments</p>
      </div>
      
      {currentPlan && (
        <div className="glass-card p-6 border-2 border-primary/50">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 rounded bg-primary/20 text-primary text-xs font-medium">Current Plan</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground">{currentPlan.name}</h2>
              <p className="text-muted-foreground">{currentPlan.duration}</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-primary">₹{currentPlan.price.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">per {currentPlan.duration.toLowerCase()}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-border">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Start Date</p>
                <p className="text-sm font-medium">Jan 1, 2024</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-secondary" />
              <div>
                <p className="text-xs text-muted-foreground">Expires</p>
                <p className="text-sm font-medium">Apr 1, 2024</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-accent" />
              <div>
                <p className="text-xs text-muted-foreground">Days Left</p>
                <p className="text-sm font-medium">45 days</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <div>
                <p className="text-xs text-muted-foreground">Status</p>
                <p className="text-sm font-medium text-green-400">Active</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-border">
            <h3 className="font-medium mb-3">Plan Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {currentPlan.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-6 flex gap-3">
            <Button variant="neon">Renew Membership</Button>
            <Button variant="outline">Upgrade Plan</Button>
          </div>
        </div>
      )}
      
      <div>
        <h2 className="font-display text-lg font-semibold mb-4">Payment History</h2>
        <div className="glass-card overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.slice(0, 3).map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell>{payment.date}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4 text-muted-foreground" />
                      {payment.plan}
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">₹{payment.amount.toLocaleString()}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      payment.status === 'Paid' 
                        ? 'bg-green-500/20 text-green-400' 
                        : payment.status === 'Pending'
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-red-500/20 text-red-400'
                    }`}>
                      {payment.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
