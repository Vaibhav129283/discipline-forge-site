import { useEffect } from "react";
import { Brain, Target, RefreshCw, Zap, CheckCircle, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NLPMindset = () => {
  useEffect(() => {
    document.title = "NLP & Mindset Coaching — Discipline Fitness Coach";
  }, []);

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  const steps = [
    {
      number: "01",
      icon: Target,
      title: "Assess",
      description: "We identify your current mental blocks, limiting beliefs, and patterns that are holding you back from achieving your goals.",
    },
    {
      number: "02",
      icon: RefreshCw,
      title: "Reframe",
      description: "Using NLP techniques, we reframe negative thought patterns and create new, empowering beliefs that support your success.",
    },
    {
      number: "03",
      icon: Zap,
      title: "Train",
      description: "Practice and reinforce new mental habits through guided exercises, visualization, and real-world application.",
    },
  ];

  const outcomes = [
    "Break through self-limiting beliefs",
    "Build unshakeable confidence",
    "Develop laser-sharp focus",
    "Create lasting motivation",
    "Handle stress and setbacks effectively",
    "Align actions with goals",
    "Improve communication skills",
    "Build discipline and consistency",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="border-b border-border py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Brain className="h-8 w-8 text-primary" />
          </div>
          <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            NLP & <span className="text-primary">Mindset</span> Coaching
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Your body can only go where your mind leads. Master your mindset to unlock your full potential in fitness and life.
          </p>
          <Button onClick={scrollToContact} variant="hero" className="mt-8">
            Transform Your Mindset
          </Button>
        </div>
      </section>

      {/* What is NLP */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-foreground">
              What is <span className="text-primary">NLP</span>?
            </h2>
            <p className="mb-4 text-muted-foreground">
              Neuro-Linguistic Programming (NLP) is a powerful approach to personal development that focuses on the connection between neurological processes ("neuro"), language ("linguistic"), and behavioral patterns learned through experience ("programming").
            </p>
            <p className="text-muted-foreground">
              By understanding and modifying these connections, we can change our thoughts, behaviors, and outcomes. When combined with fitness coaching, NLP helps you break through mental barriers, build lasting motivation, and create sustainable habits.
            </p>
          </div>
        </div>
      </section>

      {/* 3-Step Approach */}
      <section className="border-t border-border bg-card/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-bold text-foreground">
            Our 3-Step <span className="text-primary">Approach</span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            A proven framework for transforming your mindset and achieving breakthrough results
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative rounded-2xl border border-border bg-card p-8 text-center shadow-[var(--shadow-elevated)]"
              >
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-2 text-lg font-bold text-primary-foreground">
                  {step.number}
                </span>
                <div className="mx-auto mb-4 mt-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="border-t border-border py-16">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-foreground">
                Expected <span className="text-primary">Outcomes</span>
              </h2>
              <p className="mb-8 text-muted-foreground">
                Our mindset coaching is designed to create lasting change. Here's what you can expect to achieve:
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {outcomes.map((outcome) => (
                  <div key={outcome} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm text-foreground">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8">
              <div className="rounded-xl bg-card p-6 shadow-[var(--shadow-elevated)]">
                <Brain className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-xl font-bold text-foreground">Mind-Body Connection</h3>
                <p className="text-sm text-muted-foreground">
                  When your mind and body work together, transformation becomes inevitable. Our integrated approach ensures lasting results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="border-t border-border bg-card/50 py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-elevated)]">
            <Quote className="mb-4 h-10 w-10 text-primary" />
            <h3 className="mb-4 text-xl font-bold text-foreground">Case Study: Breaking Through Plateaus</h3>
            <p className="mb-4 text-muted-foreground">
              Mark came to us after 2 years of stalled progress. Despite training hard and eating well, he couldn't break past his plateau. Through our NLP sessions, we discovered deep-seated beliefs about what he "deserved" to achieve.
            </p>
            <p className="mb-4 text-muted-foreground">
              Using reframing techniques and visualization, we rewired his mental programming. Within 3 months, Mark broke through his plateau, losing an additional 12kg and achieving a physique he never thought possible.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/20" />
              <div>
                <p className="font-semibold text-foreground">Mark T.</p>
                <p className="text-sm text-primary">Lost 12kg after breaking mental blocks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground">
            Ready to Master Your <span className="text-primary">Mindset</span>?
          </h2>
          <p className="mb-8 text-muted-foreground">
            Book a consultation to discover how NLP and mindset coaching can accelerate your transformation.
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

export default NLPMindset;
