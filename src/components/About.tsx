import { Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-4xl font-bold sm:text-5xl">
            Thomas Farrell: The{" "}
            <span className="text-primary">Discipline Fitness Coach</span>
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Main Content */}
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-muted-foreground">
                With a <span className="font-semibold text-foreground">holistic, functional, and
                dynamic approach</span>, Thomas Farrell brings over a decade of expertise in
                transforming lives through fitness.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                His philosophy centers on <span className="font-semibold text-foreground">building
                strength and discipline</span> - not just in the gym, but in every aspect of life.
                Through personalized coaching and comprehensive support, Thomas helps clients
                develop lasting habits and achieve sustainable results.
              </p>
            </div>

            {/* Experience Callout */}
            <div className="flex items-center justify-center">
              <div className="group relative rounded-2xl border-2 border-primary bg-card p-8 shadow-[var(--shadow-elevated)] transition-all hover:shadow-[var(--shadow-glow)]">
                <Award className="mx-auto mb-4 h-16 w-16 text-primary" />
                <div className="text-center">
                  <div className="mb-2 text-5xl font-bold text-primary">10+</div>
                  <div className="text-xl font-semibold">Years of Experience</div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    Dedicated to holistic transformation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
