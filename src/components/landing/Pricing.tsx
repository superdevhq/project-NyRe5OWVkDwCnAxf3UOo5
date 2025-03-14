
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "$12",
    description: "Perfect for individuals and small teams just getting started.",
    features: [
      "Up to 5 team members",
      "10 projects",
      "5GB storage",
      "Basic analytics",
      "24-hour support response time",
    ],
    cta: "Start Free Trial",
    highlight: false,
  },
  {
    name: "Professional",
    price: "$29",
    description: "Ideal for growing teams that need more power and flexibility.",
    features: [
      "Up to 20 team members",
      "Unlimited projects",
      "50GB storage",
      "Advanced analytics",
      "Priority support",
      "Custom integrations",
      "Team collaboration tools",
    ],
    cta: "Start Free Trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "$79",
    description: "Advanced features and support for larger organizations.",
    features: [
      "Unlimited team members",
      "Unlimited projects",
      "500GB storage",
      "Enterprise-grade security",
      "24/7 dedicated support",
      "Custom onboarding",
      "Advanced permissions",
      "SLA guarantees",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="bg-secondary/50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that works best for your team. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card flex flex-col ${
                plan.highlight ? "pricing-card-highlight" : ""
              }`}
            >
              {plan.highlight && (
                <div className="mb-4 -mt-6 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground w-fit mx-auto">
                  Most Popular
                </div>
              )}
              <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground"> /month</span>
              </div>
              <p className="mb-6 text-muted-foreground">{plan.description}</p>
              <ul className="mb-8 space-y-3 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  plan.highlight ? "" : "bg-background hover:bg-background/80 text-foreground"
                }`}
                variant={plan.highlight ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
