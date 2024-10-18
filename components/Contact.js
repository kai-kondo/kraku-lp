import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Contact = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="Contact"
    >
      {/* Google Form iframe */}
      <div className="flex flex-col w-full my-16" id="testimoni">
        <ScrollAnimationWrapper>
          <motion.h3
            variants={scrollAnimation}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto text-center"
            id="contact"
          >
            お問い合わせ{" "}
          </motion.h3>
        </ScrollAnimationWrapper>

        <div className="flex justify-center mt-8">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeBMJPIFmdtlBVgPJWLGOEZKAfC34REPMNWwSfIWfXZ5JDMLg/viewform?embedded=true"
            width="440"
            height="982"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            読み込んでいます…
          </iframe>
        </div>

        <div className="flex flex-col w-full my-16" id="testimoni">
          <div className="flex flex-col w-full my-8 md:my-16" id="1">
            <ScrollAnimationWrapper className="relative w-full mt-16">
              <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
                <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-orange-500">
                  <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                    <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                      まずは無料プランに登録！
                    </h5>
                    <p>ケイラクラウドを初めてみよう！</p>
                  </div>
                  <ButtonPrimary>Get Started</ButtonPrimary>
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
    </div>
  );
};

export default Contact;
