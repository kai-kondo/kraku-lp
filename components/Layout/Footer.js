import React from "react";
import { Link as LinkScroll } from "react-scroll";

const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <img
            src="/assets/logo.png"
            alt="Kraku Logo"
            className="ml-2 h-64 w-64"
            style={{ marginBottom: "-3rem", marginTop: "-7rem" }}
          />
          <p className="mb-4 mt-1">
            <strong className="text-orange-500">ケイラクラウドは</strong>
            <br></br>
            軽貨物配送業に関わる業務を効率化し経営をラクにするシステムです。
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md cursor-pointer">
              <a
                href="https://twitter.com/kraku_go_go"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/icons8-twitterx-48.png"
                  alt="X Logo"
                  className="h-8 w-8"
                />
              </a>
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md cursor-pointer">
              <a
                href="https://www.instagram.com/kraku_go_go/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/icons8-instagram-64.png"
                  alt="Instagram Logo"
                  className="h-8 w-8"
                />
              </a>
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md cursor-pointer">
              <a
                href="https://www.facebook.com/profile.php?id=61558140727238"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/facebook.png"
                  alt="Facebook Logo"
                  className="h-8 w-8"
                />
              </a>
            </div>
          </div>
          <p className="text-gray-600">
            ©{new Date().getFullYear()} - ケイラクラウド
          </p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-bold text-lg">詳細情報</p>
          <ul className="text-black-500 ">
            <LinkScroll
              to="feature"
              smooth={true}
              duration={500}
              offset={-100} // オフセットを調整して、スクロール位置を微調整
            >
              <li className="my-2 hover:text-orange-500 cursor-pointer transition-all font-semibold">
                特徴{" "}
              </li>
            </LinkScroll>

            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              ・シフト管理の効率化
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              ・出退勤管理の効率化
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              ・生産業務の効率化
            </li>

            <LinkScroll
              to="pricing"
              smooth={true}
              duration={500}
              offset={-100} // オフセットを調整して、スクロール位置を微調整
            >
              <li className="my-2 hover:text-orange-500 cursor-pointer transition-all font-semibold">
                プラン/価格{" "}
              </li>
            </LinkScroll>

            <LinkScroll
              to="testimoni"
              smooth={true}
              duration={500}
              offset={-100} // オフセットを調整して、スクロール位置を微調整
            >
              <li className="my-2 hover:text-orange-500 cursor-pointer transition-all font-semibold">
                利用者の声{" "}
              </li>
            </LinkScroll>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-bold text-lg">操作方法</p>
          <ul className="text-black-500">
            <LinkScroll
              to="tutorial"
              smooth={true}
              duration={500}
              offset={-100} // オフセットを調整して、スクロール位置を微調整
            >
              <li className="my-2 hover:text-orange-500 cursor-pointer transition-all font-semibold">
                チュートリアル
              </li>
            </LinkScroll>

            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all font-semibold">
              <a
                href="https://lin.ee/jixRRYe"
                target="_blank"
                rel="noopener noreferrer"
              >
                公式ライン追加
              </a>
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-bold text-lg">運営会社</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all font-semibold">
              <a
                href="https://asty-inc.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                株式会社Asty
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
