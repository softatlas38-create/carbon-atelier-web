import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { navLinks, site } from "@/config/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-700 [transition-timing-function:var(--ease-lux)]",
        scrolled
          ? "border-b border-border bg-carbon/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 lg:px-12">
        <a href="#accueil" className="flex items-center gap-3" aria-label={site.name}>
          <img src={logo} alt="" width={40} height={40} className="h-9 w-9 object-contain" />
          <span className="hidden text-[0.7rem] font-semibold uppercase leading-tight tracking-[0.28em] text-foreground sm:block">
            Carbon Diamond
            <span className="block text-[0.6rem] tracking-[0.4em] text-muted-foreground">Car</span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-[0.7rem] font-medium uppercase tracking-[0.24em] text-foreground/70 transition-colors duration-500 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden border border-border px-6 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-foreground transition-all duration-500 hover:border-primary hover:text-primary lg:inline-flex"
          >
            Demander un devis
          </a>
          <button
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center border border-border text-foreground transition-colors hover:border-primary hover:text-primary lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 top-0 z-40 flex flex-col justify-between bg-carbon px-6 pb-10 pt-28 transition-all duration-500 [transition-timing-function:var(--ease-lux)] lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <nav className="flex flex-col gap-2">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: `${open ? 80 + i * 60 : 0}ms` }}
              className={cn(
                "border-b border-border py-5 text-3xl font-bold uppercase tracking-tight text-foreground transition-all duration-700 [transition-timing-function:var(--ease-lux)]",
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="space-y-4">
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="flex w-full items-center justify-center bg-primary px-6 py-5 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-primary-foreground"
          >
            Demander un devis
          </a>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="block text-center text-[0.7rem] uppercase tracking-[0.24em] text-muted-foreground"
          >
            WhatsApp · {site.phone}
          </a>
        </div>
      </div>
    </header>
  );
}