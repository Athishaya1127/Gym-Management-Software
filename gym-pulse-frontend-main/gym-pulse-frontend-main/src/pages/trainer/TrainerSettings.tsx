import { useState } from 'react';
import { User, Bell, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

export default function TrainerSettings() {
  const [notifications, setNotifications] = useState({
    email: true,
    session: true,
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground">Manage your account preferences</p>
      </div>
      
      <div className="glass-card p-6">
        <h2 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
          <User className="h-5 w-5 text-primary" />
          Profile Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" defaultValue="Rahul Sharma" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="rahul@gymforge.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" defaultValue="+91 98765 43211" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="specialization">Specialization</Label>
            <Input id="specialization" defaultValue="Strength Training" />
          </div>
        </div>
        <Button className="mt-4" variant="neon">Save Changes</Button>
      </div>
      
      <div className="glass-card p-6">
        <h2 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
          <Bell className="h-5 w-5 text-secondary" />
          Notifications
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Email Notifications</p>
              <p className="text-sm text-muted-foreground">Receive updates via email</p>
            </div>
            <Switch 
              checked={notifications.email} 
              onCheckedChange={(checked) => setNotifications({...notifications, email: checked})}
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Session Reminders</p>
              <p className="text-sm text-muted-foreground">Get notified before sessions</p>
            </div>
            <Switch 
              checked={notifications.session} 
              onCheckedChange={(checked) => setNotifications({...notifications, session: checked})}
            />
          </div>
        </div>
      </div>
      
      <div className="glass-card p-6">
        <h2 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
          <Lock className="h-5 w-5 text-accent" />
          Security
        </h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current-password">Current Password</Label>
            <Input id="current-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-password">New Password</Label>
            <Input id="new-password" type="password" />
          </div>
        </div>
        <Button className="mt-4" variant="outline">Update Password</Button>
      </div>
    </div>
  );
}
