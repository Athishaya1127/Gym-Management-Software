import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PricingCardProps {
  name: string;
  duration: string;
  price: number;
  features: string[];
  popular?: boolean;
  delay?: number;
}

export function PricingCard({ name, duration, price, features, popular, delay = 0 }: PricingCardProps) {
  return (
    <div
      className={cn(
        'relative glass-card p-6 md:p-8 flex flex-col animate-fade-in',
        popular && 'border-primary/50 shadow-lg shadow-primary/20'
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-secondary rounded-full text-xs font-semibold text-primary-foreground">
          Most Popular
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="font-display text-xl font-bold text-foreground mb-1">{name}</h3>
        <p className="text-muted-foreground text-sm">{duration}</p>
      </div>
      
      <div className="text-center mb-6">
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-2xl text-muted-foreground">₹</span>
          <span className="font-display text-4xl md:text-5xl font-bold gradient-text">{price.toLocaleString('en-IN')}</span>
        </div>
        <p className="text-muted-foreground text-sm mt-1">per {duration.toLowerCase()}</p>
      </div>
      
      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-sm">
            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
              <Check className="h-3 w-3 text-primary" />
            </div>
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button variant={popular ? 'hero' : 'hero-outline'} className="w-full">
        Enroll Now
      </Button>
    </div>
  );
}
