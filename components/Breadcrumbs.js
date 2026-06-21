export default function Breadcrumbs({ items }) {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://outagereadyhome.com";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${baseUrl}${item.href === "/" ? "" : item.href}`,
    })),
  };

  return (
    <div className="border-b border-slate-200 bg-white px-6 py-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <nav
        aria-label="Breadcrumb"
        className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 text-sm font-bold text-slate-500"
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <span key={item.href} className="flex items-center gap-2">
              {isLast ? (
                <span aria-current="page" className="text-slate-950">
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.href}
                  className="transition hover:text-blue-600"
                >
                  {item.label}
                </a>
              )}

              {!isLast && <span className="text-slate-300">/</span>}
            </span>
          );
        })}
      </nav>
    </div>
  );
}