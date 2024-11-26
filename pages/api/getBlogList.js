const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID; // 正しいデータベースIDを環境変数で設定

export async function handler(req, res) {
  try {
    // Notion APIからブログ記事データを取得
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: "公開日", // 公開日プロパティでソート
          direction: "descending", // 降順
        },
      ],
      filter: {
        property: "公開日", // 公開日のプロパティ
        date: {
          is_not_empty: true, // 公開日が空でない場合にフィルタリング
        },
      },
    });
    // ブログ記事のデータを整形
    const blogPosts = response.results.map((page) => {
      const title =
        page.properties.タイトル.title[0]?.text.content || "No Title"; // タイトルプロパティから取得
      const date = page.properties.公開日.date.start; // 公開日プロパティから取得
      const notionPageId = page.id; // NotionページのID
      // URLを組み立てる（提供された形式に合わせて修正）
      const notionUrl = `https://four-honey-59f.notion.site/${notionPageId.replace(
        /-/g,
        ""
      )}`;
      const tags = page.properties.タグ.multi_select.map((tag) => tag.name); // タグプロパティから取得

      // fileプロパティから画像URLを取得（複数のファイルがある場合は最初の1つのみ取得）
      const files =
        page.properties.file?.files.map((file) => file.file.url) || [];
      const imageUrl = files.length > 0 ? files[0] : null; // 画像URLを取得

      return { title, date, url: notionUrl, tags, imageUrl }; // 組み立てたデータを返す
    });

    // 成功した場合、ブログ記事データを返す
    res.status(200).json(blogPosts);
  } catch (error) {
    console.error(error); // エラーログを表示
    // エラーが発生した場合はエラーメッセージを返す
    res.status(500).json({ error: "Failed to fetch data from Notion API" });
  }
}

export default handler;
