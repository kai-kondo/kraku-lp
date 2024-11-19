import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Hero = ({
  listUser = [
    {
      name: "シフト作成時間(月)",
      number: "最短30分",
      icon: "/assets/Icon/heroicons_sm-user.svg",
    },
    {
      name: "請求書作成(1通)",
      number: "最短5分",
      icon: "/assets/Icon/gridicons_location.svg",
    },
    {
      name: "売上管理(月)",
      number: "最短30分",
      icon: "/assets/Icon/bx_bxs-server.svg",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="max-w-screen-xl mt-8 px-4 sm:px-8 xl:px-16 mx-auto">
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4 sm:py-10"
          variants={scrollAnimation}
        >
          {/* 左側のテキストと画像 */}
          <div className="flex flex-col justify-center items-start">
            <div className="text-center">
              <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black leading-snug">
                軽配送業の経営を
                <strong className="font-bold text-pink-100 text-1xl sm:text-3xl">
                  ラクに
                </strong>{" "}
                <br />
              </h1>
              <h1 className="text-orange-500 font-bold text-4xl sm:text-5xl md:text-6xl mt-2">
                ケイラクラウド
              </h1>
              <p className="text-black mt-3 mb-5 text-xl sm:text-1xl md:text-2xl font-bold">
                全ての機能を
                <strong className="font-bold text-pink-100 text-2xl sm:text-4xl">
                  無料
                </strong>
                で利用可能！
                <br />
                <span className="text-base mt-2">
                  ※ドライバー5名 元請け企業2社までの登録
                </span>
              </p>
            </div>

            <div className="flex w-full justify-center sm:justify-start">
              <motion.div className="h-full w-full" variants={scrollAnimation}>
                <Image
                  src="/assets/test2.png"
                  alt="Illustration"
                  quality={100}
                  width={612}
                  height={383}
                  layout="intrinsic"
                />
              </motion.div>
            </div>
          </div>

          {/* 右側のフォーム */}
          <div className="flex flex-col justify-center">
            <div className="bg-green-500 text-white text-center p-4 rounded-t-lg">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                資料をダウンロード！
              </h2>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-2">
                今すぐ詳細をチェック！
              </h3>
            </div>

            {/* フォームの開始 */}
            <form
              action="https://ssl.form-mailer.jp/fm/service/Forms/confirm"
              method="post"
              name="form1"
              acceptCharset="UTF-8"
              className="bg-white shadow-lg rounded-b-lg p-4 sm:p-6 space-y-4 sm:space-y-5"
              encType="multipart/form-data"
            >
              <input type="hidden" name="key" value="5452c371839624" />

              {/* 法人名 */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-xs sm:text-sm font-medium text-gray-700"
                >
                  *法人名
                </label>
                <input
                  id="company"
                  name="field_7343156"
                  type="text"
                  placeholder="法人名を入力してください"
                  className="mt-1 p-2 sm:p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  required
                />
              </div>

              {/* 名前 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-xs sm:text-sm font-medium text-gray-700"
                  >
                    *姓
                  </label>
                  <input
                    id="last-name"
                    name="field_7343150_sei"
                    type="text"
                    placeholder="姓"
                    className="mt-1 p-2 sm:p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-xs sm:text-sm font-medium text-gray-700"
                  >
                    *名
                  </label>
                  <input
                    id="first-name"
                    name="field_7343150_mei"
                    type="text"
                    placeholder="名"
                    className="mt-1 p-2 sm:p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    required
                  />
                </div>
              </div>

              {/* メールアドレス */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs sm:text-sm font-medium text-gray-700"
                >
                  *メールアドレス
                </label>
                <input
                  id="email"
                  name="field_7343151"
                  type="email"
                  placeholder="info@example.com"
                  className="mt-1 p-2 sm:p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  required
                />
              </div>

              {/* 個人情報の取り扱いについて */}
              <div className="text-xs sm:text-sm text-gray-600 space-y-2">
                <h2 className="font-bold">『個人情報の取り扱いについて』 *</h2>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="agree"
                    name="agree"
                    className="w-4 h-4 text-orange-500 focus:ring-orange-400 border-gray-300 rounded"
                    required
                  />
                  <label htmlFor="agree" className="text-gray-700">
                    プライバシーポリシーに同意する(必須)
                  </label>
                </div>

                <p className="text-xs">
                  お送りいただいた個人情報は、お客様との連絡等の目的以外では使用いたしません。
                  <br />
                  当社の
                  <a
                    href="/PrivacyPolicy"
                    target="_blank"
                    className="text-orange-500 underline"
                  >
                    プライバシーポリシー
                  </a>
                  を必ずご確認いただき、同意いただいた上で送信ください。
                </p>
              </div>

              {/* 提出ボタン */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white p-2 sm:p-3 rounded-lg font-bold hover:bg-orange-200 hover:bg-opacity-80 transition-colors"
                >
                  ダウンロードする
                </button>
              </div>

              <p className="text-xs text-gray-500 text-center mt-4">
                <a
                  href="https://www.form-mailer.jp/?utm_source=https://ssl.form-mailer.jp/fms/5452c371839624&utm_medium=ownedmedia&utm_campaign=powered-by-formmailer"
                  target="_blank"
                  className="underline"
                >
                  Powered by FormMailer
                </a>
              </p>

              <input type="hidden" name="code" value="utf8" />
            </form>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>

      {/* スタッツセクション */}
      <div className="relative w-full flex">
        <ScrollAnimationWrapper className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-6 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white z-10">
          {listUser.map((listUsers, index) => (
            <motion.div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
              custom={{ duration: 2 + index }}
              variants={scrollAnimation}
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex items-center justify-center bg-orange-500 w-12 h-12 mr-6 rounded-full">
                  <img src={listUsers.icon} className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black font-bold">
                    {listUsers.number}+
                  </p>
                  <p className="text-lg text-black">{listUsers.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </ScrollAnimationWrapper>
        <div
          className="absolute bg-black opacity-5 w-11/12 rounded-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
