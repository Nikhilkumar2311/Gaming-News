import Head from 'next/head';

function SEO({ title, description, keywords, url, image }) {
  return (
    <Head>
      <title>{title || 'Gaming News - Default Title'}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || 'gaming news, free games, video games'} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={title || 'Gaming News'} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || '/images/og-default.jpg'} />
      <meta property="og:url" content={url || process.env.NEXT_PUBLIC_DOMAIN} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href={url || process.env.NEXT_PUBLIC_DOMAIN} />
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GA_TRACKING_ID}');
          `,
        }}
      />
    </Head>
  );
}

export default SEO;