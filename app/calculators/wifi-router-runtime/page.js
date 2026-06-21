import { createPageMetadata } from "@/lib/seo";
import WifiRouterRuntimeCalculator from "@/components/calculators/WifiRouterRuntimeCalculator";

export const metadata = createPageMetadata({
  title: "Wi-Fi Router Runtime Calculator",
  description:
    "Estimate how long a battery may keep your Wi-Fi router, modem and small home office devices running during a power outage.",
  path: "/calculators/wifi-router-runtime",
  type: "website",
});

export default function WifiRouterRuntimePage() {
  return <WifiRouterRuntimeCalculator />;
}