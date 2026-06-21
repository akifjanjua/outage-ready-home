const siteName = "Outage Ready Home";

export function createPageMetadata({
  title,
  description,
  path,
  type = "article",
}) {
  return {
    title,
    description,

    openGraph: {
      type,
      siteName,
      url: path,
      title: `${title} | ${siteName}`,
      description,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description,
      images: ["/twitter-image"],
    },
  };
}