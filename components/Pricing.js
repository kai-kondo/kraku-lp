import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { Link as ScrollLink } from "react-scroll";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14">
      <div
        className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center"
        id="feature"
      >
        {/* 特徴 */}
        <div className="container mx-auto space-y-12">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black-600 leading-relaxed text-center"
            >
              ケイラクラウドの特徴
            </motion.h3>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper>
            <motion.div
              className="py-12 w-full px-8 mt-16"
              variants={scrollAnimation}
            >
              <div className="flex flex-col overflow-hidden rounded-md shadow-lg lg:flex-row">
                <img
                  src="/assets/logo3.png"
                  alt="VPN Illustrasi"
                  layout="intrinsic" // or "fixed" depending on your need
                  quality={100}
                  height={800} // ここで高さを指定
                  width={400} // ここで幅を指定
                  className="h-80 aspect-video"
                />
                <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                  <p className="my-6 text-lg font-medium text-orange-500">
                    Point 1
                  </p>
                  <h3 className="text-3xl font-bold">
                    ドライバーシフト管理の効率化
                  </h3>
                  <p className="my-6 dark:text-gray-600">
                    システムを使用しドライバーから希望シフトを提出<br></br>
                    事業主はその状況を元に各ドライバーのシフトを調整<br></br>
                    画面上を
                    <strong className="text-orange-500 text-lg">
                      ドラッグ&ドロップで操作
                    </strong>
                    するなど簡単！
                  </p>
                </div>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>

          {/* 特徴2 */}
          <ScrollAnimationWrapper>
            <motion.div
              className="py-12 w-full px-8 mt-16"
              variants={scrollAnimation}
            >
              <div className="flex flex-col overflow-hidden rounded-md shadow-lg lg:flex-row-reverse">
                <img
                  src="/assets/logo10.png"
                  alt="VPN Illustrasi"
                  layout="intrinsic" // or "fixed" depending on your need
                  quality={100}
                  height={800} // ここで高さを指定
                  width={400} // ここで幅を指定
                  className="h-80 aspect-video"
                />
                <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                  <p className="my-6 text-lg font-medium text-orange-500">
                    Point 2
                  </p>
                  <h3 className="text-3xl font-bold">出退勤管理の効率化</h3>
                  <p className="my-6 dark:text-gray-600">
                    出退勤状況が
                    <strong className="text-orange-500 text-lg">
                      一目でわかる
                    </strong>
                    ダッシュボード<br></br>
                    出退勤情報をリアルタイムで管理画面に反映<br></br>
                    ドライバーは1タップで勤怠管理
                  </p>
                </div>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>

          {/* 特徴３ */}
          <ScrollAnimationWrapper>
            <motion.div
              className="py-12 w-full px-8 mt-16"
              variants={scrollAnimation}
            >
              <div className="flex flex-col overflow-hidden rounded-md shadow-lg lg:flex-row">
                <img
                  src="/assets/logo11.png"
                  alt="VPN Illustrasi"
                  layout="intrinsic" // or "fixed" depending on your need
                  quality={100}
                  height={800} // ここで高さを指定
                  width={400} // ここで幅を指定
                  className="h-80 aspect-video"
                />
                <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                  <p className="my-6 text-lg font-medium text-orange-500">
                    Point 3
                  </p>
                  <h3 className="text-3xl font-bold">精算業務の効率化</h3>
                  <p className="my-6 dark:text-gray-600">
                    ドライバーへの支払い金額確認・ドライバーからの請求を
                    ボタンひとつで簡単操作！<br></br>
                    面倒な計算も
                    <strong className="text-orange-500 text-lg">
                      システムが自動計算！
                    </strong>
                    <br></br>
                    システムで作られた請求書はPDFでダウンロード可能!
                  </p>
                </div>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>

        {/* チュートリアル */}
        <div className="container mx-auto space-y-12">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black-600 leading-relaxed text-center mt-48"
            >
              チュートリアル動画
            </motion.h3>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper>
            <motion.div
              className="py-12 w-full px-8 mt-16 flex justify-center items-center verflow-hidden rounded-md shadow-lg lg:flex-row "
              variants={scrollAnimation}
            >
              <video className="w-full max-w-4xl" controls loop muted>
                <source src="/assets/Introducing-Kiraku.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>

        {/* プラン(無料) */}
        <div className="flex flex-col w-full" id="pricing">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black-600 leading-relaxed"
              style={{ marginTop: "12rem" }}
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
              className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
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
                <p className="text-2xl text-black-600 text-center mb-4 ">
                  FREE
                </p>
                <ButtonOutline>このプランで始める</ButtonOutline>
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
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
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
                  <ButtonOutline>このプランで始める</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>

            {/* 2 */}
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
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
                  <ButtonOutline>このプランで始める</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>

            {/* 3 */}
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
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

                  <ButtonOutline>このプランで始める</ButtonOutline>
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
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
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
                  <ButtonOutline>このプランで始める</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>

            {/* 2 */}
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
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
                  <ButtonOutline>このプランで始める</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>

            {/* 3 */}
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
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

                  <ButtonOutline>このプランで始める</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>

        {/* ネットワーク */}
        <div className="flex flex-col w-full my-8 md:my-16">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black-600 leading-relaxed w-11/12 sm:w-10/12 lg:w-8/12 mx-auto text-center mb-24"
            >
              ご利用までの流れ{" "}
            </motion.h3>
          </ScrollAnimationWrapper>
          <motion.div variants={scrollAnimation}>
            <section className="dark:bg-gray-100 dark:text-gray-800">
              <div className="container mx-auto flex flex-col p-4 lg:p-6">
                <div className="divide-y dark:divide-gray-300">
                  {/* Step 1 */}
                  <div className="grid justify-center grid-cols-1 lg:grid-cols-2 p-4 mx-auto space-y-4 lg:space-y-0">
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
                        Step 1 - Nihil
                      </span>
                      <span className="text-xl font-bold md:text-2xl">
                        お申し込み(ご契約)
                      </span>
                      <span className="mt-2 dark:text-gray-700">
                        お客様のご希望のプランでお申し込み(ご契約)いただきます。
                      </span>
                    </div>
                  </div>
                  {/* Step 2 */}
                  <div className="grid justify-center grid-cols-1 lg:grid-cols-2 p-4 mx-auto space-y-4 lg:space-y-0">
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
                        Step 2 - Explicabo
                      </span>
                      <span className="text-xl font-bold md:text-2xl">
                        アカウント作成
                      </span>
                      <span className="mt-2 dark:text-gray-700">
                        弊社でお客様のケイラクラウドアカウントを作成させていただきます。
                      </span>
                    </div>
                  </div>
                  {/* Step 3 */}
                  <div className="grid justify-center grid-cols-1 lg:grid-cols-2 p-4 mx-auto space-y-4 lg:space-y-0">
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
                        Step 3 - Facilis
                      </span>
                      <span className="text-xl font-bold md:text-2xl">
                        操作方法説明
                      </span>
                      <span className="mt-2 dark:text-gray-700">
                        弊社とお客様との間で連携を取り、操作方法の説明を行います。
                      </span>
                    </div>
                  </div>
                  {/* Step 4 */}
                  <div className="grid justify-center grid-cols-1 lg:grid-cols-2 p-4 mx-auto space-y-4 lg:space-y-0">
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
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        </div>

        {/* お客様の声 */}
        <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto"
            >
              ご利用中の<br></br>お客様の声{" "}
            </motion.h3>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>

          {/* お問い合わせ */}

          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto"
              id="contact"
            >
              お問い合わせ{" "}
            </motion.h3>
            <motion.div
              variants={scrollAnimation}
              className="dark:text-gray-600 mt-2 "
            >
              ケイラクラウドに関する詳細情報・無料をご希望の⽅はこちらからご連絡ください。
            </motion.div>
          </ScrollAnimationWrapper>

          <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:text-gray-800">
            <div className="flex flex-col justify-between">
              <img
                src="assets/undraw_contact_us_re_4qqt.svg"
                alt=""
                className="p-6 h-52 md:h-64 mt-32"
              />
            </div>
            <div className="flex flex-col justify-between">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSeBMJPIFmdtlBVgPJWLGOEZKAfC34REPMNWwSfIWfXZ5JDMLg/viewform?embedded=true"
                width="440"
                height="1131"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
              >
                読み込んでいます…
              </iframe>
            </div>
          </div>

          {/* まずは登録 */}
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
              <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10  bg-orange-500 ">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className=" text-xl sm:text-2xl lg:text-3xl leading-relaxed font-bold text-white-500">
                    まずは無料プランに登録！
                  </h5>
                  <p className="font-bold text-white-500">
                    ケイラクラウドを初めてみよう！
                  </p>
                </div>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-100} // オフセットを調整して、スクロール位置を微調整
                >
                  <ButtonPrimary className="bg-blue-500">
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

export default Pricing;
