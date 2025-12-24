import { useState } from 'react';
import { User, Mail, Phone, Lock, Bell, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

export default function TraineeSettings() {
  const [notifications, setNotifications] = useState({
    email: true,
    whatsapp: true,
    reminders: true,
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
            <Input id="name" defaultValue="Amit Kumar" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="amit@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" defaultValue="+91 98765 43210" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="dob">Date of Birth</Label>
            <Input id="dob" type="date" defaultValue="1995-05-15" />
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
              <p className="font-medium">WhatsApp Notifications</p>
              <p className="text-sm text-muted-foreground">Get reminders on WhatsApp</p>
            </div>
            <Switch 
              checked={notifications.whatsapp} 
              onCheckedChange={(checked) => setNotifications({...notifications, whatsapp: checked})}
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Workout Reminders</p>
              <p className="text-sm text-muted-foreground">Daily workout reminders</p>
            </div>
            <Switch 
              checked={notifications.reminders} 
              onCheckedChange={(checked) => setNotifications({...notifications, reminders: checked})}
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
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm New Password</Label>
            <Input id="confirm-password" type="password" />
          </div>
        </div>
        <Button className="mt-4" variant="outline">Update Password</Button>
      </div>
    </div>
  );
}
