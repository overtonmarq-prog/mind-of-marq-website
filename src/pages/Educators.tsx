import { useState } from "react";
import { motion } from "framer-motion";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { BookOpen, CheckCircle2, ChevronRight, GraduationCap, Library, School, Users } from "lucide-react";

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");

type FormState = {
  name: string;
  school: string;
  role: string;
  email: string;
  interest: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  school: "",
  role: "",
  email: "",
  interest: "Sample materials",
  message: "",
};

export default function Educators() {
  const [formState, setFormState] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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

  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.55 },
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <NavBar />

      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 bg-secondary/40 border-b border-border/50">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.85fr] gap-12 lg:gap-16 items-start">

            {/* Left — headline + value points */}
            <motion.div {...fadeUp}>
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-5 block">
                M.O.M. Kids Storyworld · STEM + SEL Learning Through Story
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight mb-6 max-w-2xl">
                Ready-to-use classroom stories that build focus, goal-setting, and student engagement
              </h1>
              <p className="text-xl text-foreground/75 mb-3 leading-relaxed max-w-xl">
                STEM + SEL read-aloud books for ages 6–8, designed for real classroom use.
              </p>
              <p className="text-base text-muted-foreground mb-8 leading-relaxed max-w-xl">
                Story-driven books that support reading, discussion, persistence, and character growth. Built for classrooms, libraries, after-school programs, and school partnerships.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                <a
                  href="#request"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-7 py-3.5 rounded-full transition-colors shadow-md"
                >
                  <GraduationCap className="w-5 h-5" />
                  Get Sample Materials
                </a>
                <a
                  href="#packs"
                  className="inline-flex items-center gap-2 border border-border bg-white hover:bg-secondary/50 text-foreground font-semibold px-7 py-3.5 rounded-full transition-colors"
                >
                  View Classroom Packs
                </a>
                <a
                  href="#request"
                  className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary font-semibold px-5 py-3.5 transition-colors"
                >
                  Schedule a Quick Call
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>

              {/* Three value points */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "Easy to use", desc: "No training required, simple classroom fit." },
                  { label: "Built for engagement", desc: "Supports focus, discussion, and participation." },
                  { label: "Flexible for schools", desc: "Spanish option available upon request." },
                ].map((pt) => (
                  <div
                    key={pt.label}
                    className="bg-white rounded-xl p-4 border border-border/60"
                    style={{ boxShadow: "var(--shadow-subtle)" }}
                  >
                    <p className="font-bold text-foreground text-sm mb-1">{pt.label}</p>
                    <p className="text-muted-foreground text-sm">{pt.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — pricing card */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 border border-border/60 border-t-4 border-t-primary"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            >
              <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-full tracking-wide uppercase mb-5 inline-block">
                Fast decision offer
              </span>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-3">Starter Classroom Pack</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Best first step for teachers, librarians, and school partners who want to test the books with students.
              </p>
              <div className="border-y border-border/50 py-4 mb-6 space-y-3">
                {[
                  { qty: "15 books", price: "$149" },
                  { qty: "25 books", price: "$249" },
                  { qty: "50 books", price: "$449" },
                ].map((row) => (
                  <div key={row.qty} className="flex justify-between items-center">
                    <span className="text-foreground/70 text-sm">{row.qty}</span>
                    <span className="font-bold text-foreground text-lg font-serif">{row.price}</span>
                  </div>
                ))}
              </div>
              <ul className="space-y-2 mb-7">
                {[
                  "Includes bonus coloring pages",
                  "Optional virtual read-aloud",
                  "Spanish version available upon request",
                  "Ideal for classrooms, literacy tables, and library programming",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-foreground/75">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#request"
                className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3.5 rounded-full transition-colors shadow-md"
              >
                Request a Classroom Pack
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── AUDIENCE ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-b border-border/50">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <motion.div {...fadeUp} className="mb-12">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Who We Serve</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Designed for classrooms and libraries</h2>
            <p className="text-muted-foreground max-w-2xl leading-relaxed">
              These books are built to work across public schools, charter schools, private schools, libraries, and youth programs.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { tag: "Public Schools", icon: <School className="w-6 h-6 text-primary" />, title: "Simple classroom use", desc: "Strong fit for read-aloud time, discussion blocks, literacy support, and student engagement." },
              { tag: "Charter Schools", icon: <BookOpen className="w-6 h-6 text-primary" />, title: "Flexible and mission-friendly", desc: "Great for schools that value strong storytelling, character development, and practical STEM + SEL tie-ins." },
              { tag: "Libraries", icon: <Library className="w-6 h-6 text-primary" />, title: "Storytime and youth programming", desc: "Built for read-aloud sessions, themed programming, and family engagement events." },
            ].map((card, i) => (
              <motion.div
                key={card.tag}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-secondary/30 rounded-2xl p-8 border border-border/50 transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: "var(--shadow-subtle)" }}
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  {card.icon}
                </div>
                <span className="text-xs font-bold text-primary/60 uppercase tracking-widest mb-3 block">{card.tag}</span>
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLASSROOM PACKS ────────────────────────────────────────────── */}
      <section id="packs" className="py-20 bg-background border-b border-border/50">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <motion.div {...fadeUp} className="mb-12">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Pricing</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Classroom packs built for fast approval</h2>
            <p className="text-muted-foreground max-w-2xl leading-relaxed">
              Keep the first yes simple. Start small, test the books, then expand by classroom, grade, or title.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                tag: "Starter Pack",
                qty: "15 Books",
                price: "$149",
                features: [
                  "Low-friction entry point",
                  "Bonus coloring pages included",
                  "Ideal for one classroom or pilot group",
                  "Fastest approval option",
                ],
              },
              {
                tag: "Classroom Pack",
                qty: "25 Books",
                price: "$249",
                features: [
                  "Strong classroom set option",
                  "Bonus student materials included",
                  "Spanish version available upon request",
                  "Best fit for full-class use",
                ],
                featured: true,
              },
              {
                tag: "Grade Pack",
                qty: "50 Books",
                price: "$449",
                features: [
                  "For larger rollout or grade use",
                  "Priority author session scheduling",
                  "Better value per copy",
                  "Useful for events and literacy programs",
                ],
              },
            ].map((pack, i) => (
              <motion.div
                key={pack.tag}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-2xl p-8 border flex flex-col ${
                  pack.featured
                    ? "bg-white border-primary/30 border-t-4 border-t-primary"
                    : "bg-white border-border/60"
                }`}
                style={{ boxShadow: pack.featured ? "var(--shadow-elegant)" : "var(--shadow-subtle)" }}
              >
                {pack.featured && (
                  <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-full tracking-wide uppercase mb-4 self-start">
                    Most Popular
                  </span>
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
                  className={`flex items-center justify-center w-full font-semibold py-3.5 rounded-full transition-colors ${
                    pack.featured
                      ? "bg-primary hover:bg-primary/90 text-white shadow-md"
                      : "border border-primary text-primary hover:bg-primary/5"
                  }`}
                >
                  Request This Pack
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY EDUCATORS ──────────────────────────────────────────────── */}
      <section className="py-20 bg-secondary/30 border-b border-border/50">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <motion.div {...fadeUp} className="mb-12">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Why It Works</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Why educators use M.O.M. Kids Storyworld</h2>
            <p className="text-muted-foreground max-w-2xl leading-relaxed">
              The books are positioned as story-first, while supporting STEM thinking, SEL discussion, and classroom engagement.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: <BookOpen className="w-6 h-6 text-primary" />, title: "Supports STEM + SEL naturally", desc: "Students get story, reflection, and real learning value without the material feeling heavy or forced." },
              { icon: <Users className="w-6 h-6 text-primary" />, title: "Works for all readers", desc: "While we specialize in STEM and SEL, the stories also work for general read-aloud use, discussion, and independent interest." },
              { icon: <CheckCircle2 className="w-6 h-6 text-primary" />, title: "Easy entry for school partners", desc: "Simple pricing, clear packs, and low-friction sample requests make it easy for schools to say yes." },
              { icon: <GraduationCap className="w-6 h-6 text-primary" />, title: "Built to grow with demand", desc: "Start with two read-aloud titles now, then expand into Spanish support, coloring books, and older age bands later." },
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

      {/* ── HOW IT WORKS ───────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-b border-border/50">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <motion.div {...fadeUp} className="mb-12">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Process</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">How it works</h2>
            <p className="text-muted-foreground max-w-2xl leading-relaxed">
              Keep the process clean. Remove confusion. Make it easy for educators to move.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: "1", title: "Choose a pack", desc: "Start with the 15-book, 25-book, or 50-book option based on classroom size and use case." },
              { num: "2", title: "Request sample materials", desc: "Preview the books, ask about Spanish support, and decide what fits your classroom or program." },
              { num: "3", title: "Use immediately", desc: "Books and bonus materials are designed for practical use in class, library sessions, or school events." },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-secondary/30 rounded-2xl p-8 border border-border/50"
                style={{ boxShadow: "var(--shadow-subtle)" }}
              >
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg mb-6">
                  {step.num}
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ───────────────────────────────────────────────────── */}
      <section className="py-16 bg-background border-b border-border/50">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <motion.div
            {...fadeUp}
            className="bg-foreground text-background rounded-2xl p-10 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8"
            style={{ boxShadow: "var(--shadow-elegant)" }}
          >
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3">Bring story, STEM, and SEL into the room</h2>
              <p className="text-background/70 leading-relaxed">
                Start with a classroom pack, request preview materials, or book a quick conversation to see what fits your students best.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="#request"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-full transition-colors shadow-md"
              >
                Request Materials
              </a>
              <a
                href="#request"
                className="inline-flex items-center justify-center gap-2 border border-background/25 text-background hover:bg-white/10 font-semibold px-8 py-4 rounded-full transition-colors"
              >
                Schedule a Conversation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── REQUEST FORM ───────────────────────────────────────────────── */}
      <section id="request" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">

            {/* Left — context */}
            <motion.div {...fadeUp}>
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-5 block">Get Started</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-5">Request sample materials</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Use this form for classroom packs, library interest, sample materials, author visit questions, or Spanish version requests.
              </p>
              <div
                className="bg-white rounded-2xl p-8 border border-border/60"
                style={{ boxShadow: "var(--shadow-subtle)" }}
              >
                <h3 className="text-xl font-serif font-bold text-foreground mb-5">What you can request</h3>
                <ul className="space-y-3">
                  {[
                    "Preview materials for Percy and Brief",
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
                <div
                  className="bg-white rounded-2xl p-10 text-center border border-border/60"
                  style={{ boxShadow: "var(--shadow-elegant)" }}
                >
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
                      <option>15-book Starter Pack</option>
                      <option>25-book Classroom Pack</option>
                      <option>50-book Grade Pack</option>
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
                      placeholder="Tell us what grade, program, or classroom need you have"
                      value={formState.message}
                      onChange={handleChange}
                      className="rounded-xl min-h-[130px]"
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-500">Something went wrong. Please try again or email us directly.</p>
                  )}

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
