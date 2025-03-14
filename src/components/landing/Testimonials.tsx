
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "SaaSify has completely transformed how our team collaborates. The intuitive interface and powerful features have boosted our productivity by at least 30%.",
    author: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    avatar: "/placeholder.svg",
    initials: "SJ",
  },
  {
    quote:
      "We've tried numerous project management tools, but SaaSify stands out with its flexibility and ease of use. It's become an essential part of our daily workflow.",
    author: "Michael Chen",
    role: "CTO at StartupX",
    avatar: "/placeholder.svg",
    initials: "MC",
  },
  {
    quote:
      "The customer support team at SaaSify is exceptional. They're responsive, knowledgeable, and genuinely care about helping us succeed.",
    author: "Emily Rodriguez",
    role: "Operations Director at GrowthCo",
    avatar: "/placeholder.svg",
    initials: "ER",
  },
  {
    quote:
      "SaaSify's analytics features have given us insights we never had before. We're now making data-driven decisions that have measurably improved our outcomes.",
    author: "David Kim",
    role: "Marketing Lead at InnovateInc",
    avatar: "/placeholder.svg",
    initials: "DK",
  },
  {
    quote:
      "The automation capabilities in SaaSify have saved our team countless hours on repetitive tasks. We're now able to focus on strategic initiatives instead.",
    author: "Lisa Thompson",
    role: "Project Coordinator at EnterpriseNow",
    avatar: "/placeholder.svg",
    initials: "LT",
  },
  {
    quote:
      "Implementing SaaSify was seamless, and the ROI has been incredible. It's rare to find software that delivers on all its promises, but SaaSify does exactly that.",
    author: "James Wilson",
    role: "CEO at ScaleUp Solutions",
    avatar: "/placeholder.svg",
    initials: "JW",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Trusted by Thousands of Teams
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our customers have to say about SaaSify.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <blockquote className="mb-6 text-muted-foreground">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
