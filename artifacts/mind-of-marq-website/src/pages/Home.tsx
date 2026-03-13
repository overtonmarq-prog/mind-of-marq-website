import { motion } from "framer-motion";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { BookCard } from "@/components/BookCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, BookOpen, GraduationCap, Theater, Film, CheckCircle2, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      <main>
        {/* HERO SECTION */}
        <section id="home" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
              alt="Abstract elegant background" 
              className="w-full h-full object-cover opacity-40 mix-blend-multiply"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-wrap justify-center gap-2 mb-8"
              >
                {["Books", "Education", "Stage", "Film"].map((pill, i) => (
                  <span key={pill} className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide border border-primary/20">
                    {pill}
                  </span>
                ))}
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground mb-6 leading-tight"
              >
                The Mind of Marq
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl lg:text-3xl text-primary font-serif italic mb-8"
              >
                Home of Mind of Marq Publishing
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto text-balance"
              >
                A connected home for books, storyworlds, educational experiences, and original creative properties. Explore Mind of Marq Publishing and discover M.O.M. Kids Storyworld, where STEM + SEL learning grows through story.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Button size="lg" className="rounded-full px-8 h-14 text-base bg-primary hover:bg-primary/90 w-full sm:w-auto shadow-lg shadow-primary/25" asChild>
                  <a href="#storyworld">Enter Storyworld</a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base bg-background/50 backdrop-blur border-border hover:bg-secondary w-full sm:w-auto" asChild>
                  <a href="#publishing">Explore Publishing</a>
                </Button>
                <Button size="lg" variant="ghost" className="rounded-full px-8 h-14 text-base hover:bg-muted w-full sm:w-auto" asChild>
                  <a href="#contact">Contact</a>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PUBLISHING SECTION */}
        <section id="publishing" className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading 
              title="One brand, multiple worlds" 
              subtitle="Mind of Marq Publishing is designed to house children's books, educational platforms, story-driven intellectual property, and future media expansions under one clear parent brand."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {[
                {
                  icon: <BookOpen className="w-10 h-10 text-primary mb-6" />,
                  title: "Mind of Marq Publishing",
                  desc: "The publishing imprint for books, story properties, educational platforms, and future long-form creative works."
                },
                {
                  icon: <GraduationCap className="w-10 h-10 text-primary mb-6" />,
                  title: "M.O.M. Kids Storyworld",
                  desc: "A STEM + SEL learning platform built around character-driven stories, educator value, and library-friendly programming."
                },
                {
                  icon: <Theater className="w-10 h-10 text-primary mb-6" />,
                  title: "Stories, Stage, and Screen",
                  desc: "A growing slate of original properties for books, storyworld expansion, and future stage, film, and television development."
                }
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-background rounded-2xl p-8 border border-border shadow-subtle hover:shadow-elegant transition-all duration-300"
                >
                  {card.icon}
                  <h3 className="text-xl font-bold font-serif mb-4">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* STORYWORLD SECTION */}
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
                  <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Platform Overview</span>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
                    M.O.M. Kids Storyworld
                  </h2>
                  <h3 className="text-2xl text-foreground/80 font-serif italic mb-6">
                    STEM + SEL Learning Through Story
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8">
                    An educational storytelling system that combines science exploration, emotional intelligence, and character growth through memorable stories built for multiple learning tiers.
                  </p>
                  
                  <div className="space-y-4">
                    <h4 className="font-bold text-foreground text-lg">Why it works:</h4>
                    <ul className="space-y-3">
                      {[
                        "Story-first learning that supports STEM curiosity and SEL growth.",
                        "Built for teachers, librarians, families, and students.",
                        "Expandable into downloadable resources and interactive classroom tools.",
                        "Designed as a long-term platform, not a one-book landing page."
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

              <div className="space-y-6">
                {[
                  { tier: "Early Discovery", age: "Ages 3–5", desc: "Coloring-based introductions that build motor skills, creativity, and early character familiarity." },
                  { tier: "Guided Reading", age: "Ages 6–8", desc: "Teacher or parent guided stories that connect literacy, science curiosity, and emotional growth." },
                  { tier: "Independent Reflection", age: "Ages 9–12", desc: "Stronger reading experiences that support reflection, identity, and deeper classroom conversation." }
                ].map((tier, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="bg-white p-6 md:p-8 rounded-2xl shadow-subtle border-l-4 border-primary"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <h4 className="text-xl font-bold font-serif">{tier.tier}</h4>
                      <span className="px-3 py-1 bg-secondary text-foreground text-xs font-bold rounded-full">{tier.age}</span>
                    </div>
                    <p className="text-muted-foreground">{tier.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BOOKS SECTION */}
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

            <div className="bg-card rounded-3xl p-8 md:p-12 border border-border/50 shadow-elegant">
              <h3 className="text-2xl font-serif font-bold mb-8 text-center">Complete Catalog Structure</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="pb-4 border-b border-border">
                    <h4 className="font-bold text-lg text-primary">Early Discovery</h4>
                    <p className="text-sm text-muted-foreground">Ages 3–5</p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex gap-2 text-foreground/80"><ChevronRight className="w-5 h-5 text-primary/50 shrink-0" /> Percy Series Coloring Book</li>
                    <li className="flex gap-2 text-foreground/80"><ChevronRight className="w-5 h-5 text-primary/50 shrink-0" /> The Caterpillar Adventure Coloring Book</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <div className="pb-4 border-b border-border">
                    <h4 className="font-bold text-lg text-primary">Guided Reading</h4>
                    <p className="text-sm text-muted-foreground">Ages 6–8</p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex gap-2 text-foreground/80"><ChevronRight className="w-5 h-5 text-primary/50 shrink-0" /> Percy's First Resolution</li>
                    <li className="flex gap-2 text-foreground/80"><ChevronRight className="w-5 h-5 text-primary/50 shrink-0" /> The Brief but Spectacular Lives of Caterpillars Part 1 & 2</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <div className="pb-4 border-b border-border">
                    <h4 className="font-bold text-lg text-primary">Independent Reflection</h4>
                    <p className="text-sm text-muted-foreground">Ages 9–12</p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex gap-2 text-foreground/80"><ChevronRight className="w-5 h-5 text-primary/50 shrink-0" /> Percy's First New Year's Resolution</li>
                    <li className="flex gap-2 text-foreground/80"><ChevronRight className="w-5 h-5 text-primary/50 shrink-0" /> The Brief but Spectacular Lives of Caterpillars</li>
                    <li className="flex gap-2 text-foreground/80"><ChevronRight className="w-5 h-5 text-primary/50 shrink-0" /> Confessions of a Teenaged Martial Artist</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATORS & LIBRARIES SECTION */}
        <section id="educators" className="py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
              {/* Educators */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 md:p-12 rounded-3xl shadow-subtle relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-0" />
                <GraduationCap className="w-12 h-12 text-primary mb-6 relative z-10" />
                <h2 className="text-3xl font-serif font-bold mb-4 relative z-10">Teach through story</h2>
                <p className="text-lg text-muted-foreground mb-8 relative z-10">
                  Connect books to STEM themes, SEL discussion prompts, guided reflection, and future classroom extensions.
                </p>
                <ul className="space-y-4 mb-10 relative z-10">
                  {[
                    "Discussion-ready story themes",
                    "STEM and SEL alignment potential",
                    "Reflection prompts and classroom extensions",
                    "Age-band-friendly catalog design"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 bg-secondary/30 p-3 rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-border pt-6 relative z-10">
                  <h4 className="font-bold text-xl mb-3">Built for classroom value</h4>
                  <p className="text-muted-foreground">
                    M.O.M. Kids Storyworld titles are designed to help students engage with science ideas, emotional development, and character-based learning in ways that feel natural, memorable, and discussion-ready.
                  </p>
                </div>
              </motion.div>

              {/* Libraries */}
              <motion.div
                id="libraries"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-foreground text-white p-8 md:p-12 rounded-3xl shadow-subtle relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -z-0" />
                <BookOpen className="w-12 h-12 text-accent mb-6 relative z-10" />
                <h2 className="text-3xl font-serif font-bold mb-4 relative z-10">Program around discovery</h2>
                <p className="text-lg text-white/70 mb-8 relative z-10">
                  Build family literacy programs, science events, and youth discussions around curiosity, growth, identity, and transformation.
                </p>
                <ul className="space-y-4 mb-10 relative z-10">
                  {[
                    "Family literacy programming potential",
                    "Science and nature themed events",
                    "Discussion-based youth engagement",
                    "Multi-age discovery pathways"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 bg-white/5 p-3 rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-white/20 pt-6 relative z-10">
                  <h4 className="font-bold text-xl mb-3 text-accent">Stories that support programming</h4>
                  <p className="text-white/70">
                    These books are designed to live beyond the shelf. They support discovery-based events, themed reading sessions, family participation, and meaningful youth engagement.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PARTNERSHIPS SECTION */}
        <section id="partnerships" className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading 
              title="Building the Mind of Marq Storyworld" 
            />

            <div className="max-w-4xl mx-auto mb-20 text-center space-y-6">
              <p className="text-xl text-foreground font-medium">
                The Mind of Marq is an independent storytelling studio developing original intellectual property across books, education, stage, and film.
              </p>
              <p className="text-lg text-muted-foreground">
                Our mission is simple. Create stories that inspire courage, curiosity, and transformation in young audiences while delivering powerful entertainment for families worldwide.
              </p>
              <p className="text-lg text-muted-foreground">
                The ecosystem is designed to grow through strategic partnerships with educators, creative studios, and forward-thinking investors who believe storytelling can shape the next generation.
              </p>
              
              <div className="flex flex-wrap justify-center gap-3 mt-10 pt-10 border-t border-border">
                {[
                  "Schools & Educational Institutions",
                  "Youth Theater Organizations",
                  "Animation Studios & Filmmakers",
                  "Streaming Platforms",
                  "Brand Partners",
                  "Mission-aligned Investors"
                ].map((partner, i) => (
                  <span key={i} className="px-5 py-2 bg-secondary text-foreground font-medium rounded-full text-sm border border-border/50">
                    {partner}
                  </span>
                ))}
              </div>
            </div>

            {/* Stage Division */}
            <div className="mb-24">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                  <Theater size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-serif font-bold">Student Productions, Spring and Winter</h3>
                  <p className="text-muted-foreground mt-1">Educational Stage Adaptations</p>
                </div>
              </div>
              
              <div className="bg-background rounded-3xl p-8 md:p-12 border border-border shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                  <div className="lg:col-span-1">
                    <p className="text-lg mb-6 text-foreground/80">
                      Mind of Marq Kids titles are being developed for educational stage adaptations designed for school theater programs.
                    </p>
                    <p className="text-muted-foreground mb-8">
                      These productions give students the opportunity to perform meaningful stories while reinforcing themes of resilience, discipline, growth, and emotional awareness.
                    </p>
                    <div className="space-y-4">
                      <h4 className="font-bold text-primary uppercase text-xs tracking-wider">Benefits</h4>
                      <ul className="space-y-2 text-sm font-medium">
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Combine literacy with performance</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Reinforce STEM and SEL</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Build student confidence</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Engage families through community</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2 space-y-6">
                    <h4 className="font-bold text-xl font-serif mb-4">Adaptations under development</h4>
                    {[
                      {
                        title: "Percy's First New Year's Resolution",
                        desc: "A story about perseverance, goals, and the courage to try again."
                      },
                      {
                        title: "The Brief but Spectacular Lives of Caterpillars",
                        desc: "A whimsical exploration of transformation, friendship, and the mystery of growing up."
                      },
                      {
                        title: "Confessions of a Teenaged Martial Artist",
                        desc: "A coming-of-age story about discipline, identity, and the unexpected power of ballet in martial arts training."
                      }
                    ].map((play, i) => (
                      <div key={i} className="flex gap-4 p-5 bg-card border border-border rounded-xl">
                        <div className="bg-secondary w-10 h-10 rounded-full flex items-center justify-center font-bold font-serif text-primary shrink-0">
                          {i+1}
                        </div>
                        <div>
                          <h5 className="font-bold text-lg mb-1">{play.title}</h5>
                          <p className="text-muted-foreground text-sm">{play.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Film Division */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                  <Film size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-serif font-bold">Mind of Marq Kids Film Division</h3>
                  <p className="text-muted-foreground mt-1">Animation & Feature Development</p>
                </div>
              </div>

              <div className="mb-12">
                <p className="text-lg max-w-3xl text-foreground/80 mb-6">
                  Exploring partnerships to develop animated films and visual storytelling projects based on the Mind of Marq Kids library. These projects combine heart, humor, and meaningful life lessons with cinematic storytelling designed for global family audiences.
                </p>
                <div className="inline-block px-6 py-3 bg-primary/5 border border-primary/20 rounded-lg">
                  <span className="font-bold text-primary mr-2">Goal:</span>
                  <span className="text-foreground/80 font-medium">Create films that entertain children while reinforcing courage, curiosity, and emotional growth.</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Percy's First New Year's Resolution",
                    format: "Animated Family Feature",
                    desc: "A determined young penguin makes a bold New Year's resolution and discovers that growth requires patience, courage, and persistence.",
                    tone: "Heartfelt, humorous, inspirational",
                    themes: "Perseverance, goal setting, resilience"
                  },
                  {
                    title: "The Brief but Spectacular Lives of Caterpillars",
                    format: "Animated Fantasy Adventure",
                    desc: "Young caterpillars discover the mystery of transformation while navigating friendship, curiosity, and the unknown journey ahead.",
                    tone: "Whimsical, magical, philosophical",
                    themes: "Transformation, identity, wonder"
                  },
                  {
                    title: "Confessions of a Teenaged Martial Artist",
                    format: "Coming of Age Feature",
                    desc: "Xavier Williams dreams of becoming a martial artist, but is placed in a ballet class. What begins as resistance slowly becomes a revelation.",
                    tone: "Inspiring, humorous, emotional",
                    themes: "Identity, discipline, self discovery"
                  }
                ].map((film, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="bg-card p-6 rounded-2xl border border-border shadow-sm flex flex-col"
                  >
                    <span className="text-xs font-bold uppercase tracking-wider text-accent-foreground bg-accent px-3 py-1 rounded-full w-fit mb-4">
                      {film.format}
                    </span>
                    <h4 className="text-xl font-serif font-bold mb-3">{film.title}</h4>
                    <p className="text-muted-foreground text-sm mb-6 flex-grow">{film.desc}</p>
                    <div className="space-y-2 pt-4 border-t border-border mt-auto">
                      <p className="text-xs"><strong className="text-foreground">Tone:</strong> <span className="text-muted-foreground">{film.tone}</span></p>
                      <p className="text-xs"><strong className="text-foreground">Themes:</strong> <span className="text-muted-foreground">{film.themes}</span></p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Strategic quadrants */}
            <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/50 border border-border/50 rounded-3xl overflow-hidden">
              {[
                { title: "Education", items: ["School curriculum partnerships", "Classroom storytelling programs", "SEL and STEM educational initiatives"] },
                { title: "Youth Theater", items: ["Licensed student productions", "Youth theater festivals", "School arts partnerships"] },
                { title: "Film and Media", items: ["Animation development", "Feature film production", "Streaming partnerships"] },
                { title: "Investment", items: ["Franchise development", "Educational media expansion", "Global distribution partnerships"] }
              ].map((quad, i) => (
                <div key={i} className="bg-background p-8">
                  <h4 className="font-bold text-lg font-serif mb-4 text-primary">{quad.title}</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {quad.items.map((item, j) => <li key={j}>• {item}</li>)}
                  </ul>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ABOUT SECTION */}
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
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-elegant border border-white/20">
                  <img 
                    src={`${import.meta.env.BASE_URL}images/about-library.png`} 
                    alt="Elegant publishing library interior" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              
              <div className="order-1 lg:order-2 lg:pl-12">
                <SectionHeading 
                  title="About The Mind of Marq" 
                  alignment="left"
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="prose prose-lg text-muted-foreground"
                >
                  <p className="text-xl text-foreground font-medium leading-relaxed mb-6">
                    The Mind of Marq is an independent storytelling brand built around the belief that great stories can inspire courage, curiosity, and transformation in young audiences.
                  </p>
                  <p className="leading-relaxed">
                    Through Mind of Marq Publishing, M.O.M. Kids Storyworld, and a growing slate of original creative properties, we are building a connected storytelling universe designed to educate, entertain, and endure.
                  </p>
                  
                  <div className="mt-8 p-6 bg-white rounded-2xl border border-border shadow-sm italic text-foreground font-serif">
                    "Mind of Marq Kids is an educational storytelling brand expanding from books into classrooms, stage productions, and film development."
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 bg-white rounded-3xl overflow-hidden shadow-elegant border border-border">
              
              <div className="lg:col-span-2 bg-primary text-primary-foreground p-10 md:p-12 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
                
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Get in Touch</h2>
                  <p className="text-primary-foreground/80 text-lg leading-relaxed">
                    Whether you are an educator, librarian, theater director, filmmaker, publisher, or investor — we welcome meaningful conversations about storytelling, education, and partnership.
                  </p>
                </div>
                
                <div className="relative z-10 mt-12 space-y-6">
                  <div className="flex items-center gap-4 opacity-80">
                    <BookOpen size={24} />
                    <span>Mind of Marq Publishing</span>
                  </div>
                  <div className="flex items-center gap-4 opacity-80">
                    <GraduationCap size={24} />
                    <span>M.O.M. Kids Storyworld</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-3 p-10 md:p-12">
                <form 
                  name="contact" 
                  method="POST" 
                  data-netlify="true" 
                  className="space-y-6"
                  onSubmit={(e) => {
                    // Prevent default just for demo rendering if running locally
                    // Netlify will handle this in production
                  }}
                >
                  <input type="hidden" name="form-name" value="contact" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">Name</Label>
                      <Input id="name" name="name" required placeholder="John Doe" className="bg-background border-border" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                      <Input id="email" name="email" type="email" required placeholder="john@example.com" className="bg-background border-border" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium">Subject</Label>
                    <Select name="subject" required>
                      <SelectTrigger className="bg-background border-border">
                        <SelectValue placeholder="Select an area of interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="educator">Educator</SelectItem>
                        <SelectItem value="library">Library</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="media">Media & Film</SelectItem>
                        <SelectItem value="investment">Investment</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      required 
                      placeholder="How can we build the storyworld together?" 
                      className="min-h-[150px] bg-background border-border resize-y" 
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl h-12 text-lg">
                    Send Message
                  </Button>
                </form>
              </div>
              
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
