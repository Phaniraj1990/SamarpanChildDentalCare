import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const LOGO = "https://customer-assets.emergentagent.com/job_smarpan-dental-hub/artifacts/ym2wpwc6_Samarpan%20Logo.png";

const links = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#tips", label: "Tips" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="main-navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-white/80 shadow-[0_4px_30px_rgba(13,148,136,0.08)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
        <a href="#top" data-testid="navbar-logo" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-2xl bg-white shadow-md flex items-center justify-center ring-1 ring-brand-teal/10 group-hover:rotate-6 transition-transform">
            <img src={LOGO} alt="Samarpan" className="w-9 h-9 object-contain" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg font-bold text-zinc-900">Samarpan</div>
            <div className="text-[11px] tracking-[0.18em] uppercase text-brand-teal font-semibold">Child Dental Care</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className="px-4 py-2 rounded-full text-sm font-semibold text-zinc-700 hover:text-brand-tealDeep hover:bg-brand-mint/40 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+917048512696"
            data-testid="navbar-call-btn"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-teal text-white font-bold text-sm btn-press shadow-md shadow-brand-teal/30 hover:bg-brand-tealDeep"
          >
            <Phone className="w-4 h-4" /> Call Now
          </a>
          <button
            aria-label="menu"
            data-testid="navbar-menu-toggle"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden w-11 h-11 rounded-full bg-white shadow ring-1 ring-zinc-200 flex items-center justify-center"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div data-testid="navbar-mobile-menu" className="lg:hidden px-5 pb-5">
          <div className="rounded-3xl bg-white p-3 shadow-xl ring-1 ring-zinc-100 flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-2xl text-base font-semibold text-zinc-700 hover:bg-brand-mint/40"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}