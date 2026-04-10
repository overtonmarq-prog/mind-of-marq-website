import { useState } from "react";
import { motion } from "framer-motion";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  BookOpen, GraduationCap, Building2, Library, Users, Heart, Globe, Briefcase,
  CheckCircle2, ArrowRight, Layers, Sparkles, LayoutGrid, Zap,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.6 },
};

const partnerTypes = [
  { icon: GraduationCap, label: "Elementary Schools" },
  { icon: Building2, label: "Charter Schools" },
  { icon: Heart, label: "Daycare & Early Learning Centers" },
  { icon: Library, label: "Libraries" },
  { icon: Users, label: "Afterschool & Youth Programs" },
  { icon: Globe, label: "Nonprofits" },
  { icon: Sparkles, label: "Foundations" },
  { icon: Briefcase, label: "Corporate Community Partners" },
];

const partnerReceives = [
  { icon: BookOpen, label: "Book sets for ages 3–5, 6–8, and 9–12" },
  { icon: Zap, label: "STEM + SEL aligned storytelling" },
  { icon: Layers, label: "Read-aloud and interactive formats" },
  { icon: Heart, label: "Early learning coloring integration" },
  { icon: LayoutGrid, label: "Optional classroom activity extensions" },
  { icon: Sparkles, label: "StoryWorld-based literacy enrichment" },
];

const whyHighlights = [
  { label: "Multi-tier learning path, ages 3–12", copy: "A structured progression from Discovery through Deeper Learning — each tier building on the last." },
  { label: "Story-driven STEM + SEL approach", copy: "Every title integrates science thinking and social-emotional development without feeling like a curriculum." },
  { label: "Built for classrooms, libraries, and youth spaces", copy: "Materials designed for the real environments where children learn — not just the ideal ones." },
  { label: "Designed for active engagement, not passive reading", copy: "Read-alouds, stage adaptations, and coloring formats invite children to participate, not just absorb." },
];

const steps = [
  { num: "01", title: "Tell us about your organization", copy: "Submit the partnership inquiry form below. Tell us who you serve, your goals, and how many children would be reached." },
  { num: "02", title: "We review your goals and audience", copy: "Our team reviews each inquiry personally and evaluates fit with current partnership opportunities." },
  { num: "03", title: "We explore funding or sponsorship alignment", copy: "Together we identify whether a grant-funded, sponsored, or directly supported partnership is the right path." },
  { num: "04", title: "If approved, we coordinate delivery and rollout", copy: "We handle the details of book delivery, materials, and any associated programming support." },
];

const interestOptions = [
  "Book Sets",
  "Literacy Program Support",
  "STEM + SEL Enrichment",
  "Sponsorship Opportunity",
  "Grant-Aligned Partnership",
  "School or Community Event",
];

const orgTypes = [
  "Elementary School",
  "Charter School",
  "Public Library",
  "Daycare / Early Learning Center",
  "Afterschool Program",
  "Youth Nonprofit",
  "Foundation",
  "Corporate Partner",
  "Other",
];

const ageGroups = ["Ages 3–5", "Ages 6–8", "Ages 9–12", "Multiple age groups"];

