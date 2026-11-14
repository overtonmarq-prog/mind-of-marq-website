import { useState } from "react";
import { useHashScroll } from "@/hooks/use-hash-scroll";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Eye, School } from "lucide-react";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import {
  catalog,
  series,
  coverSrc,
  formatPrice,
  isPurchasable,
  type CatalogEdition,
  type SeriesId,
} from "@/data/catalog";

type Filter = "all" | SeriesId;

const ageBands = ["Ages 3–5", "Ages 6–8"];

function BookListing({ book, index }: { book: CatalogEdition; index: number }) {
  const seriesName = series.find((s) => s.id === book.series)?.name;

  return (
    <motion.article
      id={book.id}
      data-testid="catalog-edition"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: Math.min(index, 3) * 0.06 }}
      className="scroll-mt-28 bg-white rounded-3xl border border-border/60 overflow-hidden flex flex-col sm:flex-row lg:flex-col"
      style={{ boxShadow: "var(--shadow-subtle)" }}
    >
      {/* Full cover, never cropped */}
      <div className="bg-secondary/40 p-5 sm:w-2/5 lg:w-full flex items-center justify-center">
        <img
          src={coverSrc(book.cover, 640)}
          srcSet={`${coverSrc(book.cover, 400)} 400w, ${coverSrc(book.cover, 640)} 640w, ${coverSrc(book.cover, 960)} 960w`}
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 35vw, 90vw"
          alt={book.coverAlt}
          loading={index < 2 ? "eager" : "lazy"}
          className="w-full h-auto max-h-[460px] object-contain rounded-lg shadow-md"
        />
      </div>

      <div className="p-6 flex flex-col flex-1 sm:w-3/5 lg:w-full">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">{book.ages}</span>
          <span className="text-muted-foreground/50">·</span>
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {seriesName}
          </span>
        </div>
        <h3 className="font-serif text-xl font-bold text-foreground leading-snug">{book.title}</h3>
        <p className="text-primary font-semibold text-sm mt-1 mb-3">{book.edition}</p>
        <p className="text-muted-foreground text-sm leading-relaxed mb-5">{book.description}</p>

        <ul className="space-y-3 mt-auto">
          {book.formats.map((f) => {
            const price = formatPrice(f.price);
            const live = isPurchasable(f);
            return (
              <li
                key={f.type}
                data-testid={`format-${f.type}`}
                className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/60 px-4 py-3"
              >
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-semibold text-foreground">{f.label}</span>
                  <span className="text-sm font-bold text-primary" data-testid="price">
                    {price ?? "Price coming soon"}
                  </span>
                </div>
                {live ? (
                  <a
                    href={f.checkoutUrl!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-primary hover:bg-primary/90 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
                  >
                    {f.buyLabel}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span
                    className="inline-flex items-center text-xs font-bold uppercase tracking-wider bg-secondary text-muted-foreground px-3 py-1.5 rounded-full"
                    aria-label={`${f.buyLabel}: coming soon`}
                  >
                    Coming Soon
                  </span>
                )}
              </li>
            );
          })}
        </ul>

        {book.sampleUrl && (
          <a
            href={book.sampleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:underline"
          >
            <Eye className="w-4 h-4" />
            Preview Sample Pages
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function Shop() {
  const [filter, setFilter] = useState<Filter>("all");

  useHashScroll();

  const visible = catalog.filter((b) => filter === "all" || b.series === filter);
  const filters: { id: Filter; label: string }[] = [
    { id: "all", label: "All Books" },
    ...series.map((s) => ({ id: s.id as Filter, label: s.name })),
  ];
  const activeSeries = series.find((s) => s.id === filter);

  return (
    <div className="min-h-screen bg-background font-sans">
      <NavBar />

      <section className="pt-32 pb-12 bg-secondary/40 border-b border-border/40">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl text-center">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">
            M.O.M. Kids StoryWorld
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Shop Books</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
            Coloring books and storybooks from The Mind of Marq, in print and PDF.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          {/* Bulk orders callout, above the catalog */}
          <a
            href="/educators#bulk-orders"
            data-testid="bulk-orders-callout"
            className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 rounded-2xl border-2 border-primary/20 bg-primary/5 px-5 py-4 mb-10 hover:bg-primary/10 transition-colors"
          >
            <School className="w-6 h-6 text-primary shrink-0" />
            <p className="text-foreground text-sm md:text-base flex-1">
              Ordering for a classroom, daycare, library, or event?{" "}
              <span className="font-semibold text-primary underline-offset-2 group-hover:underline">
                See Bulk Orders.
              </span>
            </p>
            <span className="text-xs text-muted-foreground">
              Schools &amp; Libraries → Bulk Orders &amp; Classroom Licenses
            </span>
          </a>

          {/* Series filter */}
          <div className="flex flex-wrap items-center gap-2 mb-8" role="tablist" aria-label="Book series">
            <BookOpen className="w-4 h-4 text-muted-foreground mr-1" />
            {filters.map((f) => (
              <button
                key={f.id}
                role="tab"
                aria-selected={filter === f.id}
                onClick={() => setFilter(f.id)}
                className={`text-sm font-semibold px-4 py-2 rounded-full border transition-colors ${
                  filter === f.id
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-foreground/75 border-border hover:border-primary/40"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          {activeSeries && <p className="text-muted-foreground mb-8 -mt-4">{activeSeries.blurb}</p>}

          {ageBands.map((band) => {
            const books = visible.filter((b) => b.ages === band);
            if (books.length === 0) return null;
            return (
              <div key={band} className="mb-14">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">{band}</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {books.map((b, i) => (
                    <BookListing key={b.id} book={b} index={i} />
                  ))}
                </div>
              </div>
            );
          })}

          <p className="text-xs text-muted-foreground text-center">
            Prices in USD. Purchases and PDF downloads are handled on our checkout platform.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
