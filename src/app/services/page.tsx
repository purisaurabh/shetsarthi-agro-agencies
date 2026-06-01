import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Seeds, fertilizers, pesticides, crop advisory, soil testing, government schemes and equipment guidance for Maharashtra farmers.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
