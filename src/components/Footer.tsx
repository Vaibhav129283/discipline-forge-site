import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, url: "https://instagram.com/disciplinefitnesscoach", label: "Instagram" },
    { icon: Facebook, url: "https://facebook.com", label: "Facebook" },
    { icon: Linkedin, url: "https://linkedin.com", label: "LinkedIn" },
    { icon: Youtube, url: "https://youtube.com", label: "YouTube" },
  ];

  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <span className="text-xl font-bold text-primary-foreground">DFC</span>
            </div>
            <span className="text-lg font-semibold">Discipline Fitness Coach</span>
          </Link>

          {/* Social Icons */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <Link to="/privacy-policy" className="hover:text-primary">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-primary">Terms & Conditions</Link>
            <Link to="/about" className="hover:text-primary">About</Link>
            <Link to="/ndis" className="hover:text-primary">NDIS</Link>
          </div>

          {/* Legal */}
          <div className="text-center text-xs text-muted-foreground">
            <p>ABN: 79 669 022 634 | Browns Plains, Queensland</p>
            <p className="mt-1">© {currentYear} Discipline Fitness Coach. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
