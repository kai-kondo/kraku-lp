import React from "react";
const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <img
            src="/assets/logo.png"
            alt="Kraku Logo"
            className="h-40 w-auto mb-1"
          />
          <p className="mb-4 mt-1">
            <strong className="font-bold">ケイラクラウドは</strong> <br></br>
            軽貨物配送業に関わる業務を効率化し<br></br>経営をラクにするシステムです。
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">

          </div>
          <p className="text-gray-400">
            ©{new Date().getFullYear()} - ケイラクラウド
          </p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col mt-16">
          <p className="text-black-600 mb-4 font-medium text-lg">運営会社</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              株式会社Asty{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
