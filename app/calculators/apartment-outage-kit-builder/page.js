import { createPageMetadata } from "@/lib/seo";
import ApartmentOutageKitBuilder from "@/components/calculators/ApartmentOutageKitBuilder";

export const metadata = createPageMetadata({
  title: "Apartment Outage Kit Builder",
  description:
    "Build a compact, renter-safe power outage kit for an apartment based on household size, outage duration, lighting, phone charging, water, food and comfort needs.",
  path: "/calculators/apartment-outage-kit-builder",
  type: "website",
});

export default function ApartmentOutageKitBuilderPage() {
  return <ApartmentOutageKitBuilder />;
}