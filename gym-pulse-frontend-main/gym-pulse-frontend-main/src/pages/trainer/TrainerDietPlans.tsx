import { dietPlans } from '@/data/mockData';
import { Utensils, Plus, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TrainerDietPlans() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">Diet Plans</h1>
          <p className="text-muted-foreground">Create and manage nutrition programs</p>
        </div>
        <Button variant="neon">
          <Plus className="h-4 w-4 mr-2" />
          Create Plan
        </Button>
      </div>
      
      <div className="grid gap-4">
        {dietPlans.map((plan) => (
          <div key={plan.id} className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="font-display text-xl font-semibold">{plan.name}</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  {plan.calories} calories • {plan.meals.length} meals/day
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Edit</Button>
                <Button variant="ghost" size="sm">Delete</Button>
              </div>
            </div>
            
            <div className="grid gap-2">
              {plan.meals.map((meal, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                  <Utensils className="h-5 w-5 text-secondary" />
                  <span className="font-medium">{meal.name}</span>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {meal.time}
                  </span>
                  <span className="text-sm text-primary ml-auto">{meal.calories} cal</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
