import { attendanceHistory, trainees } from '@/data/mockData';
import { UserCheck, Calendar, Users } from 'lucide-react';

export default function AdminAttendance() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">Attendance Overview</h1>
        <p className="text-muted-foreground">Monitor member attendance</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="glass-card p-4 text-center">
          <UserCheck className="h-8 w-8 mx-auto mb-2 text-green-400" />
          <p className="text-2xl font-bold">78</p>
          <p className="text-sm text-muted-foreground">Today's Check-ins</p>
        </div>
        <div className="glass-card p-4 text-center">
          <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
          <p className="text-2xl font-bold">250</p>
          <p className="text-sm text-muted-foreground">Total Members</p>
        </div>
        <div className="glass-card p-4 text-center">
          <Calendar className="h-8 w-8 mx-auto mb-2 text-secondary" />
          <p className="text-2xl font-bold">85%</p>
          <p className="text-sm text-muted-foreground">Avg. Attendance</p>
        </div>
        <div className="glass-card p-4 text-center">
          <UserCheck className="h-8 w-8 mx-auto mb-2 text-yellow-400" />
          <p className="text-2xl font-bold">12</p>
          <p className="text-sm text-muted-foreground">Currently Active</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card p-6">
          <h2 className="font-display text-lg font-semibold mb-4">Recent Check-ins</h2>
          <div className="space-y-3">
            {attendanceHistory.map((record) => (
              <div key={record.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <UserCheck className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium">Member Check-in</p>
                    <p className="text-sm text-muted-foreground">{record.date}</p>
                  </div>
                </div>
                <div className="text-right text-sm">
                  <p className="font-medium">{record.checkIn}</p>
                  <p className="text-muted-foreground">{record.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="glass-card p-6">
          <h2 className="font-display text-lg font-semibold mb-4">Attendance by Member</h2>
          <div className="space-y-3">
            {trainees.map((member) => (
              <div key={member.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold">
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{member.name}</p>
                    <p className="text-sm text-muted-foreground">{member.membershipPlan} Plan</p>
                  </div>
                </div>
                <div className={`text-lg font-bold ${member.attendance >= 80 ? 'text-green-400' : 'text-yellow-400'}`}>
                  {member.attendance}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
