
// 1. Import your local images at the very top
import photo2 from "../assets/Doctor3.jpg";     //your child's friendly dr
import photo3 from "../assets/patient1.jpeg";  // smile transformation
import photo4 from "../assets/patient2.jpeg";  // Injection
import photo5 from "../assets/patient3.jpeg";  // litte stars
import photo6 from "../assets/patient4.jpeg";  // brave smile
import photo7 from "../assets/patient5.jpeg";  // first visit
import photo8 from "../assets/clinic1.jpeg";   // happy zone


const images = [
  photo2, // Use the imported image variable
  photo8, // Use the imported image variable
  photo7, // Use the imported image variable
  photo3, // Use the imported image variable
  photo6, // Use the imported image variable
  photo5, // Use the imported image variable
  photo4, // Use the imported image variable
  
  
  

];

const captions = ["Your Child's Friendly Dr.!", "Happy Zone😊", "First visit!", "Smile Transformation✨", "Brave smile ✦", "Little stars", "Painless Injection"];

// We duplicate the lists so the animation can loop perfectly without a gap
const duplicatedImages = [...images, ...images];
const duplicatedCaptions = [...captions, ...captions];

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
          {duplicatedImages.map((src, i) => (
            <figure
              key={i}
              className="relative w-[280px] sm:w-[340px] aspect-[4/5] rounded-[2rem] overflow-hidden ring-4 ring-white shadow-xl shrink-0 transition-transform duration-300 hover:scale-[1.02]"
            >
              <img src={src} alt={duplicatedCaptions[i]} className="w-full h-full object-cover" />
              <figcaption className="absolute bottom-4 left-4 px-4 py-2 rounded-full bg-white/95 text-sm font-bold text-zinc-900 shadow">
                {duplicatedCaptions[i]}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}