import { createPageMetadata } from "@/lib/seo";
import PowerStationSizeCalculator from "@/components/calculators/PowerStationSizeCalculator";

export const metadata = createPageMetadata({
  title: "Portable Power Station Size Calculator",
  description:
    "Estimate how many watt-hours you need to run refrigerators, routers, lights, laptops, CPAP machines and essential devices during a power outage.",
  path: "/calculators/power-station-size",
  type: "website",
});

export default function PowerStationSizePage() {
  return <PowerStationSizeCalculator />;
}