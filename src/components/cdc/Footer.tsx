import logoAsset from "@/assets/logo-cdc.jpg.asset.json";
import { navLinks, site } from "@/config/site";

const logo = logoAsset.url;

export function Footer() {
  return (
    <footer className="border-t border-border bg-carbon">
      <div className="mx-auto grid max-w-[1600px] gap-12 px-6 py-16 lg:grid-cols-12 lg:px-12 lg:py-20">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" width={44} height={44} loading="lazy" className="h-11 w-11 object-contain" />
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-foreground">
              Carbon Diamond Car
            </span>
          </div>
          <p className="mt-5 text-2xl font-light tracking-tight text-muted-foreground">
            {site.tagline}
          </p>
        </div>

        <nav className="flex flex-col gap-3 lg:col-span-3">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.7rem] uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3 lg:col-span-4">
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="text-[0.7rem] uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-primary"
          >
            Instagram — {site.instagramHandle}
          </a>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="text-[0.7rem] uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-primary"
          >
            WhatsApp — {site.phone}
          </a>
          <a
            href={site.phoneHref}
            className="text-[0.7rem] uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-primary"
          >
            Téléphone — {site.phone}
          </a>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-[1600px] px-6 py-6 text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground lg:px-12">
          © {new Date().getFullYear()} Carbon Diamond Car
        </div>
      </div>
    </footer>
  );
}