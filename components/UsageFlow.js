import React, { useMemo, useEffect } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const steps = [
  {
    id: 1,
    image: "/assets/undraw_agreement_re_d4dv.svg",
    title: "お申し込み(ご契約)",
    description: "お客様のご希望のプランでお申し込み(ご契約)いただきます。",
  },
  {
    id: 2,
    image: "/assets/undraw_account_re_o7id.svg",
    title: "アカウント作成",
    description:
      "弊社でお客様のケイラクラウドアカウントを作成させていただきます。",
  },
  {
    id: 3,
    image: "/assets/undraw_our_solution_re_8yk6.svg",
    title: "操作方法説明",
    description: "弊社とお客様との間で連携を取り、操作方法の説明を行います。",
  },
  {
    id: 4,
    image: "/assets/undraw_startup_life_re_8ow9.svg",
    title: "ご利用開始",
    description:
      "ご利用開始後も、ご不明点等がありましたら公式LINEよりお問い合わせ可能です。",
  },
];

const UsageFlow = () => {
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
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="UsageFlow"
    >
      <div className="flex flex-col w-full my-8 md:my-16">
        <ScrollAnimationWrapper>
          <motion.h3
            id="feature"
            variants={scrollAnimation}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black-600 leading-relaxed w-11/12 sm:w-10/12 lg:w-8/12 mx-auto text-center mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            ご利用までの流れ
            <div className="flex mt-4 justify-center">
              <div className="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
            </div>
          </motion.h3>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <motion.div
            variants={scrollAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <section className="dark:text-gray-800">
              <div className="container mx-auto flex flex-col p-4 lg:p-6">
                <div className="divide-y dark:divide-gray-300">
                  {steps.map(({ id, image, title, description }) => (
                    <motion.div
                      key={id}
                      variants={scrollAnimation}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="grid justify-center grid-cols-1 lg:grid-cols-2 p-4 mx-auto space-y-4 lg:space-y-0"
                    >
                      <div className="flex items-center justify-center">
                        <Image
                          src={image}
                          width={145}
                          height={165}
                          alt={title}
                        />
                      </div>
                      <div className="flex flex-col justify-center max-w-md text-center lg:text-left">
                        <span className="text-xs tracking-wider uppercase dark:text-violet-600">
                          Step {id}
                        </span>
                        <span className="text-xl font-bold md:text-2xl">
                          {title}
                        </span>
                        <span className="mt-2 dark:text-gray-700">
                          {description}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>

      {/* お客様の声 */}
      <section className="my-8 dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:items-stretch lg:px-10">
          <h1 className="p-4 text-4xl font-semibold leading-none text-center">
            ケイラクラウド利用者の声
          </h1>
        </div>
        <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
          <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
              <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="w-8 h-8 dark:text-violet-600"
                >
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                <strong>「業務効率が格段に上がりました。」</strong>
                <br />
                <br />
                ケイラクラウドのおかげで、
                <strong>支払い通知書・請求書作成が自動化</strong>され、
                これまで手作業でかかっていた時間を<strong>大きく短縮</strong>
                できました。
                <br />
                <br />
                また、
                <strong>ドライバーがスマホから直接シフト希望を提出</strong>
                してくれるので、 他のメッセージアプリを使う必要がなくなり、
                <strong>シフト管理も一元化</strong>。
                <br />
                <br />
                日々の業務がスムーズになり、スタッフとのやり取りもよりシンプルに。
                <br />
                <strong>
                  現場に本当にフィットしたツールだと感じています。
                </strong>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute right-0 w-8 h-8 dark:text-violet-600"
                >
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-600 dark:text-gray-50">
              <img
                src="/assets/smik.jpg"
                alt=""
                className="w-24 h-24 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-300"
              />
              <p className="text-xl font-semibold leading-tight">
                合同会社SMIKグループ 様
              </p>
              <p className="text-sm uppercase">代表</p>
            </div>
          </div>
          <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
              <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="w-8 h-8 dark:text-violet-600"
                >
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                <strong>「もう請求書で悩まなくなりました」</strong>
                <br />
                <br />
                <strong>ケイラクラウドを導入してから</strong>というもの、
                <strong>毎月やってくる請求業務のプレッシャー</strong>
                から解放されました。
                <br />
                <br />
                これまでは、
                <strong>
                  パソコンとにらめっこしながら請求書を一件ずつ作成
                </strong>
                するのが 本当に憂鬱でした。
                <br />
                <br />
                でも今は、
                <strong>
                  スマホで金額を確認して、あとは承認ボタンを押すだけ
                </strong>
                。 それだけで<strong>自動的に請求書が発行</strong>されるので、
                <strong>難しい操作や専門的な知識は一切不要</strong>です。
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute right-0 w-8 h-8 dark:text-violet-600"
                >
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-600 dark:text-gray-50">
              <img
                src="/assets/undraw_Male_avatar_g98d.png"
                alt=""
                className="w-24 h-24 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-300"
              />
              <p className="text-xl font-semibold leading-tight">
                軽貨物配送会社A
              </p>
              <p className="text-sm uppercase">軽貨物ドライバー</p>
            </div>
          </div>
          <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
              <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="w-8 h-8 dark:text-violet-600"
                >
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                <strong>「シフト管理をシステム化」</strong>
                <br />
                <br />
                <strong>ケイラクラウドを使い始めてから</strong>というもの、
                <strong>ドライバーとの細かいやり取り</strong>がぐっと減り、
                <strong>シフト作成が驚くほどスムーズ</strong>になりました。
                <br />
                <br />
                これまでは、電話やメッセージで何度も調整して、
                <strong>時間も手間もかかる作業</strong>だったんです。
                <br />
                <br />
                でも今は、<strong>必要な情報を入力するだけ</strong>で
                自動で整理してくれるので、
                <strong>ミスも減って助かっています</strong>。
                <br />
                <br />
                今では
                <strong>
                  ケイラクラウドなしでの運営なんて考えられません。
                </strong>
                <strong>業務がぐっと楽になりました</strong>。
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute right-0 w-8 h-8 dark:text-violet-600"
                >
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-600 dark:text-gray-50">
              <img
                src="/assets/avatar.png"
                alt=""
                className="w-24 h-24 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-300"
              />
              <p className="text-xl font-semibold leading-tight">
                軽貨物配送会社B
              </p>
              <p className="text-sm uppercase">事務員</p>
            </div>
          </div>
          <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
              <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="w-8 h-8 dark:text-violet-600"
                >
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                <strong>「出退勤状況が一目瞭然で管理しやすい」</strong>
                <br />
                <br />
                <strong>ダッシュボードがとにかく見やすくて便利</strong>で、
                <strong>出退勤の状況がリアルタイムで一目瞭然</strong>なんです。
                <br />
                <br />
                今までは紙や口頭での確認が多くて、
                <strong>抜けやミスも少なくありませんでした</strong>。
                <br />
                <br />
                でも今は、<strong>ドライバーがスマホで1タップ</strong>するだけで
                出退勤の記録が完了するので、
                <strong>現場の手間もぐっと減りました</strong>。
                <br />
                <br />
                <strong>勤怠管理がここまでラクになるなんて驚き</strong>です。
                もう以前のやり方には戻れません。
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute right-0 w-8 h-8 dark:text-violet-600"
                >
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-600 dark:text-gray-50">
              <img
                src="/assets/undraw_profile_pic_re_iwgo.svg"
                alt=""
                className="w-20 h-20 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-300"
              />
              <p className="text-xl font-semibold leading-tight">
                軽貨物配送会社C
              </p>
              <p className="text-sm uppercase">管理社員</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UsageFlow;
