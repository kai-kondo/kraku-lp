import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title="業務管理システムならケイラクラウド" />
      <Layout>
        <main className="pt-16">
          <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <img
              class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
              alt="hero"
              src="/assets/shift.png"
            />
            <div class="text-center lg:w-2/3 w-full">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-orange-500">
                  ドライバーシフトの効率化
                </h2>
                <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-600">
                  毎月のドライバーのシフト管理にかかる時間を減少できます。
                </p>
              </div>
            </div>
          </div>
          <section className=" dark:text-gray-800">
            <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
              <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-orange-500">
                    操作は管理画面で調整するだけ
                  </h3>
                  <p className="mt-3 text-lg dark:text-gray-600">
                    今までドライバーと何度もシフト調整のやりとりもケイラクラウドを利用すれば、管理画面から
                    <strong className="text-green-500">
                      素早くシフトを作成
                    </strong>
                    できて互いの連絡をせずに済みます
                  </p>
                  <div className="mt-12 space-y-12">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-10 h-10 text-green-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-bold leading-6 text-black-600">
                          ドライバーはスマホから希望のシフトを提出
                        </h4>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-10 h-10 text-green-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-bold leading-6 text-black-600">
                          操作は画面上でドラッグ&ドロップ
                        </h4>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-10 h-10 text-green-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-bold leading-6 text-black-600">
                          管理画面でシフト調節後ドライバーへワンタッチでシフトをお知らせ
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="mt-10 lg:mt-0">
                  <img
                    src="/assets/detail.png"
                    alt="VPN Illustrasi"
                    layout="intrinsic" // or "fixed" depending on your need
                    quality={100}
                    className="mx-auto rounded-lg"
                  />
                </div>
              </div>
              <div>
                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                  <div className="lg:col-start-2">
                    <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-orange-500">
                      シフトは前月の情報を元に自動作成可能
                    </h3>
                    <p className="mt-3 text-lg dark:text-gray-600">
                      管理者・ドライバー共に前月に提出/作成したシフトをもとに{" "}
                      <strong className="text-green-500">
                        システムが自動的にシフト案を作成
                      </strong>
                      してくれます。
                      この機能により、シフトを考える時間を短縮することが可能です。
                    </p>
                    <div className="mt-12 space-y-12">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="w-10 h-10 text-green-500"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-bold leading-6 text-black-600">
                            1つのボタンででシフトを一括作成
                          </h4>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="w-10 h-10 text-green-500"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-bold leading-6 text-black-600">
                            更新の都度ドライバーへ自動連絡
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                    <img
                      src="/assets/detail3.png"
                      alt=""
                      className="mx-auto rounded-lg "
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
