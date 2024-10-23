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
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <ScrollAnimationWrapper>
          <motion.h3
            variants={scrollAnimation}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black-600 leading-normal w-9/12 sm:w-4/12 mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            ご利用者の声
          </motion.h3>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper className="w-full flex flex-col py-12">
          <motion.div
            id="testimoni"
            variants={scrollAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Testimoni />
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default UsageFlow;
