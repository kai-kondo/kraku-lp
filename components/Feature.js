import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const features = [
  "シフト管理で何度もやり取りが発生して効率が悪い...",
  "勤怠管理でExcel管理表との確認に手間がかかる...",
  "荷物が指定個数と合わず調整に時間がかかる...",
  "請求書の送付や計算に時間がかかる...",
];

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.2 } }, // フェードインアニメーションの持続時間を1.2秒に変更
};

const Feature = () => {
  return (
    <div className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto">
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div
            className="h-full w-full p-4"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
          >
            <Image
              src="/assets/undraw_questions_re_1fy7.svg"
              alt="VPN Illustration"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div
            className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
          >
            <h3 className="text-3xl lg:text-4xl font-semibold leading-relaxed text-black-600">
              こんなお悩みありませんか？
            </h3>
            <ul className="text-black-500 text-lg self-start list-inside ml-8">
              {features.map((feature, index) => (
                <motion.li
                  className="relative custom-list my-4"
                  key={feature}
                  whileHover={{ opacity: 0.8 }}
                  transition={{ duration: 0.5 }} // ホバーアニメーションの持続時間を0.5秒に変更
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;
