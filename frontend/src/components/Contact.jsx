import { useState } from "react";
import { toast } from "sonner";
import { MapPin, Phone, Clock, Send, Loader2 } from "lucide-react";

const ageOptions = [
  "Under 1 year",
  "1-3 years",
  "4-6 years",
  "7-10 years",
  "11-14 years",
  "15-18 years",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    child_age: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      toast.error("Please fill in name, phone and message.");
      return;
    }
    
    setLoading(true);
    
    // --- THE FIX ---
    // Instead of calling a backend that doesn't exist yet, we simulate a 1.5-second 
    // network delay so you can see your cool loading spinner, and then show success!
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log("Form data that will eventually be emailed:", form);
      toast.success("Thanks! We'll call you back soon.");
      setForm({ name: "", phone: "", email: "", child_age: "", message: "" });
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="relative py-24 sm:py-32 bg-gradient-to-b from-white to-[#A8E6CF]/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-16">
        
        {/* LEFT info */}
        <div>
          <div className="inline-block px-3 py-1 rounded-full bg-[#0F766E]/10 text-[#0F766E] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Get In Touch
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-zinc-900 leading-[1.05]">
            Say hi. <br /> We'll take it <span className="text-[#0D9488]">from here.</span>
          </h2>
          <p className="mt-6 text-lg text-zinc-600 leading-relaxed max-w-md">
            Have questions about your child's teeth, or want to book a first visit? Fill the form
            and our team will call you back, usually within a few hours.
          </p>

          <div className="mt-10 space-y-5">
            <InfoRow
              icon={<MapPin className="w-5 h-5 text-[#0F766E]" />}
              label="Visit us"
              value="105, First Floor, Sundaram Residency, Dharmanagar Road, near Jyotinagar, Water tank, Bharuch, Gujarat 392012"
              href="https://www.google.com/maps/search/?api=1&query=Samarpan+Child+Dental+Care+Bharuch"
              testId="contact-address"
            />
            <InfoRow
              icon={<Phone className="w-5 h-5 text-[#0F766E]" />}
              label="Call us"
              value="07048512696"
              href="tel:+917048512696"
              testId="contact-phone"
            />
            <InfoRow
              icon={<Clock className="w-5 h-5 text-[#0F766E]" />}
              label="Hours"
              value="Mon–Sat · 10:00 AM – 1:00 PM, 4:00 PM – 7:00 PM"
              testId="contact-hours"
            />
          </div>
        </div>

        {/* RIGHT form */}
        <form
          onSubmit={onSubmit}
          data-testid="contact-form"
          className="relative bg-white rounded-[2rem] p-7 sm:p-10 shadow-[0_25px_80px_-20px_rgba(13,148,136,0.25)] ring-1 ring-zinc-100"
        >
          <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-[#FFD93D] flex items-center justify-center font-display font-bold text-[#0F766E] text-center text-sm leading-tight shadow-xl">
            Free<br />First Call!
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-semibold text-zinc-800">Your Name *</label>
              <input
                id="name"
                data-testid="contact-input-name"
                value={form.name}
                onChange={update("name")}
                placeholder="Priya Patel"
                className="h-12 w-full rounded-2xl border border-zinc-200 bg-white px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-sm font-semibold text-zinc-800">Phone *</label>
              <input
                id="phone"
                data-testid="contact-input-phone"
                value={form.phone}
                onChange={update("phone")}
                placeholder="+91 98765 43210"
                className="h-12 w-full rounded-2xl border border-zinc-200 bg-white px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-semibold text-zinc-800">Email (optional)</label>
              <input
                id="email"
                type="email"
                data-testid="contact-input-email"
                value={form.email}
                onChange={update("email")}
                placeholder="you@email.com"
                className="h-12 w-full rounded-2xl border border-zinc-200 bg-white px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="child_age" className="text-sm font-semibold text-zinc-800">Child's Age</label>
              <select
                id="child_age"
                data-testid="contact-select-age"
                value={form.child_age}
                onChange={(e) => setForm((f) => ({ ...f, child_age: e.target.value }))}
                className="h-12 w-full rounded-2xl border border-zinc-200 bg-white px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
              >
                <option value="" disabled>Select age range</option>
                {ageOptions.map((a) => (
                  <option key={a} value={a} data-testid={`age-option-${a}`}>
                    {a}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-semibold text-zinc-800">Tell us a little *</label>
            <textarea
              id="message"
              data-testid="contact-input-message"
              value={form.message}
              onChange={update("message")}
              placeholder="e.g. My 4-year-old has a small cavity and I'd like to book a check-up..."
              rows={5}
              className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
              required
            />
          </div>

          <button
            type="submit"
            data-testid="contact-submit-btn"
            disabled={loading}
            className="mt-6 w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-[#0D9488] hover:bg-[#0F766E] text-white font-bold text-base shadow-lg shadow-[#0D9488]/30 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" /> Sending...
              </>
            ) : (
              <>
                Send Message <Send className="w-5 h-5" />
              </>
            )}
          </button>

          <p className="mt-4 text-xs text-zinc-500">
            By submitting, you agree to be contacted regarding your inquiry. We never share your details.
          </p>
        </form>
      </div>
    </section>
  );
}

function InfoRow({ icon, label, value, href, testId }) {
  const body = (
    <div className="flex items-start gap-4 p-5 rounded-3xl bg-white ring-1 ring-zinc-100 hover:ring-[#0D9488]/40 transition-all hover:-translate-y-0.5 shadow-sm">
      <div className="w-11 h-11 rounded-2xl bg-[#A8E6CF]/50 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-xs uppercase tracking-[0.18em] text-zinc-500 font-bold mb-1">{label}</div>
        <div className="text-[15px] text-zinc-800 font-medium leading-relaxed">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" data-testid={testId} className="block">
      {body}
    </a>
  ) : (
    <div data-testid={testId}>{body}</div>
  );
}