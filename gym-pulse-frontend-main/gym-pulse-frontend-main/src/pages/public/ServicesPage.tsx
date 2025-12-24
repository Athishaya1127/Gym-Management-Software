import { PublicLayout } from '@/components/layout';
import { services } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Users,
  CalendarDays,
  Dumbbell,
  Receipt,
  MessageCircle,
  LineChart,
  Check,
  ArrowRight,
} from 'lucide-react';

const iconMap: { [key: string]: React.ElementType } = {
  Users,
  CalendarDays,
  Dumbbell,
  Receipt,
  MessageCircle,
  LineChart,
};

export default function ServicesPage() {
  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
        
        <div className="container relative z-10 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Comprehensive{' '}
              <span className="gradient-text">Gym Services</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Everything you need to manage, grow, and scale your fitness business - all in one powerful platform.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32">
        <div className="container px-4">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Users;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={service.title}
                  className={`grid lg:grid-cols-2 gap-12 items-center animate-fade-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-sm">
                          <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                            <Check className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="hero-outline" asChild>
                      <Link to="/features">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  
                  <div className={isEven ? '' : 'lg:order-1'}>
                    <div className="aspect-video rounded-2xl bg-gradient-to-br from-card to-muted border border-border/50 overflow-hidden relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-10 h-10 text-primary" />
                          </div>
                          <p className="font-display font-semibold text-foreground">{service.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Banner */}
      <section className="py-20 md:py-32 bg-card/30">
        <div className="container px-4">
          <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[100px]" />
            
            <div className="relative z-10">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Seamless <span className="gradient-text">Integrations</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                GymForge integrates with your favorite tools - payment gateways, WhatsApp Business API, biometric devices, and more.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
                {['Razorpay', 'WhatsApp', 'Google Calendar', 'Paytm', 'PhonePe'].map((integration) => (
                  <div
                    key={integration}
                    className="px-6 py-3 rounded-lg bg-muted/50 border border-border/50 text-muted-foreground text-sm font-medium"
                  >
                    {integration}
                  </div>
                ))}
              </div>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
