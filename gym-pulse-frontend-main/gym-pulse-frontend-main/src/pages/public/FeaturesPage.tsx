import { PublicLayout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard,
  MessageSquare,
  UserCheck,
  BarChart3,
  Bell,
  Calendar,
  CreditCard,
  Users,
  ArrowRight,
  Check,
  Smartphone,
  Globe,
  Shield,
} from 'lucide-react';

const features = [
  {
    icon: LayoutDashboard,
    title: 'Admin Dashboard',
    description: 'Comprehensive overview of your entire gym operations at a glance.',
    highlights: ['Real-time metrics', 'Revenue tracking', 'Member insights', 'Quick actions'],
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp Automation',
    description: 'Automated messaging for payments, renewals, and announcements.',
    highlights: ['Payment reminders', 'Birthday wishes', 'Class notifications', 'Bulk messaging'],
  },
  {
    icon: UserCheck,
    title: 'Attendance System',
    description: 'Multiple check-in options including biometric and QR codes.',
    highlights: ['Biometric integration', 'QR code check-in', 'Attendance reports', 'Absence alerts'],
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reports',
    description: 'Data-driven insights to help you make informed decisions.',
    highlights: ['Revenue analytics', 'Member retention', 'Trainer performance', 'Custom reports'],
  },
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    description: 'Effortless scheduling for trainers, classes, and sessions.',
    highlights: ['Drag & drop scheduler', 'Conflict detection', 'Recurring events', 'Calendar sync'],
  },
  {
    icon: CreditCard,
    title: 'Payment Management',
    description: 'Streamlined billing with multiple payment gateway support.',
    highlights: ['Auto invoicing', 'Payment tracking', 'Multiple gateways', 'EMI options'],
  },
];

const platforms = [
  { icon: Globe, name: 'Web App', description: 'Access from any browser' },
  { icon: Smartphone, name: 'Mobile App', description: 'iOS & Android apps' },
  { icon: Shield, name: 'Secure', description: 'Bank-grade security' },
];

export default function FeaturesPage() {
  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-background to-background" />
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        
        <div className="container relative z-10 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Powerful{' '}
              <span className="gradient-text">Features</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Discover the tools that make GymForge the most comprehensive gym management solution in India.
            </p>
          </div>
        </div>
      </section>

      {/* Platform Support */}
      <section className="py-12 bg-card/50 border-y border-border/50">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {platforms.map((platform, index) => (
              <div
                key={platform.name}
                className="flex items-center justify-center gap-4 p-4 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <platform.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{platform.name}</p>
                  <p className="text-muted-foreground text-sm">{platform.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-32">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="glass-card-hover p-6 md:p-8 animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <ul className="space-y-2">
                  {feature.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2 text-sm">
                      <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <Check className="h-2.5 w-2.5 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 md:py-32 bg-card/30">
        <div className="container px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Beautiful <span className="gradient-text">Dashboard</span>
            </h2>
            <p className="text-muted-foreground">
              A clean, intuitive interface that gives you complete control over your gym operations.
            </p>
          </div>

          {/* Mock Dashboard Preview */}
          <div className="max-w-5xl mx-auto">
            <div className="glass-card p-4 md:p-6 rounded-2xl overflow-hidden">
              {/* Mock Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary" />
                  <span className="font-display font-bold text-foreground">GymForge Admin</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-muted" />
                  <div className="w-8 h-8 rounded-full bg-muted" />
                </div>
              </div>

              {/* Mock Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {['Members', 'Revenue', 'Attendance', 'Classes'].map((stat) => (
                  <div key={stat} className="p-4 rounded-xl bg-muted/50 border border-border/50">
                    <div className="h-3 w-16 bg-muted-foreground/20 rounded mb-2" />
                    <div className="h-6 w-24 bg-primary/30 rounded" />
                  </div>
                ))}
              </div>

              {/* Mock Chart Area */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-muted/50 border border-border/50">
                  <div className="h-4 w-32 bg-muted-foreground/20 rounded mb-4" />
                  <div className="h-40 flex items-end gap-2">
                    {[40, 65, 45, 80, 60, 75, 55].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-primary to-secondary rounded-t-sm opacity-70"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
                <div className="p-6 rounded-xl bg-muted/50 border border-border/50">
                  <div className="h-4 w-32 bg-muted-foreground/20 rounded mb-4" />
                  <div className="space-y-3">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20" />
                        <div className="flex-1">
                          <div className="h-3 w-24 bg-muted-foreground/20 rounded mb-1" />
                          <div className="h-2 w-16 bg-muted-foreground/10 rounded" />
                        </div>
                        <div className="h-3 w-12 bg-success/30 rounded" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Experience These{' '}
              <span className="gradient-text">Features?</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Start your free trial today and see how GymForge can transform your fitness business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/login?tab=signup">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to="/plans">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
