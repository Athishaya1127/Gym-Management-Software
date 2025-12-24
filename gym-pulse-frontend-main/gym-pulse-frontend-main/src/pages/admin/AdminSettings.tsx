import { useState } from 'react';
import { User, Bell, Lock, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

export default function AdminSettings() {
  const [notifications, setNotifications] = useState({
    email: true,
    payment: true,
    newMember: true,
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground">Manage system settings</p>
      </div>
      
      <div className="glass-card p-6">
        <h2 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
          <Building className="h-5 w-5 text-primary" />
          Gym Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="gym-name">Gym Name</Label>
            <Input id="gym-name" defaultValue="GymForge Fitness" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="gym-email">Contact Email</Label>
            <Input id="gym-email" type="email" defaultValue="contact@gymforge.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="gym-phone">Phone Number</Label>
            <Input id="gym-phone" defaultValue="+91 98765 43210" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="gym-address">Address</Label>
            <Input id="gym-address" defaultValue="123 Fitness Street, Mumbai" />
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
              <p className="text-sm text-muted-foreground">Receive admin alerts via email</p>
            </div>
            <Switch 
              checked={notifications.email} 
              onCheckedChange={(checked) => setNotifications({...notifications, email: checked})}
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Payment Alerts</p>
              <p className="text-sm text-muted-foreground">Get notified about payments</p>
            </div>
            <Switch 
              checked={notifications.payment} 
              onCheckedChange={(checked) => setNotifications({...notifications, payment: checked})}
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">New Member Alerts</p>
              <p className="text-sm text-muted-foreground">Notify on new registrations</p>
            </div>
            <Switch 
              checked={notifications.newMember} 
              onCheckedChange={(checked) => setNotifications({...notifications, newMember: checked})}
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
