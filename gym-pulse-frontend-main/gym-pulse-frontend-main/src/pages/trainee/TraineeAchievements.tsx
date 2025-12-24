import { achievements } from '@/data/mockData';
import { Trophy, Calendar, Lock } from 'lucide-react';

export default function TraineeAchievements() {
  const allBadges = [
    { id: 1, name: 'First Workout', description: 'Complete your first workout', unlocked: true },
    { id: 2, name: '7-Day Streak', description: 'Work out 7 days in a row', unlocked: true },
    { id: 3, name: '30-Day Streak', description: 'Work out 30 days in a row', unlocked: false },
    { id: 4, name: 'Early Bird', description: 'Complete 10 morning workouts', unlocked: true },
    { id: 5, name: 'Weight Goal', description: 'Reach your target weight', unlocked: false },
    { id: 6, name: 'Century Club', description: 'Complete 100 workouts', unlocked: false },
  ];
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">Achievements</h1>
        <p className="text-muted-foreground">Celebrate your fitness milestones</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="glass-card p-4 text-center">
          <Trophy className="h-8 w-8 mx-auto mb-2 text-yellow-400" />
          <p className="text-2xl font-bold">{allBadges.filter(b => b.unlocked).length}</p>
          <p className="text-sm text-muted-foreground">Badges Earned</p>
        </div>
        <div className="glass-card p-4 text-center">
          <Calendar className="h-8 w-8 mx-auto mb-2 text-primary" />
          <p className="text-2xl font-bold">12</p>
          <p className="text-sm text-muted-foreground">Current Streak</p>
        </div>
        <div className="glass-card p-4 text-center">
          <Trophy className="h-8 w-8 mx-auto mb-2 text-secondary" />
          <p className="text-2xl font-bold">45</p>
          <p className="text-sm text-muted-foreground">Total Workouts</p>
        </div>
      </div>
      
      <h2 className="font-display text-lg font-semibold">Badges</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {allBadges.map((badge) => (
          <div 
            key={badge.id} 
            className={`glass-card p-4 text-center ${!badge.unlocked && 'opacity-50'}`}
          >
            <div className={`w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center ${
              badge.unlocked ? 'bg-gradient-to-br from-primary to-secondary' : 'bg-muted'
            }`}>
              {badge.unlocked ? (
                <Trophy className="h-8 w-8 text-primary-foreground" />
              ) : (
                <Lock className="h-6 w-6 text-muted-foreground" />
              )}
            </div>
            <h3 className="font-medium text-sm text-foreground">{badge.name}</h3>
            <p className="text-xs text-muted-foreground mt-1">{badge.description}</p>
          </div>
        ))}
      </div>
      
      <h2 className="font-display text-lg font-semibold mt-8">Recent Achievements</h2>
      <div className="space-y-3">
        {achievements.map((achievement) => (
          <div key={achievement.id} className="glass-card p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-2xl">
              {achievement.icon}
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-foreground">{achievement.name}</h3>
              <p className="text-sm text-muted-foreground">{achievement.description}</p>
            </div>
            <div className="text-sm text-muted-foreground">{achievement.earnedDate}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
