import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll"; // 追加

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Normal",
      price: "￥15,000",
      description: "まずはお手軽に始めたい企業向け",
      features: [
        <>
          ユーザー数: <span className="text-blue-100 text-xl">1~10人まで</span>{" "}
          {/* 色指定 */}
        </>,
        "元請け企業数:無制限",
      ],
      colorClass: "bg-gray-100",
      titleColor: "text-blue-100",
      priceColor: "text-blue-100",
      buttonColor: "bg-blue-100",
      buttonTextColor: "text-white-500",
      buttonHoverColor: "bg-blue-100",
      borderColor: "border-blue-100", // 外枠の色
    },
    {
      title: "Standard",
      price: "￥40,000",
      description: "10~50人以内のクルーを抱えている企業向け",
      features: [
        <>
          ユーザー数: <span className="text-blue-400 text-xl">1~50人まで</span>{" "}
          {/* 色指定 */}
        </>,
        "元請け企業数:無制限",
      ],
      colorClass: "bg-violet-600 text-gray-50",
      titleColor: "text-blue-400",
      priceColor: "text-blue-400",
      buttonColor: "bg-blue-400",
      buttonTextColor: "text-white-500",
      buttonHoverColor: "bg-blue-400",
      borderColor: "border-blue-400", // 外枠の色
    },
    {
      title: "Premium",
      price: "￥70,000",
      description: "大人数のドライバーを抱えている企業向け",
      features: [
        <>
          ユーザー数: <span className="text-blue-500 text-xl">無制限</span>{" "}
          {/* 色指定 */}
        </>,
        "元請け企業数:無制限",
      ],
      colorClass: "bg-gray-50",
      titleColor: "text-blue-500",
      priceColor: "text-blue-500",
      buttonColor: "bg-blue-500",
      buttonTextColor: "text-white-500",
      buttonHoverColor: "bg-blue-500",
      borderColor: "border-blue-500", // 外枠の色
    },
  ];

  const pricingPlans2 = [
    {
      title: "Normal",
      price: "￥9,800",
      description: "まずはお手軽に始めたい企業向け",
      features: [
        <>
          ユーザー数: <span className="text-blue-100 text-xl">1~10人まで</span>{" "}
          {/* 色指定 */}
        </>,
        "元請け企業数:無制限",
      ],
      colorClass: "bg-gray-100",
      titleColor: "text-blue-100",
      priceColor: "text-blue-100",
      buttonColor: "bg-blue-100",
      buttonTextColor: "text-white-500",
      buttonHoverColor: "bg-blue-100",
      borderColor: "border-blue-100",
    },
    {
      title: "Standard",
      price: "￥29,800",
      description: "10~50人以内のクルーを抱えている企業向け",
      features: [
        <>
          ユーザー数: <span className="text-blue-400 text-xl">1~50人まで</span>{" "}
          {/* 色指定 */}
        </>,
        "元請け企業数:無制限",
      ],
      colorClass: "bg-violet-600 text-gray-50",
      titleColor: "text-blue-400",
      priceColor: "text-blue-400",
      buttonColor: "bg-blue-400",
      buttonTextColor: "text-white-500",
      buttonHoverColor: "bg-blue-400",
      borderColor: "border-blue-400", // 外枠の色
    },
    {
      title: "Premium",
      price: "￥59,800",
      description: "大人数のドライバーを抱えている企業向け",
      features: [
        <>
          ユーザー数: <span className="text-blue-500 text-xl">無制限</span>{" "}
          {/* 色指定 */}
        </>,
        "元請け企業数:無制限",
      ],
      colorClass: "bg-gray-50",
      titleColor: "text-blue-500",
      priceColor: "text-blue-500",
      buttonColor: "bg-blue-500",
      buttonTextColor: "text-white-500",
      buttonHoverColor: "bg-blue-500",
      borderColor: "border-blue-500", // 外枠の色
    },
  ];

  const pricingPlans3 = [
    {
      title: "Trial",
      price: "￥0",
      description: "お試し感覚で始めたい企業向け",
      features: [
        <>
          ユーザー数: <span className="text-pink-100 text-xl">1~5人まで</span>{" "}
          {/* 色指定 */}
        </>,
        "元請け企業数:2社",
      ],
      colorClass: "bg-violet-600 text-gray-50",
      titleColor: "text-pink-100",
      priceColor: "text-pink-100",
      buttonColor: "bg-pink-100",
      buttonTextColor: "text-white-500",
      buttonHoverColor: "bg-pink-100",
      borderColor: "border-pink-100", // 外枠の色
    },
  ];

  return (
    <section className="py-20 dark:bg-gray-100 dark:text-gray-800">
      {/* 無料プラン */}
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <h2 className="text-4xl font-bold lg:text-5xl">プラン</h2>
        </div>
        <motion.div
          className="max-w-2xl mx-auto mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1 }}
        >
          <span className="font-bold tracking-wider uppercase dark:text-violet-600 text-3xl">
            FREEプラン
          </span>
        </motion.div>
        <div className="flex flex-wrap justify-center items-stretch -mx-4">
          {pricingPlans3.map((plan, index) => (
            <div
              key={index}
              className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0"
            >
              <motion.div
                className={`flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 border-2 ${plan.colorClass} ${plan.borderColor}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-2">
                  <h4 className={`text-2xl font-bold ${plan.titleColor}`}>
                    {plan.title}
                  </h4>
                  <span className={`text-6xl font-bold ${plan.priceColor}`}>
                    {plan.price}
                  </span>
                  <span className="text-sm tracking-wide">/月</span>
                </div>
                <p className="leading-relaxed">{plan.description}</p>
                <ul className="flex-1 space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center space-x-2 font-bold"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6 dark:text-violet-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="contact" smooth={true} duration={500}>
                  <button
                    type="button"
                    className={`inline-block w-full px-5 py-3 font-semibold tracking-wider text-center rounded-lg border-2 ${plan.buttonColor} ${plan.buttonTextColor} transition duration-300 ease-in-out hover:${plan.buttonHoverColor}`}
                  >
                    Get Started
                  </button>
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* 6ヶ月プラン */}
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-16 text-center"></div>
        <motion.div
          className="max-w-2xl mx-auto mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1 }}
        >
          <span className="font-bold tracking-wider uppercase dark:text-violet-600 text-3xl">
            6ヶ月契約の場合
          </span>
        </motion.div>
        <div className="flex flex-wrap items-stretch -mx-4">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0"
            >
              <motion.div
                className={`flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 border-2 ${plan.colorClass} ${plan.borderColor}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-2">
                  <h4 className={`text-2xl font-bold ${plan.titleColor}`}>
                    {plan.title}
                  </h4>
                  <span className={`text-6xl font-bold ${plan.priceColor}`}>
                    {plan.price}
                  </span>
                  <span className="text-sm tracking-wide">/月</span>
                </div>
                <p className="leading-relaxed">{plan.description}</p>
                <ul className="flex-1 space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center space-x-2 font-bold"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6 dark:text-violet-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="contact" smooth={true} duration={500}>
                  <button
                    type="button"
                    className={`inline-block w-full px-5 py-3 font-semibold tracking-wider text-center rounded-lg border-2 ${plan.buttonColor} ${plan.buttonTextColor} transition duration-300 ease-in-out hover:${plan.buttonHoverColor}`}
                  >
                    Get Started
                  </button>
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* 1年プラン */}
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-16 text-center"></div>
        <motion.div
          className="max-w-2xl mx-auto mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1 }}
        >
          <span className="font-bold tracking-wider uppercase dark:text-violet-600 text-3xl">
            1年契約の場合
          </span>
        </motion.div>
        <div className="flex flex-wrap items-stretch -mx-4">
          {pricingPlans2.map((plan, index) => (
            <div
              key={index}
              className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0"
            >
              <motion.div
                className={`flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 border-2 ${plan.colorClass} ${plan.borderColor}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-2">
                  <h4 className={`text-2xl font-bold ${plan.titleColor}`}>
                    {plan.title}
                  </h4>
                  <span className={`text-6xl font-bold ${plan.priceColor}`}>
                    {plan.price}
                  </span>
                  <span className="text-sm tracking-wide">/月</span>
                </div>
                <p className="leading-relaxed">{plan.description}</p>
                <ul className="flex-1 space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center space-x-2 font-bold"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6 dark:text-violet-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="contact" smooth={true} duration={500}>
                  <button
                    type="button"
                    className={`inline-block w-full px-5 py-3 font-semibold tracking-wider text-center rounded-lg border-2 ${plan.buttonColor} ${plan.buttonTextColor} transition duration-300 ease-in-out hover:${plan.buttonHoverColor}`}
                  >
                    Get Started
                  </button>
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
