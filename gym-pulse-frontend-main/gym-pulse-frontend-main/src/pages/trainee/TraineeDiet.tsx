import { dietPlans } from '@/data/mockData';
import { Utensils, Clock } from 'lucide-react';

export default function TraineeDiet() {
  const plan = dietPlans[0];
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">My Diet Plan</h1>
        <p className="text-muted-foreground">Your personalized nutrition program</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="glass-card p-4 text-center">
          <p className="text-2xl font-bold text-primary">{plan.calories}</p>
          <p className="text-sm text-muted-foreground">Daily Calories</p>
        </div>
        <div className="glass-card p-4 text-center">
          <p className="text-2xl font-bold text-secondary">150g</p>
          <p className="text-sm text-muted-foreground">Protein Target</p>
        </div>
        <div className="glass-card p-4 text-center">
          <p className="text-2xl font-bold text-accent">{plan.meals.length}</p>
          <p className="text-sm text-muted-foreground">Meals per Day</p>
        </div>
      </div>
      
      <div className="space-y-4">
        {plan.meals.map((meal, index) => (
          <div key={index} className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                <Utensils className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{meal.name}</h3>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>{meal.time}</span>
                </div>
              </div>
              <span className="ml-auto text-sm font-medium text-primary">{meal.calories} cal</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {meal.items.map((item, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
