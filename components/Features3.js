import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Link from "next/link";


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
                  src="/assets/shift.png"
                  alt="VPN Illustrasi"
                  layout="intrinsic" // or "fixed" depending on your need
                  quality={100}
                  height={800} // ここで高さを指定
                  width={300} // ここで幅を指定
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
                  <Link href="/DetailPage">
                    <a className="text-blue-500 underline">詳細はこちら</a>
                  </Link>
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
                  src="/assets/shift2.png"
                  alt="VPN Illustrasi"
                  layout="intrinsic" // or "fixed" depending on your need
                  quality={100}
                  height={800} // ここで高さを指定
                  width={300} // ここで幅を指定
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
                  src="/assets/shift3.png"
                  alt="VPN Illustrasi"
                  layout="intrinsic" // or "fixed" depending on your need
                  quality={100}
                  height={800} // ここで高さを指定
                  width={300} // ここで幅を指定
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
        <div className="container mx-auto space-y-12" id="tutorial">
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
              className="py-12 w-full px-8 mt-16 flex justify-center items-center"
              variants={scrollAnimation}
            >
              {/* 再生ボタンのある画像 */}
              <img
                src="/assets/video2.png"
                loading="lazy"
                alt="再生する"
                width="640"
                height="360"
                className="cursor-pointer"
                onClick={() => {
                  document.getElementById("tutorial-video").style.display =
                    "block";
                  document.getElementById("video-thumbnail").style.display =
                    "none";
                  document.getElementById("tutorial-video").play();
                }}
                id="video-thumbnail"
              />

              {/* 動画コンテナ */}
              <video
                id="tutorial-video"
                className="w-full max-w-4xl hidden"
                controls
                loop
                muted
              >
                <source src="/assets/Introducing-Kiraku.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
