import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const LOGO = "https://customer-assets.emergentagent.com/job_smarpan-dental-hub/artifacts/ym2wpwc6_Samarpan%20Logo.png";

// Pure SVG icons that cannot crash
const FacebookIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const InstagramIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;

export default function Footer() {
  return (
    <footer data-testid="footer-section" className="relative bg-[#0F766E] text-white overflow-hidden">
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#0D9488]/40 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-[#FFD93D]/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-20 pb-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr_1fr] gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center">
                <img src={LOGO} alt="Samarpan" className="w-10 h-10 object-contain" />
              </div>
              <div>
                <div className="font-display text-xl font-bold">Samarpan</div>
                <div className="text-[11px] tracking-[0.2em] uppercase text-[#A8E6CF] font-semibold">
                  Child Dental Care
                </div>
              </div>
            </div>
            <h3 className="font-display text-4xl sm:text-5xl font-bold mt-8 leading-tight">
              Let's grow a <br />
              <span className="text-[#FFD93D]">lifetime</span> of healthy smiles.
            </h3>
            <p className="mt-5 text-white/70 max-w-md">
              A gentle, playful dental clinic in Bharuch dedicated to children and teens.
              Led with love by Dr. Apexa P. Yadav.
            </p>

            <div className="flex items-center gap-3 mt-8">
              <a href="https://www.instagram.com/samarpan_child_dental_bharuch?igsh=eDVmaWsyajh6YTVq&utm_source=qr" className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#FFD93D] hover:text-[#0F766E] flex items-center justify-center transition-colors">
                <InstagramIcon />
              </a>
              <a href="https://www.facebook.com/share/1BY4RWLcf8/?mibextid=wwXIfr" className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#FFD93D] hover:text-[#0F766E] flex items-center justify-center transition-colors">
                <FacebookIcon />
              </a>
              <a href="https://wa.me/917048512696" className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#FFD93D] hover:text-[#0F766E] flex items-center justify-center transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-[#A8E6CF] font-bold mb-5">Visit</div>
            <div className="flex items-start gap-3 text-white/85">
              <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-[#FFD93D]" />
              <p className="text-sm leading-relaxed">
                105, First Floor, Sundaram Residency,<br />
                Dharmanagar Road, near Jyotinagar,<br />
                Water Tank, Bharuch, Gujarat 392012
              </p>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Samarpan+Child+Dental+Care+Bharuch"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-sm font-semibold transition-colors"
            >
              Open in Maps
            </a>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-[#A8E6CF] font-bold mb-5">Reach Out</div>
            <a href="tel:+917048512696" className="flex items-start gap-3 text-white/85 hover:text-[#FFD93D]">
              <Phone className="w-5 h-5 shrink-0 mt-0.5 text-[#FFD93D]" />
              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-white/50 font-bold">Call</div>
                <div className="text-base font-bold">07048512696</div>
              </div>
            </a>
            <div className="flex items-start gap-3 text-white/85 mt-5">
              <Clock className="w-5 h-5 shrink-0 mt-0.5 text-[#FFD93D]" />
              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-white/50 font-bold">Hours</div>
                <div className="text-sm leading-relaxed">
                  Mon–Sat · 10:00 AM – 1:00PM<br />
                            4:00 PM – 7:00 PM<br />
                  <span className="text-white/60">Sun · Holiday</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Samarpan Child Dental Care · All rights reserved.</p>
          <p>Crafted with <span className="text-[#FFD93D]">♥</span> for tiny smilers of Bharuch.</p>
        </div>
      </div>
    </footer>
  );
}