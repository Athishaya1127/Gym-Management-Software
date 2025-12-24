import { gymClasses } from '@/data/mockData';
import { Calendar, Clock, Users, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TrainerSchedule() {
  const myClasses = gymClasses.filter(c => c.trainer.includes('Rahul') || c.trainer.includes('Sharma'));
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">My Schedule</h1>
          <p className="text-muted-foreground">Manage your classes and sessions</p>
        </div>
        <Button variant="neon">
          <Plus className="h-4 w-4 mr-2" />
          Add Session
        </Button>
      </div>
      
      <div className="glass-card p-6">
        <h2 className="font-display text-lg font-semibold mb-4">Today's Sessions</h2>
        <div className="space-y-3">
          <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 border border-primary/30">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium">Personal Training - Amit Kumar</h3>
              <p className="text-sm text-muted-foreground">10:00 AM - 11:00 AM</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">Active</span>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/30">
            <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
              <Calendar className="h-6 w-6 text-secondary" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium">Strength Circuit Class</h3>
              <p className="text-sm text-muted-foreground">5:00 PM - 6:00 PM</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm">Upcoming</span>
          </div>
        </div>
      </div>
      
      <div>
        <h2 className="font-display text-lg font-semibold mb-4">My Classes</h2>
        <div className="grid gap-4">
          {gymClasses.slice(0, 3).map((cls) => (
            <div key={cls.id} className="glass-card p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-foreground">{cls.name}</h3>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {cls.day}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {cls.time} ({cls.duration})
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {cls.enrolled}/{cls.capacity}
                    </span>
                  </div>
                </div>
                <Button variant="outline" size="sm">Manage</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
