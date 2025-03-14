
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-gradient pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Streamline Your Workflow with <span className="gradient-text">SaaSify</span>
          </h1>
          <p className="mb-8 text-lg text-muted-foreground md:text-xl">
            The all-in-one platform that helps teams collaborate, manage projects, and deliver results faster than ever before.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2">
              Start Free Trial <ArrowRight size={16} />
            </Button>
            <Button size="lg" variant="outline">
              Book a Demo
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-primary" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-primary" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-primary" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-xl border border-border/40 bg-card/50 shadow-xl">
          <img
            src="/placeholder.svg"
            alt="SaaSify Dashboard"
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
