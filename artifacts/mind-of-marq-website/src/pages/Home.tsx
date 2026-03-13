import { useState } from "react";
import { motion } from "framer-motion";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { BookCard } from "@/components/BookCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { BookOpen, GraduationCap, Clapperboard, CheckCircle2, ChevronRight } from "lucide-react";

const THEATER_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 10s3-3 3-8" /><path d="M22 10s-3-3-3-8" /><path d="M10 2c0 4.4-3.6 8-8 8" />
    <path d="M14 2c0 4.4 3.6 8 8 8" /><path d="M2 10s2 2 2 5" /><path d="M22 10s-2 2-2 5" />
    <path d="M8 15h8" /><path d="M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
    <path d="M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
  </svg>
);

export default function Home() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const encode = (data: Record<string, string>) =>
    Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formState }),
    })
      .then(() => {
        setSubmitted(true);
        setSubmitting(false);
      })
      .catch(() => setSubmitting(false));
  };

  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      <main>
        {/* ─── HOME / HERO ──────────────────────────────────────────── */}
        <section id="home" className="relative min-h-[92vh] flex flex-col pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
              alt="Abstract elegant background"
              className="w-full h-full object-cover opacity-35 mix-blend-multiply"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/75 to-background" />
          </div>

          {/* Main hero content — grows to fill available height, buttons stay in flow */}
          <div className="container mx-auto px-4 md:px-6 relative z-10 flex-1 flex items-center justify-center py-16">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="flex flex-wrap justify-center gap-2 mb-8"
              >
                {["Books", "Education", "Stage", "Film"].map((pill) => (
                  <span
                    key={pill}
                    className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide border border-primary/20"
                  >
                    {pill}
                  </span>
                ))}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground mb-5 leading-[1.05]"
              >
                The Mind of Marq
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl lg:text-3xl text-primary font-serif italic mb-8"
              >
                Home of Mind of Marq Publishing
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto text-balance leading-relaxed"
              >
                A connected home for books, storyworlds, educational experiences, and original creative
                properties. Explore Mind of Marq Publishing and discover M.O.M. Kids Storyworld, where
                STEM + SEL learning grows through story.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Button
                  size="lg"
                  className="rounded-full px-8 h-13 text-base bg-primary hover:bg-primary/90 w-full sm:w-auto"
                  asChild
                >
                  <a href="#storyworld">Enter Storyworld</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 h-13 text-base w-full sm:w-auto"
                  asChild
                >
                  <a href="#publishing">Explore Publishing</a>
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="rounded-full px-8 h-13 text-base hover:bg-muted w-full sm:w-auto"
                  asChild
                >
                  <a href="#contact">Contact</a>
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Brand preview cards — in normal flow below the hero content, no overlap */}
          <div className="relative z-10 w-full">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-10 pt-4">
                {[
                  { label: "Website", name: "The Mind of Marq" },
                  { label: "Publishing Imprint", name: "Mind of Marq Publishing" },
                  { label: "Featured Division", name: "M.O.M. Kids Storyworld", sub: "STEM + SEL Learning Through Story" },
                ].map((card, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                    className="bg-card/80 backdrop-blur-sm border border-border/60 rounded-2xl p-5 text-left"
                    style={{ boxShadow: "var(--shadow-subtle)" }}
                  >
                    <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">{card.label}</p>
                    <p className="font-serif font-bold text-foreground">{card.name}</p>
                    {card.sub && <p className="text-xs text-muted-foreground mt-1">{card.sub}</p>}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── PUBLISHING ──────────────────────────────────────────────── */}
        <section id="publishing" className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading
              title="One brand, multiple worlds"
              subtitle="Mind of Marq Publishing is designed to house children's books, educational platforms, story-driven intellectual property, and future media expansions under one clear parent brand."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
              {[
                {
                  icon: <BookOpen className="w-10 h-10 text-primary mb-6" />,
                  title: "Mind of Marq Publishing",
                  desc: "The publishing imprint for books, story properties, educational platforms, and future long-form creative works.",
                },
                {
                  icon: <GraduationCap className="w-10 h-10 text-primary mb-6" />,
                  title: "M.O.M. Kids Storyworld",
                  desc: "A STEM + SEL learning platform built around character-driven stories, educator value, and library-friendly programming.",
                },
                {
                  icon: <span className="block w-10 h-10 text-primary mb-6">{THEATER_ICON}</span>,
                  title: "Stories, Stage, and Screen",
                  desc: "A growing slate of original properties for books, storyworld expansion, and future stage, film, and television development.",
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-background rounded-2xl p-8 border border-border transition-all duration-300 hover:-translate-y-1"
                  style={{ boxShadow: "var(--shadow-subtle)" }}
                >
                  {card.icon}
                  <h3 className="text-xl font-bold font-serif mb-4">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── STORYWORLD OVERVIEW ─────────────────────────────────────── */}
        <section className="py-24 bg-foreground text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight"
            >
              The Mind of Marq Storyworld
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              Stories that begin with books and grow into learning experiences, classrooms, and future stage and screen adventures.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3 mb-16"
            >
              {["Books", "Learning", "Stage & Screen"].map((label) => (
                <span
                  key={label}
                  className="px-6 py-2.5 rounded-full border border-white/30 text-white/90 text-sm font-semibold tracking-wide hover:bg-white/10 transition-colors cursor-default"
                >
                  {label}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex flex-wrap justify-center items-center gap-0"
            >
              {["Books", "Classroom", "Theater", "Animation", "Film"].map((step, i, arr) => (
                <div key={step} className="flex items-center">
                  <div className="flex flex-col items-center px-4 py-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
                      {`0${i + 1}`}
                    </span>
                    <span className="font-serif font-bold text-white text-lg md:text-xl">
                      {step}
                    </span>
                  </div>
                  {i < arr.length - 1 && (
                    <span className="text-primary text-2xl font-light mx-1 select-none">→</span>
                  )}
                </div>
              ))}
            </motion.div>
            <p className="text-xs uppercase tracking-widest text-white/40 mt-4">Expansion Path</p>
          </div>
        </section>

        {/* ─── STORYWORLD ──────────────────────────────────────────────── */}
        <section id="storyworld" className="py-24 bg-secondary/50 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">
                    Platform Overview
                  </span>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-5 leading-tight">
                    M.O.M. Kids Storyworld
                  </h2>
                  <h3 className="text-2xl text-foreground/80 font-serif italic mb-6">
                    STEM + SEL Learning Through Story
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    An educational storytelling system that combines science exploration, emotional
                    intelligence, and character growth through memorable stories built for multiple
                    learning tiers.
                  </p>

                  <div className="space-y-4">
                    <h4 className="font-bold text-foreground text-lg">Why it works:</h4>
                    <ul className="space-y-3">
                      {[
                        "Story-first learning that supports STEM curiosity and SEL growth.",
                        "Built for teachers, librarians, families, and students.",
                        "Expandable into downloadable resources and interactive classroom tools.",
                        "Designed as a long-term platform, not a one-book landing page.",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                          <span className="text-foreground/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>

              <div className="space-y-5">
                {[
                  {
                    tier: "Early Discovery",
                    age: "Ages 3–5",
                    desc: "Coloring-based introductions that build motor skills, creativity, and early character familiarity.",
                  },
                  {
                    tier: "Guided Reading",
                    age: "Ages 6–8",
                    desc: "Teacher or parent guided stories that connect literacy, science curiosity, and emotional growth.",
                  },
                  {
                    tier: "Independent Reflection",
                    age: "Ages 9–12",
                    desc: "Stronger reading experiences that support reflection, identity, and deeper classroom conversation.",
                  },
                ].map((tier, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="bg-white p-6 md:p-8 rounded-2xl border-l-4 border-primary"
                    style={{ boxShadow: "var(--shadow-subtle)" }}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <h4 className="text-xl font-bold font-serif">{tier.tier}</h4>
                      <span className="px-3 py-1 bg-secondary text-foreground text-xs font-bold rounded-full">
                        {tier.age}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{tier.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── BOOKS ───────────────────────────────────────────────────── */}
        <section id="books" className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading
              title="Featured Titles"
              subtitle="Stories designed to spark curiosity, build resilience, and grow with readers."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              <BookCard
                title="Percy's First Resolution"
                subtitle="Ages 6–8 · Guided Reading"
                description="A young penguin learns that goals take patience, practice, and persistence."
                stem="Problem solving, Observation, Experimentation"
                sel="Goal setting, Resilience, Persistence"
                imageSrc={`${import.meta.env.BASE_URL}images/book-percy.png`}
                delay={0.1}
              />
              <BookCard
                title="The Brief but Spectacular Lives of Caterpillars"
                subtitle="Ages 6–11 · Read Aloud to Independent Reading"
                description="A story of curiosity, identity, transformation, and the wonder of nature."
                stem="Life cycles, Biology, Metamorphosis"
                sel="Curiosity, Identity, Friendship"
                imageSrc={`${import.meta.env.BASE_URL}images/book-caterpillar.png`}
                delay={0.2}
              />
              <BookCard
                title="Confessions of a Teenaged Martial Artist"
                subtitle="Ages 9–12 · Bridge Book"
                description="A coming-of-age story about discipline, identity, and discovering strength in unexpected places. When Xavier Williams is placed in a ballet class he never wanted, he slowly discovers that the training is making him stronger, faster, and more balanced."
                stem="Biomechanics, Movement science, Physical training"
                sel="Confidence, Emotional awareness, Self acceptance"
                imageSrc={`${import.meta.env.BASE_URL}images/book-martial-arts.png`}
                delay={0.3}
              />
            </div>

            {/* Catalog structure */}
            <div
              className="bg-card rounded-3xl p-8 md:p-12 border border-border/50"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            >
              <h3 className="text-2xl font-serif font-bold mb-8 text-center">Complete Catalog Structure</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    label: "Early Discovery",
                    age: "Ages 3–5",
                    titles: ["Percy Series Coloring Book", "The Caterpillar Adventure Coloring Book"],
                  },
                  {
                    label: "Guided Reading",
                    age: "Ages 6–8",
                    titles: [
                      "Percy's First Resolution",
                      "The Brief but Spectacular Lives of Caterpillars Part 1",
                      "The Brief but Spectacular Lives of Caterpillars Part 2",
                    ],
                  },
                  {
                    label: "Independent Reflection",
                    age: "Ages 9–12",
                    titles: [
                      "Percy's First New Year's Resolution",
                      "The Brief but Spectacular Lives of Caterpillars",
                      "Confessions of a Teenaged Martial Artist",
                    ],
                  },
                ].map((cat, i) => (
                  <div key={i} className="space-y-4">
                    <div className="pb-4 border-b border-border">
                      <h4 className="font-bold text-lg text-primary">{cat.label}</h4>
                      <p className="text-sm text-muted-foreground">{cat.age}</p>
                    </div>
                    <ul className="space-y-3">
                      {cat.titles.map((title) => (
                        <li key={title} className="flex gap-2 text-foreground/80">
                          <ChevronRight className="w-5 h-5 text-primary/50 shrink-0 mt-0.5" />
                          {title}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── EDUCATORS + LIBRARIES ───────────────────────────────────── */}
        <section id="educators" className="py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Educators */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 md:p-12 rounded-3xl relative overflow-hidden"
                style={{ boxShadow: "var(--shadow-subtle)" }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none" />
                <GraduationCap className="w-12 h-12 text-primary mb-6 relative" />
                <h2 className="text-3xl font-serif font-bold mb-4 relative">Teach through story</h2>
                <p className="text-lg text-muted-foreground mb-8 relative leading-relaxed">
                  Connect books to STEM themes, SEL discussion prompts, guided reflection, and future
                  classroom extensions.
                </p>
                <ul className="space-y-3 mb-10 relative">
                  {[
                    "Discussion-ready story themes",
                    "STEM and SEL alignment potential",
                    "Reflection prompts and classroom extensions",
                    "Age-band-friendly catalog design",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 bg-secondary/40 px-4 py-3 rounded-xl"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                      <span className="font-medium text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-border pt-6 relative">
                  <h4 className="font-bold text-xl mb-3 font-serif">Built for classroom value</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    M.O.M. Kids Storyworld titles are designed to help students engage with science ideas,
                    emotional development, and character-based learning in ways that feel natural,
                    memorable, and discussion-ready.
                  </p>
                </div>
              </motion.div>

              {/* Libraries */}
              <motion.div
                id="libraries"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="bg-foreground text-white p-8 md:p-12 rounded-3xl relative overflow-hidden"
                style={{ boxShadow: "var(--shadow-subtle)" }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full pointer-events-none" />
                <BookOpen className="w-12 h-12 text-accent mb-6 relative" />
                <h2 className="text-3xl font-serif font-bold mb-4 relative">Program around discovery</h2>
                <p className="text-lg text-white/70 mb-8 relative leading-relaxed">
                  Build family literacy programs, science events, and youth discussions around curiosity,
                  growth, identity, and transformation.
                </p>
                <ul className="space-y-3 mb-10 relative">
                  {[
                    "Family literacy programming potential",
                    "Science and nature themed events",
                    "Discussion-based youth engagement",
                    "Multi-age discovery pathways",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 bg-white/8 px-4 py-3 rounded-xl">
                      <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                      <span className="font-medium text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-white/20 pt-6 relative">
                  <h4 className="font-bold text-xl mb-3 font-serif text-accent">
                    Stories that support programming
                  </h4>
                  <p className="text-white/70 leading-relaxed">
                    These books are designed to live beyond the shelf. They support discovery-based events,
                    themed reading sessions, family participation, and meaningful youth engagement.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── PARTNERSHIPS ────────────────────────────────────────────── */}
        <section id="partnerships" className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading title="Building the Mind of Marq Storyworld" />

            <div className="max-w-4xl mx-auto mb-20 text-center space-y-6">
              <p className="text-xl text-foreground font-medium leading-relaxed">
                The Mind of Marq is an independent storytelling studio developing original intellectual
                property across books, education, stage, and film.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission is simple. Create stories that inspire courage, curiosity, and transformation
                in young audiences while delivering powerful entertainment for families worldwide.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Mind of Marq ecosystem is designed to grow through strategic partnerships with
                educators, creative studios, and forward-thinking investors who believe storytelling can
                shape the next generation.
              </p>

              <div className="flex flex-wrap justify-center gap-3 pt-10 border-t border-border">
                {[
                  "Schools and Educational Institutions",
                  "Youth Theater Organizations",
                  "Animation Studios and Filmmakers",
                  "Streaming Platforms and Production Companies",
                  "Brand and Educational Media Partners",
                  "Mission-aligned Investors",
                ].map((partner) => (
                  <span
                    key={partner}
                    className="px-5 py-2 bg-secondary text-foreground font-medium rounded-full text-sm border border-border/50"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>

            {/* Stage Division */}
            <div className="mb-24">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-primary/10 rounded-2xl text-primary">{THEATER_ICON}</div>
                <div>
                  <h3 className="text-3xl font-serif font-bold">Student Productions, Spring and Winter</h3>
                  <p className="text-muted-foreground mt-1">Educational Stage Adaptations</p>
                </div>
              </div>

              <div className="bg-background rounded-3xl p-8 md:p-12 border border-border">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                  <div className="lg:col-span-1">
                    <p className="text-lg mb-5 text-foreground/80 leading-relaxed">
                      Mind of Marq Kids titles are being developed for educational stage adaptations designed
                      for school theater programs.
                    </p>
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      These productions give students the opportunity to perform meaningful stories while
                      reinforcing themes of resilience, discipline, growth, and emotional awareness.
                    </p>
                    <div className="space-y-3 mb-6">
                      <p className="text-xs font-bold uppercase tracking-wider text-primary">Seasonal</p>
                      <div className="flex gap-3 flex-wrap">
                        {["Spring theater programs", "Winter holiday theater seasons"].map((s) => (
                          <span
                            key={s}
                            className="px-3 py-1.5 bg-secondary rounded-full text-sm font-medium"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-primary uppercase text-xs tracking-wider">Benefits</h4>
                      <ul className="space-y-2 text-sm font-medium">
                        {[
                          "Combine literacy with performance",
                          "Reinforce STEM and Social Emotional Learning",
                          "Build student confidence through storytelling",
                          "Engage families through community theater",
                        ].map((b) => (
                          <li key={b} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="lg:col-span-2 space-y-5">
                    <h4 className="font-bold text-xl font-serif mb-4">Adaptations under development</h4>
                    {[
                      {
                        title: "Percy's First New Year's Resolution",
                        desc: "A story about perseverance, goals, and the courage to try again.",
                      },
                      {
                        title: "The Brief but Spectacular Lives of Caterpillars",
                        desc: "A whimsical exploration of transformation, friendship, and the mystery of growing up.",
                      },
                      {
                        title: "Confessions of a Teenaged Martial Artist",
                        desc: "A coming-of-age story about discipline, identity, and the unexpected power of ballet in martial arts training.",
                      },
                    ].map((play, i) => (
                      <div
                        key={i}
                        className="flex gap-4 p-5 bg-card border border-border rounded-xl"
                        style={{ boxShadow: "var(--shadow-subtle)" }}
                      >
                        <div className="bg-secondary w-10 h-10 rounded-full flex items-center justify-center font-bold font-serif text-primary shrink-0">
                          {i + 1}
                        </div>
                        <div>
                          <h5 className="font-bold text-lg mb-1 font-serif">{play.title}</h5>
                          <p className="text-muted-foreground text-sm leading-relaxed">{play.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Film Division */}
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                  <Clapperboard size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-serif font-bold">Mind of Marq Kids Film Division</h3>
                  <p className="text-muted-foreground mt-1">Animation &amp; Feature Development</p>
                </div>
              </div>

              <div className="mb-10">
                <p className="text-lg max-w-3xl text-foreground/80 mb-6 leading-relaxed">
                  The Mind of Marq Kids Film Division is exploring partnerships to develop animated films and
                  visual storytelling projects based on the Mind of Marq Kids library. These projects combine
                  heart, humor, and meaningful life lessons with cinematic storytelling designed for global
                  family audiences.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    "Animation studios",
                    "Independent film producers",
                    "Streaming platforms",
                    "Educational media companies",
                    "Co-production partners",
                    "Investors in family entertainment",
                  ].map((p) => (
                    <span
                      key={p}
                      className="px-4 py-1.5 bg-secondary text-foreground text-sm font-medium rounded-full border border-border/40"
                    >
                      {p}
                    </span>
                  ))}
                </div>
                <div className="inline-block px-6 py-3 bg-primary/8 border border-primary/20 rounded-xl">
                  <span className="font-bold text-primary mr-2">Goal:</span>
                  <span className="text-foreground/80 font-medium">
                    Create films that entertain children while reinforcing courage, curiosity, and emotional
                    growth.
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Percy's First New Year's Resolution",
                    format: "Animated Family Feature",
                    desc: "A determined young penguin makes a bold New Year's resolution and discovers that growth requires patience, courage, and persistence.",
                    tone: "Heartfelt, humorous, inspirational",
                    themes: "Perseverance, goal setting, resilience",
                    audience: "Family audiences and children ages 6–11.",
                  },
                  {
                    title: "The Brief but Spectacular Lives of Caterpillars",
                    format: "Animated Fantasy Adventure",
                    desc: "Young caterpillars discover the mystery of transformation while navigating friendship, curiosity, and the unknown journey ahead.",
                    tone: "Whimsical, magical, philosophical",
                    themes: "Transformation, identity, wonder",
                    audience: "Family audiences and children ages 6–12.",
                  },
                  {
                    title: "Confessions of a Teenaged Martial Artist",
                    format: "Coming of Age Feature",
                    desc: "Xavier Williams dreams of becoming a martial artist, but through a twist of circumstance he is placed in a ballet class he never wanted. What begins as resistance slowly becomes a revelation as he discovers that ballet is making him stronger, faster, and more balanced.",
                    tone: "Inspiring, humorous, emotional",
                    themes: "Identity, discipline, self discovery",
                    audience: "Young audiences and family viewers.",
                  },
                ].map((film, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="bg-card p-6 rounded-2xl border border-border flex flex-col"
                    style={{ boxShadow: "var(--shadow-subtle)" }}
                  >
                    <span className="text-xs font-bold uppercase tracking-wider text-accent-foreground bg-accent px-3 py-1 rounded-full w-fit mb-4">
                      {film.format}
                    </span>
                    <h4 className="text-xl font-serif font-bold mb-3">{film.title}</h4>
                    <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">{film.desc}</p>
                    <div className="space-y-2 pt-4 border-t border-border mt-auto text-xs">
                      <p>
                        <strong className="text-foreground">Tone:</strong>{" "}
                        <span className="text-muted-foreground">{film.tone}</span>
                      </p>
                      <p>
                        <strong className="text-foreground">Themes:</strong>{" "}
                        <span className="text-muted-foreground">{film.themes}</span>
                      </p>
                      <p>
                        <strong className="text-foreground">Audience:</strong>{" "}
                        <span className="text-muted-foreground">{film.audience}</span>
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Strategic opportunities quadrant */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/50 border border-border/50 rounded-3xl overflow-hidden">
              {[
                {
                  title: "Education",
                  items: [
                    "School curriculum partnerships",
                    "Classroom storytelling programs",
                    "SEL and STEM educational initiatives",
                  ],
                },
                {
                  title: "Youth Theater",
                  items: [
                    "Licensed student productions",
                    "Youth theater festivals",
                    "School arts partnerships",
                  ],
                },
                {
                  title: "Film and Media",
                  items: [
                    "Animation development",
                    "Feature film production",
                    "Streaming partnerships",
                  ],
                },
                {
                  title: "Investment",
                  items: [
                    "Franchise development",
                    "Educational media expansion",
                    "Global distribution partnerships",
                  ],
                },
              ].map((quad, i) => (
                <div key={i} className="bg-background p-8">
                  <h4 className="font-bold text-lg font-serif mb-4 text-primary">{quad.title}</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {quad.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── ABOUT ───────────────────────────────────────────────────── */}
        <section id="about" className="py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2 lg:order-1"
              >
                <div
                  className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/20"
                  style={{ boxShadow: "var(--shadow-elegant)" }}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}images/about-library.png`}
                    alt="Elegant publishing library interior"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <div className="order-1 lg:order-2 lg:pl-8">
                <SectionHeading title="About The Mind of Marq" alignment="left" />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <p className="text-xl text-foreground font-medium leading-relaxed mb-6">
                    The Mind of Marq is an independent storytelling brand built around the belief that great
                    stories can inspire courage, curiosity, and transformation in young audiences.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Through Mind of Marq Publishing, M.O.M. Kids Storyworld, and a growing slate of original
                    creative properties, we are building a connected storytelling universe designed to
                    educate, entertain, and endure.
                  </p>

                  <div
                    className="p-6 bg-white rounded-2xl border border-border italic text-foreground font-serif text-lg leading-relaxed"
                    style={{ boxShadow: "var(--shadow-subtle)" }}
                  >
                    "Mind of Marq Kids is an educational storytelling brand expanding from books into
                    classrooms, stage productions, and film development."
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CONTACT ─────────────────────────────────────────────────── */}
        <section id="contact" className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <div
              className="grid grid-cols-1 lg:grid-cols-5 rounded-3xl overflow-hidden border border-border"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            >
              {/* Left panel */}
              <div className="lg:col-span-2 bg-primary text-primary-foreground p-10 md:p-12 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />

                <div className="relative">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold mb-5">Get in Touch</h2>
                  <p className="text-primary-foreground/85 text-lg leading-relaxed">
                    Whether you are an educator, librarian, theater director, filmmaker, publisher, or
                    investor — we welcome meaningful conversations about storytelling, education, and
                    partnership.
                  </p>
                </div>

                <div className="relative mt-12 space-y-5">
                  <div className="flex items-center gap-4 opacity-85">
                    <BookOpen size={22} />
                    <span className="font-medium">Mind of Marq Publishing</span>
                  </div>
                  <div className="flex items-center gap-4 opacity-85">
                    <GraduationCap size={22} />
                    <span className="font-medium">M.O.M. Kids Storyworld</span>
                  </div>
                </div>
              </div>

              {/* Form panel */}
              <div className="lg:col-span-3 p-10 md:p-12 bg-white">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center h-full text-center py-12">
                    <CheckCircle2 className="w-16 h-16 text-primary mb-5" />
                    <h3 className="text-2xl font-serif font-bold mb-3">Message Sent!</h3>
                    <p className="text-muted-foreground max-w-sm">
                      Thank you for reaching out. We'll be in touch soon.
                    </p>
                  </div>
                ) : (
                  <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <input type="hidden" name="bot-field" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-semibold">
                          Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          required
                          placeholder="Your name"
                          value={formState.name}
                          onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                          className="bg-background border-border h-11"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-semibold">
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="your@email.com"
                          value={formState.email}
                          onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                          className="bg-background border-border h-11"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-sm font-semibold">
                        Subject
                      </Label>
                      {/* Native select — ensures name/value are included in FormData for Netlify */}
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formState.subject}
                        onChange={(e) => setFormState((s) => ({ ...s, subject: e.target.value }))}
                        className="w-full h-11 rounded-md border border-border bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0"
                      >
                        <option value="" disabled>
                          Select an area of interest
                        </option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Educator">Educator</option>
                        <option value="Library">Library</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Media &amp; Film">Media &amp; Film</option>
                        <option value="Investment">Investment</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-semibold">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        placeholder="How can we build the storyworld together?"
                        value={formState.message}
                        onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                        className="min-h-[140px] bg-background border-border resize-y"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={submitting}
                      className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl h-12 text-base font-semibold"
                    >
                      {submitting ? "Sending…" : "Send Message"}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
