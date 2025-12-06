import { useEffect } from "react";
import { Monitor, Video, ClipboardCheck, TrendingUp, MessageCircle, Calendar, Smartphone, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const OnlineTraining = () => {
  useEffect(() => {
    document.title = "Online Training — Discipline Fitness Coach";
  }, []);

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  const howItWorks = [
    {
      step: "01",
      icon: ClipboardCheck,
      title: "Initial Assessment",
      description: "Complete a comprehensive questionnaire covering your fitness history, goals, limitations, and available equipment.",
    },
    {
      step: "02",
      icon: Calendar,
      title: "Custom Program Design",
      description: "Receive a personalized training program designed specifically for your goals, schedule, and equipment access.",
    },
    {
      step: "03",
      icon: Video,
      title: "Weekly Check-ins",
      description: "Connect via video call to review progress, adjust programming, and address any questions or concerns.",
    },
    {
      step: "04",
      icon: TrendingUp,
      title: "Track & Progress",
      description: "Log your workouts, track progress, and receive ongoing adjustments to keep you moving forward.",
    },
  ];

  const features = [
    {
      icon: Video,
      title: "Video Coaching",
      description: "Detailed exercise demonstration videos and form checks via video submission",
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Track your workouts, measurements, and progress photos all in one place",
    },
    {
      icon: MessageCircle,
      title: "Direct Messaging",
      description: "Quick access to your coach for questions, form checks, and motivation",
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "Access your programs, log workouts, and track progress from anywhere",
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Train on your schedule with workouts designed for your available time",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join our private community of like-minded individuals for extra motivation",
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
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Monitor className="h-8 w-8 text-primary" />
              </div>
              <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
                Online <span className="text-primary">Training</span>
              </h1>
              <p className="mb-6 text-lg text-muted-foreground">
                Get expert coaching from anywhere in the world. Our online training programs deliver the same quality and attention as in-person sessions, adapted for your home gym or fitness facility.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button onClick={scrollToContact} variant="hero">
                  Start Training Online
                </Button>
                <Button onClick={scrollToContact} variant="outline">
                  Book a Call
                </Button>
              </div>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8">
              <div className="aspect-video rounded-xl bg-card shadow-[var(--shadow-elevated)]">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <Video className="mx-auto mb-4 h-12 w-12 text-primary" />
                    <p className="text-sm text-muted-foreground">Video coaching preview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-bold text-foreground">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            Our proven 4-step process ensures you get the support and guidance you need for consistent results
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((item) => (
              <div
                key={item.step}
                className="relative rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-elevated)]"
              >
                <span className="absolute -top-3 left-4 rounded-full bg-primary px-3 py-1 text-sm font-bold text-primary-foreground">
                  {item.step}
                </span>
                <div className="mb-4 mt-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border bg-card/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-bold text-foreground">
            Top <span className="text-primary">Features</span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            Everything you need for a successful online training experience
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-elevated)] transition-shadow hover:shadow-[var(--shadow-glow)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="border-t border-border py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl rounded-2xl bg-primary p-8 text-center md:p-12">
            <h2 className="mb-4 text-3xl font-bold text-primary-foreground">
              Ready to Train Online?
            </h2>
            <p className="mb-6 text-primary-foreground/80">
              Book a free discovery call to discuss your goals and see how online training can work for you. No pressure, just a conversation about your fitness journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="border-primary-foreground/50 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Book a Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OnlineTraining;
