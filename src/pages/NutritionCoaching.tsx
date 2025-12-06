import { useEffect, useState } from "react";
import { Apple, Check, ChevronDown, ChevronUp, Utensils, Scale, ClipboardList, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NutritionCoaching = () => {
  useEffect(() => {
    document.title = "Nutrition Coaching — Discipline Fitness Coach";
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  const benefits = [
    { icon: Scale, title: "Sustainable Weight Management", description: "Learn to manage your weight without restrictive diets or quick fixes" },
    { icon: Apple, title: "Personalized Meal Plans", description: "Custom nutrition plans tailored to your goals, preferences, and lifestyle" },
    { icon: Heart, title: "Improved Energy & Health", description: "Optimize your nutrition for better energy, sleep, and overall wellbeing" },
    { icon: ClipboardList, title: "Education & Accountability", description: "Understand the 'why' behind nutrition and stay on track with regular check-ins" },
  ];

  const programs = [
    {
      name: "Starter",
      price: "$149",
      period: "/month",
      description: "Perfect for beginners looking to build healthy habits",
      features: [
        "Initial nutrition assessment",
        "Basic meal plan template",
        "Weekly email check-ins",
        "Access to recipe database",
        "Monthly review call",
      ],
    },
    {
      name: "Standard",
      price: "$249",
      period: "/month",
      description: "Our most popular plan for committed transformations",
      features: [
        "Comprehensive nutrition assessment",
        "Personalized meal plans",
        "Weekly video check-ins",
        "Macro tracking guidance",
        "Shopping lists & meal prep guides",
        "Priority email support",
      ],
      popular: true,
    },
    {
      name: "Advanced",
      price: "$399",
      period: "/month",
      description: "For athletes and those seeking peak performance",
      features: [
        "Advanced metabolic assessment",
        "Competition/event nutrition planning",
        "Twice weekly check-ins",
        "Supplement guidance",
        "Performance optimization",
        "24/7 messaging support",
        "Integration with training program",
      ],
    },
  ];

  const faqs = [
    {
      question: "Do I need to count calories or macros?",
      answer: "Not necessarily! We tailor our approach to your preferences. Some clients thrive with macro tracking, while others prefer a more intuitive eating approach. We'll find what works best for you.",
    },
    {
      question: "Can you accommodate dietary restrictions?",
      answer: "Absolutely! Whether you're vegan, vegetarian, gluten-free, or have allergies, we create meal plans that work with your needs while still achieving your goals.",
    },
    {
      question: "How quickly will I see results?",
      answer: "Most clients notice improved energy within the first 1-2 weeks. Visible body composition changes typically appear within 4-6 weeks of consistent adherence.",
    },
    {
      question: "Do you provide supplements?",
      answer: "We don't sell supplements, but we can provide evidence-based recommendations if supplementation would benefit your goals. We focus on food-first nutrition.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="border-b border-border py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Utensils className="h-8 w-8 text-primary" />
          </div>
          <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Nutrition <span className="text-primary">Coaching</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Transform your relationship with food. Our evidence-based nutrition coaching helps you build sustainable habits for lasting results.
          </p>
          <Button onClick={scrollToContact} variant="hero" className="mt-8">
            Book a Consultation
          </Button>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
            Why Choose Our <span className="text-primary">Nutrition Coaching</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-elevated)] transition-shadow hover:shadow-[var(--shadow-glow)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="border-t border-border bg-card/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-bold text-foreground">
            Choose Your <span className="text-primary">Program</span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            Select the nutrition coaching tier that fits your goals and commitment level
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {programs.map((program) => (
              <div
                key={program.name}
                className={`relative rounded-2xl border p-6 shadow-[var(--shadow-elevated)] transition-shadow hover:shadow-[var(--shadow-glow)] ${
                  program.popular
                    ? "border-primary bg-card"
                    : "border-border bg-card"
                }`}
              >
                {program.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <div className="mb-4 text-center">
                  <h3 className="text-xl font-bold text-foreground">{program.name}</h3>
                  <div className="mt-2">
                    <span className="text-3xl font-bold text-primary">{program.price}</span>
                    <span className="text-muted-foreground">{program.period}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{program.description}</p>
                </div>
                <ul className="mb-6 space-y-3">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={scrollToContact}
                  variant={program.popular ? "hero" : "outline"}
                  className="w-full"
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="border-t border-border py-16">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <blockquote className="text-lg italic text-muted-foreground">
            "Thomas's nutrition coaching completely changed my relationship with food. I lost 15kg and have kept it off for over a year. The education I received means I now understand how to fuel my body properly."
          </blockquote>
          <p className="mt-4 font-semibold text-primary">— Sarah M., Brisbane</p>
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
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground">
            Ready to Transform Your <span className="text-primary">Nutrition</span>?
          </h2>
          <p className="mb-8 text-muted-foreground">
            Book a free consultation to discuss your goals and find the right program for you.
          </p>
          <Button onClick={scrollToContact} variant="hero" size="lg">
            Book a Consultation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NutritionCoaching;
