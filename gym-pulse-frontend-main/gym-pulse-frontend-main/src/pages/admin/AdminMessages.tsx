import { MessageSquare, Send, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function AdminMessages() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">Messages & Reminders</h1>
        <p className="text-muted-foreground">Send WhatsApp and email notifications</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card p-6">
          <h2 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-green-400" />
            WhatsApp Broadcast
          </h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Recipients</label>
              <Input placeholder="All members, Pro members, etc." />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <Textarea 
                placeholder="Type your message here..." 
                rows={4}
              />
            </div>
            <Button variant="neon" className="w-full">
              <Send className="h-4 w-4 mr-2" />
              Send WhatsApp
            </Button>
          </div>
        </div>
        
        <div className="glass-card p-6">
          <h2 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
            <Bell className="h-5 w-5 text-primary" />
            Payment Reminders
          </h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
              <p className="font-medium text-yellow-400">3 members have pending payments</p>
              <p className="text-sm text-muted-foreground mt-1">Send automatic reminders to all</p>
            </div>
            <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
              <p className="font-medium text-red-400">2 members have overdue payments</p>
              <p className="text-sm text-muted-foreground mt-1">Send urgent reminders</p>
            </div>
            <Button variant="outline" className="w-full">Send All Reminders</Button>
          </div>
          
          <div className="mt-6 pt-6 border-t border-border">
            <h3 className="font-medium mb-3">Recent Messages</h3>
            <div className="space-y-2">
              <div className="p-3 rounded-lg bg-muted/30 text-sm">
                <p className="font-medium">New Year Offer 🎉</p>
                <p className="text-muted-foreground">Sent to all members • 2 days ago</p>
              </div>
              <div className="p-3 rounded-lg bg-muted/30 text-sm">
                <p className="font-medium">Holiday Schedule Update</p>
                <p className="text-muted-foreground">Sent to all members • 5 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
