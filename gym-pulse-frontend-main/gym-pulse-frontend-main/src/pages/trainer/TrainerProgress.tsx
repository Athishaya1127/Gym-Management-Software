import { trainees } from '@/data/mockData';
import { TrendingUp, Target, Users } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export default function TrainerProgress() {
  const myTrainees = trainees.filter(t => t.trainerId === '1');
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">Trainee Progress</h1>
        <p className="text-muted-foreground">Track your trainees' fitness journey</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="glass-card p-4 text-center">
          <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
          <p className="text-2xl font-bold">{myTrainees.length}</p>
          <p className="text-sm text-muted-foreground">Active Trainees</p>
        </div>
        <div className="glass-card p-4 text-center">
          <TrendingUp className="h-8 w-8 mx-auto mb-2 text-green-400" />
          <p className="text-2xl font-bold">78%</p>
          <p className="text-sm text-muted-foreground">Avg. Progress</p>
        </div>
        <div className="glass-card p-4 text-center">
          <Target className="h-8 w-8 mx-auto mb-2 text-secondary" />
          <p className="text-2xl font-bold">5</p>
          <p className="text-sm text-muted-foreground">Goals Achieved</p>
        </div>
      </div>
      
      <div className="space-y-4">
        {myTrainees.map((trainee) => (
          <div key={trainee.id} className="glass-card p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold">
                {trainee.name.charAt(0)}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">{trainee.name}</h3>
                <p className="text-sm text-muted-foreground">Goal: {trainee.goal}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-primary">65%</p>
                <p className="text-xs text-muted-foreground">Progress</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Overall Progress</span>
                  <span className="text-primary">65%</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>
              
              <div className="grid grid-cols-3 gap-4 pt-3 border-t border-border text-sm">
                <div>
                  <p className="text-muted-foreground">Weight</p>
                  <p className="font-medium">{trainee.weight} kg</p>
                </div>
                <div>
                  <p className="text-muted-foreground">BMI</p>
                  <p className="font-medium">{trainee.bmi}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Attendance</p>
                  <p className="font-medium">{trainee.attendance}%</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
