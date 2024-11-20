import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <SeoHead title="プライバシーポリシー" />
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-center text-2xl sm:text-3xl font-bold mb-6">
          プライバシーポリシー
        </h1>

        <section className="mb-6">
          <h1 className="text-center text-2xl sm:text-3xl font-bold mb-6">
            プライバシーポリシー
          </h1>
        </section>

        <section className="mb-6">
          <h2 className="bg-orange-500 font-bold text-gray-800 text-lg sm:text-xl px-4 py-2 rounded">
            私たちについて
          </h2>
          <p className="mt-3 leading-relaxed text-sm sm:text-base">
            株式会社アスティ（以下，「当社」といいます。）は，本ウェブサイト上で提供するサービス
            （以下,「本サービス」といいます。）における，ユーザーの個人情報の取扱いについて，
            以下のとおりプライバシーポリシー（以下，「本ポリシー」といいます。）を定めます。
          </p>
        </section>

        <section className="mb-6">
          <h2 className="bg-orange-500 font-bold text-gray-800 text-lg sm:text-xl px-4 py-2 rounded">
            第1条（個人情報）
          </h2>
          <p className="mt-3 leading-relaxed text-sm sm:text-base">
            「個人情報」とは，個人情報保護法にいう「個人情報」を指すものとし，生存する個人に関する情報であって，
            当該情報に含まれる氏名，生年月日，住所，電話番号，連絡先その他の記述等により特定の個人を識別できる情報及び容貌，
            指紋，声紋にかかるデータ，及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報
            （個人識別情報）を指します。
          </p>
        </section>

        <section className="mb-6">
          <h2 className="bg-orange-500 font-bold text-gray-800 text-lg sm:text-xl px-4 py-2 rounded">
            第2条（個人情報の収集方法）
          </h2>
          <p className="mt-3 leading-relaxed text-sm sm:text-base">
            当社は，ユーザーが利用登録をする際に氏名，生年月日，住所，電話番号，メールアドレス，銀行口座番号，
            クレジットカード番号，運転免許証番号などの個人情報をお尋ねすることがあります。
            また，ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を,
            当社の提携先（情報提供元，広告主，広告配信先などを含みます。以下，｢提携先｣といいます。）などから
            収集することがあります。
          </p>
        </section>

        <section className="mb-6">
          <h2 className="bg-orange-500 font-bold text-gray-800 text-lg sm:text-xl px-4 py-2 rounded">
            第3条（個人情報を収集・利用する目的）
          </h2>
          <p className="mt-3 leading-relaxed text-sm sm:text-base">
            当社が個人情報を収集・利用する目的は，以下のとおりです。
          </p>
          <ul className="list-disc pl-5 mt-2 text-sm sm:text-base">
            <li>当社サービスの提供・運営のため</li>
            <li>
              ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）
            </li>
            <li>
              ユーザーが利用中のサービスの新機能，更新情報，キャンペーン等の案内のメールを送付するため
            </li>
            <li>メンテナンス，重要なお知らせなど必要に応じたご連絡のため</li>
            <li>不正利用防止のため</li>
            <li>有料サービスにおいて，ユーザーに利用料金を請求するため</li>
            <li>上記の利用目的に付随する目的</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="bg-orange-500 font-bold text-gray-800 text-lg sm:text-xl px-4 py-2 rounded">
            第4条（利用目的の変更）
          </h2>
          <p className="mt-3 leading-relaxed text-sm sm:text-base">
            当社は，利用目的が変更前と関連性を有すると合理的に認められる場合に限り，個人情報の利用目的を変更するものとします。
            利用目的の変更を行った場合には，変更後の目的について，ユーザーに通知し，または本ウェブサイト上に公表するものとします。
          </p>
        </section>

        <section className="mb-6">
          <h2 className="bg-orange-500 font-bold text-gray-800 text-lg sm:text-xl px-4 py-2 rounded">
            第5条（個人情報の第三者提供）
          </h2>
          <p className="mt-3 leading-relaxed text-sm sm:text-base">
            当社は，次に掲げる場合を除いて，あらかじめユーザーの同意を得ることなく，第三者に個人情報を提供することはありません。
            ただし，個人情報保護法その他の法令で認められる場合を除きます。
          </p>
          <ul className="list-disc pl-5 mt-2 text-sm sm:text-base">
            <li>人の生命，身体または財産の保護のために必要がある場合</li>
            <li>
              公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合
            </li>
            <li>
              国の機関もしくは地方公共団体が法令の定める事務を遂行するために協力する場合
            </li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="bg-orange-500 font-bold text-gray-800 text-xl px-4 py-2 rounded">
            第6条（個人情報の開示）
          </h2>
          <p>
            当社は，本人から個人情報の開示を求められたときは，本人に対し，遅滞なくこれを開示します。
            ただし，開示することにより次のいずれかに該当する場合は，その全部または一部を開示しないこともあります。
          </p>
          <ul className="list-inside list-disc pl-5">
            <li>
              本人または第三者の生命，身体，財産その他の権利利益を害するおそれがある場合
            </li>
            <li>当社の業務の適正な実施に著しい支障を及ぼすおそれがある場合</li>
            <li>その他法令に違反することとなる場合</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="bg-orange-500 font-bold text-gray-800 text-xl px-4 py-2 rounded">
            第7条（個人情報の訂正および削除）
          </h2>
          <p>
            ユーザーは，当社の保有する自己の個人情報が誤った情報である場合には，当社が定める手続きにより，
            当社に対して個人情報の訂正，追加または削除（以下，「訂正等」といいます。）を請求することができます。
          </p>
          <p>
            当社は，ユーザーから前項の請求を受けてその請求に応じる必要があると判断した場合には，
            遅滞なく，当該個人情報の訂正等を行うものとします。
          </p>
          <p>
            当社は，前項の規定に基づき訂正等を行った場合，または訂正等を行わない旨の決定をしたときは遅滞なく，
            これをユーザーに通知します。
          </p>
        </section>

        <section className="mb-5">
          <h2 className="bg-orange-500 font-bold text-gray-800 text-xl px-4 py-2 rounded">
            第8条（個人情報の利用停止等）
          </h2>
          <p>
            当社は，本人から，個人情報が，利用目的の範囲を超えて取り扱われているという理由，
            または不正の手段により取得されたものであるという理由により，その利用の停止または消去
            （以下，「利用停止等」といいます。）を求められた場合には，遅滞なく必要な調査を行います。
          </p>
          <p>
            前項の調査結果に基づき，その請求に応じる必要があると判断した場合には，遅滞なく，
            当該個人情報の利用停止等を行います。
          </p>
          <p>
            当社は，前項の規定に基づき利用停止等を行った場合，または利用停止等を行わない旨の決定をしたときは，
            遅滞なく，これをユーザーに通知します。
          </p>
          <p>
            前2項にかかわらず，利用停止等に多額の費用を有する場合その他利用停止等を行うことが困難な場合であって，
            ユーザーの権利利益を保護するために必要なこれに代わるべき措置をとれる場合は，
            この代替策を講じるものとします。
          </p>
        </section>

        <section className="mb-5">
          <h2 className="bg-orange-500 font-bold text-gray-800 text-xl px-4 py-2 rounded">
            第9条（プライバシーポリシーの変更）
          </h2>
          <p>
            本ポリシーの内容は，法令その他本ポリシーに別段の定めのある事項を除いて，
            ユーザーに通知することなく，変更することができるものとします。
          </p>
          <p>
            当社が別途定める場合を除いて，変更後のプライバシーポリシーは，
            本ウェブサイトに掲載したときから効力を生じるものとします。
          </p>
        </section>

        <section className="mb-5">
          <h2 className="bg-orange-500 font-bold text-gray-800 text-xl px-4 py-2 rounded">
            第10条（アクセス解析ツールについて）
          </h2>
          <p>
            当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
          </p>
          <p>
            このGoogleアナリティクスはアクセス情報の収集のためにCookieを使用しています。
            このアクセス情報は匿名で収集されており、個人を特定するものではありません。
          </p>
          <p>
            GoogleアナリティクスのCookieは、26ヶ月間保持されます。この機能はCookieを無効にすることで
            収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
          </p>
          <p>
            Googleアナリティクスの利用規約に関して確認したい場合は、
            <a
              href="https://www.google.com/analytics/terms/jp.html"
              target="_blank"
              className="text-orange-500 underline"
            >
              ここをクリック
            </a>
            してください。
          </p>
          <p>
            また、「ユーザーが Google パートナーのサイトやアプリを使用する際の
            Google によるデータ使用」 に関して確認したい場合は、
            <a
              href="https://policies.google.com/technologies/partner-sites"
              target="_blank"
              className="text-orange-500 underline"
            >
              ここをクリック
            </a>
            してください。
          </p>
        </section>

        <section className="mb-6">
          <h2 className="bg-orange-500 font-bold text-gray-800 text-lg sm:text-xl px-4 py-2 rounded">
            お問い合わせ
          </h2>
          <address className="leading-relaxed text-sm sm:text-base">
            住所：〒252-0029 神奈川県座間市⼊⾕⻄３丁⽬１６−１５ コスモ座間 1F
            <br />
            社名：株式会社アスティ
            <br />
            代表取締役：美濃⼝ 集
          </address>
        </section>

        {/* 戻るボタンを追加 */}
        <section className="mb-6 text-center">
          <Link href="/">
            <a className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-semibold">
              ホームに戻る
            </a>
          </Link>
        </section>
      </div>
    </Layout>
  );
}
