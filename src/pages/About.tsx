import { useEffect } from "react";
import { Instagram, Award, Dumbbell, Users, GraduationCap, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  useEffect(() => {
    document.title = "About Thomas Farrell — Discipline Fitness Coach";
  }, []);

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  const sections = [
    {
      icon: Award,
      title: "The Australian Army Reserves",
      content: "Thomas's journey began with the Australian Army Reserves, where he developed the discipline, resilience, and mental fortitude that now form the foundation of his coaching philosophy. The military taught him that true strength comes from consistency, commitment, and the willingness to push beyond comfort zones.",
      image: "/images/army-reserves.jpg"
    },
    {
      icon: Users,
      title: "Australian Surf Lifesaving",
      content: "As a surf lifesaver, Thomas learned the importance of physical preparedness and the responsibility of protecting others. This experience instilled in him a deep appreciation for functional fitness—training that serves a real-world purpose and can save lives.",
      image: "/images/surf-lifesaving.jpg"
    },
    {
      icon: GraduationCap,
      title: "University & Hospitality",
      content: "While pursuing his education and working in hospitality, Thomas discovered his passion for helping others achieve their goals. The fast-paced hospitality industry taught him adaptability, customer service excellence, and the importance of creating personalized experiences.",
      image: "/images/university.jpg"
    },
    {
      icon: Heart,
      title: "Fitness, Health & Lifestyle",
      content: "Today, Thomas combines all his experiences into a holistic approach to fitness coaching. He believes that true transformation comes not just from physical training, but from developing the right mindset, nutrition habits, and lifestyle practices that support long-term health and wellbeing.",
      image: "/images/fitness-lifestyle.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/about-hero.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto flex h-full items-center px-4">
          <div className="max-w-xl">
            <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Your <span className="text-primary">Fitness</span> Coach
            </h1>
            <p className="text-lg text-muted-foreground">
              Building strength, discipline, and lasting transformation
            </p>
          </div>
        </div>
      </section>

      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Two Column Layout */}
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Left Column - Red Cards */}
            <div className="space-y-6 lg:col-span-1">
              {/* Profile Card */}
              <div className="rounded-2xl bg-primary p-6 text-primary-foreground shadow-[var(--shadow-elevated)]">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary-foreground/20">
                  <Dumbbell className="h-10 w-10" />
                </div>
                <h2 className="mb-2 text-2xl font-bold">Thomas Farrell</h2>
                <p className="mb-4 text-primary-foreground/80">The Discipline Fitness Coach</p>
                <div className="mb-4 flex items-center gap-2 text-sm">
                  <Award className="h-4 w-4" />
                  <span>10+ Years Experience</span>
                </div>
                <Button 
                  onClick={scrollToContact}
                  variant="outline" 
                  className="w-full border-primary-foreground/50 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Book a Call
                </Button>
              </div>

              {/* Instagram Card */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-elevated)]">
                <div className="mb-4 flex items-center gap-3">
                  <Instagram className="h-6 w-6 text-primary" />
                  <span className="font-semibold text-foreground">Follow the Journey</span>
                </div>
                <a 
                  href="https://instagram.com/disciplinefitnesscoach"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-primary hover:underline"
                >
                  @disciplinefitnesscoach
                </a>
              </div>

              {/* Stats Card */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-elevated)]">
                <h3 className="mb-4 font-semibold text-foreground">Achievements</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Clients Transformed</span>
                    <span className="font-semibold text-primary">500+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Years Experience</span>
                    <span className="font-semibold text-primary">10+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">NDIS Provider</span>
                    <span className="font-semibold text-primary">Registered</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Biography */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="mb-6 text-3xl font-bold text-foreground">
                  Meet <span className="text-primary">Thomas Farrell</span>
                </h2>
                <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <p>
                    Thomas Farrell is the founder and head coach of The Discipline Fitness Coach, bringing over a decade of experience in personal training, nutrition coaching, and mindset development. His unique background spans military service, surf lifesaving, and professional fitness coaching, giving him a holistic understanding of what it takes to achieve lasting transformation.
                  </p>
                  <p>
                    With a holistic, functional, and dynamic approach to fitness, Thomas believes that true transformation goes beyond physical training. He focuses on building strength and discipline that carries over into every aspect of life—from career success to personal relationships and mental wellbeing.
                  </p>
                  <p>
                    As a registered NDIS provider, Thomas is also passionate about making fitness accessible to everyone, regardless of ability. He works with NDIS participants to build capacity, improve health outcomes, and enhance quality of life through tailored exercise programs.
                  </p>
                </div>
              </div>

              {/* Journey Sections */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">The Journey</h3>
                {sections.map((section, index) => (
                  <div 
                    key={section.title}
                    className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-elevated)] transition-shadow hover:shadow-[var(--shadow-glow)]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        <section.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="mb-2 text-lg font-semibold text-foreground">{section.title}</h4>
                        <p className="text-sm leading-relaxed text-muted-foreground">{section.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-12 rounded-2xl bg-primary p-8 text-center">
                <h3 className="mb-4 text-2xl font-bold text-primary-foreground">
                  Ready to Start Your Transformation?
                </h3>
                <p className="mb-6 text-primary-foreground/80">
                  Book a free consultation and discover how discipline can change your life.
                </p>
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
