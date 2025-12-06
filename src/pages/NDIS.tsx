import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Shield, Users, FileText, ChevronDown, ChevronUp, Phone, Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NDIS = () => {
  useEffect(() => {
    document.title = "NDIS Personal Training — Discipline Fitness Coach";
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToContact = () => {
    window.location.href = "/#contact?subject=NDIS";
  };

  const services = [
    {
      icon: Users,
      title: "Capacity Building",
      description: "Improve your physical capacity, coordination, and functional movement through tailored exercise programs.",
    },
    {
      icon: Heart,
      title: "Health & Wellbeing",
      description: "Enhance your overall health, manage weight, and improve energy levels with sustainable fitness habits.",
    },
    {
      icon: Shield,
      title: "Independence Support",
      description: "Build the strength and confidence to perform daily activities more independently.",
    },
  ];

  const managementTypes = [
    {
      title: "Plan-Managed",
      description: "Your plan manager handles all invoicing and payments. We submit invoices directly to your plan manager.",
    },
    {
      title: "Self-Managed",
      description: "You manage your own funding. We provide detailed invoices for you to claim reimbursement from the NDIA.",
    },
    {
      title: "NDIA-Managed",
      description: "The NDIA manages your funding. We are a registered provider and can invoice the NDIA directly.",
    },
  ];

  const faqs = [
    {
      question: "What NDIS categories can cover personal training?",
      answer: "Personal training typically falls under 'Improved Health and Wellbeing' or 'Increased Capacity for Social and Community Participation' within the Capacity Building budget. We recommend discussing with your support coordinator or plan manager to confirm eligibility.",
    },
    {
      question: "Do I need a referral to access your services?",
      answer: "No formal medical referral is required, but you'll need to have personal training or exercise physiology support included in your NDIS plan. We recommend discussing this with your support coordinator during your plan review.",
    },
    {
      question: "What does a typical session look like?",
      answer: "Sessions are tailored to your abilities and goals. They may include mobility work, strength training, cardiovascular exercise, and functional movements—all adapted to your needs and any physical limitations.",
    },
    {
      question: "Can you train me at home or in a gym?",
      answer: "Yes! We offer both in-home training and gym-based sessions. We can work with your preferences and any accessibility requirements you may have.",
    },
    {
      question: "How do I get started?",
      answer: "Contact us for a free initial consultation. We'll discuss your goals, review your NDIS plan, and create a Service Agreement before beginning training.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="border-b border-border py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary">
                <Shield className="h-4 w-4" />
                Registered NDIS Provider
              </div>
              <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
                NDIS <span className="text-primary">Personal Training</span>
              </h1>
              <p className="mb-6 text-lg text-muted-foreground">
                Empowering NDIS participants to build strength, confidence, and independence through tailored fitness programs delivered by qualified professionals.
              </p>
              <Button onClick={scrollToContact} variant="hero">
                Contact for NDIS
              </Button>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8">
              <div className="rounded-xl bg-card p-6 shadow-[var(--shadow-elevated)]">
                <h3 className="mb-4 text-lg font-semibold text-foreground">Our Commitment</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground">Compliant with NDIS Act 2013</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground">Adherence to NDIS Code of Conduct</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground">Privacy Act 1988 compliant</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground">Person-centered approach</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-bold text-foreground">
            Services Under <span className="text-primary">Capacity Building</span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            We support NDIS participants to improve their physical capacity and overall wellbeing
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-elevated)] transition-shadow hover:shadow-[var(--shadow-glow)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Management */}
      <section className="border-t border-border bg-card/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-bold text-foreground">
            <span className="text-primary">Invoicing</span> & Plan Management
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            We work with all plan management types to make accessing our services easy
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {managementTypes.map((type) => (
              <div
                key={type.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-elevated)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{type.title}</h3>
                <p className="text-sm text-muted-foreground">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="border-t border-border py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-elevated)]">
            <Shield className="mb-4 h-10 w-10 text-primary" />
            <h2 className="mb-4 text-2xl font-bold text-foreground">Our Compliance Commitment</h2>
            <p className="mb-4 text-muted-foreground">
              As a registered NDIS provider, we are committed to delivering services in accordance with:
            </p>
            <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
              <li>• NDIS Act 2013</li>
              <li>• NDIS Code of Conduct</li>
              <li>• Privacy Act 1988 (Cth) and Australian Privacy Principles</li>
              <li>• NDIS Price Guide and Support Catalogue</li>
            </ul>
            <p className="text-sm text-muted-foreground">
              For more details on how we handle your information and our terms of service, please review our{" "}
              <Link to="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link to="/terms-and-conditions" className="text-primary hover:underline">
                Terms & Conditions
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-card/50 py-16">
        <div className="container mx-auto max-w-2xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-border bg-card shadow-[var(--shadow-elevated)]"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between p-4 text-left"
                >
                  <span className="font-semibold text-foreground">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-primary" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="border-t border-border px-4 py-3">
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl rounded-2xl bg-primary p-8 text-center md:p-12">
            <h2 className="mb-4 text-3xl font-bold text-primary-foreground">
              Ready to Get Started with NDIS?
            </h2>
            <p className="mb-6 text-primary-foreground/80">
              Contact us for a free consultation to discuss your goals and how we can support you through your NDIS plan.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="gap-2 border-primary-foreground/50 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                Contact for NDIS
              </Button>
              <a
                href="mailto:info@disciplinefitness.com.au?subject=NDIS%20Inquiry"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground"
              >
                <Mail className="h-4 w-4" />
                info@disciplinefitness.com.au
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NDIS;
