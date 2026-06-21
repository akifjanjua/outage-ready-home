const guideLinks = [
  {
    label: "Portable Power Stations",
    href: "/guides/best-portable-power-stations",
  },
  {
    label: "Power Station vs Generator",
    href: "/guides/portable-power-station-vs-generator",
  },
  {
    label: "Refrigerator Backup",
    href: "/guides/refrigerator-backup-battery",
  },
  {
    label: "Wi-Fi Outage Backup",
    href: "/guides/how-to-keep-wifi-running-during-power-outage",
  },
  {
    label: "All Guides",
    href: "/guides",
  },
];

const calculatorLinks = [
  {
    label: "Battery Size Calculator",
    href: "/calculators/power-station-size",
  },
  {
    label: "Fridge Runtime Calculator",
    href: "/calculators/fridge-runtime",
  },
  {
    label: "Wi-Fi Runtime Calculator",
    href: "/calculators/wifi-router-runtime",
  },
  {
    label: "Apartment Kit Builder",
    href: "/calculators/apartment-outage-kit-builder",
  },
  {
    label: "All Calculators",
    href: "/calculators",
  },
];

const siteLinks = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Editorial Policy",
    href: "/editorial-policy",
  },
  {
    label: "Affiliate Disclosure",
    href: "/affiliate-disclosure",
  },
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-950">
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <a href="/" className="flex items-center gap-3">
              <img
                src="/logo.svg"
                alt="Outage Ready Home logo"
                className="h-12 w-12 rounded-xl shadow-sm"
              />

              <span className="text-xl font-black tracking-tight">
                Outage Ready Home
              </span>
            </a>

            <p className="mt-5 max-w-md leading-7 text-slate-600">
              Practical backup power guides, outage calculators and emergency
              preparedness resources for everyday homes, apartments and
              essential devices.
            </p>

            <div className="mt-6 rounded-3xl bg-slate-950 p-5 text-white">
              <p className="font-black text-yellow-300">
                Calm prep, not panic prep.
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-300">
                Start with what you need to keep running, estimate the battery
                size, then choose gear that fits your space and budget.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
              Guides
            </h2>

            <div className="mt-5 grid gap-3">
              {guideLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-bold text-slate-600 transition hover:text-blue-600"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
              Calculators
            </h2>

            <div className="mt-5 grid gap-3">
              {calculatorLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-bold text-slate-600 transition hover:text-blue-600"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
              Site
            </h2>

            <div className="mt-5 grid gap-3">
              {siteLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-bold text-slate-600 transition hover:text-blue-600"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-6">
          <div className="flex flex-col justify-between gap-4 text-sm font-semibold text-slate-500 md:flex-row md:items-center">
            <p>
              © {new Date().getFullYear()} Outage Ready Home. All rights
              reserved.
            </p>

            <p>
              Backup power estimates are for planning only. Always check product
              specifications and safety instructions.
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}