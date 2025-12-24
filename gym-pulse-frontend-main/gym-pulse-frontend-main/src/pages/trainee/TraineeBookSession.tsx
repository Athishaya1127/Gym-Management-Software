import { gymClasses } from '@/data/mockData';
import { Calendar, Clock, Users, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TraineeBookSession() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">Book a Session</h1>
        <p className="text-muted-foreground">Schedule your next workout session or class</p>
      </div>
      
      <div className="grid gap-4">
        {gymClasses.map((cls) => (
          <div key={cls.id} className="glass-card p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-display text-lg font-semibold text-foreground">{cls.name}</h3>
                  <span className="px-2 py-0.5 rounded text-xs font-medium bg-primary/20 text-primary">
                    {cls.day}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    <span>{cls.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    <span>{cls.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="h-4 w-4" />
                    <span>{cls.enrolled}/{cls.capacity} spots</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User className="h-4 w-4" />
                    <span>{cls.trainer}</span>
                  </div>
                </div>
              </div>
              
              <Button 
                variant="neon"
                disabled={cls.enrolled >= cls.capacity}
              >
                {cls.enrolled >= cls.capacity ? 'Full' : 'Book Now'}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
