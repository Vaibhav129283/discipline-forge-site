import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
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
    { name: "Personal Training", href: "/#coaching" },
    { name: "Online Training", href: "/online-training" },
    { name: "Nutrition Coaching", href: "/nutrition-coaching" },
    { name: "NLP & Mindset", href: "/nlp-mindset" },
    { name: "NDIS Personal Trainer", href: "/ndis" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
            <span className="text-lg font-bold text-primary-foreground">DFC</span>
          </div>
          <span className="hidden text-sm font-semibold sm:inline-block">
            Discipline Fitness Coach
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>

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
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block w-full rounded-lg px-4 py-2 text-left text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/blog" className="text-sm font-medium transition-colors hover:text-primary">
            Blog
          </Link>
          <Link to="/testimonials" className="text-sm font-medium transition-colors hover:text-primary">
            Testimonials
          </Link>
          <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact
          </button>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <Button
            onClick={() => scrollToSection("contact")}
            variant="hero"
            size="sm"
            className="hidden gap-2 md:inline-flex"
          >
            <Phone className="h-4 w-4" />
            Book a Call
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-card p-4 lg:hidden">
          <div className="flex flex-col gap-3">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-left text-sm font-medium transition-colors hover:text-primary"
            >
              Home
            </Link>
            <div className="border-t border-border pt-2">
              <p className="mb-2 text-xs font-semibold uppercase text-muted-foreground">Coaching</p>
              {coachingItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <Link
              to="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="text-left text-sm font-medium transition-colors hover:text-primary"
            >
              Blog
            </Link>
            <Link
              to="/testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="text-left text-sm font-medium transition-colors hover:text-primary"
            >
              Testimonials
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-left text-sm font-medium transition-colors hover:text-primary"
            >
              About
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
              className="mt-2 w-full"
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
