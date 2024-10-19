import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { Link as LinkScroll } from "react-scroll";
import Link from "next/link";

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
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto">
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          variants={scrollAnimation}
        >
          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="text-1xl lg:text-3xl xl:text-4xl font-bold text-black-600 leading-normal">
              軽配送業の経営をラクに <br></br>
            </h1>
            <h1 className="text-orange-500 font-bold text-4xl lg:text-5xl xl:text-6xl mt-2">

                ケイラクラウド
            </h1>
            <p className="text-black-500 mt-4 mb-6 text-xl font-bold">
              全ての機能を
              <strong className="font-bold text-orange-100 text-3xl">
                無料
              </strong>
              で利用可能！<br></br>
              <p className="text-xs">※ドライバー5名 元請け企業2社までの登録</p>
            </p>
            <LinkScroll
              to="contact"
              smooth={true}
              duration={500}
              offset={-150} // オフセットを調整して、スクロール位置を微調整
            >
              <ButtonPrimary>無料で始める</ButtonPrimary>
            </LinkScroll>
          </div>
          <div className="flex w-full">
            <motion.div className="h-full w-full" variants={scrollAnimation}>
              <Image
                src="/assets/test2.png"
                alt="VPN Illustrasi"
                quality={100}
                width={612}
                height={383}
                layout="responsive"
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <div className="relative w-full flex">
        <ScrollAnimationWrapper className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white500 z-10">
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
                  <p className="text-xl text-black-600 font-bold">
                    {listUsers.number}+
                  </p>
                  <p className="text-lg text-black-500">{listUsers.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </ScrollAnimationWrapper>
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
