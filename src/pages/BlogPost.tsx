import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

// Blog data with full content
const allBlogPosts = [
  {
    slug: "complete-guide-sustainable-fitness-habits",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80",
    title: "The Complete Guide to Building Sustainable Fitness Habits",
    excerpt: "Discover the science-backed strategies for creating lasting fitness routines. Learn how discipline, not motivation, becomes the foundation for transforming your body and mind.",
    author: "Thomas Farrell",
    date: "Dec 1, 2024",
    readTime: "8 min read",
    content: `
      <p>Building sustainable fitness habits is not about finding the perfect workout or diet—it's about creating systems that work for your lifestyle and mindset. In this comprehensive guide, we'll explore the science-backed strategies that have helped hundreds of clients transform their bodies and minds.</p>

      <h2>Why Most Fitness Plans Fail</h2>
      <p>The fitness industry sells motivation, but motivation is fleeting. It's like trying to build a house on sand—eventually, it will crumble. What you need instead is discipline, which is the ability to do what needs to be done regardless of how you feel.</p>
      <p>Research shows that approximately 80% of people who start a new fitness routine abandon it within the first few months. The reason? They rely on motivation rather than building habits.</p>

      <h2>The Foundation: Start Small</h2>
      <p>The biggest mistake people make is trying to change everything at once. Instead, focus on one small habit at a time. Want to exercise more? Start with just 10 minutes a day. Once that becomes automatic, increase it gradually.</p>
      <p>James Clear, author of "Atomic Habits," calls this the "2-minute rule"—make your new habit so easy that you can't say no. Over time, these small actions compound into remarkable results.</p>

      <h2>Create Your Environment for Success</h2>
      <p>Your environment shapes your behavior more than you realize. If you want to work out in the morning, lay out your workout clothes the night before. If you want to eat healthier, keep nutritious foods visible and accessible.</p>
      <p>Remove friction from good habits and add friction to bad ones. This simple principle can transform your fitness journey.</p>

      <h2>The Power of Accountability</h2>
      <p>Having someone to hold you accountable dramatically increases your chances of success. This could be a personal trainer, workout partner, or even a fitness community. When someone else is expecting you to show up, you're far more likely to follow through.</p>

      <h2>Track Your Progress</h2>
      <p>What gets measured gets managed. Keep a simple log of your workouts, meals, or whatever habit you're building. Seeing your progress creates momentum and motivation to continue.</p>
      <p>Don't just track outcomes (like weight)—track behaviors (like workouts completed). You have direct control over your behaviors, which eventually lead to the outcomes you desire.</p>

      <h2>Embrace the Process</h2>
      <p>Sustainable fitness isn't about reaching a destination—it's about becoming the type of person who exercises regularly. Focus on the process, not just the goal. When exercise becomes part of your identity, it requires no willpower to maintain.</p>

      <h2>Conclusion</h2>
      <p>Building sustainable fitness habits takes time, patience, and the right approach. Start small, create supportive environments, find accountability, and focus on the process. With discipline and consistency, you'll build a fitness routine that lasts a lifetime.</p>

      <p>Ready to start your transformation? <a href="/#contact" class="text-primary hover:underline">Book a consultation</a> and let's build your sustainable fitness plan together.</p>
    `,
  },
  {
    slug: "5-morning-routines-change-life",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80",
    title: "5 Morning Routines That Will Change Your Life",
    excerpt: "Start your day with intention and watch how it transforms your entire life.",
    author: "Thomas Farrell",
    date: "Nov 28, 2024",
    readTime: "6 min read",
    content: `
      <p>How you start your morning sets the tone for your entire day. The most successful people in the world have one thing in common: intentional morning routines. Here are five morning habits that can transform your life.</p>

      <h2>1. Wake Up Early</h2>
      <p>There's magic in the quiet hours before the world wakes up. Use this time for yourself—free from distractions, emails, and demands. Even waking up just 30 minutes earlier can provide valuable time for self-improvement.</p>

      <h2>2. Hydrate First</h2>
      <p>After 7-8 hours of sleep, your body is dehydrated. Before reaching for coffee, drink a full glass of water. This kickstarts your metabolism, helps flush toxins, and improves mental clarity.</p>

      <h2>3. Move Your Body</h2>
      <p>Morning exercise has unique benefits. It boosts your metabolism, improves focus, and ensures you get your workout done before life gets in the way. Even a 15-minute walk or quick stretch routine counts.</p>

      <h2>4. Practice Mindfulness</h2>
      <p>Spend 5-10 minutes in meditation or journaling. This practice reduces stress, improves focus, and helps you approach the day with intention rather than reaction.</p>

      <h2>5. Eat a Protein-Rich Breakfast</h2>
      <p>Starting your day with protein stabilizes blood sugar, reduces cravings, and provides sustained energy. Skip the sugary cereals and opt for eggs, Greek yogurt, or a protein smoothie.</p>

      <h2>Implementation Tips</h2>
      <p>Don't try to implement all five at once. Start with one habit, master it, then add another. Remember, consistency beats perfection. A simple routine you do daily is more powerful than an elaborate one you abandon after a week.</p>
    `,
  },
  {
    slug: "nutrition-myths-debunked",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&q=80",
    title: "Nutrition Myths Debunked: What Science Really Says",
    excerpt: "Separating fact from fiction in the world of fitness nutrition.",
    author: "Thomas Farrell",
    date: "Nov 25, 2024",
    readTime: "7 min read",
    content: `
      <p>The nutrition world is full of conflicting information. Let's cut through the noise and look at what science actually says about common nutrition myths.</p>

      <h2>Myth 1: Carbs Make You Fat</h2>
      <p>Carbohydrates themselves don't cause weight gain—excess calories do. Carbs are your body's preferred energy source, especially for high-intensity exercise. The key is choosing quality carbs (whole grains, fruits, vegetables) over refined ones.</p>

      <h2>Myth 2: You Need to Eat Every 2-3 Hours</h2>
      <p>The idea that frequent meals "boost metabolism" has been debunked. Research shows that meal frequency has little impact on metabolism or weight loss. What matters is total daily calorie intake and food quality.</p>

      <h2>Myth 3: Fat Makes You Fat</h2>
      <p>Dietary fat is essential for hormone production, nutrient absorption, and brain function. Healthy fats from avocados, nuts, olive oil, and fatty fish should be part of any balanced diet.</p>

      <h2>Myth 4: You Must Eat Breakfast</h2>
      <p>While breakfast can be beneficial for some, it's not necessary for everyone. Intermittent fasting has shown potential benefits, and skipping breakfast doesn't automatically lead to weight gain or metabolic issues.</p>

      <h2>Myth 5: Supplements Are Necessary</h2>
      <p>Most people can get all the nutrients they need from a balanced diet. Supplements should supplement—not replace—good nutrition. Focus on whole foods first.</p>

      <h2>The Bottom Line</h2>
      <p>Good nutrition doesn't have to be complicated. Focus on whole foods, adequate protein, fruits and vegetables, and appropriate portions. Don't fall for fad diets or quick fixes—sustainable nutrition is about balance and consistency.</p>
    `,
  },
  {
    slug: "power-of-mindset-physical-transformation",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&q=80",
    title: "The Power of Mindset in Physical Transformation",
    excerpt: "How your mental approach determines your physical results.",
    author: "Thomas Farrell",
    date: "Nov 22, 2024",
    readTime: "6 min read",
    content: `
      <p>Your body will only go where your mind takes it. Physical transformation starts in the mind long before it shows in the mirror. Here's how to develop the mindset that drives results.</p>

      <h2>The Mind-Body Connection</h2>
      <p>Your thoughts directly influence your actions. If you believe you can't change, you won't even try. If you believe transformation is possible, you'll take the necessary actions to make it happen.</p>

      <h2>Developing a Growth Mindset</h2>
      <p>A growth mindset means believing your abilities can be developed through dedication and hard work. Instead of "I can't do this," try "I can't do this yet." This simple shift opens up possibilities.</p>

      <h2>Visualization Techniques</h2>
      <p>Elite athletes use visualization because it works. Spend time each day visualizing your ideal self—how you look, feel, and move. This mental rehearsal primes your brain for success.</p>

      <h2>Overcoming Self-Sabotage</h2>
      <p>Many people unconsciously sabotage their progress because change feels threatening. Recognize negative self-talk and replace it with empowering thoughts. You deserve to achieve your goals.</p>

      <h2>Building Mental Resilience</h2>
      <p>Setbacks are inevitable. What matters is how you respond. Instead of viewing obstacles as failures, see them as learning opportunities. Every successful person has faced and overcome challenges.</p>

      <h2>Taking Action</h2>
      <p>Mindset without action is just wishful thinking. Use your positive mindset to fuel consistent action. Small daily steps, taken consistently, lead to massive transformation over time.</p>
    `,
  },
  {
    slug: "progressive-overload-key-growth",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=1200&q=80",
    title: "Progressive Overload: The Key to Continuous Growth",
    excerpt: "Understanding the fundamental principle behind muscle building.",
    author: "Thomas Farrell",
    date: "Nov 18, 2024",
    readTime: "5 min read",
    content: `
      <p>Progressive overload is the most important principle in strength training. Without it, your body has no reason to adapt and grow stronger. Let's dive into what it is and how to apply it.</p>

      <h2>What Is Progressive Overload?</h2>
      <p>Simply put, progressive overload means gradually increasing the demands on your body over time. Your muscles need to be challenged beyond what they're used to in order to grow and strengthen.</p>

      <h2>Ways to Implement Progressive Overload</h2>
      <ul>
        <li><strong>Increase Weight:</strong> The most common method. Add small amounts of weight regularly.</li>
        <li><strong>Increase Reps:</strong> Do more repetitions with the same weight.</li>
        <li><strong>Increase Sets:</strong> Add more sets to your workout.</li>
        <li><strong>Improve Form:</strong> Better technique means better muscle engagement.</li>
        <li><strong>Decrease Rest:</strong> Shorter rest periods increase workout intensity.</li>
      </ul>

      <h2>How Fast Should You Progress?</h2>
      <p>Progress should be gradual. Aim for small increases—even 2.5% more weight or one extra rep is progress. Trying to progress too fast leads to injury and burnout.</p>

      <h2>Tracking Your Progress</h2>
      <p>Keep a workout log. Track weights, reps, and sets for each exercise. This data shows you where you're improving and where you might be stuck.</p>

      <h2>When Progress Stalls</h2>
      <p>Plateaus are normal. When they happen, try changing exercises, adjusting volume, or taking a deload week. Sometimes your body needs variety or rest to continue progressing.</p>
    `,
  },
  {
    slug: "recovery-underrated-part-training",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80",
    title: "Recovery: The Most Underrated Part of Training",
    excerpt: "Why rest days are just as important as training days.",
    author: "Thomas Farrell",
    date: "Nov 15, 2024",
    readTime: "6 min read",
    content: `
      <p>You don't get stronger during your workouts—you get stronger during recovery. Yet many people neglect this crucial component of fitness. Here's why recovery matters and how to optimize it.</p>

      <h2>The Science of Recovery</h2>
      <p>When you exercise, you create microscopic tears in your muscle fibers. During rest, your body repairs these tears, making the muscles stronger than before. Without adequate recovery, this repair process is incomplete.</p>

      <h2>Signs You Need More Recovery</h2>
      <ul>
        <li>Persistent fatigue and low energy</li>
        <li>Decreased performance</li>
        <li>Increased injuries or nagging pains</li>
        <li>Poor sleep quality</li>
        <li>Mood changes and irritability</li>
      </ul>

      <h2>Sleep: Your #1 Recovery Tool</h2>
      <p>Sleep is when the majority of muscle repair and growth hormone release occurs. Aim for 7-9 hours of quality sleep. Create a dark, cool sleep environment and maintain consistent sleep times.</p>

      <h2>Active Recovery</h2>
      <p>Rest doesn't mean doing nothing. Light activities like walking, swimming, or yoga can enhance blood flow and speed recovery. These activities help without adding stress to your system.</p>

      <h2>Nutrition for Recovery</h2>
      <p>Your post-workout meal matters. Consume protein and carbohydrates within 1-2 hours after training. Stay hydrated throughout the day, and don't neglect micronutrients from fruits and vegetables.</p>

      <h2>Stress Management</h2>
      <p>Mental stress affects physical recovery. High cortisol levels impair muscle repair. Incorporate stress-management practices like meditation, deep breathing, or time in nature.</p>
    `,
  },
  {
    slug: "building-strength-any-age",
    image: "https://images.unsplash.com/photo-1598971457999-ca4ef48a9a71?w=1200&q=80",
    title: "Building Strength at Any Age: It's Never Too Late",
    excerpt: "Age is just a number when it comes to getting stronger.",
    author: "Thomas Farrell",
    date: "Nov 12, 2024",
    readTime: "7 min read",
    content: `
      <p>Think you're too old to start strength training? Think again. Research consistently shows that people of all ages can build muscle and improve strength. Here's what you need to know.</p>

      <h2>The Benefits of Strength Training as We Age</h2>
      <p>After age 30, we naturally lose muscle mass—about 3-5% per decade. Strength training reverses this trend, helping maintain muscle, bone density, balance, and independence.</p>

      <h2>It's Never Too Late to Start</h2>
      <p>Studies have shown significant strength gains in people in their 70s, 80s, and even 90s who start resistance training. Your body retains its ability to adapt and grow stronger throughout life.</p>

      <h2>Getting Started Safely</h2>
      <p>If you're new to exercise or returning after a long break:</p>
      <ul>
        <li>Get medical clearance from your doctor</li>
        <li>Start with bodyweight exercises or light resistance</li>
        <li>Focus on proper form before adding weight</li>
        <li>Allow adequate recovery between sessions</li>
        <li>Consider working with a qualified trainer</li>
      </ul>

      <h2>Key Exercises for Older Adults</h2>
      <p>Focus on functional movements: squats, hinges, pushes, pulls, and carries. These exercises improve daily activities and reduce injury risk. Modify as needed to accommodate any limitations.</p>

      <h2>Consistency Over Intensity</h2>
      <p>Don't try to do too much too fast. Regular, moderate exercise is more effective (and safer) than sporadic intense sessions. Two to three strength sessions per week can produce significant results.</p>

      <h2>The Mental Benefits</h2>
      <p>Strength training isn't just about physical health. It improves cognitive function, reduces depression and anxiety, and boosts confidence. Many older adults report feeling better mentally than they have in years.</p>
    `,
  },
];

