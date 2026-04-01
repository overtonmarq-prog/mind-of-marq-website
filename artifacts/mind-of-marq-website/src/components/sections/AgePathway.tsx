import { motion } from "framer-motion";

const tiers = [
  {
    step: "01",
    ages: "Ages 3–5",
    name: "Discovery Tier",
    tagline: "Color, explore, and recognize early concepts through story-driven learning.",
    description:
      "Introduces early STEM and SEL concepts through visual storytelling, guided interaction, and age-appropriate exploration. Children build pattern recognition, emotional vocabulary, and story instincts — the foundation every later tier builds on.",
    skills: ["Visual interaction", "Story exposure", "Pattern recognition", "Emotional recognition", "Guided curiosity"],
    color: "bg-amber-50 border-amber-200",
    accent: "text-amber-700",
    stepColor: "bg-amber-100 text-amber-700",
    badge: "bg-amber-100 text-amber-800",
    icon: "🌱",
    offset: "lg:mt-0",
  },
  {
    step: "02",
    ages: "Ages 6–8",
    name: "Read-Aloud Tier",
    tagline: "Listen, ask, connect — active engagement with story as a learning tool.",
    description:
      "Children step into sustained narrative, discussing ideas, making predictions, and connecting stories to their own lives. STEM curiosity and SEL growth emerge naturally from books designed to invite conversation, not just comprehension.",
    skills: ["Literacy fluency", "STEM curiosity", "SEL growth", "Classroom discussion", "Comprehension depth"],
    color: "bg-teal-50 border-teal-200",
    accent: "text-primary",
    stepColor: "bg-primary/10 text-primary",
    badge: "bg-primary/10 text-primary",
    icon: "📖",
    offset: "lg:mt-12",
    featured: true,
  },
  {
    step: "03",
    ages: "Ages 9–12",
    name: "Deeper Learning Tier",
    tagline: "Reflect, perform, and apply — turning story into identity and expression.",
    description:
      "Longer narratives, stage adaptations, and discussion guides invite students to wrestle with real ideas — identity, resilience, justice, growth. Learning deepens through performance, writing, and application to their own world.",
    skills: ["Critical thinking", "Performance & stage", "Identity exploration", "Reflection & writing", "Real-world application"],
    color: "bg-slate-50 border-slate-200",
    accent: "text-slate-700",
    stepColor: "bg-slate-100 text-slate-600",
    badge: "bg-slate-100 text-slate-700",
    icon: "🎭",
    offset: "lg:mt-24",
  },
];

export function AgePathway() {
  return (
    <section id="ages" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            The Learning Path
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Three tiers. One connected journey.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Each tier builds on the one before it — developing skills, deepening engagement, and preparing children for what comes next. The system is designed to grow with every child.
          </p>
        </div>

        {/* Desktop: staggered vertical offset. Mobile: stacked. */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.14 }}
              className={`${tier.offset} rounded-3xl border-2 ${tier.color} p-8 relative ${tier.featured ? "ring-2 ring-primary/25 shadow-md" : ""}`}
            >
              {/* Step number */}
              <div className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4 ${tier.stepColor}`}>
                <span>{tier.step}</span>
              </div>

              <div className="text-3xl mb-3">{tier.icon}</div>

              <span className={`inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3 ${tier.badge}`}>
                {tier.ages}
              </span>

              <h3 className={`font-serif text-2xl font-bold mb-2 ${tier.accent}`}>
                {tier.name}
              </h3>

              <p className="text-foreground font-medium text-sm mb-4 leading-snug">
                {tier.tagline}
              </p>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {tier.description}
              </p>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                  Children develop
                </p>
                <ul className="space-y-1.5">
                  {tier.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-sm text-foreground/80">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${tier.accent.replace("text-", "bg-")}`} />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progression connector — desktop only */}
        <div className="hidden lg:flex items-center justify-center mt-10 gap-4 text-muted-foreground/40">
          <span className="text-xs uppercase tracking-widest">Discovery</span>
          <div className="flex-1 max-w-32 h-px bg-muted-foreground/20" />
          <span className="text-xs uppercase tracking-widest">builds into</span>
          <div className="flex-1 max-w-32 h-px bg-muted-foreground/20" />
          <span className="text-xs uppercase tracking-widest">Read-Aloud</span>
          <div className="flex-1 max-w-32 h-px bg-muted-foreground/20" />
          <span className="text-xs uppercase tracking-widest">builds into</span>
          <div className="flex-1 max-w-32 h-px bg-muted-foreground/20" />
          <span className="text-xs uppercase tracking-widest">Deeper Learning</span>
        </div>
      </div>
    </section>
  );
}
