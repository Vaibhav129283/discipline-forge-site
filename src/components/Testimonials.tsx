import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Thomas transformed not just my body, but my entire mindset. His holistic approach helped me build discipline that extends far beyond the gym.",
      author: "Sarah M.",
      role: "Personal Training Client",
    },
    {
      quote:
        "The online training program was a game-changer. Thomas kept me accountable and motivated, even from a distance. Best investment I've made in myself.",
      author: "Michael T.",
      role: "Online Coaching Client",
    },
    {
      quote:
        "I was skeptical about nutrition coaching, but Thomas made it simple and sustainable. Down 15kg and feeling stronger than ever!",
      author: "Emma L.",
      role: "Nutrition & Training Client",
    },
  ];

  return (
    <section id="testimonials" className="bg-card py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold sm:text-5xl">
          Listen To What Our <span className="text-primary">Awesome Clients</span> Have To Say!
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-2xl border-2 border-border bg-background p-8 shadow-lg transition-all hover:border-primary hover:shadow-[var(--shadow-glow)]"
            >
              <Quote className="mb-4 h-10 w-10 text-primary" />
              <p className="mb-6 italic leading-relaxed text-muted-foreground">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
