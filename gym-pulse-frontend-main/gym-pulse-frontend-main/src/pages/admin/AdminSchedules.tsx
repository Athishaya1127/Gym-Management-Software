import { gymClasses, trainers } from '@/data/mockData';
import { Calendar, Clock, Users, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AdminSchedules() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">Schedules</h1>
          <p className="text-muted-foreground">Manage classes and sessions</p>
        </div>
        <Button variant="neon">
          <Plus className="h-4 w-4 mr-2" />
          Add Class
        </Button>
      </div>
      
      <div className="grid gap-4">
        {gymClasses.map((cls) => (
          <div key={cls.id} className="glass-card p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-foreground">{cls.name}</h3>
                <p className="text-sm text-primary">Trainer: {cls.trainer}</p>
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
                    {cls.enrolled}/{cls.capacity} enrolled
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Edit</Button>
                <Button variant="ghost" size="sm">Delete</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
