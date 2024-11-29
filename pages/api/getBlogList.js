export const config = {
  runtime: "experimental-edge",
};

export default async function handler(req) {
  const notionApiUrl = `https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`;

  try {
    const response = await fetch(notionApiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sorts: [
          {
            property: "公開日",
            direction: "descending",
          },
        ],
        filter: {
          property: "公開日",
          date: {
            is_not_empty: true,
          },
        },
      }),
    });

    const data = await response.json();
    const blogPosts = data.results.map((page) => {
      const title =
        page.properties.タイトル.title[0]?.text.content || "No Title";
      const date = page.properties.公開日.date.start;
      const notionPageId = page.id;
      const notionUrl = `https://four-honey-59f.notion.site/${notionPageId.replace(
        /-/g,
        ""
      )}`;
      const tags = page.properties.タグ.multi_select.map((tag) => tag.name);
      const files =
        page.properties.file?.files.map((file) => file.file.url) || [];
      const imageUrl = files.length > 0 ? files[0] : null;

      return { title, date, url: notionUrl, tags, imageUrl };
    });

    return new Response(JSON.stringify(blogPosts), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch data from Notion API" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
