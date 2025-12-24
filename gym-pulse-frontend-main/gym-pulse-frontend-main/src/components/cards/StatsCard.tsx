import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatsCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  className?: string;
}

export function StatsCard({ icon: Icon, label, value, change, changeType = 'neutral', className }: StatsCardProps) {
  return (
    <div className={cn('glass-card p-6', className)}>
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        {change && (
          <span
            className={cn(
              'text-xs font-medium px-2 py-1 rounded-full',
              changeType === 'positive' && 'bg-success/20 text-success',
              changeType === 'negative' && 'bg-destructive/20 text-destructive',
              changeType === 'neutral' && 'bg-muted text-muted-foreground'
            )}
          >
            {change}
          </span>
        )}
      </div>
      <p className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">{value}</p>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
}
