import type { Metadata } from "next";
import ContactContent from "./ContactContent";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${SITE.fullName} — call, WhatsApp or visit our Manori center.`,
};

export default function ContactPage() {
  return <ContactContent />;
}
