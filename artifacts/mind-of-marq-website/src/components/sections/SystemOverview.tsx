import { BookOpen, Lightbulb, Mic2, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: BookOpen,
    word: "Read",
    copy: "Build literacy through story — stories children actually want to return to, again and again.",
  },
  {
    icon: Lightbulb,
    word: "Imagine",
    copy: "Develop curiosity and creative thinking through characters and worlds that feel real.",
  },
  {
    icon: Mic2,
    word: "Perform",
    copy: "Bring stories to life through stage adaptations, participation, and classroom production.",
  },
  {
    icon: Sparkles,
    word: "Apply",
    copy: "Turn learning into expression and growth — STEM connections, SEL reflection, and beyond.",
  },
];

export function SystemOverview() {
  return (
    <section id="system" className="bg-[hsl(177,55%,22%)] py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <p className="text-primary-foreground/60 text-sm font-semibold tracking-widest uppercase mb-3">
            The System
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight">
            One system. Four dimensions of learning.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {pillars.map(({ icon: Icon, word, copy }) => (
            <div
              key={word}
              className="flex flex-col items-center text-center px-8 py-8 group"
            >
              <div className="mb-5 w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                <Icon className="text-white w-6 h-6" />
              </div>
              <h3 className="text-white font-serif text-2xl font-bold mb-2">{word}</h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
