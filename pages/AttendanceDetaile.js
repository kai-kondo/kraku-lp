import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <SeoHead title="業務管理システムならケイラクラウド" />
      <Layout>
        <main className="pt-16">
          <section className=" dark:text-gray-800 bg-white-500">
            <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
              <img
                class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
                alt="hero"
                src="/assets/shift2.png"
              />
              <div class="text-center lg:w-2/3 w-full">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
                  出退勤管理の効率化
                </h1>
              </div>
            </div>
            <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
              <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-orange-100">
                    ドライバー出退勤の効率化
                  </h3>
                  <p className="mt-3 text-lg dark:text-gray-600">
                    毎日のドライバー出退勤状況を一覧で確認することができます。
                    <br></br>
                    ドライバーがスマートフォンで情報を入力すると
                    <strong className="text-orange-500 font-bold text-2xl">
                      リアルタイム
                    </strong>
                    で管理画面(ダッシュボード)から確認することができます。
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
                          管理者はダッシュボードを見れば誰が出社していないか一目瞭然！
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
                          ドライバーはスマホから出勤・退勤ボタンをワンタップするだけ！
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="mt-10 lg:mt-0">
                  <img
                    src="/assets/attendanceDetaile2.png"
                    alt="VPN Illustrasi"
                    layout="intrinsic" // or "fixed" depending on your need
                    quality={100}
                    className="mx-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
