import type { Metadata } from "next";
import AdvisoryContent from "./AdvisoryContent";

export const metadata: Metadata = {
  title: "Crop Advisory",
  description:
    "Expert crop advisory for Maharashtra farmers — cotton, soybean, grapes, sugarcane, onion and more.",
};

export default function AdvisoryPage() {
  return <AdvisoryContent />;
}
