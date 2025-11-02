import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-lg transition-all hover:border-primary hover:shadow-[var(--shadow-glow)]">
      <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <h3 className="mb-3 text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
      
      {/* Hover Effect Border */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
    </div>
  );
};

export default ServiceCard;
