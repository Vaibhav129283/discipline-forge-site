import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlogCard from "@/components/BlogCard";

const featuredPost = {
  image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
  title: "The Complete Guide to Building Sustainable Fitness Habits",
  excerpt: "Discover the science-backed strategies for creating lasting fitness routines. Learn how discipline, not motivation, becomes the foundation for transforming your body and mind. This comprehensive guide covers everything from goal setting to overcoming plateaus.",
  author: "Thomas Farrell",
  date: "Dec 1, 2024",
};

const blogPosts = [
  {
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
    title: "5 Morning Routines That Will Change Your Life",
    excerpt: "Start your day with intention and watch how it transforms your entire life.",
    author: "Thomas Farrell",
    date: "Nov 28, 2024",
  },
  {
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80",
    title: "Nutrition Myths Debunked: What Science Really Says",
    excerpt: "Separating fact from fiction in the world of fitness nutrition.",
    author: "Thomas Farrell",
    date: "Nov 25, 2024",
  },
  {
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
    title: "The Power of Mindset in Physical Transformation",
    excerpt: "How your mental approach determines your physical results.",
    author: "Thomas Farrell",
    date: "Nov 22, 2024",
  },
  {
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=600&q=80",
    title: "Progressive Overload: The Key to Continuous Growth",
    excerpt: "Understanding the fundamental principle behind muscle building.",
    author: "Thomas Farrell",
    date: "Nov 18, 2024",
  },
  {
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
    title: "Recovery: The Most Underrated Part of Training",
    excerpt: "Why rest days are just as important as training days.",
    author: "Thomas Farrell",
    date: "Nov 15, 2024",
  },
  {
    image: "https://images.unsplash.com/photo-1598971457999-ca4ef48a9a71?w=600&q=80",
    title: "Building Strength at Any Age: It's Never Too Late",
    excerpt: "Age is just a number when it comes to getting stronger.",
    author: "Thomas Farrell",
    date: "Nov 12, 2024",
  },
];

const Blog = () => {
  const [visiblePosts, setVisiblePosts] = useState(6);

  const loadMore = () => {
    setVisiblePosts((prev) => prev + 3);
  };

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
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold lg:text-5xl">
              Insights & <span className="text-primary">Articles</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Expert advice, training tips, and nutrition insights to help you on your fitness journey.
            </p>
          </div>

          {/* Featured Post */}
          <BlogCard {...featuredPost} featured />
        </div>
      </section>

      {/* Recent Posts Grid */}
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold">Recent Articles</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(0, visiblePosts).map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>

          {/* Load More */}
          {visiblePosts < blogPosts.length && (
            <div className="mt-12 text-center">
              <Button variant="outline" size="lg" onClick={loadMore}>
                Load More Articles
              </Button>
            </div>
          )}
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

export default Blog;
