/**
 * Central, editable configuration for Carbon Diamond Car.
 * Update contact details here — nowhere else.
 */
export const site = {
  name: "Carbon Diamond Car",
  tagline: "Automotive Excellence.",
  phone: "+212 667 469 640",
  phoneHref: "tel:+212667469640",
  whatsapp: "https://wa.me/212667469640",
  instagramHandle: "@carbon.diamond.car",
  instagram: "https://instagram.com/carbon.diamond.car",
  /** TODO: remplacer par l'adresse e-mail officielle. */
  email: "",
  /** TODO: renseigner la ville / adresse exacte de l'atelier. */
  location: "",
} as const;

export const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#realisations" },
  { label: "À propos", href: "#a-propos" },
  { label: "Contact", href: "#contact" },
] as const;