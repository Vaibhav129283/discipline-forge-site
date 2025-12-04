import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import TestimonialCard from "@/components/TestimonialCard";

const transformations = [
  {
    title: "From Supermom to Fit Mom",
    description: "After two kids, Sarah thought she'd never feel strong again. Through dedicated training and nutrition coaching, she transformed her life.",
    beforeImage: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80",
    afterImage: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=400&q=80",
    beforeWeight: "85 kg",
    afterWeight: "62 kg",
  },
  {
    title: "Executive Transformation",
    description: "Michael was overworked and overweight. With personalized training and mindset coaching, he became the best version of himself.",
    beforeImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    afterImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80",
    beforeWeight: "102 kg",
    afterWeight: "78 kg",
  },
  {
    title: "Student Athlete Comeback",
    description: "After an injury sidelined him, Jake used our program to come back stronger than ever and earn his scholarship.",
    beforeImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80",
    afterImage: "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=400&q=80",
    beforeWeight: "72 kg",
    afterWeight: "82 kg",
  },
  {
    title: "Retirement Reinvention",
    description: "At 58, Robert decided it wasn't too late. He lost weight, gained muscle, and now runs marathons.",
    beforeImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    afterImage: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&q=80",
    beforeWeight: "95 kg",
    afterWeight: "75 kg",
  },
  {
    title: "New Mom, New Me",
    description: "Emily bounced back after pregnancy with our postpartum-safe training program, feeling more confident than ever.",
    beforeImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
    afterImage: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=400&q=80",
    beforeWeight: "78 kg",
    afterWeight: "58 kg",
  },
  {
    title: "From Desk Job to Dream Body",
    description: "Working 12-hour days, Chris thought fitness wasn't possible. Our online coaching proved him wrong.",
    beforeImage: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=400&q=80",
    afterImage: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80",
    beforeWeight: "92 kg",
    afterWeight: "74 kg",
  },
];

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
              <span className="text-lg font-bold text-primary-foreground">DFC</span>
            </div>
            <span className="hidden text-sm font-semibold sm:inline-block">
              Discipline Fitness Coach
            </span>
          </Link>
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold lg:text-5xl">
            Real Stories, <span className="text-primary">Real Results</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            These are real transformations from real people who committed to change. 
            Every journey is unique, but discipline is the common thread.
          </p>
        </div>
      </section>

      {/* Transformation Cards Grid */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {transformations.map((transformation, index) => (
              <TestimonialCard key={index} {...transformation} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-[var(--shadow-elevated)] lg:p-16">
            <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
              Ready to Write <span className="text-primary">Your Story?</span>
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
              Your transformation is waiting. Book a free consultation and let's create a plan 
              that works for your life, your goals, and your schedule.
            </p>
            <Link to="/#contact">
              <Button variant="hero" size="xl">
                Start Your Transformation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Discipline Fitness Coach. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Testimonials;
