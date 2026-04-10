import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function PartnerCallout() {
  return (
    <section className="py-16 bg-white border-t border-border/40">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-primary/20 bg-[hsl(177,38%,97%)] p-10 md:p-12 flex flex-col md:flex-row md:items-center gap-8"
        >
          <div className="flex-1">
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">
              Funded Partnerships
            </p>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3 leading-tight">
              Bring M.O.M. Kids StoryWorld to Your School or Organization
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              Educators, youth programs, nonprofits, and community partners can explore funded partnership opportunities to bring our books and StoryWorld learning system to children at little or no direct cost.
            </p>
          </div>

          <div className="flex flex-col gap-3 flex-shrink-0">
            <a
              href="/partners"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-7 py-3.5 rounded-full transition-colors text-sm whitespace-nowrap shadow-md"
            >
              Apply for a Funded Partnership
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/partners"
              className="inline-flex items-center justify-center gap-2 border border-primary/30 text-primary hover:bg-primary/5 font-semibold px-7 py-3.5 rounded-full transition-colors text-sm whitespace-nowrap"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
