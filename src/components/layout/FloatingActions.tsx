"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3"
        >
          <a
            href={`https://wa.me/${SITE.whatsapp.replace(/[^\d]/g, "")}?text=${encodeURIComponent(SITE.whatsappMsg)}`}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp us"
            className="group relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-110"
          >
            <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
            <MessageCircle className="relative h-6 w-6" />
          </a>
          <a
            href={`tel:${SITE.phoneRaw}`}
            aria-label="Call us"
            className="grid h-14 w-14 place-items-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 transition-transform hover:scale-110"
          >
            <Phone className="h-5 w-5" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
