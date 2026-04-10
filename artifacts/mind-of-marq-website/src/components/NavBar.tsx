import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Storyworld System", href: "#system" },
  { name: "Books", href: "#books" },
  { name: "Stage Plays", href: "#stage" },
  { name: "For Schools", href: "/educators" },
  { name: "Partner With Us", href: "/partners" },
  { name: "About", href: "#about" },
];

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="font-serif text-xl font-bold tracking-tight text-primary z-50 relative"
            onClick={closeMenu}
          >
            M.O.M. <span className="text-foreground font-normal">Kids</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  link.name === "Partner With Us"
                    ? "text-primary hover:text-primary/80"
                    : "text-foreground/75 hover:text-primary"
                }`}
              >
                {link.name}
              </a>
            ))}
            <Button asChild className="ml-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 text-sm">
              <a href="#contact">Contact</a>
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden z-50 relative p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed inset-0 bg-background/97 backdrop-blur-lg z-40 flex flex-col items-center justify-center transition-all duration-300 lg:hidden ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-7 text-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className={`text-2xl font-serif transition-colors ${
                link.name === "Partner With Us"
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {link.name}
            </a>
          ))}
          <Button asChild size="lg" className="mt-2 bg-primary hover:bg-primary/90 rounded-full px-8 text-lg">
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
