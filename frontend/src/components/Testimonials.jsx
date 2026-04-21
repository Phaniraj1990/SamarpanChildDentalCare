import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Dipu patel.",
    role: "Dad of 8 & 6 Years Old",
    initial: "D",
    text: "\"Honestly, I have visited Samarpan Child dental care for my second opinion but that was the best decision I made for my both children. We did root canal treatment for my both children, 8 & 6 years same day. Today it's been more than 8 months, caps & cements are working well.\"",
    bg: "bg-[#B3E8D5]", // Soft Mint
    textColor: "text-[#0F766E]", // Dark Teal
    avatarBg: "bg-[#0F766E]", 
  },
  {
    name: "Paresh Paramar.",
    role: "Dad of Ketav, 5 Years Old", 
    initial: "P",
    text: "\"Clean, calm, and unbelievably patient staff. The clinic feels more like a play area than a hospital. Highly recommended in Bharuch.\"",
    bg: "bg-[#FCE68B]", // Soft Yellow
    textColor: "text-[#78350F]", // Dark Brown
    avatarBg: "bg-[#B45309]", 
  },
  {
    name: "Sneha V.",
    role: "Mom of Kiara, 8 Years Old",
    initial: "S",
    text: "\"Got Kiara's braces here and the entire process was explained in a way she understood. Fair pricing too — no hidden surprises.\"",
    bg: "bg-[#FFA3A3]", // Soft Coral
    textColor: "text-[#881337]", // Dark Red
    avatarBg: "bg-[#BE123C]", 
  },
  {
    name: "Anju Singh.",
    role: "Mom of Navya, 3 Years Old",
    initial: "A",
    text: "\"Dr. Apexa is brilliant! She explains everything so clearly. My daughter actually looks forward to her dental visits now, which is a miracle.\"",
    bg: "bg-[#D0EFFE]", // Soft Sky Blue
    textColor: "text-[#0369A1]", // Dark Blue
    avatarBg: "bg-[#0284C7]", 
  },
  {
    name: "Hemali Prajapati.",
    role: "Mom of Krishiv, 7 Years Old",
    initial: "H",
    text: "\"Dr. Apexa mam you are highly knowledgeable dentist with a very caring attitude. Treatment is affordable and limited to only what is required. Her gentle motherly nature makes her perfect for children.\"",
    bg: "bg-[#E9D5FF]", // Soft Lilac
    textColor: "text-[#5B21B6]", // Dark Purple
    avatarBg: "bg-[#7C3AED]", 
  },
  {
    name: "Drashti P.",
    role: "Mom of Vihaan, 4 Years Old",
    initial: "D",
    text: "\"Very gentle cavity treatment for my little one. No tears at all. Thank you to the Doctor Apexa for being so kind!\"",
    bg: "bg-[#FEF3C7]", // Soft Cream
    textColor: "text-[#92400E]", // Dark Amber
    avatarBg: "bg-[#D97706]", 
  }
];

// Duplicate the array so it loops seamlessly just like the gallery
const duplicatedReviews = [...reviews, ...reviews];

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-[#FDFCF8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Header Section */}
        <div className="mb-14">
          <div className="inline-block px-3 py-1 rounded-full bg-[#0D9488]/10 text-[#0D9488] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            What Parents Say
          </div>
          <h2 className="font-display text-5xl sm:text-6xl font-bold text-zinc-900 leading-[1.05] tracking-tight">
            Loved by families <br />
            across <span className="text-[#0D9488]">Bharuch.</span>
          </h2>
        </div>
      </div>

      {/* The Infinite Scrolling Marquee Container */}
      <div className="relative overflow-hidden pb-4">
        
        {/* Left and Right Fade Gradients (Using the #FDFCF8 background color to blend perfectly) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#FDFCF8] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#FDFCF8] to-transparent z-10" />

        {/* The Animated Track */}
        <div className="animate-marquee flex gap-6 sm:gap-8 px-4 cursor-pointer py-4">
          {duplicatedReviews.map((r, i) => (
            // We give each card a fixed width (w-[340px]) so they don't squish together
            <div key={i} className="w-[320px] sm:w-[380px] shrink-0 flex flex-col transition-transform duration-300 hover:scale-[1.02]">
              
              {/* The Speech Bubble */}
              <div className={`relative p-8 rounded-[2rem] ${r.bg} shadow-sm mb-8`}>
                
                {/* The Speech Bubble Tail */}
                <div className={`absolute -bottom-3 left-10 w-8 h-8 rounded-sm rotate-45 ${r.bg}`}></div>
                
                {/* Big Faded Quote Icon */}
                <Quote className={`absolute top-6 right-6 w-12 h-12 opacity-20 ${r.textColor}`} fill="currentColor" />

                <div className="flex gap-1 mb-5 relative z-10">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className={`w-5 h-5 ${r.textColor} fill-current`} />
                  ))}
                </div>
                
                <p className="text-zinc-800 text-[16px] sm:text-[17px] leading-relaxed relative z-10">
                  {r.text}
                </p>
              </div>

              {/* The Avatar and Name */}
              <div className="flex items-center gap-4 px-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl ${r.avatarBg} shadow-sm`}>
                  {r.initial}
                </div>
                <div>
                  <div className="font-bold text-zinc-900 text-[17px] leading-none mb-1.5">{r.name}</div>
                  <div className="text-zinc-500 text-sm">{r.role}</div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}