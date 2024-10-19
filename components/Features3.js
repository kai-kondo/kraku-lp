import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Pricing = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById("about");
    if (element) {
      const rect = element.getBoundingClientRect();
      // ビューポートに入ったとき
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 w-full py-14">
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        {/* 特徴 */}
        <div className="container mx-auto space-y-12" id="about">
          <motion.h3
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 leading-relaxed text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            ケイラクラウドの特徴
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                imgSrc: "/assets/shift.png",
                title: "ドライバーシフト管理の効率化",
                description:
                  "スマホで希望シフトを簡単に提出。ドラッグ＆ドロップでシフトを調整。シンプルな操作で効率的に管理できます。",
                link: "/DetailPage",
                bgColor: "bg-blue-500",
                textColor: "text-white",
              },
              {
                imgSrc: "/assets/shift2.png",
                title: "出退勤管理の効率化",
                description:
                  "出退勤状況を一目で確認できるダッシュボード。情報はリアルタイムで更新され、ドライバーはワンタップで勤怠管理が可能です。",
                link: "/AttendanceDetaile",
                bgColor: "bg-green-500",
                textColor: "text-white",
              },
              {
                imgSrc: "/assets/shift3.png",
                title: "精算業務の効率化",
                description:
                  "支払い金額の確認や請求操作をワンタップで。システムが自動計算し、請求書はPDFでダウンロードできます。",
                link: "/AttendanceDetaile",
                bgColor: "bg-purple-500",
                textColor: "text-white",
              },
            ].map((feature, index) => (
              <motion.div
                className="flex flex-col items-center p-6 rounded-lg shadow-lg bg-white"
                key={index}
                initial={{ opacity: 0, y: 20 }} // 初期状態
                animate={
                  isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                } // isVisible に基づくアニメーション
                transition={{ duration: 0.5, delay: index * 0.1 }} // 遅延を使ってアニメーションを順番に表示
              >
                <img
                  src={feature.imgSrc}
                  alt="Feature Illustration"
                  className="h-40 w-auto mb-4 object-cover"
                />
                <h3
                  className={`text-lg lg:text-2xl font-bold ${feature.textColor}`}
                >
                  {feature.title}
                </h3>
                <p className="my-4 text-base text-gray-700 text-center">
                  {feature.description}
                </p>
                <Link href={feature.link}>
                  <a className="text-sm lg:text-base text-yellow-300 font-bold underline hover:text-yellow-400 transition">
                    詳細はこちら
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* チュートリアル動画 */}
        <div className="container mx-auto space-y-12" id="tutorial">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 leading-relaxed text-center mt-48"
          >
            チュートリアル動画
          </motion.h3>

          <motion.div
            className="py-12 w-full px-8 mt-16 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
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
                const videoElement = document.getElementById("tutorial-video");
                const thumbnailElement =
                  document.getElementById("video-thumbnail");

                thumbnailElement.style.display = "none";
                videoElement.style.display = "block";
                videoElement.play();
              }}
              id="video-thumbnail"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            />

            {/* 動画コンテナ */}
            <motion.video
              id="tutorial-video"
              className="w-full max-w-4xl hidden"
              controls
              loop
              muted
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <source src="/assets/Introducing-Kiraku.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </motion.video>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
