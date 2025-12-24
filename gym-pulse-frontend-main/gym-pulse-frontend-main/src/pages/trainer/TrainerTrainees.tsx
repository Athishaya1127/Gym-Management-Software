import { trainees } from '@/data/mockData';
import { Users, Mail, Phone, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TrainerTrainees() {
  const myTrainees = trainees.filter(t => t.trainerId === '1');
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">My Trainees</h1>
        <p className="text-muted-foreground">Manage and track your assigned trainees</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {myTrainees.map((trainee) => (
          <div key={trainee.id} className="glass-card p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground text-xl font-bold">
                {trainee.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{trainee.name}</h3>
                <p className="text-sm text-muted-foreground">{trainee.membershipPlan} Plan</p>
              </div>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>{trainee.email}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>{trainee.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Target className="h-4 w-4" />
                <span>{trainee.goal}</span>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-border flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Attendance: {trainee.attendance}%</span>
              <Button variant="outline" size="sm">View Details</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
