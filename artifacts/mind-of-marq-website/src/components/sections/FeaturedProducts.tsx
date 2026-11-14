import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * Featured book layout (from PR #2): The Brief but Spectacular Lives of
 * Caterpillars leads as the featured title, followed by Percy and Confessions.
 * Every cover uses its natural aspect ratio (h-auto + object-contain) so the
 * artwork is shown in full and never cropped.
 */
export function FeaturedProducts() {
  const baseUrl = import.meta.env.BASE_URL;

  const supportingBooks = [
    {
      title: "Percy's First Resolution",
      subtitle: undefined as string | undefined,
      ageLabel: "Ages 6–8",
      cover: "images/books/percy-first-resolution-approved.webp",
      alt: "Percy's First Resolution cover by Marq Overton",
      description:
        "Percy the penguin makes a bold New Year's resolution. He wants to fly. With help from his friends, Percy discovers the importance of setting goals, perseverance, and believing in himself.",
      tags: ["SEL · Goals", "STEM Connections", "Classroom Ready"],
      linkLabel: "Request sample materials",
    },
    {
      title: "Confessions of a Teenaged Martial Artist",
      subtitle: "The Training I Never Expected",
      ageLabel: "Grades 6–10",
      cover: "images/book-martial-arts.png",
      alt: "Confessions of a Teenaged Martial Artist cover by Marq Overton",
      description:
        "After his father dies, Xavier's dream of martial arts training is put on hold — and he lands in the last place he expected: a ballet studio. A coming-of-age story about grief, identity, and discovering that the training he thought he lost was training him all along.",
      tags: ["Coming of Age", "Athletics & Arts", "SEL · Identity"],
      linkLabel: "Learn more",
    },
  ];

  return (
    <div className="mb-20">
      {/* ── FEATURED: Caterpillars ─────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="rounded-3xl border border-primary/20 bg-secondary/40 p-6 sm:p-8 lg:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center mb-8"
      >
        <div className="md:col-span-5 flex justify-center">
          <img
            src={`${baseUrl}images/books/brief-hybrid-cover.png`}
            alt="The Brief but Spectacular Lives of Caterpillars, 6–8 Read-Aloud Hybrid cover by Marq Overton"
            width={1824}
            height={2336}
            loading="lazy"
            className="w-full max-w-[22rem] h-auto object-contain rounded-2xl shadow-xl border border-border/30 bg-white"
          />
        </div>

        <div className="md:col-span-7">
          <span className="inline-block text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary px-3 py-1 rounded-full mb-4">
            Ages 6–8 · Featured Title
          </span>
          <h3 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-2 leading-tight">
            The Brief but Spectacular Lives of Caterpillars
          </h3>
          <p className="text-primary font-semibold text-sm mb-5">6–8 Read-Aloud Hybrid</p>
          <p className="text-muted-foreground text-base leading-relaxed mb-6">
            Transformation, courage, and the science of becoming. STEM + SEL for science and life skills
            classrooms.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {["STEM · Life Science", "SEL · Courage", "Read-Aloud Ready"].map((tag) => (
              <span
                key={tag}
                className="text-xs bg-white border border-primary/20 px-3 py-1 rounded-full text-foreground/70"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-sm px-5 py-3 rounded-full hover:bg-primary/90 transition-colors group"
          >
            Learn more
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </motion.div>

      {/* ── SUPPORTING TITLES — full, uncropped covers ─────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {supportingBooks.map((book, i) => (
          <motion.div
            key={book.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 + i * 0.08 }}
            className="rounded-3xl border border-border/50 bg-white p-6 sm:p-8 flex flex-col"
            style={{ boxShadow: "var(--shadow-subtle)" }}
          >
            <div className="flex justify-center mb-6">
              <img
                src={`${baseUrl}${book.cover}`}
                alt={book.alt}
                width={1024}
                height={1536}
                loading="lazy"
                className="w-full max-w-[18rem] h-auto object-contain rounded-xl shadow-md border border-border/30"
              />
            </div>
            <div className="flex-1 flex flex-col">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">{book.ageLabel}</span>
              <h3
                className={`font-serif text-2xl font-bold text-foreground mt-1 leading-snug ${book.subtitle ? "mb-1" : "mb-3"}`}
              >
                {book.title}
              </h3>
              {book.subtitle && (
                <p className="font-serif italic text-lg text-primary mb-3">{book.subtitle}</p>
              )}
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{book.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {book.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-primary/5 border border-primary/15 px-3 py-1 rounded-full text-foreground/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="#contact"
                className="mt-auto inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:underline group"
              >
                {book.linkLabel}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
