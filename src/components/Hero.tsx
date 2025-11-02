import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-fitness.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] overflow-hidden bg-background"
    >
      <div className="container px-4 py-20">
        <div className="grid min-h-[80vh] items-center gap-12 lg:grid-cols-2">
          {/* Left Side - Text Content */}
          <div className="flex flex-col justify-center space-y-8">
            <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Forge Your <span className="text-primary">Discipline</span>.
              <br />
              Transform Your Life.
            </h1>
            <p className="text-xl text-muted-foreground sm:text-2xl">
              Personal Training and Holistic Coaching that builds strength, mindset, and
              sustainable routine.
            </p>
            <div>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="hero"
                size="xl"
                className="group"
              >
                Start Your Transformation
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative flex items-center justify-center">
            <div className="relative aspect-square w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={heroImage}
                alt="Personal training and fitness coaching"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
