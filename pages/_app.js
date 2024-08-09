// pages/_app.js
import { useEffect } from "react";
import Head from "next/head";
import "../styles/tailwind.css";
import "../styles/slick.css";
import DetailPage from "./DetailPage";

const GA_TRACKING_ID = "G-FQPHXPRB3Y"; // あなたのトラッキングID

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Google Analytics スクリプトを初期化
    const handleRouteChange = (url) => {
      window.gtag("config", GA_TRACKING_ID, {
        page_path: url,
      });
    };

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", GA_TRACKING_ID);

    // ルーターのイベントを監視
    const { events } = require("next/router");
    events.on("routeChangeComplete", handleRouteChange);

    return () => {
      events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <>
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}');
            `,
          }}
        />
      </Head>
      {pageProps.showDetailPage ? (
        <DetailPage {...pageProps} />
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default MyApp;
