import { workoutPlans } from '@/data/mockData';
import { Dumbbell, Clock } from 'lucide-react';

export default function TraineeWorkout() {
  const plan = workoutPlans[0];
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">My Workout Plan</h1>
        <p className="text-muted-foreground">Your personalized training program</p>
      </div>
      
      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-display text-xl font-semibold">{plan.name}</h2>
            <p className="text-muted-foreground text-sm">Created by your trainer</p>
          </div>
          <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
            {plan.difficulty}
          </span>
        </div>
        
        <div className="grid gap-4">
          {plan.exercises.map((exercise, index) => (
            <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <Dumbbell className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-foreground">{exercise.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {exercise.sets} sets × {exercise.reps} reps
                </p>
              </div>
              <div className="text-right text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{exercise.rest} rest</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
