import { motion } from "framer-motion";

interface BookCardProps {
  title: string;
  subtitle: string;
  description: string;
  stem: string;
  sel: string;
  imageSrc: string;
  delay?: number;
}

export function BookCard({ title, subtitle, description, stem, sel, imageSrc, delay = 0 }: BookCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="bg-card rounded-2xl overflow-hidden border border-border/50 card-hover flex flex-col h-full"
    >
      <div className="aspect-[4/3] w-full bg-muted relative overflow-hidden group">
        <img 
          src={imageSrc} 
          alt={`Cover of ${title}`} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="text-xs font-bold tracking-wider uppercase text-primary mb-2">
          {subtitle}
        </div>
        <h3 className="text-2xl font-serif font-bold mb-4 line-clamp-2">
          {title}
        </h3>
        <p className="text-muted-foreground mb-6 flex-grow">
          {description}
        </p>
        
        <div className="space-y-3 pt-4 border-t border-border">
          <div>
            <span className="text-xs font-bold uppercase text-foreground">STEM Focus</span>
            <p className="text-sm text-muted-foreground">{stem}</p>
          </div>
          <div>
            <span className="text-xs font-bold uppercase text-foreground">SEL Focus</span>
            <p className="text-sm text-muted-foreground">{sel}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
