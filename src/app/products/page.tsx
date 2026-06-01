import type { Metadata } from "next";
import ProductsContent from "./ProductsContent";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Premium seeds, fertilizers, pesticides and farm equipment curated for Maharashtra soil and climate.",
};

export default function ProductsPage() {
  return <ProductsContent />;
}
