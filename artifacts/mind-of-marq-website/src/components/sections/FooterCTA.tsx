import { motion } from "framer-motion";
import { BookOpen, Theater, Mail } from "lucide-react";

const paths = [
  {
    icon: BookOpen,
    label: "Explore Books",
    description: "Browse the full collection of titles across all age tiers.",
    href: "#books",
    style: "bg-white border-border text-foreground hover:border-primary/50",
    iconStyle: "bg-primary/10 text-primary",
  },
  {
    icon: Theater,
    label: "Explore Stage Plays",
    description: "View play adaptations, scripts, and production packages.",
    href: "#stage",
    style: "bg-[hsl(177,55%,18%)] border-transparent text-white",
    iconStyle: "bg-white/15 text-white",
  },
  {
    icon: Mail,
    label: "Contact for Schools",
    description: "Classroom packs, partnerships, and school program inquiries.",
    href: "#contact",
    style: "bg-white border-border text-foreground hover:border-primary/50",
    iconStyle: "bg-primary/10 text-primary",
  },
];

export function FooterCTA() {
  return (
    <section className="py-20 bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3">
            Where would you like to start?
          </h2>
          <p className="text-muted-foreground">Choose a path below to explore what's right for you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {paths.map(({ icon: Icon, label, description, href, style, iconStyle }, i) => (
            <motion.a
              key={label}
              href={href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className={`group rounded-2xl border p-7 flex flex-col items-start gap-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${style}`}
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${iconStyle}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold mb-1">{label}</p>
                <p className={`text-sm leading-relaxed ${style.includes("177") ? "text-white/60" : "text-muted-foreground"}`}>
                  {description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
