import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    bestTime: "",
    inquiry: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Request Received!",
      description: "We'll contact you soon to schedule your free consultation.",
    });

    // Reset form
    setFormData({
      firstName: "",
      email: "",
      phone: "",
      bestTime: "",
      inquiry: "",
    });
  };

  return (
    <section id="contact" className="bg-card py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold sm:text-5xl">
          Ready to Build Your <span className="text-primary">Discipline</span>?
        </h2>

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* CTA Message */}
            <div className="flex flex-col justify-center">
              <h3 className="mb-4 text-3xl font-bold">Let's Start Your Journey</h3>
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                Take the first step towards transforming your body, mind, and lifestyle. Book
                your free consultation and discover how our holistic coaching approach can help
                you achieve lasting results.
              </p>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span>Personalized assessment of your goals and current fitness level</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span>Custom training and nutrition recommendations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span>No obligation - just a conversation about your transformation</span>
                </li>
              </ul>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-border bg-background p-8 shadow-[var(--shadow-elevated)]">
              <div>
                <label htmlFor="firstName" className="mb-2 block text-sm font-medium">
                  First Name *
                </label>
                <Input
                  id="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="h-12"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                  Phone *
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-12"
                  required
                />
              </div>

              <div>
                <label htmlFor="bestTime" className="mb-2 block text-sm font-medium">
                  Best Time for Contact
                </label>
                <Select value={formData.bestTime} onValueChange={(value) => setFormData({ ...formData, bestTime: value })}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select a time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning (6am - 12pm)</SelectItem>
                    <SelectItem value="afternoon">Afternoon (12pm - 5pm)</SelectItem>
                    <SelectItem value="evening">Evening (5pm - 9pm)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="inquiry" className="mb-2 block text-sm font-medium">
                  Tell Us About Your Goals
                </label>
                <Textarea
                  id="inquiry"
                  value={formData.inquiry}
                  onChange={(e) => setFormData({ ...formData, inquiry: e.target.value })}
                  className="min-h-[120px] resize-none"
                  placeholder="What are you looking to achieve?"
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                Claim Your Free Consultation
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
