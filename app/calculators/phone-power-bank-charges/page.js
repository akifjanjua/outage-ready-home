import { createPageMetadata } from "@/lib/seo";
import PhonePowerBankChargesCalculator from "@/components/calculators/PhonePowerBankChargesCalculator";

export const metadata = createPageMetadata({
  title: "Power Bank Phone Charging Calculator",
  description:
    "Estimate how many full phone charges a power bank may provide during a power outage based on battery capacity, phone size and charging efficiency.",
  path: "/calculators/phone-power-bank-charges",
  type: "website",
});

export default function PhonePowerBankChargesPage() {
  return <PhonePowerBankChargesCalculator />;
}