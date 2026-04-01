import { motion } from "framer-motion";

const tiers = [
  {
    ages: "Ages 3–5",
    name: "Discovery Tier",
    color: "bg-amber-50 border-amber-200",
    accent: "text-amber-700",
    badge: "bg-amber-100 text-amber-800",
    format: "Picture books & read-aloud stories",
    focus: "Language, wonder, and emotional recognition",
    product: "Board books, illustrated picture books",
    offset: "lg:mt-0",
    size: "lg:col-span-1",
    icon: "🌱",
  },
  {
    ages: "Ages 6–8",
    name: "Read-Aloud Tier",
    color: "bg-teal-50 border-teal-200",
    accent: "text-primary",
    badge: "bg-primary/10 text-primary",
    format: "Early chapter books & classroom read-alouds",
    focus: "STEM curiosity, SEL growth, literacy fluency",
    product: "Percy's First New Year's Resolution series",
    offset: "lg:mt-10",
    size: "lg:col-span-1",
    icon: "📖",
    featured: true,
  },
  {
    ages: "Ages 9–12",
    name: "Deeper Learning Tier",
    color: "bg-slate-50 border-slate-200",
    accent: "text-slate-700",
    badge: "bg-slate-100 text-slate-700",
    format: "Chapter books, stage plays & discussion guides",
    focus: "Critical thinking, performance, and identity",
    product: "Confessions of a Teenaged Martial Artist",
    offset: "lg:mt-20",
    size: "lg:col-span-1",
    icon: "🎭",
  },
];

export function AgePathway() {
  return (
    <section id="ages" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Age Pathways
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            A learning path that grows with every child
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Each tier is built around what children at that age actually need — not just what they can read, but what they're ready to feel and do.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className={`${tier.offset} rounded-3xl border-2 ${tier.color} p-8 relative overflow-hidden ${tier.featured ? "ring-2 ring-primary/30" : ""}`}
            >
              {tier.featured && (
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-bold tracking-wider uppercase bg-primary text-primary-foreground px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-4xl mb-4">{tier.icon}</div>
              <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3 ${tier.badge}`}>
                {tier.ages}
              </span>
              <h3 className={`font-serif text-2xl font-bold mb-5 ${tier.accent}`}>
                {tier.name}
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Format</p>
                  <p className="text-foreground text-sm font-medium">{tier.format}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Educational Focus</p>
                  <p className="text-foreground text-sm font-medium">{tier.focus}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Example Product</p>
                  <p className="text-foreground text-sm font-medium italic">{tier.product}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
