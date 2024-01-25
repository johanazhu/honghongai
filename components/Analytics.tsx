"use client";

import Script from "next/script";

export const GoogleAnalytics = () => {
    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ID}`}
            />
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GOOGLE_ID}', {
            page_path: window.location.pathname,
            });
          `,
                }}
            />
        </>
    );
};


export const UmamiAnalytics = () => {
    return (
        <Script
            strategy="afterInteractive"
            data-website-id={process.env.UMAMI_ID}
            src={`https://analytics.azhubaby.com/script.js`}
        />
    );
};
