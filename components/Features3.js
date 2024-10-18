import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Link from "next/link";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14">
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        {/* 特徴 */}
        <div className="container mx-auto space-y-12" id="about">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-relaxed text-center"
            >
              ケイラクラウドの特徴
            </motion.h3>
          </ScrollAnimationWrapper>

          {[
            {
              imgSrc: "/assets/shift.png",
              point: "Point 1",
              title: "ドライバーシフト管理の効率化",
              description: (
                <>
                  システムを使用しドライバーから希望シフトを提出
                  <br />
                  事業主はその状況を元に各ドライバーのシフトを調整
                  <br />
                  画面上を
                  <strong className="text-orange-100 text-xl font-bold">
                    ドラッグ&ドロップで操作
                  </strong>
                  するなど簡単！
                </>
              ),
              link: "/DetailPage",
            },
            {
              imgSrc: "/assets/shift.png",
              point: "Point 2",
              title: "出退勤管理の効率化",
              description: (
                <>
                  出退勤状況が
                  <strong className="text-orange-100 text-xl font-bold">
                    一目でわかる
                  </strong>
                  ダッシュボード
                  <br />
                  出退勤情報をリアルタイムで管理画面に反映
                  <br />
                  ドライバーは1タップで勤怠管理
                </>
              ),
              link: "/AttendanceDetaile",
              reverse: true,
            },
            {
              imgSrc: "/assets/shift3.png",
              point: "Point 3",
              title: "精算業務の効率化",
              description: (
                <>
                  ドライバーへの支払い金額確認・ドライバーからの請求を
                  ボタンひとつで簡単操作！
                  <br />
                  面倒な計算も
                  <strong className="text-orange-100 text-xl font-bold">
                    システムが自動計算！
                  </strong>
                  <br />
                  システムで作られた請求書はPDFでダウンロード可能!
                </>
              ),
              link: "/AttendanceDetaile",
            },
          ].map((feature, index) => (
            <ScrollAnimationWrapper key={index}>
              <motion.div
                className="py-12 w-full px-8 mt-16"
                variants={scrollAnimation}
              >
                <div
                  className={`flex flex-col overflow-hidden rounded-md shadow-lg lg:flex-row${
                    feature.reverse ? "-reverse" : ""
                  } bg-white`}
                >
                  <motion.img
                    src={feature.imgSrc}
                    alt="Feature Illustration"
                    className="h-80 w-auto max-w-full object-cover" // 適切な幅と高さを維持
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="flex flex-col justify-center flex-1 p-6 bg-white">
                    <p className="my-6 text-2xl font-medium text-orange-500">
                      {feature.point}
                    </p>
                    <h3 className="text-3xl font-bold text-orange-100">
                      {feature.title}
                    </h3>
                    <p className="my-6 dark:text-gray-600">
                      {feature.description}
                    </p>
                    <Link href={feature.link}>
                      <a className="text-pink-100 font-bold underline">
                        詳細はこちら
                      </a>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          ))}
        </div>

        {/* チュートリアル */}
        <div className="container mx-auto space-y-12" id="tutorial">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-relaxed text-center mt-48"
            >
              チュートリアル動画
            </motion.h3>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper>
            <motion.div
              className="py-12 w-full px-8 mt-16 flex justify-center items-center"
              variants={scrollAnimation}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8 }}
            >
              {/* 再生ボタンのある画像 */}
              <motion.img
                src="/assets/video2.png"
                loading="lazy"
                alt="再生する"
                width="640"
                height="360"
                className="cursor-pointer"
                onClick={() => {
                  const videoElement =
                    document.getElementById("tutorial-video");
                  const thumbnailElement =
                    document.getElementById("video-thumbnail");

                  thumbnailElement.style.display = "none";
                  videoElement.style.display = "block";
                  videoElement.play();
                }}
                id="video-thumbnail"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} // ホバー時に拡大
              />

              {/* 動画コンテナ */}
              <motion.video
                id="tutorial-video"
                className="w-full max-w-4xl hidden"
                controls
                loop
                muted
                initial={{ opacity: 0 }} // 初期状態を透明に
                animate={{ opacity: 1 }} // 表示時に不透明に
                transition={{ duration: 0.5 }} // アニメーションの持続時間
              >
                <source src="/assets/Introducing-Kiraku.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </motion.video>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
