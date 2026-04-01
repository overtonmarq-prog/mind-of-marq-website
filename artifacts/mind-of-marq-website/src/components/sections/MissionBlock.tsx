import { motion } from "framer-motion";

export function MissionBlock() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-6">
            Our Mission
          </p>

          <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-8">
            "Great children's stories don't just teach — they make children want to become."
          </blockquote>

          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            We built this system because we believe that when a child is genuinely moved by a story — laughing, wondering, feeling seen — everything else opens up. The STEM question, the SEL moment, the vocabulary, the courage to perform.
          </p>

          <p className="text-muted-foreground text-lg leading-relaxed">
            Every book, every stage play, every classroom resource is designed to do one thing well: put a story in a child's hands that they don't want to put down, and a learning experience around it that their teacher doesn't have to force.
          </p>

          <div className="mt-12 pt-12 border-t border-border flex flex-col sm:flex-row items-center justify-center gap-8">
            {[
              { value: "Ages 3–12", label: "Learning System" },
              { value: "STEM + SEL", label: "Dual Focus" },
              { value: "Books → Stage", label: "Story Pathway" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="font-serif text-3xl font-bold text-primary mb-1">{value}</p>
                <p className="text-muted-foreground text-sm uppercase tracking-wider">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
