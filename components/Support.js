import React, { useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { Link as ScrollLink } from "react-scroll";
import ButtonPrimary from "./misc/ButtonPrimary";
import getScrollAnimation from "../utils/getScrollAnimation";


const Support = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.form.run/js/v2/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="m-4 md:m-8  bg-white dark:text-gray-800">
      <div className="container mx-auto p-4 my-6 space-y-2 text-center">
        <h2 className="text-5xl font-bold">サポート</h2>
        <p className="dark:text-gray-600">
          ケイラクラウドを知り尽くしたスタッフが
          <br />
          製品の導入や操作方法から業務の相談までお答えいたします。
        </p>
      </div>

      <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 bg-gray-400 rounded-3xl text-center">
        {[
          {
            imgSrc: "./assets/mail1.png",
            title: "メールサポート",
            description: (
              <>
                24時間365日、いつでも質問可能。<br></br>
                回答は当日または翌営業日にメールでお答えします。
              </>
            ),
          },
          {
            imgSrc: "./assets/tell.png",
            title: "電話サポート",
            description: (
              <>
                操作・設定方法などでお困りの際にご活用ください。<br></br>
                サポート窓口が懇切丁寧にお答えします。
              </>
            ),
          },
          {
            imgSrc: "./assets/pc.png",
            title: "web通話サポート",
            description: (
              <>
                操作している画面をスタッフと共有<br></br>
                問題を素早く解決することが可能です。
              </>
            ),
          },
          {
            imgSrc: "./assets/chat.png",
            title: "チャットサポート",
            description: (
              <>
                公式LINEから担当者とチャット形式で会話が可能。
                <br></br>
                24時間365日、いつでも質問することができます。
              </>
            ),
          },
          {
            imgSrc: "./assets/note.png",
            title: "FAQ",
            description: (
              <>
                製品に関しての使い方らよくある質問をwebから閲覧することができます。
              </>
            ),
          },
          {
            imgSrc: "./assets/tallk.png",
            title: "対面サポート",
            description: (
              <>
                お客様のところへ直接出向き、問題を解決します。<br></br>
                <strong className="font-bold">※ご要望があった場合のみ</strong>
              </>
            ),
          },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center p-4">
            <img
              src={item.imgSrc}
              alt={item.title}
              className="w-12 h-12 dark:text-violet-600"
            />
            <h3 className="my-3 text-3xl font-semibold">{item.title}</h3>
            <div className="space-y-1 leading-tight">
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        {/* お問い合わせセクション */}
        <ScrollAnimationWrapper>
          <motion.div
            id="contact"
            className="formrun-embed mt-16"
            data-formrun-form="@hayamizu-RKhStBWvHpMdxT9gzT4C"
            data-formrun-redirect="true"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </ScrollAnimationWrapper>

        {/* ケイラクラウドを初めてみよう！ */}
        <ScrollAnimationWrapper className="relative w-full mt-8 mb-16">
          <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
            <div className="absolute rounded-xl py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-orange-500">
              <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                <h5 className="text-white-500 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                  <strong>
                    ケイラクラウドを
                    <br />
                    初めてみよう！
                  </strong>
                </h5>
                <p className="text-gray-500">まずは無料プランに登録！</p>
              </div>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-100}
              >
                <ButtonPrimary className="bg-orange-500">
                  無料プランで始める
                </ButtonPrimary>
              </ScrollLink>
            </div>
            <div
              className="absolute bg-black-600 opacity-5 w-11/12 rounded-lg h-60 sm:h-56 top-0 mt-12 mx-auto left-0 right-0" // mtを8から12に変更
              style={{ filter: "blur(114px)" }}
            />
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default Support;
