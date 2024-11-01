import React from 'react';
import { Helmet } from 'react-helmet';
import { useSeo } from '../context/SeoContext';

interface SeoHeadProps {
  title: string;
  description: string;
  image?: string;
  type?: string;
  path: string;
}

export function SeoHead({ 
  title, 
  description, 
  image = '/images/logo.png',
  type = 'website',
  path 
}: SeoHeadProps) {
  const { seoData } = useSeo();
  const url = `https://whatcrypto.app${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(seoData)}
      </script>
    </Helmet>
  );
}