const BlogPost = () => {
  const { slug } = useParams();
  const post = allBlogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background">
        <h1 className="mb-4 text-2xl font-bold">Post Not Found</h1>
        <Link to="/blog">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>
      </div>
    );
  }

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
          <Link to="/blog">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </nav>
      </header>

      {/* Hero Image */}
      <div className="relative h-64 w-full overflow-hidden sm:h-80 lg:h-96">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <article className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-3xl">
          {/* Title & Meta */}
          <header className="mb-8">
            <h1 className="mb-6 text-3xl font-bold leading-tight lg:text-4xl xl:text-5xl">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          {/* Excerpt */}
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>

          {/* Blog Content */}
          <div
            className="blog-content space-y-6 text-foreground [&_h2]:mb-4 [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-bold [&_p]:leading-relaxed [&_ul]:ml-6 [&_ul]:list-disc [&_ul]:space-y-2 [&_li]:text-muted-foreground [&_a]:text-primary [&_a]:underline-offset-4 [&_a:hover]:underline [&_strong]:font-semibold"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA Section */}
          <div className="mt-12 rounded-2xl border border-border bg-card p-8 text-center shadow-[var(--shadow-elevated)]">
            <h3 className="mb-4 text-2xl font-bold">
              Ready to Start Your <span className="text-primary">Transformation</span>?
            </h3>
            <p className="mb-6 text-muted-foreground">
              Book a free consultation and let's create a personalized plan for your fitness goals.
            </p>
            <Link to="/#contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Book a Consultation
              </Button>
            </Link>
          </div>

          {/* Back to Blog */}
          <div className="mt-8 text-center">
            <Link to="/blog">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </article>

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

export default BlogPost;