import { User } from "lucide-react";

interface BlogCardProps {
  image: string;
  title: string;
  excerpt: string;
  author: string;
  authorAvatar?: string;
  date: string;
  featured?: boolean;
}

const BlogCard = ({ image, title, excerpt, author, authorAvatar, date, featured = false }: BlogCardProps) => {
  if (featured) {
    return (
      <div className="group grid gap-8 rounded-2xl border border-border bg-card p-6 shadow-lg transition-all hover:border-primary hover:shadow-[var(--shadow-glow)] lg:grid-cols-2">
        <div className="aspect-video overflow-hidden rounded-xl">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-center">
          <span className="mb-4 inline-block w-fit rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            Featured
          </span>
          <h2 className="mb-4 text-2xl font-bold leading-tight lg:text-3xl">{title}</h2>
          <p className="mb-6 line-clamp-3 text-muted-foreground">{excerpt}</p>
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
              {authorAvatar ? (
                <img src={authorAvatar} alt={author} className="h-full w-full rounded-full object-cover" />
              ) : (
                <User className="h-5 w-5 text-muted-foreground" />
              )}
            </div>
            <div>
              <p className="font-medium">{author}</p>
              <p className="text-sm text-muted-foreground">{date}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-all hover:border-primary hover:shadow-[var(--shadow-glow)]">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-3 line-clamp-2 text-lg font-bold transition-colors group-hover:text-primary">{title}</h3>
        <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">{excerpt}</p>
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary">
            {authorAvatar ? (
              <img src={authorAvatar} alt={author} className="h-full w-full rounded-full object-cover" />
            ) : (
              <User className="h-4 w-4 text-muted-foreground" />
            )}
          </div>
          <div className="flex flex-1 items-center justify-between">
            <p className="text-sm font-medium">{author}</p>
            <p className="text-xs text-muted-foreground">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
