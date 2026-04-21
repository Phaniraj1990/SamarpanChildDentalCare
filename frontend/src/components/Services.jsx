import { motion } from "framer-motion";
import { Smile, Sparkles, Shield, Zap, Droplet, Wrench, Scissors } from "lucide-react";

const services = [
  {
    icon: Smile,
    title: "Kids Checkups",
    desc: "Comfort-focused care with advanced digital cameras and in-house X-rays to check your child’s teeth safely and comfortably.",
    bg: "bg-[#B3E8D5]", // Soft Mint
    iconBg: "bg-white",
    iconColor: "text-[#0F766E]", 
    span: "lg:col-span-2",
  },
  {
    icon: Sparkles,
    title: "Laughing Gas Sedation",
    desc: "Advanced laughing gas sedation keeps your child relaxed and comfortable throughout the treatment.",
    bg: "bg-[#FCE68B]", // Soft Yellow
    iconBg: "bg-white",
    iconColor: "text-amber-700",
  },
  {
    icon: Wrench,
    title: "Braces & Aligners",
    desc: "Early orthodontic guidance and colourful braces for teens.",
    bg: "bg-[#FFA3A3]", // Soft Coral
    iconBg: "bg-white",
    iconColor: "text-rose-700",
  },
  {
    icon: Shield,
    title: "Cavity Treatment",
    desc: "Tiny painless fillings with tooth-coloured materials. No scary drills.",
    bg: "bg-[#D0EFFE]", // Soft Sky Blue
    iconBg: "bg-white",
    iconColor: "text-sky-700",
    span: "lg:col-span-2",
  },
  {
    icon: Droplet,
    title: "Fluoride Therapy",
    desc: "Flavoured fluoride treatments that kids actually enjoy.",
    bg: "bg-[#E9D5FF]", // Soft Lilac
    iconBg: "bg-white",
    iconColor: "text-violet-700",
  },
  {
    icon: Zap,
    title: "Dental Sealants",
    desc: "Invisible shields that lock out cavities on back teeth.",
    bg: "bg-[#FEF3C7]", // Cream
    iconBg: "bg-white",
    iconColor: "text-amber-800",
  },
  {
    icon: Scissors,
    title: "Tooth Extractions",
    desc: "Wobbly-tooth rescues done kindly and quickly.",
    bg: "bg-[#B3E8D5]", // Soft Mint
    iconBg: "bg-white",
    iconColor: "text-[#0F766E]",
  },
];

export default function Services() {
  return (
    <section id="services" data-testid="services-section" className="relative py-24 sm:py-32 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 rounded-full bg-[#0D9488]/10 text-[#0D9488] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Our Services
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 leading-[1.05]">
              Everything a <span className="text-[#0D9488]">little smile</span> needs — in one friendly place.
            </h2>
          </div>
          <p className="text-base sm:text-lg text-zinc-600 max-w-md">
            From the very first tooth to teenage aligners, we keep every appointment calm, playful and Patient-Centered Care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon; // <-- This fixes the missing icon bug!
            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                data-testid={`service-card-${i}`}
                className={`${s.bg} ${s.span || ""} rounded-3xl p-7 sm:p-8 relative overflow-hidden group hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-default`}
              >
                <div className={`w-14 h-14 ${s.iconBg} rounded-2xl flex items-center justify-center shadow-sm mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-7 h-7 ${s.iconColor}`} strokeWidth={2.25} />
                </div>
                <h3 className="font-display text-2xl font-bold text-zinc-900 mb-2">{s.title}</h3>
                <p className="text-[15px] text-zinc-800/90 leading-relaxed max-w-sm">{s.desc}</p>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-white/20" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}