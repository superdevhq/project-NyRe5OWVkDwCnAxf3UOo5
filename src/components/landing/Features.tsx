
import {
  BarChart3,
  Clock,
  Code2,
  Fingerprint,
  Layers,
  Lightbulb,
  Repeat,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Lightning Fast",
    description:
      "Our platform is optimized for speed, ensuring your team can work efficiently without delays.",
  },
  {
    icon: <Layers className="h-10 w-10 text-primary" />,
    title: "Highly Customizable",
    description:
      "Tailor the platform to your specific needs with our flexible customization options.",
  },
  {
    icon: <Fingerprint className="h-10 w-10 text-primary" />,
    title: "Enterprise Security",
    description:
      "Bank-level security ensures your data is always protected and compliant with regulations.",
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    title: "Advanced Analytics",
    description:
      "Gain valuable insights with our comprehensive analytics and reporting tools.",
  },
  {
    icon: <Repeat className="h-10 w-10 text-primary" />,
    title: "Seamless Integration",
    description:
      "Connect with your favorite tools and services through our extensive API and integrations.",
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Time-Saving Automation",
    description:
      "Automate repetitive tasks and workflows to focus on what matters most.",
  },
  {
    icon: <Code2 className="h-10 w-10 text-primary" />,
    title: "Developer Friendly",
    description:
      "Comprehensive documentation and SDKs make it easy for developers to extend functionality.",
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: "Innovative Updates",
    description:
      "Regular updates with new features based on customer feedback and industry trends.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Everything You Need in One Platform
          </h2>
          <p className="text-lg text-muted-foreground">
            Our comprehensive suite of features helps you manage projects, collaborate with your team, and deliver exceptional results.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="feature-card group">
              <div className="mb-4 rounded-lg bg-primary/10 p-3 w-fit transition-all group-hover:bg-primary/20">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
