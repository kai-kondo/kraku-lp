import React, { useMemo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { Link as LinkScroll } from "react-scroll";
import ButtonPrimary from "./misc/ButtonPrimary";
import getScrollAnimation from "../utils/getScrollAnimation";
import ButtonPrimary2 from "./misc/ButtonPrimary2";
import "swiper/css";
import Image from "next/image";

const Support = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/getBlogList")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          // postsを設定する前にURLを整形
          const updatedPosts = data.map((post) => {
            // notionのURLを構築
            const notionUrl = `https://four-honey-59f.notion.site/${post.url}`;
            return { ...post, notionUrl }; // notionUrlを各postオブジェクトに追加
          });
          setPosts(updatedPosts); // 更新したpostsをステートに設定
        } else {
          console.error("Expected an array, but got:", data);
          setPosts([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching blog posts:", error);
        setPosts([]); // エラーが発生した場合も空配列を設定
      });

    const script = document.createElement("script");
    script.src = "https://sdk.form.run/js/v2/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="m-4 md:m-8  bg-gradient-to-b from-white-300 to-white-500 w-full dark:text-gray-800">
      {/* サポートセクション */}
      <div className="container mx-auto p-4 my-6 space-y-2 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-bold"
        >
          サポート
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="dark:text-gray-600"
        >
          ケイラクラウドを知り尽くしたスタッフが
          <br />
          製品の導入や操作方法から業務の相談までお答えいたします。
        </motion.p>
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
          <motion.div
            key={index}
            className="flex flex-col items-center p-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={item.imgSrc}
              alt={item.title}
              className="w-12 h-12 dark:text-violet-600"
            />
            <h3 className="my-3 text-3xl font-semibold">{item.title}</h3>
            <div className="space-y-1 leading-tight">
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* セキュリティセクション */}
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="sm:text-4xl text-2xl font-bold title-font text-gray-900 mb-4"
          >
            セキュリティ
          </motion.h1>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center -m-4">
          <motion.div
            className="p-4 md:w-1/2 flex flex-col text-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
              <img src="./assets/aws.png" alt="AWS" className="w-10 h-10" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-bold mb-3">
                AWSを採用
              </h2>
              <p className="leading-relaxed text-base">
                本製品は「Amazon Web Services」を採用。
                <br />
                データ暗号化による強力な保護、24時間365日の監視体制、柔軟なアクセス管理、そしてグローバルなセキュリティ規制への対応といった高度なセキュリティを実現しています。
              </p>
            </div>
          </motion.div>
          <motion.div
            className="p-4 md:w-1/2 flex flex-col text-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
              <img src="./assets/back.png" alt="Backup" className="w-10 h-10" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-bold mb-3">
                バックアップ
              </h2>
              <p className="leading-relaxed text-base">
                定期的なバックアップ:
                データ損失に備え、重要なデータのバックアップを定期的に行い、バックアップデータを暗号化します。
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <section className="py-16 sm:py-24 bg-white dark:bg-gray-900 dark:text-gray-100">
        <div className="container px-6 mx-auto space-y-12 sm:space-y-16">
          {/* 見出し部分 */}
          <div className="text-center space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100"
            >
              コラム一覧
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-400"
            >
              ケイラクラウドから物流に関して皆様に役立つコラムを発信！
            </motion.p>
          </div>

          {/* 画像 */}
          <div className="flex justify-center">
            <Image
              src="/assets/blog2.png"
              alt="ブログイメージ"
              layout="intrinsic"
              quality={100}
              height={414}
              width={600}
              className="rounded-lg shadow-xl border-4 border-orange-100 transform transition duration-500 hover:scale-105"
            />
          </div>

          {/* 一覧詳細を見るボタン */}
          <div className="text-center mt-8">
            <a
              href="https://four-honey-59f.notion.site/1495baa85165806f9cc1d166dce7ab98"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 mt-6 text-lg font-semibold text-white-300 bg-blue-100 rounded-lg shadow-lg transition duration-300 transform hover:bg-blue-700 hover:scale-105 hover:shadow-xl"
            >
              ケイラクラウドコラムを見る
            </a>
          </div>
        </div>
      </section>

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
            <div className="absolute rounded-xl py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-blue-100">
              <div className="flex flex-col justify-center lg:text-left">
                <p className="mb-1 text-sm font-medium tracking-widest uppercase text-white-500">
                  日常の業務を効率化してもっとラクに！
                </p>
                <h1 className="py-2 text-3xl font-bold leading-tight title-font text-white-300">
                  <strong className="text-pink-100 text-4xl">
                    ケイラクラウド
                  </strong>
                  を始めてみよう！
                </h1>
              </div>
              <div className="flex flex-col items-center justify-center flex-shrink-0 mt-6 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:ml-4 lg:mt-0 lg:justify-end">
                <LinkScroll
                  to="Hero"
                  smooth={true}
                  duration={500}
                  offset={-150} // オフセットを調整して、スクロール位置を微調整
                >
                  <ButtonPrimary>資料請求</ButtonPrimary>
                </LinkScroll>
                <LinkScroll
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-150} // オフセットを調整して、スクロール位置を微調整
                >
                  <ButtonPrimary2>お問い合わせ</ButtonPrimary2>
                </LinkScroll>
              </div>
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
