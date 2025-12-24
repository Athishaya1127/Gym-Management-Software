import { trainees, attendanceHistory } from '@/data/mockData';
import { UserCheck, Calendar, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

export default function TrainerAttendance() {
  const myTrainees = trainees.filter(t => t.trainerId === '1');
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">Mark Attendance</h1>
        <p className="text-muted-foreground">Track trainee attendance for today's sessions</p>
      </div>
      
      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-lg font-semibold">Today's Session - Strength Circuit</h2>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{new Date().toLocaleDateString()}</span>
          </div>
        </div>
        
        <div className="space-y-3">
          {myTrainees.map((trainee) => (
            <div key={trainee.id} className="flex items-center gap-4 p-4 rounded-lg bg-muted/30">
              <Checkbox id={trainee.id} />
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold">
                {trainee.name.charAt(0)}
              </div>
              <div className="flex-1">
                <label htmlFor={trainee.id} className="font-medium cursor-pointer">{trainee.name}</label>
                <p className="text-sm text-muted-foreground">{trainee.membershipPlan} Member</p>
              </div>
              <div className="text-right text-sm">
                <p className="text-muted-foreground">Attendance Rate</p>
                <p className="font-medium text-primary">{trainee.attendance}%</p>
              </div>
            </div>
          ))}
        </div>
        
        <Button variant="neon" className="mt-4 w-full">
          <CheckCircle className="h-4 w-4 mr-2" />
          Submit Attendance
        </Button>
      </div>
      
      <div>
        <h2 className="font-display text-lg font-semibold mb-4">Recent Attendance</h2>
        <div className="glass-card overflow-hidden">
          <div className="p-4 space-y-2">
            {attendanceHistory.slice(0, 5).map((record) => (
              <div key={record.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                <div className="flex items-center gap-3">
                  <UserCheck className="h-5 w-5 text-green-400" />
                  <span>{record.date}</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  {record.checkIn} - {record.checkOut}
                </div>
                <span className="text-sm text-primary">{record.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
