import React, { useMemo } from "react";
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
      </div>
    </div>
  );
};

export default Contact;
