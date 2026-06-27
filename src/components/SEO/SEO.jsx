import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { SeoContext } from '../../App';

const SEO = ({ 
  pageKey,
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website', 
  schemaMarkup 
}) => {
  const seoContextData = useContext(SeoContext);
  const data = pageKey && seoContextData ? seoContextData[pageKey] : null;

  const finalTitle = data?.title || title;
  const finalDesc = data?.description || description;
  const finalKeywords = data?.keywords || keywords;
  const finalImage = data?.ogImage || image;
  const finalUrl = data?.canonical || url;

  const siteName = "Leor Media";
  const fullTitle = finalTitle ? `${finalTitle} | ${siteName}` : siteName;
  const defaultDescription = "Leor Media provides premium branding, advertising, and digital marketing services.";
  const defaultImage = "https://leormedia.com/default-og-image.jpg"; // Placeholder
  const siteUrl = "https://leormedia.com";
  const currentUrl = finalUrl ? `${siteUrl}${finalUrl}` : siteUrl;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={finalDesc || defaultDescription} />
      {finalKeywords && <meta name="keywords" content={finalKeywords} />}

      {/* OpenGraph tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDesc || defaultDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={finalImage || defaultImage} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={finalDesc || defaultDescription} />
      <meta name="twitter:image" content={finalImage || defaultImage} />
      {/* <meta name="twitter:creator" content="@leormedia" /> */}

      {/* Canonical Link */}
      <link rel="canonical" href={currentUrl} />

      {/* Structured Data (JSON-LD) */}
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
