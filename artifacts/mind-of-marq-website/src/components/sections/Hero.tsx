import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-25 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-5xl py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide border border-primary/20">
            Books · Stage Plays · Learning Experiences
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground mb-5 leading-[1.05] tracking-tight"
        >
          M.O.M. Kids{" "}
          <span className="text-primary italic">StoryWorld</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-primary font-serif italic mb-6"
        >
          A Storyworld Learning System for Ages 3 to 12
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Books, stage plays, and story-based learning experiences that build STEM thinking, communication, and emotional growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="rounded-full px-10 h-13 text-base bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto shadow-md"
            asChild
          >
            <a href="#system">Explore the System</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-10 h-13 text-base border-foreground/30 hover:border-primary hover:text-primary w-full sm:w-auto"
            asChild
          >
            <a href="#schools">For Schools</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-20 flex flex-col items-center gap-1 text-muted-foreground/50"
        >
          <span className="text-xs tracking-widest uppercase">Discover</span>
          <div className="w-px h-10 bg-muted-foreground/30 mt-1" />
        </motion.div>
      </div>
    </section>
  );
}
