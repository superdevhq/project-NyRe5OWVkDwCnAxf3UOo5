
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the 14-day free trial work?",
    answer:
      "Our 14-day free trial gives you full access to all features of the platform with no restrictions. You don't need to provide a credit card to start the trial, and you'll receive a reminder before it ends. If you decide not to continue, your account will simply expire with no charges.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Absolutely! You can upgrade, downgrade, or change your plan at any time. When upgrading, you'll be prorated for the remainder of your billing cycle. When downgrading, the new rate will apply at the start of your next billing cycle.",
  },
  {
    question: "Is there a limit to how many team members I can add?",
    answer:
      "The number of team members you can add depends on your plan. The Starter plan allows up to 5 team members, the Professional plan allows up to 20, and the Enterprise plan has no limit on team members.",
  },
  {
    question: "Do you offer discounts for nonprofits or educational institutions?",
    answer:
      "Yes, we offer special pricing for nonprofits, educational institutions, and open-source projects. Please contact our sales team for more information about our discount programs.",
  },
  {
    question: "How secure is my data on your platform?",
    answer:
      "Security is our top priority. We use industry-standard encryption for all data, both in transit and at rest. Our infrastructure is hosted on secure cloud providers with SOC 2 and ISO 27001 certifications. We also conduct regular security audits and penetration testing.",
  },
  {
    question: "Can I export my data if I decide to leave?",
    answer:
      "Yes, we believe your data belongs to you. We provide comprehensive export tools that allow you to download all your data in standard formats at any time. After account closure, we retain your data for 30 days before permanent deletion, giving you ample time to ensure you have everything you need.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "All plans include access to our help center, documentation, and community forums. The Starter plan includes email support with a 24-hour response time. The Professional plan adds priority support with faster response times. The Enterprise plan includes 24/7 dedicated support with a named account manager and guaranteed response times backed by an SLA.",
  },
  {
    question: "Do you offer custom development or implementation services?",
    answer:
      "Yes, our professional services team can help with custom development, implementation, data migration, and training. These services are available to all customers but are particularly popular with our Enterprise clients. Contact our sales team for pricing and availability.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="bg-secondary/50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Have questions? We've got answers. If you can't find what you're looking for, feel free to contact our support team.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
