// Notice: ZERO import statements at the top!

// 1. Create one clean list linking the file name to the caption
const galleryData = [
  { file: "/gallery/Doctor3.jpg", caption: "Your Child's Friendly Dr.!" },
  { file: "/gallery/clinic1.jpeg", caption: "Happy Zone😊" },
  { file: "/gallery/patient5.jpeg", caption: "First visit!" },
  { file: "/gallery/patient1.jpeg", caption: "Smile Transformation✨" },
  { file: "/gallery/patient4.jpeg", caption: "Brave smile ✦" },
  { file: "/gallery/patient3.jpeg", caption: "Little stars" },
  { file: "/gallery/patient2.jpeg", caption: "Painless Injection" },
  { file: "/gallery/Confidence Boost.jpeg", caption: "Confidence Boost! ✨" },
  { file: "/gallery/Bioflx Beauty.jpeg", caption: "Bioflx Beauty" },
  { file: "/gallery/Crown Success.jpeg", caption: "Crown Success ✨" },
  { file: "/gallery/Healthy Bite.jpeg", caption: "Healthy Bite ✨" },
  { file: "/gallery/Full Rehabilitation.jpeg", caption: "Full Rehabilitation! ✨" },
  { file: "/gallery/Oral Hygiene.jpeg", caption: "Oral Hygiene ✨" },
  { file: "/gallery/Early Care.jpeg", caption: "Early Care ✨" },
  { file: "/gallery/Smile Restoration.jpeg", caption: "Smile Restoration ✨" },
  { file: "/gallery/Growth Support.jpeg", caption: "Growth Support ✨" },
  { file: "/gallery/Smile Fix.jpeg", caption: "Smile Fix ✨" },
  { file: "/gallery/Happy Teeth.jpeg", caption: "Happy Teeth ✨" },
  { file: "/gallery/Smile Revival.jpeg", caption: "Smile Revival ✨" },
  { file: "/gallery/Teeth Renewal.jpeg", caption: "Teeth Renewal ✨" },
  // Just keep adding your remaining 11 photos exactly like this!
  // { file: "/gallery/your_photo.jpg", caption: "Your new caption" },
];

// 2. Duplicate the single list for the infinite marquee scroll
const duplicatedGallery = [...galleryData, ...galleryData];

export default function Gallery() {
  return (
    <section id="gallery" data-testid="gallery-section" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-14">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-[#0F766E]/5 text-[#0F766E] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Our Happy Place
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-zinc-900 leading-[1.05]">
              Peek inside the <span className="text-[#FF6B6B]">giggle zone</span>.
            </h2>
          </div>
          <p className="max-w-sm text-zinc-600 text-base sm:text-lg">
            Our clinic is colourful, calm and kid-approved — with toy corners, story books and
            tiny tools made just for little mouths.
          </p>
        </div>
      </div>

      {/* The Crash-Proof Marquee Container */}
      <div className="relative overflow-hidden">
        {/* Left and Right White Fade Gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        {/* The Animated Track */}
        <div className="animate-marquee flex gap-6 px-3 cursor-pointer py-4">
          
          {/* 3. Map over our new combined object list */}
          {duplicatedGallery.map((item, i) => (
            <figure
              key={i}
              className="relative w-[280px] sm:w-[340px] aspect-[4/5] rounded-[2rem] overflow-hidden ring-4 ring-white shadow-xl shrink-0 transition-transform duration-300 hover:scale-[1.02]"
            >
              <img src={item.file} alt={item.caption} className="w-full h-full object-cover" />
              <figcaption className="absolute bottom-4 left-4 px-4 py-2 rounded-full bg-white/95 text-sm font-bold text-zinc-900 shadow">
                {item.caption}
              </figcaption>
            </figure>
          ))}

        </div>
      </div>
    </section>
  );
}