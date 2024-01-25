import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest"></link>
          <meta
            name="description"
            content="哄哄模拟器开源版"
          />
          <meta
            property="og:description"
            content="哄哄模拟器开源版"
          />
          <meta property="og:title" content="哄哄模拟器开源版" />
          <meta
            name="twitter:description"
            content="哄哄模拟器开源版"
          />
          <meta
            property="og:image"
            content="https://hong.azhubaby.com/og-image.png"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@JOJOhanbo" />
          <meta name="twitter:title" content="哄哄模拟器开源版" />
          <meta name="twitter:description" content="哄哄模拟器开源版" />
          <meta name="twitter:image" content="https://hong.azhubaby.com/og-image.png" />
          <meta name="twitter:creator" content="@JOJOhanbo" />

          {
            process.env.NODE_ENV === 'production' && (
              <>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-9TSS6WMGPW"></script>
                <script
                  dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9TSS6WMGPW');
          `,
                  }}
                />
                <script async src="https://analytics.azhubaby.com/script.js"
                  data-website-id="250f8416-1810-4765-b691-b853034a83bc"></script>
              </>
            )
          }
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
