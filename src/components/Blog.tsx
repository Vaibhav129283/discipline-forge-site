import { Instagram, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const articles = [
    {
      title: "Building Discipline: The 5 AM Workout Mindset",
      timeToRead: "5 min read",
      excerpt: "Discover how early morning training can transform your discipline and set the tone for success.",
    },
    {
      title: "Nutrition Fundamentals: Eating for Performance",
      timeToRead: "7 min read",
      excerpt: "Learn the essential nutritional strategies that fuel strength gains and sustainable energy.",
    },
  ];

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-4xl font-bold sm:text-5xl">
          Insights & <span className="text-primary">Articles</span>
        </h2>
        <p className="mb-12 text-center text-lg text-muted-foreground">
          Tips, strategies, and motivation to support your fitness journey
        </p>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Instagram CTA */}
          <div className="flex items-center justify-center rounded-2xl border-2 border-primary bg-card p-12 shadow-[var(--shadow-elevated)]">
            <div className="text-center">
              <Instagram className="mx-auto mb-6 h-20 w-20 text-primary" />
              <h3 className="mb-4 text-3xl font-bold">Follow Our Journey</h3>
              <p className="mb-6 text-xl text-primary">@disciplinefitnesscoach</p>
              <p className="mb-6 text-muted-foreground">
                Daily motivation, tips, and behind-the-scenes content
              </p>
              <Button
                variant="hero"
                size="lg"
                onClick={() => window.open("https://instagram.com/disciplinefitnesscoach", "_blank")}
              >
                Follow on Instagram
              </Button>
            </div>
          </div>

          {/* Articles */}
          <div className="space-y-6">
            {articles.map((article, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-border bg-card p-6 shadow-lg transition-all hover:border-primary hover:shadow-[var(--shadow-glow)]"
              >
                <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {article.timeToRead}
                </div>
                <h3 className="mb-3 text-2xl font-bold group-hover:text-primary">
                  {article.title}
                </h3>
                <p className="text-muted-foreground">{article.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
