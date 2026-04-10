import { useState } from "react";
import { motion } from "framer-motion";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  BookOpen, CheckCircle2, ChevronRight, GraduationCap,
  Library, School, Users, Sprout, Heart, Microscope, Star
} from "lucide-react";

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");

type FormState = {
  name: string; school: string; role: string;
  email: string; interest: string; message: string;
};

const initialForm: FormState = {
  name: "", school: "", role: "",
  email: "", interest: "Sample materials", message: "",
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55 },
};

export default function Educators() {
  const [formState, setFormState] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "educator-request", ...formState }),
    })
      .then(() => setSubmitted(true))
      .catch(() => setError(true));
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <NavBar />

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-24 bg-secondary/40 border-b border-border/40 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <motion.div {...fadeUp} className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-5 block">
              M.O.M. Kids StoryWorld
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight mb-6">
              M.O.M. Kids<br />
              <span className="text-primary">StoryWorld</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed mb-4 max-w-2xl mx-auto">
              STEM + SEL learning through story — for classrooms, libraries, and young readers ages 6–8.
            </p>
            <p className="text-base text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
              Story-driven books that build curiosity, resilience, and emotional intelligence. Designed to work in real classrooms and library programs without extra training or planning.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="#books"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-full transition-colors shadow-md text-base"
              >
                <BookOpen className="w-5 h-5" />
                Explore the Books
              </a>
              <a
                href="#request"
                className="inline-flex items-center gap-2 border border-border bg-white hover:bg-secondary/50 text-foreground font-semibold px-8 py-4 rounded-full transition-colors text-base"
              >
                Get Classroom Materials
              </a>
            </div>
          </motion.div>

          {/* Three quick points */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {[
              { icon: <BookOpen className="w-5 h-5 text-primary" />, label: "Story-first", desc: "Every book leads with story. Learning follows naturally." },
              { icon: <Microscope className="w-5 h-5 text-primary" />, label: "STEM + SEL", desc: "Science curiosity and emotional growth woven into every read." },
              { icon: <GraduationCap className="w-5 h-5 text-primary" />, label: "Classroom-ready", desc: "No prep required. Works for read-aloud, discussion, and centers." },
            ].map((pt) => (
              <motion.div
                key={pt.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-5 border border-border/60 text-center"
                style={{ boxShadow: "var(--shadow-subtle)" }}
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  {pt.icon}
                </div>
                <p className="font-bold text-foreground text-sm mb-1">{pt.label}</p>
                <p className="text-muted-foreground text-sm leading-snug">{pt.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED BOOKS ─────────────────────────────────────────────────── */}
      <section id="books" className="py-24 bg-white border-b border-border/40">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">The Library</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-5 leading-tight">
              Stories That Open the World
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
              Read-aloud titles built for ages 6–8, including a Spanish edition. Each one invites curiosity, sparks conversation, and supports real learning without feeling like a lesson.
            </p>
          </motion.div>

          {/* Percy */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 mb-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="flex justify-center"
            >
              <div className="relative w-full">
                <div className="absolute -inset-3 rounded-3xl bg-primary/8 -z-10" />
                <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "0 20px 50px -10px rgba(25,122,110,0.22), 0 8px 24px -4px rgba(0,0,0,0.12)" }}>
                  <img
                    src="/images/books/percy-first-new-years-resolution-cover.png"
                    alt="Percy's First New Year's Resolution cover by Marq Overton"
                    loading="lazy"
                    className="w-full h-auto block"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <span className="text-xs font-bold text-primary/60 uppercase tracking-widest mb-3 block">Ages 6–8 · Read-Aloud</span>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 leading-snug">Percy's First New Year's Resolution</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Percy wants to do something important this year — but figuring out what that means turns into the most surprising lesson of all. A warm, funny, and quietly thoughtful story about setting goals, staying curious, and what it really means to follow through.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-7">
                <div className="bg-secondary/40 rounded-xl p-4 border border-border/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Microscope className="w-4 h-4 text-primary" />
                    <span className="text-xs font-bold uppercase tracking-wide text-foreground">STEM Focus</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Goal-setting, observation, and scientific thinking through a child's lens</p>
                </div>
                <div className="bg-secondary/40 rounded-xl p-4 border border-border/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Heart className="w-4 h-4 text-primary" />
                    <span className="text-xs font-bold uppercase tracking-wide text-foreground">SEL Focus</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Persistence, self-reflection, and the courage to start something new</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-7">
                {["K–2 Read-Aloud", "Discussion Ready", "Spanish Available"].map((b) => (
                  <span key={b} className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full">{b}</span>
                ))}
              </div>
              <a href="#request" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-7 py-3.5 rounded-full transition-colors shadow-md">
                Request Sample Materials
              </a>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-border/40 mb-20" />

          {/* Caterpillar */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <span className="text-xs font-bold text-primary/60 uppercase tracking-widest mb-3 block">Ages 6–8 · Read-Aloud · Series</span>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 leading-snug">The Brief but Spectacular Lives of Caterpillars</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Young caterpillars discover the mystery of transformation while navigating friendship, curiosity, and the unknown journey ahead. A rich entry point for conversations about change, growth, and trusting the process — even when you can't see where it leads.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-7">
                <div className="bg-secondary/40 rounded-xl p-4 border border-border/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Sprout className="w-4 h-4 text-primary" />
                    <span className="text-xs font-bold uppercase tracking-wide text-foreground">STEM Focus</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Life cycles, nature, and the science of transformation</p>
                </div>
                <div className="bg-secondary/40 rounded-xl p-4 border border-border/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Heart className="w-4 h-4 text-primary" />
                    <span className="text-xs font-bold uppercase tracking-wide text-foreground">SEL Focus</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Embracing change, friendship, and trusting an uncertain process</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-7">
                {["Part 1 + Part 2", "Read-Aloud Hybrid", "Series Format"].map((b) => (
                  <span key={b} className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full">{b}</span>
                ))}
              </div>
              <a href="#request" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-7 py-3.5 rounded-full transition-colors shadow-md">
                Request Sample Materials
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="flex justify-center order-first lg:order-last"
            >
              <div className="relative max-w-[300px] w-full">
                <div className="absolute -inset-3 rounded-3xl bg-primary/8 -z-10" />
                <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "0 20px 50px -10px rgba(25,122,110,0.22), 0 8px 24px -4px rgba(0,0,0,0.12)" }}>
                  <img src="/images/books/brief-hybrid-cover.png" alt="The Brief but Spectacular Lives of Caterpillars, 6-8 Read-Aloud Hybrid cover by Marq Overton" loading="lazy" className="w-full h-auto object-contain block" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHY IT WORKS ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-secondary/30 border-b border-border/40">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">The Approach</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-5 leading-tight">
              Story first. Learning follows.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
              M.O.M. Kids StoryWorld books are built around one idea: when children are genuinely engaged in a story, everything else — curiosity, empathy, conversation — opens up naturally.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: <Star className="w-6 h-6 text-primary" />, title: "Supports STEM + SEL naturally", desc: "Students experience science thinking and emotional growth through story — not worksheets. The learning feels like reading, not instruction." },
              { icon: <Users className="w-6 h-6 text-primary" />, title: "Works for all readers", desc: "Strong for reluctant readers, advanced readers, and everyone in between. The stories hold attention while meeting students where they are." },
              { icon: <CheckCircle2 className="w-6 h-6 text-primary" />, title: "Easy entry for school partners", desc: "Simple classroom packs, clear pricing, and free sample materials make it easy for teachers, librarians, and coordinators to say yes." },
              { icon: <Sprout className="w-6 h-6 text-primary" />, title: "Built to grow with your program", desc: "Start with two read-aloud titles. Expand into Spanish editions, coloring books, classroom guides, and the full storyworld over time." },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-8 border border-border/60"
                style={{ boxShadow: "var(--shadow-subtle)" }}
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  {card.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-white border-b border-border/40">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Who We Serve</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-5 leading-tight">
              Built for every place children read
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
              M.O.M. Kids StoryWorld books work across public schools, charter schools, libraries, and youth programs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <School className="w-6 h-6 text-primary" />,
                tag: "Public & Charter Schools",
                title: "Simple classroom use",
                desc: "Strong fit for read-aloud time, discussion blocks, literacy support, and student engagement. No lesson planning required.",
                items: ["Kindergarten through Grade 2", "Read-aloud and independent use", "Discussion prompts available"],
              },
              {
                icon: <Library className="w-6 h-6 text-primary" />,
                tag: "Libraries",
                title: "Storytime and youth programming",
                desc: "Built for read-aloud sessions, themed programming, and family engagement events at public and school libraries.",
                items: ["Storytime-ready format", "Family engagement friendly", "Coloring books as companion materials"],
              },
              {
                icon: <Users className="w-6 h-6 text-primary" />,
                tag: "After-School & Youth Programs",
                title: "Flexible for any setting",
                desc: "Works beyond the classroom for after-school programs, youth organizations, and enrichment centers.",
                items: ["Works without a classroom structure", "Builds discussion and reflection", "Spanish editions available upon request"],
              },
            ].map((card, i) => (
              <motion.div
                key={card.tag}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-secondary/30 rounded-2xl p-8 border border-border/50 flex flex-col transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: "var(--shadow-subtle)" }}
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  {card.icon}
                </div>
                <span className="text-xs font-bold text-primary/60 uppercase tracking-widest mb-3 block">{card.tag}</span>
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm mb-5 flex-1">{card.desc}</p>
                <ul className="space-y-2">
                  {card.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                      <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLASSROOM PACKS ────────────────────────────────────────────────── */}
      <section id="packs" className="py-24 bg-background border-b border-border/40">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Classroom Packs</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-5 leading-tight">
              Simple pricing. Fast approval.
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed text-lg">
              Start small, test the books with students, then expand by classroom, grade, or title.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                tag: "Starter Pack",
                qty: "15 Books",
                price: "$149",
                features: ["Low-friction entry point", "Bonus coloring pages included", "Ideal for one classroom or pilot group", "Fastest approval option"],
              },
              {
                tag: "Classroom Pack",
                qty: "25 Books",
                price: "$249",
                features: ["Strong classroom set option", "Bonus student materials included", "Spanish version available upon request", "Best fit for full-class use"],
                featured: true,
              },
              {
                tag: "Grade Pack",
                qty: "50 Books",
                price: "$449",
                features: ["For larger rollout or grade use", "Priority author session scheduling", "Better value per copy", "Useful for events and literacy programs"],
              },
            ].map((pack, i) => (
              <motion.div
                key={pack.tag}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-2xl p-8 border flex flex-col ${pack.featured ? "bg-white border-primary/30 border-t-4 border-t-primary" : "bg-white border-border/60"}`}
                style={{ boxShadow: pack.featured ? "var(--shadow-elegant)" : "var(--shadow-subtle)" }}
              >
                {pack.featured && (
                  <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-full tracking-wide uppercase mb-4 self-start">Most Popular</span>
                )}
                <span className="text-xs font-bold text-primary/60 uppercase tracking-widest mb-2">{pack.tag}</span>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-1">{pack.qty}</h3>
                <p className="text-5xl font-serif font-bold text-primary mb-6 leading-none">{pack.price}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {pack.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-foreground/75 leading-snug">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#request"
                  className={`flex items-center justify-center w-full font-semibold py-3.5 rounded-full transition-colors ${pack.featured ? "bg-primary hover:bg-primary/90 text-white shadow-md" : "border border-primary text-primary hover:bg-primary/5"}`}
                >
                  Request This Pack
                </a>
              </motion.div>
            ))}
          </div>

          <motion.p {...fadeUp} className="text-center text-sm text-muted-foreground">
            All packs include bonus materials. Spanish editions available upon request. Contact us for bulk or district pricing.
          </motion.p>
        </div>
      </section>

      {/* ── STORYWORLD PATH ────────────────────────────────────────────────── */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">The Vision</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-5 leading-tight">
              Where the StoryWorld is going
            </h2>
            <p className="text-background/65 max-w-2xl mx-auto leading-relaxed text-lg">
              M.O.M. Kids StoryWorld begins with books — and grows into a full creative and educational universe for children.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: "01", label: "Books", desc: "Read-aloud titles for ages 6–8. Story-first with STEM + SEL built in." },
              { step: "02", label: "Classroom", desc: "Guides, packs, and classroom kits that extend the story into real learning." },
              { step: "03", label: "Theater", desc: "Live performance adaptations that bring characters off the page." },
              { step: "04", label: "Animation", desc: "Animated shorts and series based on the original characters and stories." },
              { step: "05", label: "Film", desc: "Feature-length storytelling expanding the world for a wider audience." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white/8 rounded-2xl p-6 border border-white/10"
              >
                <p className="text-primary font-bold text-xs tracking-widest uppercase mb-3">{item.step}</p>
                <h3 className="text-xl font-serif font-bold text-background mb-3">{item.label}</h3>
                <p className="text-background/55 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REQUEST FORM ───────────────────────────────────────────────────── */}
      <section id="request" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">

            {/* Left */}
            <motion.div {...fadeUp}>
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-5 block">Get Started</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-5">Request sample materials</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Use this form for classroom packs, library interest, sample materials, author visit questions, or Spanish version requests. We respond to all educator and library inquiries within two business days.
              </p>
              <div className="bg-white rounded-2xl p-8 border border-border/60" style={{ boxShadow: "var(--shadow-subtle)" }}>
                <h3 className="text-xl font-serif font-bold text-foreground mb-5">What you can request</h3>
                <ul className="space-y-3">
                  {[
                    "Preview materials for Percy's First New Year's Resolution",
                    "Preview materials for The Brief but Spectacular Lives of Caterpillars",
                    "Starter, Classroom, or Grade Pack",
                    "Spanish version information",
                    "Author visit and read-aloud interest",
                    "Library and literacy event support",
                  ].map((item) => (
                    <li key={item} className="flex gap-2 text-muted-foreground text-sm">
                      <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {submitted ? (
                <div className="bg-white rounded-2xl p-10 text-center border border-border/60" style={{ boxShadow: "var(--shadow-elegant)" }}>
                  <CheckCircle2 className="w-14 h-14 text-primary mx-auto mb-5" />
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-3">Request received</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Thank you for reaching out. We'll be in touch shortly with sample materials and next steps.
                  </p>
                </div>
              ) : (
                <form
                  name="educator-request"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl p-8 border border-border/60 space-y-5"
                  style={{ boxShadow: "var(--shadow-elegant)" }}
                >
                  <input type="hidden" name="form-name" value="educator-request" />
                  <input type="hidden" name="bot-field" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="ed-name" className="mb-2 block text-sm font-semibold text-foreground">Full Name *</Label>
                      <Input id="ed-name" name="name" placeholder="Your name" required value={formState.name} onChange={handleChange} className="rounded-xl" />
                    </div>
                    <div>
                      <Label htmlFor="ed-email" className="mb-2 block text-sm font-semibold text-foreground">Email *</Label>
                      <Input id="ed-email" name="email" type="email" placeholder="name@school.org" required value={formState.email} onChange={handleChange} className="rounded-xl" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="ed-school" className="mb-2 block text-sm font-semibold text-foreground">School or Organization *</Label>
                    <Input id="ed-school" name="school" placeholder="School, library, or program name" required value={formState.school} onChange={handleChange} className="rounded-xl" />
                  </div>

                  <div>
                    <Label htmlFor="ed-role" className="mb-2 block text-sm font-semibold text-foreground">Role</Label>
                    <Input id="ed-role" name="role" placeholder="Teacher, principal, librarian, coordinator" value={formState.role} onChange={handleChange} className="rounded-xl" />
                  </div>

                  <div>
                    <Label htmlFor="ed-interest" className="mb-2 block text-sm font-semibold text-foreground">What are you interested in?</Label>
                    <select
                      id="ed-interest"
                      name="interest"
                      value={formState.interest}
                      onChange={handleChange}
                      className="w-full border border-input bg-background px-4 py-3 text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30"
                    >
                      <option>Sample materials</option>
                      <option>15-book Starter Pack — $149</option>
                      <option>25-book Classroom Pack — $249</option>
                      <option>50-book Grade Pack — $449</option>
                      <option>Spanish version</option>
                      <option>Author visit or read-aloud</option>
                      <option>Library programming</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="ed-message" className="mb-2 block text-sm font-semibold text-foreground">Message</Label>
                    <Textarea
                      id="ed-message"
                      name="message"
                      placeholder="Tell us about your grade level, program, or classroom need"
                      value={formState.message}
                      onChange={handleChange}
                      className="rounded-xl min-h-[120px]"
                    />
                  </div>

                  {error && <p className="text-sm text-red-500">Something went wrong. Please try again or email us directly.</p>}

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 rounded-full transition-colors shadow-md text-base"
                  >
                    Submit Request
                  </button>

                  <p className="text-xs text-muted-foreground text-center pt-1">
                    We respond to all educator and library inquiries within two business days.
                  </p>
                </form>
              )}
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
