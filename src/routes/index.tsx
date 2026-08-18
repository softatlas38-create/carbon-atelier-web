import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/cdc/Navbar";
import { Hero } from "@/components/cdc/Hero";
import { BrandIntro } from "@/components/cdc/BrandIntro";
import { Services } from "@/components/cdc/Services";
import { Showcase } from "@/components/cdc/Showcase";
import { BeforeAfter } from "@/components/cdc/BeforeAfter";
import { Principles } from "@/components/cdc/Principles";
import { VehicleShowcase } from "@/components/cdc/VehicleShowcase";
import { Contact } from "@/components/cdc/Contact";
import { Footer } from "@/components/cdc/Footer";

const title = "Carbon Diamond Car — Atelier automobile de luxe au Maroc";
const description =
  "Préparation, protection et personnalisation automobile : habillage, PPF, polissage, tôlerie, jantes et teinture des vitres pour véhicules d'exception.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-carbon text-foreground">
      <Navbar />
      <main>
        <Hero />
        <BrandIntro />
        <Services />
        <Showcase />
        <BeforeAfter />
        <Principles />
        <VehicleShowcase />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
