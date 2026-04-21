import { motion } from "framer-motion";
import { Sparkles, Phone, ArrowRight, Star } from "lucide-react";

const HERO_IMG = "https://static.prod-images.emergentagent.com/jobs/4fca5aa2-14d2-4097-8f74-7be941121603/images/604cf2b16562c5cfb33e12bd21166ccdba1f78507b857ee4b51cc5b2b7684d7e.png";
const TOOTH_3D = "https://static.prod-images.emergentagent.com/jobs/4fca5aa2-14d2-4097-8f74-7be941121603/images/febf56d3e923ceb0ea70d0bb97225c0926cbdbec1cacae0fe65ec0ea0dc0fb5a.png";

export default function Hero() {
  return (
    <section id="top" data-testid="hero-section" className="relative pt-28 pb-20 sm:pt-32 sm:pb-28 overflow-hidden">
      {/* background blobs */}
      <div className="blob w-[480px] h-[480px] bg-brand-mint -top-24 -left-24" />
      <div className="blob w-[520px] h-[520px] bg-brand-yellow/50 top-40 -right-32" />
      <div className="blob w-[320px] h-[320px] bg-brand-coral/30 bottom-0 left-1/3" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
        {/* LEFT */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm ring-1 ring-brand-teal/15 mb-6"
            data-testid="hero-badge"
          >
            <Sparkles className="w-4 h-4 text-brand-teal" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-tealDeep">
              Kids' Dentist · Bharuch
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight text-zinc-900"
          >
            Happy smiles,
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-brand-tealDeep">brave hearts</span>
              <span className="absolute left-0 right-0 bottom-2 h-4 bg-brand-yellow/70 -z-0 rounded-full" />
            </span>
            <span className="text-brand-coral">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 max-w-xl text-lg sm:text-xl text-zinc-600 leading-relaxed"
          >
            Samarpan Child Dental Care is a gentle, playful clinic in Bharuch made just for little
            teeth. Led by <strong className="text-zinc-800">Dr. Apexa P. Yadav</strong>, we turn every
            dental visit into an adventure your child will actually look forward to.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              data-testid="hero-cta-book"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#0D9488] text-white font-bold text-base btn-press shadow-lg shadow-brand-teal/30 hover:bg-brand-tealDeep"
            >
              Book a visit <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+917048512696"
              data-testid="hero-cta-call"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-zinc-900 font-bold text-base ring-2 ring-zinc-900/10 btn-press hover:ring-brand-teal/40"
            >
              <Phone className="w-4 h-4" /> 07048512696
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex items-center gap-6"
          >
            <div className="flex -space-x-3">
              {["bg-brand-mint", "bg-brand-yellow", "bg-brand-coral/70", "bg-brand-sky"].map((c, i) => (
                <div
                  key={i}
                  className={`w-10 h-10 rounded-full ring-[3px] ring-white ${c} flex items-center justify-center font-display font-bold text-sm text-zinc-800`}
                >
                  {["A", "R", "K", "S"][i]}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-yellow text-brand-yellow" />
                ))}
              </div>
              <p className="text-sm text-zinc-600 mt-1">
                <span className="font-bold text-zinc-900">1500+</span> happy little patients
              </p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative"
        >
          {/* big blob */}
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <div className="w-[92%] aspect-square rounded-[48%_52%_60%_40%/55%_45%_55%_45%] bg-gradient-to-br from-brand-mint via-brand-sky to-brand-yellow animate-wiggle" />
          </div>

          <div className="relative rounded-[2.5rem] overflow-hidden ring-8 ring-white shadow-2xl">
            <img src={HERO_IMG} alt="Happy child at dentist" className="w-full h-full object-cover aspect-[4/5]" />
          </div>

          {/* floating tooth 3D */}
          <img
            src={TOOTH_3D}
            alt=""
            aria-hidden
            className="absolute -top-8 -right-4 w-40 sm:w-48 animate-float-slow drop-shadow-xl"
          />

          {/* Info Card */}
          <div
            data-testid="hero-info-card"
            className="absolute -bottom-6 -left-4 sm:-left-10 bg-white rounded-3xl p-5 shadow-2xl ring-1 ring-zinc-100 w-[min(78%,280px)] animate-float-med"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-coral/15 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-brand-coral" />
              </div>
              <div>
                <div className="font-display font-bold text-zinc-900 leading-tight">Fear-free Visits</div>
                <div className="text-xs text-zinc-500">Games, stories & comfort care</div>
              </div>
            </div>
          </div>

          {/* sticker */}
          <div className="absolute -top-2 -left-4 sm:-left-8 w-24 h-24 rounded-full bg-brand-yellow text-brand-tealDeep font-display font-bold text-sm flex items-center justify-center shadow-lg animate-float-fast rotate-[-8deg] p-3 text-center leading-tight">
            No scary<br />chairs!
          </div>
        </motion.div>
      </div>
    </section>
  );
}