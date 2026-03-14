import { Helmet } from "react-helmet-async";
import siteConfig from "../data/siteConfig";

export default function SEO({
  title,
  description,
  path = "/",
  type = "website",
  jsonLd,
}) {
  const fullTitle = title
    ? `${title} | ${siteConfig.siteName}`
    : `${siteConfig.siteName} - ${siteConfig.tagline}`;
  const desc = description || siteConfig.description;
  const url = `${siteConfig.siteUrl}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content={siteConfig.keywords} />
      <meta name="author" content={siteConfig.author} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteConfig.siteName} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />

      {/* Geo tags */}
      <meta name="geo.region" content="US-NY" />
      <meta name="geo.placename" content="New York" />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
