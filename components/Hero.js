import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { Link as LinkScroll } from "react-scroll";

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
          <div className=" flex-col justify-center items-start row-start-2 sm:row-start-1">
            <div className="mr-2 relative w-40 h-30 sm:w-72 sm:h-45 lg:w-96 lg:h-60">
              <Image
                src="/assets/Hero_logo.png"
                alt="VPN Illustrasi"
                quality={100}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:ml-12">
              <p className="text-black-600 mt-8 mb-1 sm:ml-5">
                軽貨物配送業の経営をラクに
              </p>
            </div>

            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal mt-1 mb-6 ml-12">
              <strong>ケイラクラウド</strong>
            </h1>
            <div className="ml-12">
              <LinkScroll
                to="contact"
                smooth={true}
                duration={500}
                offset={-150} // オフセットを調整して、スクロール位置を微調整
              >
                <ButtonPrimary>無料で始めてみる</ButtonPrimary>
              </LinkScroll>
            </div>
          </div>
          <div className="flex w-full">
            <motion.div className="h-full w-full" variants={scrollAnimation}>
              <Image
                src="/assets/hero2.svg"
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
        <ScrollAnimationWrapper className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {listUser.map((listUsers, index) => (
            <motion.div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
              custom={{ duration: 2 + index }}
              variants={scrollAnimation}
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
                  <img src={listUsers.icon} className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                    {listUsers.number}
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