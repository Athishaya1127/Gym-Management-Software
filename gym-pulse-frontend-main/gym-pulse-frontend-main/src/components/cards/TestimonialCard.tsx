import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
  className?: string;
  delay?: number;
}

export function TestimonialCard({ name, role, content, rating, className, delay = 0 }: TestimonialCardProps) {
  return (
    <div
      className={cn('glass-card p-6 animate-fade-in', className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              'h-4 w-4',
              i < rating ? 'text-warning fill-warning' : 'text-muted'
            )}
          />
        ))}
      </div>
      
      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
        "{content}"
      </p>
      
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-semibold">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-medium text-foreground text-sm">{name}</p>
          <p className="text-muted-foreground text-xs">{role}</p>
        </div>
      </div>
    </div>
  );
}
