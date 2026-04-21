import { BookOpen, Clock3 } from "lucide-react";

const tips = [
  {
    tag: "Habit",
    title: "Start brushing before the first tooth pops up",
    excerpt: "Gently wipe your baby's gums with a damp cloth after feeds. It builds the habit and keeps bacteria low.",
    read: "2 min read",
    bg: "bg-[#A8E6CF]", // Mint Green
    span: "lg:col-span-2 lg:row-span-2",
    big: true,
  },
  {
    tag: "Nutrition",
    title: "The 'sippy cup' trap — what to avoid",
    excerpt: "Juice in a sippy cup all day coats tiny teeth in sugar. Switch to water between meals.",
    read: "3 min read",
    bg: "bg-[#FFD93D]/70", // Soft Yellow
  },
  {
    tag: "First Visit",
    title: "When should my child see a dentist first?",
    excerpt: "By their first birthday. Early visits build trust (and prevent a lot of anxiety later).",
    read: "2 min read",
    bg: "bg-[#FF6B6B]/50", // Soft Coral/Pink
  },
  {
    tag: "Trick",
    title: "Make brushing fun in 3 minutes",
    excerpt: "Play a favourite song, take turns brushing, and let them pick a 'toothbrush of the week'.",
    read: "4 min read",
    bg: "bg-[#BAE6FD]", // Sky Blue (From your screenshot!)
    span: "lg:col-span-2",
  },
];

export default function BlogTips() {
  return (
    <section id="tips" data-testid="blog-tips-section" className="relative py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            {/* Updated Teal Hex Codes here */}
            <div className="inline-block px-3 py-1 rounded-full bg-[#0F766E]/10 text-[#0F766E] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Parent Tips
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-zinc-900 leading-[1.05]">
              Little reads for <span className="text-[#0D9488]">big wins</span>.
            </h2>
          </div>
          <p className="text-zinc-600 max-w-sm text-base sm:text-lg">
            Bite-sized dental tips curated by Dr. Apexa to help you raise cavity-free, confident smilers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-5">
          {tips.map((t, i) => (
            <article
              key={t.title}
              data-testid={`tip-card-${i}`}
              className={`${t.bg} ${t.span || ""} group rounded-3xl p-7 sm:p-8 relative overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-white/70 backdrop-blur text-xs font-bold uppercase tracking-[0.18em] text-zinc-800">
                    {t.tag}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-zinc-700">
                    <Clock3 className="w-3 h-3" /> {t.read}
                  </span>
                </div>
                <h3 className={`font-display font-bold text-zinc-900 leading-tight ${t.big ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl"}`}>
                  {t.title}
                </h3>
                <p className="mt-3 text-[15px] text-zinc-700/90 leading-relaxed max-w-md">{t.excerpt}</p>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-zinc-900 group-hover:gap-3 transition-all">
                <BookOpen className="w-4 h-4" /> Read tip
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}