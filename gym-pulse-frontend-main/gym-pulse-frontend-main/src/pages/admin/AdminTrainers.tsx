import { trainers } from '@/data/mockData';
import { Star, Users, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AdminTrainers() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">Trainers</h1>
          <p className="text-muted-foreground">Manage gym trainers</p>
        </div>
        <Button variant="neon">
          <Plus className="h-4 w-4 mr-2" />
          Add Trainer
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trainers.map((trainer) => (
          <div key={trainer.id} className="glass-card p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground text-2xl font-bold">
                {trainer.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground">{trainer.name}</h3>
                <p className="text-sm text-primary">{trainer.specialization}</p>
              </div>
            </div>
            
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Experience</span>
                <span className="font-medium">{trainer.experience}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Rating</span>
                <span className="font-medium flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  {trainer.rating}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Active Clients</span>
                <span className="font-medium flex items-center gap-1">
                  <Users className="h-4 w-4 text-primary" />
                  {trainer.clients}
                </span>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-border flex gap-2">
              <Button variant="outline" size="sm" className="flex-1">Edit</Button>
              <Button variant="ghost" size="sm" className="flex-1">View</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
