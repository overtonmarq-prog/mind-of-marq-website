export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">M.O.M. Kids StoryWorld</h2>
            <p className="text-background/70 max-w-sm">
              An independent storytelling brand developing original intellectual property across books, education, stage, and film.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-background">Divisions</h3>
            <ul className="space-y-2 text-background/70 text-sm">
              <li>M.O.M. Kids StoryWorld</li>
              <li>Stories, Stage, and Screen</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-background">Navigation</h3>
            <ul className="grid grid-cols-2 gap-2 text-background/70 text-sm">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#books" className="hover:text-primary transition-colors">Books</a></li>
              <li><a href="#educators" className="hover:text-primary transition-colors">Educators</a></li>
              <li><a href="#libraries" className="hover:text-primary transition-colors">Libraries</a></li>
              <li><a href="#partnerships" className="hover:text-primary transition-colors">Partnerships</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
          <p>&copy; {currentYear} M.O.M. Kids StoryWorld. All rights reserved.</p>
          <div className="flex gap-4">
            <span>M.O.M. Kids StoryWorld</span>
            <span>|</span>
            <span>M.O.M. Kids StoryWorld</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
