import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coachingDropdownOpen, setCoachingDropdownOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const coachingItems = [
    "Personal Training",
    "Online Training",
    "Nutrition Coaching",
    "NLP & Mindset",
    "NDIS Support",
    "Client Login",
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
            <span className="text-lg font-bold text-primary-foreground">DFC</span>
          </div>
          <span className="hidden text-sm font-semibold sm:inline-block">
            Discipline Fitness Coach
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </button>

          {/* Coaching Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCoachingDropdownOpen(true)}
            onMouseLeave={() => setCoachingDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary">
              Coaching
              <ChevronDown className="h-4 w-4" />
            </button>
            {coachingDropdownOpen && (
              <div className="absolute left-0 top-full mt-2 w-56 rounded-xl border border-border bg-popover p-2 shadow-[var(--shadow-elevated)]">
                {coachingItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection("coaching")}
                    className="w-full rounded-lg px-4 py-2 text-left text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/testimonials"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Testimonials
          </Link>
          <Link
            to="/blog"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Blog
          </Link>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact
          </button>
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <Button
            onClick={() => scrollToSection("contact")}
            variant="hero"
            size="sm"
            className="hidden md:inline-flex"
          >
            Book a Call
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-card p-4 md:hidden">
          <div className="flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-left text-sm font-medium transition-colors hover:text-primary"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("coaching")}
              className="text-left text-sm font-medium transition-colors hover:text-primary"
            >
              Coaching
            </button>
            <Link
              to="/testimonials"
              className="text-left text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              to="/blog"
              className="text-left text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left text-sm font-medium transition-colors hover:text-primary"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="hero"
              size="sm"
              className="w-full"
            >
              Book a Call
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
