import { Dumbbell, Laptop, Apple, Brain, Heart, LogIn } from "lucide-react";
import ServiceCard from "./ServiceCard";

const CoachingPillars = () => {
  const services = [
    {
      icon: Dumbbell,
      title: "Personal Training",
      description:
        "One-on-one sessions designed to build strength, improve form, and achieve your fitness goals with personalized programming.",
    },
    {
      icon: Laptop,
      title: "Online Training",
      description:
        "Train anywhere with customized workout plans, video demonstrations, and ongoing support through our digital platform.",
    },
    {
      icon: Apple,
      title: "Nutrition Coaching",
      description:
        "Sustainable nutrition strategies tailored to your lifestyle, helping you fuel your body for optimal performance and results.",
    },
    {
      icon: Brain,
      title: "NLP & Mindset",
      description:
        "Harness the power of neuro-linguistic programming to overcome mental barriers and develop a winning mindset.",
    },
    {
      icon: Heart,
      title: "NDIS Support",
      description:
        "Specialized fitness coaching for NDIS participants, focusing on inclusive, adaptive training approaches.",
    },
    {
      icon: LogIn,
      title: "Client Login",
      description:
        "Access your personalized training portal, track progress, and stay connected with your coach.",
    },
  ];

  return (
    <section id="coaching" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
            Our Holistic <span className="text-primary">Coaching Pillars</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A comprehensive approach to fitness that addresses body, mind, and lifestyle.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoachingPillars;
