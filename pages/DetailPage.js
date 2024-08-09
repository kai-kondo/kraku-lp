import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title="業務管理システムならケイラクラウド" />
      <Layout>
        <main className="pt-16">
          <section className=" dark:text-gray-800">
            <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-900">
                  ドライバーシフトの効率化
                </h2>
                <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-600">
                  毎月のドライバーのシフト管理にかかる時間を減少できます。
                </p>
              </div>
              <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">
                    操作は管理画面で調整するだけ
                  </h3>
                  <p className="mt-3 text-lg dark:text-gray-600">
                    今までドライバーと何度もシフト調整のやりとりもケイラクラウドを利用すれば、管理画面から素早くシフトを作成できて互いの連絡をせずに済みます
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
                            className="w-7 h-7"
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
                        <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
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
                            className="w-7 h-7"
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
                        <h4 className="text-lg font-bold leading-6 dark:text-gray-900">
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
                            className="w-7 h-7"
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
                        <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
                          管理画面でシフト調節後ドライバーへワンタッチでシフトをお知らせ
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="mt-10 lg:mt-0">
                  <img
                    src="https://source.unsplash.com/random/360x480"
                    alt=""
                    className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                  />
                </div>
              </div>
              <div>
                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                  <div className="lg:col-start-2">
                    <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">
                      Eam nibh gloriatur ex
                    </h3>
                    <p className="mt-3 text-lg dark:text-gray-600">
                      Per odio fabellas consulatu cu. Utroque detracto mel ea,
                      quo te latine theophrastus. Ea his tale nibh dissentias,
                      mei exerci tamquam euripidis cu.
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
                              className="w-7 h-7"
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
                          <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
                            Cibo augue offendit has ad
                          </h4>
                          <p className="mt-2 dark:text-gray-600">
                            An per velit appellantur, ut utinam minimum nominavi
                            sit, odio nostro habemus ne nec. Ne sonet regione
                            contentiones est.
                          </p>
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
                              className="w-7 h-7"
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
                          <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
                            At eum ferri luptatum lobortis
                          </h4>
                          <p className="mt-2 dark:text-gray-600">
                            Te per quidam maiorum ocurreret, etiam delicatissimi
                            usu ad. Ne has quod periculis. Te sit primis iisque
                            efficiantur.
                          </p>
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
                              className="w-7 h-7"
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
                          <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
                            Dicunt verterem evertitur eu sea
                          </h4>
                          <p className="mt-2 dark:text-gray-600">
                            Audire principes rationibus eam an, autem nominavi
                            luptatum per te. Sumo fabulas vim eu, sonet saperet
                            eleifend ut vix.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                    <img
                      src="https://source.unsplash.com/random/361x481"
                      alt=""
                      className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
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
