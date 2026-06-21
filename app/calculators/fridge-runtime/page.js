import { createPageMetadata } from "@/lib/seo";
import FridgeRuntimeCalculator from "@/components/calculators/FridgeRuntimeCalculator";

export const metadata = createPageMetadata({
  title: "Fridge Runtime Calculator",
  description:
    "Estimate how long a portable power station or battery backup may run your refrigerator during a power outage based on wattage, battery capacity and efficiency.",
  path: "/calculators/fridge-runtime",
  type: "website",
});

export default function FridgeRuntimePage() {
  return <FridgeRuntimeCalculator />;
}