import { useState, useEffect, useRef } from "react";

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

  // Add your remaining photos here
];

const duplicatedGallery = [...galleryData, ...galleryData, ...galleryData];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  
  const scrollRef = useRef(null);
  
  // 1. New Trackers for Laptop Mouse Dragging
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // The JavaScript Auto-Scroll Engine
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId;

    const autoScroll = () => {
      if (!isPaused && !isDragging.current) {
        container.scrollLeft += 1; 
        
        if (container.scrollLeft >= container.scrollWidth / 3) {
          container.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  // 2. Mouse Drag Functions
  const handleMouseDown = (e) => {
    isDragging.current = true;
    // Record where the mouse clicked and where the scrollbar currently is
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    setIsPaused(false); // Resume auto-scroll if mouse leaves the area
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault(); // Stop text/images from highlighting while dragging
    
    // Calculate how far the mouse has moved
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Multiply by 1.5 to drag slightly faster
    
    // Move the scrollbar to follow the mouse
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section id="gallery" data-testid="gallery-section" className="py-24 sm:py-32 bg-white relative">
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

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        {/* 3. Added the new mouse event listeners here */}
        <div 
          ref={scrollRef}
          className="flex gap-6 px-3 py-4 overflow-x-auto touch-pan-x cursor-grab active:cursor-grabbing [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          onMouseEnter={() => setIsPaused(true)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {duplicatedGallery.map((item, i) => (
            <figure
              key={i}
              onClick={() => setSelectedImage(item)}
              className="relative w-[280px] sm:w-[340px] aspect-[4/5] rounded-[2rem] overflow-hidden ring-4 ring-white shadow-xl shrink-0 transition-transform duration-300 hover:scale-[1.02]"
            >
              {/* Added draggable="false" to prevent ghost-image dragging bugs */}
              <img src={item.file} alt={item.caption} draggable="false" className="w-full h-full object-cover select-none pointer-events-none" />
              <figcaption className="absolute bottom-4 left-4 px-4 py-2 rounded-full bg-white/95 text-sm font-bold text-zinc-900 shadow">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 cursor-zoom-out transition-opacity"
          onClick={() => setSelectedImage(null)} 
        >
          <div 
            className="relative max-w-4xl max-h-screen cursor-auto"
            onClick={(e) => e.stopPropagation()} 
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-[#FF6B6B] text-4xl transition-colors"
            >
              &times;
            </button>
            <img 
              src={selectedImage.file} 
              alt={selectedImage.caption} 
              className="max-w-full max-h-[80vh] rounded-2xl shadow-2xl object-contain"
            />
            <p className="text-center text-white text-xl mt-6 font-bold tracking-wide">
              {selectedImage.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}