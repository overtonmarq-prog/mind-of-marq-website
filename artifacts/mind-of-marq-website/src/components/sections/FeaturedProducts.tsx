import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { catalog, coverSrc } from "@/data/catalog";

const featured = catalog.find((b) => b.id === "caterpillars-read-aloud-coloring-adventure")!;
const percyColorLearn = catalog.find((b) => b.id === "percy-and-friends-color-and-learn")!;

export function FeaturedProducts() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section id="books" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
              Featured Titles
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Stories built to stay with children
            </h2>
          </div>
          <a
            href="/shop"
            className="inline-flex items-center gap-2 self-start sm:self-auto bg-primary hover:bg-primary/90 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors"
          >
            Shop Books <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* ── FEATURED: Caterpillars ───────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7 rounded-3xl overflow-hidden bg-[hsl(150,30%,12%)] border border-border/30 flex flex-col"
          >
            <a
              href={`/shop#${featured.id}`}
              className="w-full bg-[hsl(150,30%,9%)] flex items-center justify-center p-4 sm:p-6"
              aria-label={`${featured.title}: ${featured.edition} in the shop`}
            >
              <img
                src={coverSrc(featured.cover, 640)}
                alt={featured.coverAlt}
                loading="lazy"
                className="w-auto max-w-full rounded-xl object-contain shadow-lg"
                style={{ maxHeight: "380px" }}
              />
            </a>

            <div className="p-8 flex flex-col justify-between flex-1">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-wider bg-white/15 text-white px-3 py-1 rounded-full mb-4">
                  {featured.ages} · Featured
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mb-1 leading-tight">
                  {featured.title}
                </h3>
                <p className="text-white/70 text-sm font-semibold mb-3">{featured.edition}</p>
                <p className="text-white/60 text-sm leading-relaxed mb-5">
                  Transformation, courage, and the science of becoming. A read-aloud story with pages to color, made for STEM + SEL in science and life skills classrooms.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["STEM · Life Cycles", "SEL · Courage", "Classroom Ready"].map((tag) => (
                    <span key={tag} className="text-xs bg-white/10 border border-white/15 px-3 py-1 rounded-full text-white/70">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={`/shop#${featured.id}`}
                className="inline-flex items-center gap-2 text-white/90 font-semibold text-sm hover:text-white group"
              >
                View in the shop
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* ── SECONDARY COLUMN ─────────────────────────────────────────── */}
          <div className="lg:col-span-5 flex flex-col gap-5">

            {/* Percy's First New Year's Resolution */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="rounded-3xl overflow-hidden border border-border/50 bg-[hsl(220,30%,96%)] flex gap-5 p-5 items-center"
            >
              <div className="flex-shrink-0 w-20 h-[120px] rounded-xl overflow-hidden bg-white border border-border/30 shadow-sm">
                <img
                  src={coverSrc("images/books/percy-first-resolution-cover.png", 240)}
                  alt="Percy's First New Year's Resolution cover by Marq Overton: Percy in goggles and a blue scarf on a snowy cliff"
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Ages 6–8</span>
                <h3 className="font-serif text-base font-bold text-foreground mt-1 mb-2 leading-snug">
                  Percy's First New Year's Resolution
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-3">
                  A young penguin navigates a big promise and what it means to follow through. SEL around goals and perseverance.
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  <a href="#contact" className="inline-flex items-center gap-1.5 text-primary font-semibold text-xs hover:underline">
                    Request sample materials <ArrowRight className="w-3 h-3" />
                  </a>
                  <a href={`/shop#${percyColorLearn.id}`} className="inline-flex items-center gap-1.5 text-primary font-semibold text-xs hover:underline">
                    Percy Color &amp; Learn <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
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
