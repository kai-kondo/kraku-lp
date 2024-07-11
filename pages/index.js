import Feature from "../components/Feature";
import Feature2 from "../components/Feature2";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title="業務管理システムならケイラクラウド" />
      <Layout>
        <Hero />
        <Feature />
        <Feature2 />
        <Pricing />
      </Layout>
    </>
  );
}
