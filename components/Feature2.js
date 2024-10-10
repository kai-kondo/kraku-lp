import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const features = [
  "シフトを簡単操作で作成！",
  "出退勤状況を一目で確認！",
  "配送荷物をシステム上で管理！",
  "ドライバー間の請求書をワンタッチで作成！",
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto">
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12">
        <ScrollAnimationWrapper>
          <motion.div
            className="flex flex-col items-start justify-center w-full lg:w-9/12"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
          >
            <h3 className="text-2xl lg:text-1xl font-semibold leading-relaxed text-black-600 mt-4 mb-2">
              ケイラクラウドなら全て解決！
            </h3>
            <h2 className="text-3xl lg:text-4xl font-bold leading-relaxed text-orange-500 mt-2 mb-4">
              ケイラクラウドとは？
            </h2>
            <p className="my-2 text-black-500"></p>
            <ul className="text-black-500 lg:text-2xl self-start font-bold list-inside ml-8">
              {features.map((feature, index) => (
                <motion.li
                  className="relative circle-check custom-list my-4"
                  key={feature}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeIn}
                  transition={{ duration: 0.4, delay: index * 0.1 }} // 遅延を加え、順番に表示
                  whileHover={{
                    opacity: 0.9,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper className="flex w-full justify-start">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/feuter.png"
              alt="VPN Illustration"
              layout="intrinsic" // or "fixed" depending on your need
              quality={100}
              height={800}
              width={1200}
            />
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;
