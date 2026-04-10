import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function FeaturedProducts() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section id="books" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-14">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            The Books
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Stories built to stay with children
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* ── FEATURED: Percy ──────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7 rounded-3xl overflow-hidden bg-[hsl(220,40%,12%)] border border-border/30 flex flex-col sm:flex-row"
          >
            {/* Cover — show front-only from the full spread via object-position:right */}
            <div className="sm:w-52 lg:w-60 flex-shrink-0 flex items-stretch overflow-hidden">
              <div className="relative w-full aspect-[3/4] sm:aspect-auto sm:h-full overflow-hidden">
                <img
                  src={`${baseUrl}images/books/percy-first-new-years-resolution-cover.png`}
                  alt="Percy's First New Year's Resolution cover by Marq Overton"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-right"
                />
              </div>
            </div>

            <div className="flex-1 p-8 flex flex-col justify-between">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-wider bg-white/15 text-white px-3 py-1 rounded-full mb-4">
                  Ages 6–8 · Featured
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mb-3 leading-tight">
                  Percy's First New Year's Resolution
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-5">
                  A warm, cinematic story about a young penguin navigating a big promise — and what it really means to follow through. Perfect for classroom read-alouds and SEL discussions around goals and perseverance.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["SEL · Goals", "STEM Connections", "Classroom Ready"].map((tag) => (
                    <span key={tag} className="text-xs bg-white/10 border border-white/15 px-3 py-1 rounded-full text-white/70">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-white/90 font-semibold text-sm hover:text-white group"
              >
                Request sample materials
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* ── SECONDARY COLUMN ─────────────────────────────────────────── */}
          <div className="lg:col-span-5 flex flex-col gap-5">

            {/* Caterpillar Hybrid */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="rounded-3xl overflow-hidden border border-border/50 bg-[hsl(177,20%,96%)] flex gap-5 p-5 items-center"
            >
              <div className="flex-shrink-0 w-20 h-28 rounded-xl overflow-hidden bg-white border border-border/30 shadow-sm">
                <img
                  src={`${baseUrl}images/books/brief-hybrid-cover.png`}
                  alt="The Brief but Spectacular Lives of Caterpillars, 6-8 Read-Aloud Hybrid cover by Marq Overton"
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Ages 6–8</span>
                <h3 className="font-serif text-base font-bold text-foreground mt-1 mb-0.5 leading-snug">
                  The Brief but Spectacular Lives of Caterpillars
                </h3>
                <p className="text-primary/70 text-xs font-semibold mb-2">6–8 Read-Aloud Hybrid</p>
                <p className="text-muted-foreground text-xs leading-relaxed mb-3">
                  Transformation, courage, and the science of becoming. STEM + SEL for science and life skills classrooms.
                </p>
                <a href="#contact" className="inline-flex items-center gap-1.5 text-primary font-semibold text-xs hover:underline">
                  Learn more <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>

            {/* Spanish Edition */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="rounded-3xl overflow-hidden border border-border/50 bg-[hsl(40,30%,97%)] flex gap-5 p-5 items-center"
            >
              <div className="flex-shrink-0 w-20 h-28 rounded-xl overflow-hidden bg-white border border-border/30 shadow-sm">
                <img
                  src={`${baseUrl}images/books/brief-spanish-cover.png`}
                  alt="Las breves pero espectaculares vidas de las orugas, Spanish edition cover by Marq Overton"
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700">Spanish Edition</span>
                <h3 className="font-serif text-base font-bold text-foreground mt-1 mb-0.5 leading-snug">
                  Las breves pero espectaculares vidas de las orugas
                </h3>
                <p className="text-amber-700/70 text-xs font-semibold mb-2">Spanish Edition</p>
                <p className="text-muted-foreground text-xs leading-relaxed mb-3">
                  The full story in Spanish — bright, accessible, and part of the same M.O.M. Kids StoryWorld ecosystem.
                </p>
                <a href="#contact" className="inline-flex items-center gap-1.5 text-primary font-semibold text-xs hover:underline">
                  Learn more <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>

            {/* Stage Plays CTA */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.26 }}
              className="rounded-3xl border-2 border-primary/20 bg-primary/5 p-6 flex flex-col justify-between gap-3"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Stage Plays</span>
                <h3 className="font-serif text-base font-bold text-foreground mt-1 mb-2">
                  Stage Play Adaptations
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Book-to-stage adaptations for school productions, enrichment programs, and classroom performance. Scripts, production notes, and educator guides included.
                </p>
              </div>
              <a href="#stage" className="inline-flex items-center gap-1.5 text-primary font-semibold text-xs hover:underline">
                Explore stage plays <ArrowRight className="w-3 h-3" />
              </a>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
