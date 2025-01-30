import React from "react";
import Script from "next/script";
import Footer from "./Footer";
import Header from "./Header";

const GTM_ID = "GTM-K3GHWSG4";

const Layout = ({ children }) => {
  return (
    <>
      {/* Google Tag Manager - head script */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />

      <div className="bg-gradient-to-b from-white-500 to-white-300 w-full py-14">
        {/* Google Tag Manager (noscript) - body直後 */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
