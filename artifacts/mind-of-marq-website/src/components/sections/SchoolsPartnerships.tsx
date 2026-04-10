import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FlaskConical, Users2, BookMarked, Theater } from "lucide-react";

const pillars = [
  {
    icon: FlaskConical,
    title: "STEM + SEL Alignment",
    copy: "Every title connects to both science thinking and social-emotional learning goals — ready for ESSA-aligned program reporting.",
  },
  {
    icon: Users2,
    title: "Age-Banded Pathways",
    copy: "Structured tiers from Discovery (3–5) through Deeper Learning (9–12) make selecting the right product simple for any grade level.",
  },
  {
    icon: BookMarked,
    title: "Literacy & Communication",
    copy: "Books designed for read-aloud success, paired with vocabulary guides and comprehension scaffolds for diverse learners.",
  },
  {
    icon: Theater,
    title: "Story & Stage Integration",
    copy: "Stage adaptations extend classroom reading into performance, giving every student a visible, active role in the learning experience.",
  },
];

export function SchoolsPartnerships() {
  return (
    <section id="schools" className="py-24 bg-[hsl(220,25%,14%)]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <p className="text-primary/80 text-sm font-semibold tracking-widest uppercase mb-3">
            For Schools
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 leading-tight">
            Built for Classrooms, Programs,<br className="hidden md:block" /> and School Partnerships
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            A complete educational system — not just a collection of books.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {pillars.map(({ icon: Icon, title, copy }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-5 p-7 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/8 transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Icon className="text-primary w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">{title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{copy}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="rounded-full px-10 h-14 text-base bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
                asChild
              >
                <a href="/educators">Bring M.O.M. Kids to Your School</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-10 h-14 text-base border-white/20 text-white hover:bg-white/10"
                asChild
              >
                <a href="/partners">Explore Funded Partnerships</a>
              </Button>
            </div>
            <p className="text-white/30 text-sm mt-4">
              Classroom packs · Educator guides · Grant-funded access
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
