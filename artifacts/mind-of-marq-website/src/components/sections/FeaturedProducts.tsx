import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function FeaturedProducts() {
  const baseUrl = import.meta.env.BASE_URL;

  const supportingBooks = [
    {
      title: "Percy's First Resolution",
      ageLabel: "Ages 6–8",
      cover: "images/books/percy-first-resolution-approved.webp",
      alt: "Percy's First Resolution cover by Marq Overton",
      description:
        "Percy the penguin makes a bold New Year's resolution. He wants to fly. With help from his friends, Percy discovers the importance of setting goals, perseverance, and believing in himself.",
      tags: ["SEL · Goals", "STEM Connections", "Classroom Ready"],
      href: "#contact",
      linkLabel: "Request sample materials",
    },
    {
      title: "Confessions of a Teenaged Martial Artist",
      ageLabel: "Grades 6–10",
      cover: "images/book-martial-arts.png",
      alt: "Confessions of a Teenaged Martial Artist cover by Marq Overton",
      description:
        "After his father dies, Xavier's dream of martial arts training is put on hold — and he lands in the last place he expected: a ballet studio. A coming-of-age story about grief, identity, and discovering that the training he thought he lost was training him all along.",
      tags: ["Coming of Age", "Athletics & Arts", "SEL · Identity"],
      href: "#contact",
      linkLabel: "Learn more",
    },
  ];

  return (
    <section id="books" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-14">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            The Books
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Stories built to stay with children
          </h2>
        </div>

        {/* ── FEATURED: Caterpillars ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="rounded-3xl border border-primary/20 bg-[hsl(177,20%,96%)] p-6 sm:p-8 lg:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center mb-8"
        >
          {/* Cover — width-constrained with natural height so the artwork is never cropped */}
          <div className="md:col-span-5 flex justify-center">
            <img
              src={`${baseUrl}images/books/brief-hybrid-cover.png`}
              alt="The Brief but Spectacular Lives of Caterpillars, 6-8 Read-Aloud Hybrid cover by Marq Overton"
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
              Transformation, courage, and the science of becoming. STEM + SEL for science and life skills classrooms.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["STEM · Life Science", "SEL · Courage", "Read-Aloud Ready"].map((tag) => (
                <span key={tag} className="text-xs bg-white border border-primary/20 px-3 py-1 rounded-full text-foreground/70">
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

        {/* ── SUPPORTING TITLES ──────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {supportingBooks.map((book, i) => (
            <motion.div
              key={book.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.08 }}
              className="rounded-3xl border border-border/50 bg-white p-6 sm:p-7 flex flex-col sm:flex-row gap-6 items-center sm:items-start"
            >
              <div className="flex-shrink-0 w-40 sm:w-36 lg:w-44">
                <img
                  src={`${baseUrl}${book.cover}`}
                  alt={book.alt}
                  loading="lazy"
                  className="w-full h-auto object-contain rounded-xl shadow-md border border-border/30"
                />
              </div>
              <div className="flex-1 min-w-0 flex flex-col h-full">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">{book.ageLabel}</span>
                <h3 className="font-serif text-xl font-bold text-foreground mt-1 mb-3 leading-snug">
                  {book.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {book.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {book.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-primary/5 border border-primary/15 px-3 py-1 rounded-full text-foreground/70">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={book.href}
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
    </section>
  );
}
