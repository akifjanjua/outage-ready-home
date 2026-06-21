const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://outagereadyhome.com";

export default function sitemap() {
const routes = [
  "",
  "/about",
  "/contact",
  "/affiliate-disclosure",
  "/privacy-policy",
  "/editorial-policy",

  "/guides",
  "/guides/best-portable-power-stations",
  "/guides/refrigerator-backup-battery",
  "/guides/how-long-can-portable-power-station-run-refrigerator",
  "/guides/apartment-power-outage-kit",
  "/guides/best-emergency-lights-for-power-outages",
  "/guides/portable-power-station-vs-generator",
  "/guides/how-to-keep-wifi-running-during-power-outage",
  "/guides/best-power-banks-for-power-outages",

  "/calculators",
  "/calculators/power-station-size",
  "/calculators/fridge-runtime",
  "/calculators/wifi-router-runtime",
  "/calculators/phone-power-bank-charges",
  "/calculators/apartment-outage-kit-builder",
];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.includes("/guides") ? 0.8 : 0.7,
  }));
}