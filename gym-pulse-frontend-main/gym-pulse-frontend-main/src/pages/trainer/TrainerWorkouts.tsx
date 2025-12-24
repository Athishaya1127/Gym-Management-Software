import { workoutPlans } from '@/data/mockData';
import { Dumbbell, Clock, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TrainerWorkouts() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">Workout Plans</h1>
          <p className="text-muted-foreground">Create and manage workout programs</p>
        </div>
        <Button variant="neon">
          <Plus className="h-4 w-4 mr-2" />
          Create Plan
        </Button>
      </div>
      
      <div className="grid gap-4">
        {workoutPlans.map((plan) => (
          <div key={plan.id} className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="font-display text-xl font-semibold">{plan.name}</h2>
                <div className="flex items-center gap-4 mt-1">
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {plan.duration}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                    plan.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                    plan.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {plan.difficulty}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Edit</Button>
                <Button variant="ghost" size="sm">Delete</Button>
              </div>
            </div>
            
            <div className="grid gap-2">
              {plan.exercises.slice(0, 3).map((exercise, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                  <Dumbbell className="h-5 w-5 text-primary" />
                  <span className="font-medium">{exercise.name}</span>
                  <span className="text-sm text-muted-foreground ml-auto">
                    {exercise.sets} × {exercise.reps}
                  </span>
                </div>
              ))}
              {plan.exercises.length > 3 && (
                <p className="text-sm text-muted-foreground text-center py-2">
                  +{plan.exercises.length - 3} more exercises
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
