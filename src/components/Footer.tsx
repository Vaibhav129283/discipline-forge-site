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
          <div className="flex items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <span className="text-xl font-bold text-primary-foreground">DFC</span>
            </div>
            <span className="text-lg font-semibold">Discipline Fitness Coach</span>
          </div>

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

          {/* Copyright */}
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} Discipline Fitness Coach. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
