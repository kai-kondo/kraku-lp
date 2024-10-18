import React, { useMemo, useEffect } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { Link as ScrollLink } from "react-scroll";
import ButtonPrimary from "./misc/ButtonPrimary";

const UsageFlow = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  useEffect(() => {
    // Formrunスクリプトを読み込む
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
      {/* ご利用までの流れ */}
      <div className="flex flex-col w-full my-8 md:my-16">
        <ScrollAnimationWrapper>
          <motion.h3
            id="feature"
            variants={scrollAnimation}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black-600 leading-relaxed w-11/12 sm:w-10/12 lg:w-8/12 mx-auto text-center mb-24"
          >
            ご利用までの流れ{" "}
          </motion.h3>
        </ScrollAnimationWrapper>

        <motion.div variants={scrollAnimation}>
          <section className="dark:text-gray-800">
            <div className="container mx-auto flex flex-col p-4 lg:p-6">
              <div className="divide-y dark:divide-gray-300">
                {/* Step 1 */}
                <motion.div
                  variants={scrollAnimation}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="grid justify-center grid-cols-1 lg:grid-cols-2 p-4 mx-auto space-y-4 lg:space-y-0"
                >
                  <div className="flex items-center justify-center">
                    <Image
                      src="/assets/undraw_agreement_re_d4dv.svg"
                      width={145}
                      height={165}
                      alt="Standard Plan"
                    />
                  </div>
                  <div className="flex flex-col justify-center max-w-md text-center lg:text-left">
                    <span className="text-xs tracking-wider uppercase dark:text-violet-600">
                      Step 1
                    </span>
                    <span className="text-xl font-bold md:text-2xl">
                      お申し込み(ご契約)
                    </span>
                    <span className="mt-2 dark:text-gray-700">
                      お客様のご希望のプランでお申し込み(ご契約)いただきます。
                    </span>
                  </div>
                </motion.div>

                {/* Step 2 */}
                <motion.div
                  variants={scrollAnimation}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="grid justify-center grid-cols-1 lg:grid-cols-2 p-4 mx-auto space-y-4 lg:space-y-0"
                >
                  <div className="flex items-center justify-center">
                    <Image
                      src="/assets/undraw_account_re_o7id.svg"
                      width={145}
                      height={165}
                      alt="Standard Plan"
                    />
                  </div>
                  <div className="flex flex-col justify-center max-w-md text-center lg:text-left">
                    <span className="text-xs tracking-wider uppercase dark:text-violet-600">
                      Step 2
                    </span>
                    <span className="text-xl font-bold md:text-2xl">
                      アカウント作成
                    </span>
                    <span className="mt-2 dark:text-gray-700">
                      弊社でお客様のケイラクラウドアカウントを作成させていただきます。
                    </span>
                  </div>
                </motion.div>

                {/* Step 3 */}
                <motion.div
                  variants={scrollAnimation}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="grid justify-center grid-cols-1 lg:grid-cols-2 p-4 mx-auto space-y-4 lg:space-y-0"
                >
                  <div className="flex items-center justify-center">
                    <Image
                      src="/assets/undraw_our_solution_re_8yk6.svg"
                      width={145}
                      height={165}
                      alt="Standard Plan"
                    />
                  </div>
                  <div className="flex flex-col justify-center max-w-md text-center lg:text-left">
                    <span className="text-xs tracking-wider uppercase dark:text-violet-600">
                      Step 3
                    </span>
                    <span className="text-xl font-bold md:text-2xl">
                      操作方法説明
                    </span>
                    <span className="mt-2 dark:text-gray-700">
                      弊社とお客様との間で連携を取り、操作方法の説明を行います。
                    </span>
                  </div>
                </motion.div>

                {/* Step 4 */}
                <motion.div
                  variants={scrollAnimation}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="grid justify-center grid-cols-1 lg:grid-cols-2 p-4 mx-auto space-y-4 lg:space-y-0"
                >
                  <div className="flex items-center justify-center">
                    <Image
                      src="/assets/undraw_startup_life_re_8ow9.svg"
                      width={145}
                      height={165}
                      alt="Standard Plan"
                    />
                  </div>
                  <div className="flex flex-col justify-center max-w-md text-center lg:text-left">
                    <span className="text-xs tracking-wider uppercase dark:text-violet-600">
                      Step 4 - Aperiam
                    </span>
                    <span className="text-xl font-bold md:text-2xl">
                      ご利用開始
                    </span>
                    <span className="mt-2 dark:text-gray-700">
                      ご利用開始後も、ご不明点等がありましたら公式LINEよりお問い合わせ可能です。
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </motion.div>
      </div>

      {/* お客様の声 */}
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full my-16">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto"
            >
              ご利用者の声{" "}
            </motion.h3>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div id="testimoni" variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>

          {/* お問い合わせセクション */}
          <ScrollAnimationWrapper>
            <div
              className="formrun-embed mt-16"
              data-formrun-form="@hayamizu-RKhStBWvHpMdxT9gzT4C"
              data-formrun-redirect="true"
            ></div>
          </ScrollAnimationWrapper>

          {/* ケイラクラウドを初めてみよう！ */}
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
              <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-orange-500">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-white-500 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                    <strong>
                      ケイラクラウドを<br></br>初めてみよう！
                    </strong>
                  </h5>
                  <p className="text-gray-500">まずは無料プランに登録！</p>
                </div>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-100} // オフセットを調整して、スクロール位置を微調整
                >
                  <ButtonPrimary className="bg-orange-500">
                    無料プランで始める
                  </ButtonPrimary>
                </ScrollLink>
              </div>
              <div
                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}
              ></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default UsageFlow;
