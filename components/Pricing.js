import React, { useMemo } from "react";
import Image from "next/image";
import ButtonOutline from "./misc/ButtonOutline.";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { Link as ScrollLink } from "react-scroll";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      {/* プラン(無料) */}
      <div className="flex flex-col w-full" id="pricing">
        <ScrollAnimationWrapper>
          <motion.h3
            variants={scrollAnimation}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black-600 leading-relaxed text-center"
          >
            プラン
          </motion.h3>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <motion.p
            variants={scrollAnimation}
            className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center text-2xl"
            style={{ marginTop: "8rem" }}
          >
            無料プランの場合
          </motion.p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper className="flex justify-center mt-4">
          <motion.div
            variants={scrollAnimation}
            className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20 max-w-md"
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 0.2,
              },
            }}
          >
            <div className="p-4 lg:p-0 mt-6 lg:mt-8">
              <Image
                src="/assets/undraw_printing_invoices_-5-r4r.svg"
                width={145}
                height={165}
                alt="Standard Plan"
              />
            </div>
            <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
              Free Plan{" "}
            </p>
            <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
              <li className="relative check custom-list my-2">
                ユーザー数: 1~5人まで
              </li>
              <li className="relative check custom-list my-2">
                元請け企業数: 2社まで
              </li>
            </ul>
            <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
              <p className="text-2xl text-black-600 text-center mb-4 ">FREE</p>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-100} // オフセットを調整して、スクロール位置を微調整
              >
                <ButtonOutline>このプランで始める</ButtonOutline>
              </ScrollLink>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>

      {/* プラン(6ヶ月) */}
      <div className="flex flex-col w-full">
        <ScrollAnimationWrapper>
          <motion.h3
            variants={scrollAnimation}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black-600 leading-relaxed"
            style={{ marginTop: "4rem" }}
          ></motion.h3>
          <motion.p
            variants={scrollAnimation}
            className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center text-2xl"
          >
            6ヶ月契約の場合
          </motion.p>
        </ScrollAnimationWrapper>

        <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
          {/* 1 */}
          <ScrollAnimationWrapper className="flex justify-center">
            <motion.div
              variants={scrollAnimation}
              className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20 max-w-md"
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/undraw_vault_re_s4my.svg"
                  width={145}
                  height={165}
                  alt="Free Plan"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                Normal Plan{" "}
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                <li className="relative check custom-list my-2">
                  ユーザー数: 1~10人まで
                </li>
                <li className="relative check custom-list my-2">
                  元請け企業数: 無制限
                </li>
              </ul>
              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                <p className="text-2xl text-black-600 text-center mb-4 ">
                  ￥15,000<span className="text-black-500">/ 月</span>
                </p>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-100} // オフセットを調整して、スク���ール位置を微調整
                >
                  <ButtonOutline>このプランで始める</ButtonOutline>
                </ScrollLink>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>

          {/* 2 */}
          <ScrollAnimationWrapper className="flex justify-center">
            <motion.div
              variants={scrollAnimation}
              className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20 max-w-md"
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/undraw_vault_re_s4my.svg"
                  width={145}
                  height={165}
                  alt="Standard Plan"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                Standard Plan{" "}
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                <li className="relative check custom-list my-2">
                  ユーザー数: 1~50人まで
                </li>
                <li className="relative check custom-list my-2">
                  元請け企業数: 無制限
                </li>
              </ul>
              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                <p className="text-2xl text-black-600 text-center mb-4 ">
                  ￥40,000 <span className="text-black-500">/ 月</span>
                </p>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-100} // オフセットを調整して、スクロール位置を微調整
                >
                  <ButtonOutline>このプランで始める</ButtonOutline>
                </ScrollLink>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>

          {/* 3 */}
          <ScrollAnimationWrapper className="flex justify-center">
            <motion.div
              variants={scrollAnimation}
              className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20 max-w-md"
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/undraw_vault_re_s4my.svg"
                  width={145}
                  height={165}
                  alt="Premium Plan"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                Premium Plan{" "}
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                <li className="relative check custom-list my-2">
                  ユーザー数: 無制限
                </li>
                <li className="relative check custom-list my-2">
                  元請け企業数: 無制限
                </li>
              </ul>
              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                <p className="text-2xl text-black-600 text-center mb-4 ">
                  ￥70,000 <span className="text-black-500">/ 月</span>
                </p>

                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-100} // オフセットを調整して、スクロール位置を微調整
                >
                  <ButtonOutline>このプランで始める</ButtonOutline>
                </ScrollLink>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>

      {/* プラン(1年) */}
      <div className="flex flex-col w-full">
        <ScrollAnimationWrapper>
          <motion.h3
            variants={scrollAnimation}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black-600 leading-relaxed"
            style={{ marginTop: "4rem" }}
          ></motion.h3>
          <motion.p
            variants={scrollAnimation}
            className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center text-2xl"
          >
            1年契約の場合
          </motion.p>
        </ScrollAnimationWrapper>

        <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
          {/* 1 */}
          <ScrollAnimationWrapper className="flex justify-center">
            <motion.div
              variants={scrollAnimation}
              className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20 max-w-md"
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/undraw_printing_invoices_-5-r4r.svg"
                  width={145}
                  height={165}
                  alt="Free Plan"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                Normal Plan{" "}
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                <li className="relative check custom-list my-2">
                  ユーザー数: 1~10人まで
                </li>
                <li className="relative check custom-list my-2">
                  元請け企業数: 無制限
                </li>
              </ul>
              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                <p className="text-2xl text-black-600 text-center mb-4 ">
                  ￥9,800<span className="text-black-500">/ 月</span>
                </p>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-100} // オフセットを調整して、スクロール位置を微調整
                >
                  <ButtonOutline>このプランで始める</ButtonOutline>
                </ScrollLink>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>

          {/* 2 */}
          <ScrollAnimationWrapper className="flex justify-center">
            <motion.div
              variants={scrollAnimation}
              className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20 max-w-md"
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/undraw_printing_invoices_-5-r4r.svg"
                  width={145}
                  height={165}
                  alt="Standard Plan"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                Standard Plan{" "}
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                <li className="relative check custom-list my-2">
                  ユーザー数: 1~50人まで
                </li>
                <li className="relative check custom-list my-2">
                  元請け企業数: 無制限
                </li>
              </ul>
              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                <p className="text-2xl text-black-600 text-center mb-4 ">
                  ￥29,800 <span className="text-black-500">/ 月</span>
                </p>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-100} // オフセットを調整して、スクロール位置を微調整
                >
                  <ButtonOutline>このプランで始める</ButtonOutline>
                </ScrollLink>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>

          {/* 3 */}
          <ScrollAnimationWrapper className="flex justify-center">
            <motion.div
              variants={scrollAnimation}
              className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20 max-w-md"
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/undraw_printing_invoices_-5-r4r.svg"
                  width={145}
                  height={165}
                  alt="Premium Plan"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                Premium Plan{" "}
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                <li className="relative check custom-list my-2">
                  ユーザー数: 無制限
                </li>
                <li className="relative check custom-list my-2">
                  元請け企業数: 無制限
                </li>
              </ul>
              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                <p className="text-2xl text-black-600 text-center mb-4 ">
                  ￥59,800 <span className="text-black-500">/ 月</span>
                </p>

                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-100} // オフセットを調整して、スクロール位置を微調整
                >
                  <ButtonOutline>このプランで始める</ButtonOutline>
                </ScrollLink>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
