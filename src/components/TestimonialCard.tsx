interface TestimonialCardProps {
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  beforeWeight: string;
  afterWeight: string;
}

const TestimonialCard = ({
  title,
  description,
  beforeImage,
  afterImage,
  beforeWeight,
  afterWeight,
}: TestimonialCardProps) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-lg transition-all hover:border-primary hover:shadow-[var(--shadow-glow)]">
      <h3 className="mb-3 text-xl font-bold">{title}</h3>
      <p className="mb-6 text-muted-foreground">{description}</p>
      
      <div className="grid grid-cols-2 gap-4">
        {/* Before */}
        <div className="relative">
          <div className="aspect-[3/4] overflow-hidden rounded-xl">
            <img
              src={beforeImage}
              alt="Before transformation"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-secondary px-4 py-1.5 text-sm font-bold shadow-lg">
            {beforeWeight}
          </div>
          <span className="absolute left-3 top-3 rounded-full bg-background/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide backdrop-blur-sm">
            Before
          </span>
        </div>

        {/* After */}
        <div className="relative">
          <div className="aspect-[3/4] overflow-hidden rounded-xl">
            <img
              src={afterImage}
              alt="After transformation"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1.5 text-sm font-bold text-primary-foreground shadow-lg">
            {afterWeight}
          </div>
          <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
            After
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
