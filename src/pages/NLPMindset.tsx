import { useEffect } from "react";
import { 
  Brain, 
  Target, 
  RefreshCw, 
  Zap, 
  CheckCircle, 
  Quote, 
  Eye, 
  Shield, 
  Compass,
  TrendingUp,
  MessageSquare,
  Users,
  ArrowRight
} from "lucide-react";
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

  const nlpElements = [
    {
      icon: Brain,
      title: "Rewiring Limiting Beliefs",
      description: "Identify and replace the subconscious beliefs that hold you back from achieving your goals.",
    },
    {
      icon: Shield,
      title: "Emotional Control",
      description: "Develop mastery over your emotional responses to stress, setbacks, and challenging situations.",
    },
    {
      icon: RefreshCw,
      title: "Habit Formation",
      description: "Build sustainable habits through understanding the psychology of behavior change.",
    },
    {
      icon: MessageSquare,
      title: "Self-Talk & Identity",
      description: "Align your internal dialogue with the person you're working to become.",
    },
  ];

  const whoThisIsFor = [
    "You struggle with consistency or motivation",
    "You overthink or self-sabotage your progress",
    "You lack confidence despite doing the work",
    "You want structure, not just motivation",
    "You're ready for real mental discipline",
    "You feel stuck despite knowing what to do",
  ];

  const disciplineApproach = {
    notThis: [
      "This is not therapy",
      "Not motivational talking",
      "Not surface-level affirmations",
      "Not temporary hype",
    ],
    instead: [
      "Structured mental training",
      "Awareness → Control → Discipline",
      "Mindset integrated with fitness & lifestyle",
      "Practical tools you can use daily",
    ],
  };

  const benefits = [
    { icon: TrendingUp, text: "Increased confidence and self-belief" },
    { icon: Shield, text: "Better emotional regulation" },
    { icon: Compass, text: "Stronger decision-making" },
    { icon: RefreshCw, text: "Consistency in training and life" },
    { icon: Brain, text: "Reduced mental noise and stress" },
    { icon: Target, text: "Clear personal direction" },
  ];

  const coachingSteps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We discuss your goals, challenges, and what's been holding you back mentally.",
    },
    {
      number: "02",
      title: "Identify Patterns & Blocks",
      description: "Uncover the mental patterns, beliefs, and habits that are limiting your progress.",
    },
    {
      number: "03",
      title: "NLP Reframing Techniques",
      description: "Apply proven NLP methods to reframe limiting beliefs and create empowering alternatives.",
    },
    {
      number: "04",
      title: "Practical Mindset Tools",
      description: "Learn actionable techniques for managing thoughts, emotions, and behaviors daily.",
    },
    {
      number: "05",
      title: "Ongoing Guidance",
      description: "Continuous support and accountability to ensure lasting transformation.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-dagger mb-6 text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Master Your Mind.<br />
              <span className="text-primary">Build Unbreakable Discipline.</span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
              NLP-based mindset coaching to help you break mental patterns, build confidence, and create lasting change — in training and in life.
            </p>
            <Button onClick={scrollToContact} variant="hero" size="lg" className="group">
              Book a Free Mindset Consultation
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* What is NLP Coaching */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-dagger mb-8 text-3xl font-bold uppercase text-foreground md:text-4xl">
              What is <span className="text-primary">NLP Coaching</span>?
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
              NLP (Neuro-Linguistic Programming) focuses on how your thoughts, language, and habits shape your behaviour. This coaching helps identify mental patterns that hold you back and replaces them with strategies that support clarity, confidence, and consistency.
            </p>
          </div>
          
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
            {nlpElements.map((element) => (
              <div
                key={element.title}
                className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-elevated)] transition-all hover:border-primary/50 hover:shadow-[var(--shadow-glow)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <element.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">{element.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{element.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="border-y border-border bg-card/30 py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-dagger mb-4 text-3xl font-bold uppercase text-foreground md:text-4xl">
              Is This <span className="text-primary">For You</span>?
            </h2>
            <p className="mb-12 text-muted-foreground">
              This coaching is designed for those ready to take control of their mind.
            </p>
          </div>
          
          <div className="mx-auto grid max-w-3xl gap-4 md:grid-cols-2">
            {whoThisIsFor.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-xl border border-border bg-card/50 p-4 transition-all hover:border-primary/50"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Discipline Approach */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-dagger mb-4 text-3xl font-bold uppercase text-foreground md:text-4xl">
              The <span className="text-primary">Discipline</span> Approach
            </h2>
            <p className="mb-12 text-muted-foreground">
              What makes this different from everything else you've tried.
            </p>
          </div>
          
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {/* Not This */}
            <div className="rounded-2xl border border-border bg-card/50 p-8">
              <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-foreground">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm font-bold text-muted-foreground">✕</span>
                This is NOT
              </h3>
              <ul className="space-y-4">
                {disciplineApproach.notThis.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Instead */}
            <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent p-8">
              <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-foreground">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">✓</span>
                Instead, It's
              </h3>
              <ul className="space-y-4">
                {disciplineApproach.instead.map((item) => (
                  <li key={item} className="flex items-center gap-3 font-medium text-foreground">
                    <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits / Outcomes */}
      <section className="border-y border-border bg-card/30 py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-dagger mb-4 text-3xl font-bold uppercase text-foreground md:text-4xl">
              What You'll <span className="text-primary">Achieve</span>
            </h2>
            <p className="mb-12 text-muted-foreground">
              Real, measurable outcomes from focused mental training.
            </p>
          </div>
          
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.text}
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-elevated)] transition-all hover:border-primary/50"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <benefit.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-medium leading-relaxed text-foreground">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How The Coaching Works */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-dagger mb-4 text-3xl font-bold uppercase text-foreground md:text-4xl">
              How It <span className="text-primary">Works</span>
            </h2>
            <p className="mb-12 text-muted-foreground">
              A structured process designed for lasting transformation.
            </p>
          </div>
          
          <div className="mx-auto max-w-3xl">
            {coachingSteps.map((step, index) => (
              <div key={step.number} className="relative flex gap-6 pb-12 last:pb-0">
                {/* Vertical line */}
                {index < coachingSteps.length - 1 && (
                  <div className="absolute left-6 top-12 h-full w-px bg-gradient-to-b from-primary to-border" />
                )}
                
                {/* Step number */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background text-lg font-bold text-primary">
                  {step.number}
                </div>
                
                {/* Content */}
                <div className="pt-2">
                  <h3 className="mb-2 text-lg font-bold text-foreground">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Message from Thomas */}
      <section className="border-y border-border bg-card/30 py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid items-center gap-10 md:grid-cols-5">
              {/* Image placeholder - left side */}
              <div className="md:col-span-2">
                <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-2xl border-2 border-border bg-gradient-to-br from-primary/20 to-card shadow-[var(--shadow-elevated)]">
                  {/* Placeholder for Thomas's image */}
                  <div className="flex h-full w-full items-center justify-center">
                    <div className="text-center">
                      <Users className="mx-auto mb-2 h-16 w-16 text-primary/50" />
                      <span className="text-xs text-muted-foreground">Thomas Farrell</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Message - right side */}
              <div className="md:col-span-3">
                <Quote className="mb-4 h-10 w-10 text-primary/50" />
                <h2 className="font-dagger mb-6 text-2xl font-bold uppercase text-foreground md:text-3xl">
                  A Message From <span className="text-primary">Your Coach</span>
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    "Discipline isn't about being hard on yourself — it's about understanding how your mind works and learning to lead it."
                  </p>
                  <p className="leading-relaxed">
                    Real change starts with understanding how your mind works. My role is to help you develop clarity, discipline, and mental control — so your actions finally align with the life you want.
                  </p>
                  <p className="leading-relaxed">
                    This isn't about motivation that fades. It's about building the mental foundation that makes discipline automatic.
                  </p>
                </div>
                <div className="mt-6 border-l-2 border-primary pl-4">
                  <p className="font-bold text-foreground">Thomas Farrell</p>
                  <p className="text-sm text-primary">Discipline Fitness Coach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card p-10 text-center shadow-[var(--shadow-glow)] md:p-16">
            <h2 className="font-dagger mb-4 text-3xl font-bold uppercase text-foreground md:text-4xl">
              Ready to Build<br />
              <span className="text-primary">Mental Discipline</span>?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
              Take the first step toward lasting transformation. Book your free consultation and discover how NLP coaching can help you achieve clarity, confidence, and control.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button onClick={scrollToContact} variant="hero" size="lg" className="group w-full sm:w-auto">
                Book a Free Mindset Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NLPMindset;
