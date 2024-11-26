module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["example.com"], // 画像を外部ドメインから取得する場合の設定
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/, // SVGファイルを扱うための設定
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
