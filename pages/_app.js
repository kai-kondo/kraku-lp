import { useEffect } from "react";
import Head from "next/head";
import "../styles/tailwind.css";
import "../styles/slick.css";

const GA_TRACKING_ID = "G-FQPHXPRB3Y"; // あなたのトラッキングID

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Google Analytics スクリプトを初期化
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", GA_TRACKING_ID);

    // ルーティングの変更を監視し、ページビューを送信
    const handleRouteChange = (url) => {
      gtag("config", GA_TRACKING_ID, {
        page_path: url,
      });
    };

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
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
