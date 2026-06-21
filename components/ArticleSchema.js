export default function ArticleSchema({
  title,
  description,
  url,
  datePublished = "2026-06-01",
  dateModified = "2026-06-21",
}) {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://outagereadyhome.com";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    dateModified,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}${url}`,
    },
    author: {
      "@type": "Organization",
      name: "Outage Ready Home",
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Outage Ready Home",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.svg`,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}