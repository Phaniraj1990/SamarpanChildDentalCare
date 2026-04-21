import { GraduationCap, Heart, ShieldCheck, Smile } from "lucide-react";

const reasons = [
  {
    title: "Specialised Child Training",
    desc: "Children aren't just mini-adults. Dr. Apexa has specialized training to handle everything from teething toddlers to anxious teens with gentle patience.",
    icon: GraduationCap,
    cardBg: "bg-[#D0EFFE]", // Soft Sky Blue Card
    iconColor: "text-[#0369A1]", 
  },
  {
    title: "Kid-Sized Equipment",
    desc: "Standard dental tools can be scary and uncomfortable for tiny mouths. We use specially designed, child-sized equipment for a painless experience.",
    icon: Smile,
    cardBg: "bg-[#FCE68B]", // Soft Sunny Yellow Card
    iconColor: "text-[#78350F]", 
  },
  {
    title: "Anxiety-Free Zone",
    desc: "A child's first visit shapes how they view dentists for life. Our playful environment ensures they build positive, fearless habits early on.",
    icon: Heart,
    cardBg: "bg-[#FFA3A3]", // Soft Coral Card
    iconColor: "text-[#881337]", 
  },
  {
    title: "Preventative Focus",
    desc: "Baby teeth guide adult teeth into place. We focus on catching tiny issues before they become painful (and expensive) problems later.",
    icon: ShieldCheck,
    cardBg: "bg-[#B3E8D5]", // Soft Mint Card
    iconColor: "text-[#0F766E]", 
  }
];

export default function WhyPediatric() {
  return (
    // The section background is now a warm, soft cream to match the Testimonials
    <section className="py-24 sm:py-32 bg-[#F0FDFA]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Header Area */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-block px-3 py-1 rounded-full bg-[#0D9488]/10 text-[#0D9488] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            The Samarpan Difference
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-zinc-900 leading-[1.1] tracking-tight">
            Why choose a <br />
            <span className="text-[#0D9488]">pediatric</span> dentist?
          </h2>
          <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
            You wouldn't take your child to a general surgeon for a scraped knee. Their smiles deserve that same specialized, gentle care.
          </p>
        </div>

        {/* 2x2 Grid Area */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {reasons.map((r, i) => {
            const Icon = r.icon; 
            return (
              // The card background now uses the vibrant pastel colors!
              <div 
                key={i} 
                className={`group relative p-8 sm:p-10 rounded-[2.5rem] ${r.cardBg} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
              >
                <div className="relative z-10">
                  {/* The icon box is now pure white to pop against the colored cards */}
                  <div className="w-14 h-14 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center mb-6 shadow-sm">
                    <Icon className={`w-7 h-7 ${r.iconColor}`} strokeWidth={2.25} />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-3">{r.title}</h3>
                  {/* Text is a dark crisp gray so it is perfectly readable on colors */}
                  <p className="text-[16px] text-zinc-800/90 leading-relaxed font-medium">
                    {r.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}