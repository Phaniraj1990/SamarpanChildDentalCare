
import { motion } from "framer-motion";
import { Award, Heart, GraduationCap, Users } from "lucide-react";

// 1. Import your local images at the very top
import photo1 from "../assets/Doctor2.jpg";

const DOCTOR_IMG = photo1; // Use the imported image variable

const highlights = [
  { icon: GraduationCap, label: "BDS, MDS (Pediatric Dentistry)" },
  { icon: Award, label: "6+ years treating little patients" },
  { icon: Heart, label: "Certified behaviour management expert" },
  { icon: Users, label: "1500+ parents trust our care" },
];

export default function About() {
  return (
    <section id="about" data-testid="about-section" className="relative py-24 sm:py-32 bg-gradient-to-b from-white to-brand-cream/40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-center">
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute inset-0 -z-10 flex items-center justify-center">
            <div className="w-[90%] aspect-square rounded-[50%_50%_40%_60%/60%_40%_60%_40%] bg-gradient-to-br from-brand-coral/50 to-brand-yellow/60" />
          </div>
          <div className="relative rounded-[2.5rem] overflow-hidden ring-8 ring-white shadow-2xl">
            <img src={DOCTOR_IMG} alt="Dr Apexa P Yadav" className="w-full aspect-[4/5] object-cover" />
          </div>
          <div className="absolute -bottom-6 right-4 sm:right-10 bg-white rounded-3xl p-5 shadow-xl ring-1 ring-zinc-100 max-w-[260px]">
            <div className="text-xs uppercase tracking-[0.2em] text-brand-teal font-bold">Pediatric Dentist</div>
            <div className="font-display text-xl font-bold text-zinc-900 mt-1">Dr. Apexa P. Yadav</div>
            <div className="text-sm text-zinc-500 mt-1">Founder · Samarpan</div>
          </div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-brand-tealDeep/5 text-brand-tealDeep text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Meet Your Dentist
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-zinc-900 leading-[1.05]">
            Gentle hands.<br />
            <span className="text-brand-teal">Patient heart.</span>
          </h2>
          <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
            Dr. Apexa P. Yadav built Samarpan around one simple idea — children deserve a dentist
            who listens before they treat. Every corner is designed to calm nerves, every tool is
            child-sized, and every appointment starts with a high-five.
          </p>
          <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
            She specialises in behaviour management, preventive care and early orthodontic intervention,
            so your child grows up with a healthy smile and zero fear of the dentist's chair.
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {highlights.map(({ icon: Icon, label }) => (
              <li
                key={label}
                data-testid={`about-highlight-${label.substring(0, 10)}`}
                className="flex items-start gap-3 p-4 rounded-2xl bg-white ring-1 ring-zinc-100 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-mint/60 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-brand-tealDeep" />
                </div>
                <span className="text-sm font-semibold text-zinc-800 leading-snug pt-1">{label}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}