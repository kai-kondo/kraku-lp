import Feature from "../components/Feature";
import Feature2 from "../components/Feature2";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import UsageFlow from "../components/UsageFlow";
import Features3 from "../components/Features3";

export default function Home() {
  return (
    <>
      <SeoHead title="業務管理システムならケイラクラウド" />
      <Layout>
        <Hero />
        <Feature />
        <Feature2 />
        <Features3 />
        <Pricing />
        <UsageFlow />
      </Layout>
    </>
  );
}
