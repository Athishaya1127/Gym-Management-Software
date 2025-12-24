import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TrainerCardProps {
  name: string;
  specialization: string;
  experience: string;
  rating: number;
  clients: number;
  avatar?: string;
  className?: string;
  delay?: number;
}

export function TrainerCard({
  name,
  specialization,
  experience,
  rating,
  clients,
  className,
  delay = 0,
}: TrainerCardProps) {
  return (
    <div
      className={cn('glass-card-hover p-6 text-center animate-fade-in', className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative w-24 h-24 mx-auto mb-4">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-secondary p-[3px]">
          <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
            <span className="font-display text-2xl font-bold text-primary">
              {name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
        </div>
        <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      
      <h3 className="font-display font-semibold text-foreground mb-1">{name}</h3>
      <p className="text-primary text-sm font-medium mb-2">{specialization}</p>
      <p className="text-muted-foreground text-xs mb-4">{experience} experience</p>
      
      <div className="flex items-center justify-center gap-4 text-sm">
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 text-warning fill-warning" />
          <span className="text-foreground font-medium">{rating}</span>
        </div>
        <div className="h-4 w-px bg-border" />
        <div className="text-muted-foreground">
          {clients} clients
        </div>
      </div>
    </div>
  );
}
