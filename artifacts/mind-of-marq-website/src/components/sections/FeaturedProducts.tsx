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
          {/* Featured — large */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7 rounded-3xl overflow-hidden bg-[hsl(40,28%,94%)] border border-border/50 flex flex-col md:flex-row"
          >
            <div className="md:w-48 lg:w-56 flex-shrink-0 bg-[hsl(177,55%,18%)] flex items-center justify-center p-8">
              <img
                src={`${baseUrl}images/book-percy.png`}
                alt="Percy's First New Year's Resolution book cover"
                className="w-full max-w-[140px] object-contain rounded-xl shadow-lg"
              />
            </div>
            <div className="flex-1 p-8 flex flex-col justify-between">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary px-3 py-1 rounded-full mb-3">
                  Ages 6–8 · Featured
                </span>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3 leading-tight">
                  Percy's First New Year's Resolution
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  A warm, funny story about a young boy navigating a big promise — and what it really means to follow through. Perfect for classroom read-alouds and SEL discussions around goals and perseverance.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["SEL · Goals", "STEM Connections", "Classroom Ready"].map((tag) => (
                    <span key={tag} className="text-xs bg-white border border-border px-3 py-1 rounded-full text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline group"
              >
                Request sample materials
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Two secondary products */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Caterpillar */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="rounded-3xl overflow-hidden border border-border/50 bg-[hsl(177,20%,96%)] flex gap-5 p-6 items-start"
            >
              <div className="flex-shrink-0 w-20 h-28 bg-[hsl(177,55%,18%)] rounded-xl flex items-center justify-center overflow-hidden">
                <img
                  src={`${baseUrl}images/book-caterpillar.png`}
                  alt="The Brief but Spectacular Lives of Caterpillars book cover"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Ages 6–8</span>
                <h3 className="font-serif text-lg font-bold text-foreground mt-1 mb-2 leading-snug">
                  The Brief but Spectacular Lives of Caterpillars
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-3">
                  A story about change, transformation, and the courage to become. Strong STEM + SEL integration for science and life skills classrooms.
                </p>
                <a href="#contact" className="inline-flex items-center gap-1.5 text-primary font-semibold text-xs hover:underline">
                  Learn more <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>

            {/* Stage Plays */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="rounded-3xl border-2 border-primary/20 bg-primary/5 p-6 flex flex-col justify-between gap-4"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Stage Plays</span>
                <h3 className="font-serif text-lg font-bold text-foreground mt-1 mb-2">
                  Stage Play Adaptations
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Book-to-stage adaptations designed for school productions, enrichment programs, and classroom performance activities. Scripts, production notes, and educator guides included.
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
