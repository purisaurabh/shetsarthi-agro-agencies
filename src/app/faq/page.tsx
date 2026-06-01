import type { Metadata } from "next";
import FAQContent from "./FAQContent";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about SHETSARTHI AGRO AGENCIES in Maharashtra.",
};

export default function FAQPage() {
  return <FAQContent />;
}
