import { trainees } from '@/data/mockData';
import { TrendingUp, Target, Scale, Activity } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export default function TraineeProgress() {
  const trainee = trainees[0];
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">My Progress</h1>
        <p className="text-muted-foreground">Track your fitness journey</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-card p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
              <Scale className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Current Weight</p>
              <p className="text-xl font-bold">{trainee.weight} kg</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">Height: {trainee.height} cm</p>
        </div>
        
        <div className="glass-card p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
              <Activity className="h-5 w-5 text-secondary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">BMI</p>
              <p className="text-xl font-bold">{trainee.bmi}</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">Normal range: 18.5 - 24.9</p>
        </div>
        
        <div className="glass-card p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
              <Target className="h-5 w-5 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Goal</p>
              <p className="text-xl font-bold">{trainee.goal}</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">Keep pushing!</p>
        </div>
        
        <div className="glass-card p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-green-400" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Progress</p>
              <p className="text-xl font-bold">65%</p>
            </div>
          </div>
          <Progress value={65} className="h-2" />
        </div>
      </div>
      
      <div className="glass-card p-6">
        <h2 className="font-display text-lg font-semibold mb-4">Weight Progress</h2>
        <div className="h-64 flex items-center justify-center text-muted-foreground">
          <div className="text-center">
            <TrendingUp className="h-12 w-12 mx-auto mb-2 opacity-50" />
            <p>Weight tracking chart would appear here</p>
            <p className="text-sm">Starting: 78 kg → Current: {trainee.weight} kg</p>
          </div>
        </div>
      </div>
    </div>
  );
}
