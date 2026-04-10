export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">M.O.M. Kids StoryWorld</h2>
            <p className="text-background/70 max-w-sm leading-relaxed text-sm">
              A children's learning system built around story — developing literacy, STEM curiosity, and social-emotional growth for ages 3 to 12.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-background">Explore</h3>
            <ul className="space-y-2.5 text-background/70 text-sm">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#system" className="hover:text-primary transition-colors">Storyworld System</a></li>
              <li><a href="#books" className="hover:text-primary transition-colors">Books</a></li>
              <li><a href="#stage" className="hover:text-primary transition-colors">Stage Plays</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-background">Programs</h3>
            <ul className="space-y-2.5 text-background/70 text-sm">
              <li><a href="/educators" className="hover:text-primary transition-colors">For Schools</a></li>
              <li>
                <a href="/partners" className="hover:text-primary transition-colors inline-flex items-center gap-1.5">
                  Partner With Us
                  <span className="text-primary text-xs font-semibold">→</span>
                </a>
              </li>
              <li><a href="/educators#request" className="hover:text-primary transition-colors">Classroom Packs</a></li>
              <li><a href="/educators" className="hover:text-primary transition-colors">Educator Resources</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/15 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/40">
          <p>&copy; {currentYear} M.O.M. Kids StoryWorld. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="/educators" className="hover:text-primary/70 transition-colors">For Schools</a>
            <span>·</span>
            <a href="/partners" className="hover:text-primary/70 transition-colors">Partner With Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