export default function Partners() {
  const [form, setForm] = useState({
    fullName: "",
    orgName: "",
    email: "",
    phone: "",
    orgType: "",
    ageGroup: "",
    numChildren: "",
    cityState: "",
    description: "",
  });
  const [interests, setInterests] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const encode = (data: Record<string, string>) =>
    Object.keys(data)
      .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
      .join("&");

  const toggleInterest = (val: string) => {
    setInterests((prev) =>
      prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "partner-inquiry",
        ...form,
        interests: interests.join(", "),
      }),
    })
      .then(() => { setSubmitted(true); setSubmitting(false); })
      .catch(() => setSubmitting(false));
  };

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 bg-[hsl(220,25%,12%)] overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-primary blur-3xl" />
        </div>
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center relative z-10">
          <motion.div {...fadeUp}>
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary/70 mb-6">
              Partnership Opportunities
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Fund Literacy, STEM, and Emotional Growth Through Story
            </h1>
            <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
              M.O.M. Kids StoryWorld partners with schools, youth programs, nonprofits, and community organizations to help bring engaging children's books and learning experiences to young readers through grants, sponsorships, and funded partnerships.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="rounded-full px-10 h-13 bg-primary hover:bg-primary/90 text-white w-full sm:w-auto shadow-lg"
                asChild
              >
                <a href="#apply">Apply for a Funded Partnership</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-10 h-13 border-white/20 text-white hover:bg-white/10 w-full sm:w-auto"
                asChild
              >
                <a href="#contact">Schedule a Conversation</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHO WE PARTNER WITH ────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Eligibility</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Who We Partner With</h2>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {partnerTypes.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="flex flex-col items-center text-center p-5 rounded-2xl border border-border/60 bg-[hsl(40,20%,98%)] hover:border-primary/30 hover:shadow-sm transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <Icon className="text-primary w-5 h-5" />
                </div>
                <p className="text-sm font-medium text-foreground leading-snug">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT PARTNERS RECEIVE ─────────────────────────────────────────── */}
      <section className="py-20 bg-[hsl(40,20%,97%)]">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">The Partnership</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">What a Funded Partnership Can Include</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {partnerReceives.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-border/50 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="text-primary w-4 h-4" />
                </div>
                <p className="text-foreground text-sm font-medium leading-snug pt-0.5">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">The Process</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">How the Process Works</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map(({ num, title, copy }, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5 p-6 rounded-2xl border border-border/50 bg-[hsl(40,20%,98%)]"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg font-serif">
                  {num}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{copy}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY M.O.M. KIDS STORYWORLD ────────────────────────────────────── */}
      <section className="py-20 bg-[hsl(177,55%,22%)]">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.div {...fadeUp} className="mb-12">
            <p className="text-primary-foreground/50 text-sm font-semibold tracking-widest uppercase mb-3">The Program</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-5">
              Why M.O.M. Kids StoryWorld
            </h2>
            <p className="text-white/65 text-lg leading-relaxed max-w-3xl">
              M.O.M. Kids StoryWorld is more than a collection of books. It is a children's learning system built to support literacy, imagination, STEM curiosity, and social-emotional growth across multiple age groups.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {whyHighlights.map(({ label, copy }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4 p-6 rounded-2xl bg-white/8 border border-white/10"
              >
                <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold mb-1">{label}</p>
                  <p className="text-white/55 text-sm leading-relaxed">{copy}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPEN APPEAL CTA ───────────────────────────────────────────────── */}
      <section className="py-20 bg-background border-b border-border/40">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-5">
              Interested in Partnering With Us?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              If your school, agency, foundation, nonprofit, or community program is interested in exploring a funded partnership with M.O.M. Kids StoryWorld, we invite you to connect with us.
            </p>
            <p className="text-muted-foreground/70 text-sm leading-relaxed mb-8">
              Possible partnerships may include grants, sponsorships, literacy support, youth programming support, or community-funded book access.
            </p>
            <Button size="lg" className="rounded-full px-10 bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <a href="#apply">
                Apply for a Funded Partnership
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── APPLICATION FORM ──────────────────────────────────────────────── */}
      <section id="apply" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <motion.div {...fadeUp} className="text-center mb-10">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Application</p>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-3">Apply for a Funded Partnership</h2>
            <p className="text-muted-foreground">
              Tell us about your organization and the children you serve. We review every inquiry personally.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 px-8 rounded-3xl border border-border bg-[hsl(40,20%,98%)]"
            >
              <CheckCircle2 className="w-14 h-14 text-primary mx-auto mb-5" />
              <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Thank you.</h3>
              <p className="text-muted-foreground">
                We received your partnership inquiry and will follow up soon.
              </p>
            </motion.div>
          ) : (
            <motion.form
              {...fadeUp}
              name="partner-inquiry"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="partner-inquiry" />

              {/* Name + Org */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name <span className="text-destructive">*</span></Label>
                  <Input id="fullName" name="fullName" required placeholder="Your full name" value={form.fullName} onChange={set("fullName")} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="orgName">Organization Name <span className="text-destructive">*</span></Label>
                  <Input id="orgName" name="orgName" required placeholder="School, nonprofit, etc." value={form.orgName} onChange={set("orgName")} />
                </div>
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address <span className="text-destructive">*</span></Label>
                  <Input id="email" name="email" type="email" required placeholder="your@email.com" value={form.email} onChange={set("email")} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number <span className="text-muted-foreground text-xs">(optional)</span></Label>
                  <Input id="phone" name="phone" type="tel" placeholder="(555) 000-0000" value={form.phone} onChange={set("phone")} />
                </div>
              </div>

              {/* Org Type + Age Group */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="orgType">Organization Type <span className="text-destructive">*</span></Label>
                  <select
                    id="orgType"
                    name="orgType"
                    required
                    value={form.orgType}
                    onChange={set("orgType")}
                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  >
                    <option value="">Select one…</option>
                    {orgTypes.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ageGroup">Age Group Served <span className="text-destructive">*</span></Label>
                  <select
                    id="ageGroup"
                    name="ageGroup"
                    required
                    value={form.ageGroup}
                    onChange={set("ageGroup")}
                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  >
                    <option value="">Select one…</option>
                    {ageGroups.map((a) => <option key={a} value={a}>{a}</option>)}
                  </select>
                </div>
              </div>

              {/* Children Served + City/State */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="numChildren">Number of Children Served <span className="text-destructive">*</span></Label>
                  <Input id="numChildren" name="numChildren" required placeholder="e.g. 150" value={form.numChildren} onChange={set("numChildren")} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cityState">City and State <span className="text-destructive">*</span></Label>
                  <Input id="cityState" name="cityState" required placeholder="e.g. Atlanta, GA" value={form.cityState} onChange={set("cityState")} />
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Brief Description of Need <span className="text-destructive">*</span></Label>
                <Textarea
                  id="description"
                  name="description"
                  required
                  rows={4}
                  placeholder="Tell us about your program, the children you serve, and how M.O.M. Kids StoryWorld could help…"
                  value={form.description}
                  onChange={set("description")}
                />
              </div>

              {/* Interested In */}
              <div className="space-y-3">
                <Label>Interested In</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {interestOptions.map((opt) => (
                    <div key={opt} className="flex items-center gap-3">
                      <Checkbox
                        id={opt}
                        checked={interests.includes(opt)}
                        onCheckedChange={() => toggleInterest(opt)}
                      />
                      <label htmlFor={opt} className="text-sm text-foreground cursor-pointer">{opt}</label>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                type="submit"
                disabled={submitting}
                size="lg"
                className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground h-13 text-base"
              >
                {submitting ? "Submitting…" : "Submit Partnership Inquiry"}
              </Button>

              <p className="text-center text-muted-foreground/60 text-xs">
                We review every inquiry personally and respond within 5 business days.
              </p>
            </motion.form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
