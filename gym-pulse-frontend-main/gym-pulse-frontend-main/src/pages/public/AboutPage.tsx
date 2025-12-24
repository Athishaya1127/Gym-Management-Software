import { PublicLayout } from '@/components/layout';
import { TrainerCard } from '@/components/cards';
import { trainers } from '@/data/mockData';
import { Target, Eye, Heart, Award, Building, Dumbbell } from 'lucide-react';

const values = [
  { icon: Target, title: 'Mission', description: 'To empower fitness businesses with technology that simplifies operations and enhances member experiences.' },
  { icon: Eye, title: 'Vision', description: 'To become India\'s leading gym management platform, powering 10,000+ fitness centers by 2030.' },
  { icon: Heart, title: 'Values', description: 'Innovation, Reliability, Customer Success, and Continuous Improvement drive everything we do.' },
];

const stats = [
  { value: '2019', label: 'Founded' },
  { value: '50+', label: 'Team Members' },
  { value: '500+', label: 'Gyms Powered' },
  { value: '15+', label: 'Cities' },
];

const facilities = [
  { icon: Building, title: 'State-of-the-art Equipment', description: 'Latest fitness machines from world-renowned brands' },
  { icon: Dumbbell, title: 'Free Weights Zone', description: 'Comprehensive dumbbell and barbell collection' },
  { icon: Award, title: 'Certified Trainers', description: 'Internationally certified fitness professionals' },
];

export default function AboutPage() {
  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
        
        <div className="container relative z-10 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Powering the Future of{' '}
              <span className="gradient-text">Fitness</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              GymForge is India's premier gym management software, built by fitness enthusiasts for fitness businesses. We understand your challenges because we've been there.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card/50 border-y border-border/50">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="font-display text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-32">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  GymForge was born in 2019 when our founders, frustrated with the lack of modern gym management solutions in India, decided to build one themselves.
                </p>
                <p>
                  Starting from a small co-working space in Mumbai, we've grown to serve over 500 fitness centers across 15+ cities in India. Our journey has been fueled by a simple belief: technology should make running a gym easier, not harder.
                </p>
                <p>
                  Today, GymForge is trusted by boutique studios, large fitness chains, and everything in between. We continue to innovate with features like WhatsApp automation, AI-powered analytics, and seamless payment integrations.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden border border-border/50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                      <Dumbbell className="w-10 h-10 text-primary" />
                    </div>
                    <p className="font-display text-xl font-bold gradient-text">Since 2019</p>
                    <p className="text-muted-foreground text-sm">Building for Fitness</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 md:py-32 bg-card/30">
        <div className="container px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Drives <span className="gradient-text">Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((item, index) => (
              <div
                key={item.title}
                className="glass-card p-8 text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-20 md:py-32">
        <div className="container px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our <span className="gradient-text">Expert Trainers</span>
            </h2>
            <p className="text-muted-foreground">
              Certified professionals dedicated to helping you achieve your fitness goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainers.map((trainer, index) => (
              <TrainerCard
                key={trainer.id}
                name={trainer.name}
                specialization={trainer.specialization}
                experience={trainer.experience}
                rating={trainer.rating}
                clients={trainer.clients}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Facilities/Infrastructure */}
      <section className="py-20 md:py-32 bg-card/30">
        <div className="container px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              World-Class <span className="gradient-text">Infrastructure</span>
            </h2>
            <p className="text-muted-foreground">
              Our platform supports gyms with the finest facilities and equipment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {facilities.map((facility, index) => (
              <div
                key={facility.title}
                className="glass-card-hover p-6 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                  <facility.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{facility.title}</h3>
                <p className="text-muted-foreground text-sm">{facility.description}</p>
              </div>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="aspect-square rounded-xl bg-gradient-to-br from-muted to-card border border-border/50 flex items-center justify-center group hover:border-primary/30 transition-all duration-300"
              >
                <Dumbbell className="h-12 w-12 text-muted-foreground/30 group-hover:text-primary/50 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
