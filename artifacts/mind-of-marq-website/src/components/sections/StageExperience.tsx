import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  { label: "Story to stage", detail: "Original scripts adapted directly from the books, retaining the characters, language, and emotional core." },
  { label: "Student participation", detail: "Parts for every child — speaking roles, movement, narration, and ensemble parts designed for real classrooms." },
  { label: "Classroom enrichment", detail: "Teacher guides, discussion questions, and pre-show activity sheets included with every production package." },
  { label: "Reading through performance", detail: "Children internalize language and comprehension by living inside the story, not just listening to it." },
];

export function StageExperience() {
  return (
    <section id="stage" className="py-24 bg-[hsl(40,20%,97%)]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
              Stage Experience
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6 leading-tight">
              When the story becomes the lesson
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
              Stage play adaptations transform our books into full performance experiences — where students don't just read about courage, curiosity, and growth, they embody it.
            </p>

            <div className="space-y-5">
              {highlights.map(({ label, detail }) => (
                <div key={label} className="flex gap-4">
                  <CheckCircle2 className="text-primary w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-0.5">{label}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button
                size="lg"
                className="rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground"
                asChild
              >
                <a href="#contact">Request Stage Play Info</a>
              </Button>
            </div>
          </motion.div>

          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden bg-[hsl(177,55%,18%)] p-10 min-h-[400px] flex flex-col justify-between">
              {/* Decorative theatrical mask */}
              <div className="absolute top-0 right-0 opacity-10">
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="90" stroke="white" strokeWidth="2" />
                  <ellipse cx="75" cy="90" rx="15" ry="20" stroke="white" strokeWidth="2" />
                  <ellipse cx="125" cy="90" rx="15" ry="20" stroke="white" strokeWidth="2" />
                  <path d="M 70 130 Q 100 150 130 130" stroke="white" strokeWidth="2" fill="none" />
                </svg>
              </div>

              <div>
                <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-6">Production Format</p>
                <div className="space-y-3">
                  {["Full-length school play script", "Classroom reader's theater edition", "Solo performance monologues", "Ensemble participatory script"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/80 flex-shrink-0" />
                      <p className="text-white/80 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Perfect for</p>
                <div className="flex flex-wrap gap-2">
                  {["School assemblies", "Enrichment programs", "After-school clubs", "Library events"].map((tag) => (
                    <span key={tag} className="text-xs bg-white/10 text-white px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
