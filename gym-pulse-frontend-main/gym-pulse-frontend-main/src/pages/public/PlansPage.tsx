import { PublicLayout } from '@/components/layout';
import { PricingCard } from '@/components/cards';
import { membershipPlans } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check, HelpCircle, ArrowRight } from 'lucide-react';

const comparisonFeatures = [
  { name: 'Gym Access', basic: true, pro: true, elite: true },
  { name: 'Locker Facility', basic: true, pro: true, elite: true },
  { name: 'Free Parking', basic: true, pro: true, elite: true },
  { name: 'Personal Trainer', basic: false, pro: '2x/week', elite: 'Unlimited' },
  { name: 'Diet Plan', basic: false, pro: true, elite: true },
  { name: 'Group Classes', basic: false, pro: true, elite: true },
  { name: 'Sauna Access', basic: false, pro: true, elite: true },
  { name: 'Nutrition Consultation', basic: false, pro: false, elite: true },
  { name: 'Premium Locker', basic: false, pro: false, elite: true },
  { name: 'Guest Pass', basic: false, pro: false, elite: '2/month' },
  { name: 'Priority Booking', basic: false, pro: false, elite: true },
];

const faqs = [
  { q: 'Can I upgrade my plan later?', a: 'Yes, you can upgrade your plan at any time. The price difference will be prorated.' },
  { q: 'Is there a joining fee?', a: 'No, we don\'t charge any joining or registration fees.' },
  { q: 'Can I freeze my membership?', a: 'Yes, you can freeze your membership for up to 30 days per year on Pro and Elite plans.' },
  { q: 'Do you offer corporate packages?', a: 'Yes! Contact us for customized corporate wellness packages.' },
];

export default function PlansPage() {
  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
        
        <div className="container relative z-10 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Simple, Transparent{' '}
              <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Choose the perfect membership plan for your fitness journey. No hidden fees, no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 md:py-32">
        <div className="container px-4">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {membershipPlans.map((plan, index) => (
              <PricingCard
                key={plan.id}
                name={plan.name}
                duration={plan.duration}
                price={plan.price}
                features={plan.features}
                popular={plan.popular}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 md:py-32 bg-card/30">
        <div className="container px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Compare <span className="gradient-text">Plans</span>
            </h2>
            <p className="text-muted-foreground">
              See what's included in each plan to find the best fit for you.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 font-display font-semibold text-foreground">Features</th>
                      <th className="text-center p-4 font-display font-semibold text-foreground">Basic</th>
                      <th className="text-center p-4 font-display font-semibold text-foreground relative">
                        <span className="gradient-text">Pro</span>
                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-gradient-to-r from-primary to-secondary rounded-full text-[10px] font-semibold text-primary-foreground">
                          Popular
                        </div>
                      </th>
                      <th className="text-center p-4 font-display font-semibold text-foreground">Elite</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((feature, index) => (
                      <tr
                        key={feature.name}
                        className={index % 2 === 0 ? 'bg-muted/20' : ''}
                      >
                        <td className="p-4 text-muted-foreground text-sm">{feature.name}</td>
                        <td className="p-4 text-center">
                          {typeof feature.basic === 'boolean' ? (
                            feature.basic ? (
                              <Check className="h-5 w-5 text-success mx-auto" />
                            ) : (
                              <span className="text-muted-foreground">—</span>
                            )
                          ) : (
                            <span className="text-foreground text-sm">{feature.basic}</span>
                          )}
                        </td>
                        <td className="p-4 text-center bg-primary/5">
                          {typeof feature.pro === 'boolean' ? (
                            feature.pro ? (
                              <Check className="h-5 w-5 text-success mx-auto" />
                            ) : (
                              <span className="text-muted-foreground">—</span>
                            )
                          ) : (
                            <span className="text-foreground text-sm">{feature.pro}</span>
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {typeof feature.elite === 'boolean' ? (
                            feature.elite ? (
                              <Check className="h-5 w-5 text-success mx-auto" />
                            ) : (
                              <span className="text-muted-foreground">—</span>
                            )
                          ) : (
                            <span className="text-foreground text-sm">{feature.elite}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32">
        <div className="container px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked{' '}
              <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="glass-card p-6 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground text-sm">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/contact">
                Have More Questions?
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
