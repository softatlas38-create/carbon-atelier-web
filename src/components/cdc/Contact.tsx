import { useState, type FormEvent } from "react";
import { MessageCircle, Phone, Instagram } from "lucide-react";
import { toast } from "sonner";
import { site } from "@/config/site";
import { GoldButton } from "./GoldButton";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const serviceOptions = [
  "Habillage",
  "Diagnostique",
  "Tôlerie",
  "Lissage / Polissage",
  "Lavage / PPF",
  "Jantes",
  "Teinture des vitres",
];

const fieldClass =
  "w-full border border-border bg-transparent px-4 py-4 text-sm text-foreground outline-none transition-colors duration-500 placeholder:text-muted-foreground/70 focus:border-primary";

export function Contact() {
  const [sending, setSending] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setSending(true);

    const message = [
      `Nom : ${data.get("name")}`,
      `Téléphone : ${data.get("phone")}`,
      data.get("email") ? `Email : ${data.get("email")}` : "",
      `Véhicule : ${data.get("vehicle")}`,
      `Service : ${data.get("service")}`,
      "",
      String(data.get("message") ?? ""),
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`${site.whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
    toast.success("Votre demande est prête — finalisez l'envoi sur WhatsApp.");
    form.reset();
    setSending(false);
  }

  return (
    <section id="contact" className="relative bg-background py-24 lg:py-36">
      <div className="mx-auto grid max-w-[1600px] gap-14 px-6 lg:grid-cols-12 lg:gap-20 lg:px-12">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Contact"
            title="Prêt à transformer votre véhicule ?"
            subtitle="Décrivez votre projet, nous revenons vers vous avec une proposition adaptée à votre véhicule."
          />

          <Reveal delay={180}>
            <div className="mt-12 space-y-3">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between border border-border px-6 py-5 transition-colors duration-500 hover:border-primary"
              >
                <span className="flex items-center gap-4">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  <span className="text-[0.7rem] uppercase tracking-[0.24em] text-foreground">
                    WhatsApp
                  </span>
                </span>
                <span className="text-sm text-muted-foreground group-hover:text-primary">
                  {site.phone}
                </span>
              </a>
              <a
                href={site.phoneHref}
                className="group flex items-center justify-between border border-border px-6 py-5 transition-colors duration-500 hover:border-primary"
              >
                <span className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-[0.7rem] uppercase tracking-[0.24em] text-foreground">
                    Téléphone
                  </span>
                </span>
                <span className="text-sm text-muted-foreground group-hover:text-primary">
                  {site.phone}
                </span>
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between border border-border px-6 py-5 transition-colors duration-500 hover:border-primary"
              >
                <span className="flex items-center gap-4">
                  <Instagram className="h-5 w-5 text-primary" />
                  <span className="text-[0.7rem] uppercase tracking-[0.24em] text-foreground">
                    Instagram
                  </span>
                </span>
                <span className="text-sm text-muted-foreground group-hover:text-primary">
                  {site.instagramHandle}
                </span>
              </a>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              className="glass-panel grid gap-4 p-6 sm:grid-cols-2 lg:p-10"
            >
              <label className="sm:col-span-1">
                <span className="eyebrow">Nom</span>
                <input name="name" required placeholder="Votre nom" className={`${fieldClass} mt-3`} />
              </label>
              <label className="sm:col-span-1">
                <span className="eyebrow">Téléphone</span>
                <input
                  name="phone"
                  required
                  type="tel"
                  placeholder="06 00 00 00 00"
                  className={`${fieldClass} mt-3`}
                />
              </label>
              <label className="sm:col-span-1">
                <span className="eyebrow">Email</span>
                <input
                  name="email"
                  type="email"
                  placeholder="optionnel"
                  className={`${fieldClass} mt-3`}
                />
              </label>
              <label className="sm:col-span-1">
                <span className="eyebrow">Véhicule</span>
                <input
                  name="vehicle"
                  required
                  placeholder="Marque et modèle"
                  className={`${fieldClass} mt-3`}
                />
              </label>
              <label className="sm:col-span-2">
                <span className="eyebrow">Service</span>
                <select name="service" required defaultValue="" className={`${fieldClass} mt-3`}>
                  <option value="" disabled>
                    Choisir un service
                  </option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s} className="bg-carbon">
                      {s}
                    </option>
                  ))}
                </select>
              </label>
              <label className="sm:col-span-2">
                <span className="eyebrow">Message</span>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Décrivez votre projet"
                  className={`${fieldClass} mt-3 resize-none`}
                />
              </label>
              <div className="sm:col-span-2">
                <GoldButton type="submit" disabled={sending} className="w-full sm:w-auto">
                  Demander un devis
                </GoldButton>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}