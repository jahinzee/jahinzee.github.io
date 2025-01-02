import rss from "@astrojs/rss";

async function unravelGlob(glob) {
  let output = [];
  for (const promise of Object.values(glob)) {
    promise().then((p) => output.push(p));
  }
  return output;
}

const photos = await unravelGlob(import.meta.glob("./photos/*.mdx"));
const articles = await unravelGlob(import.meta.glob("./articles/*.mdx"));
const graphics = await unravelGlob(import.meta.glob("./graphics/*.mdx"));

export function GET(context) {
  return rss({
    title: "jahinzee",
    description: "jahinzee's photos, articles, and graphics.",
    site: context.site,
    items: [
      {
        title: "This feed is deprecated.",
        description:
          "No more updates will be published to this feed, and the link may be removed. You may remove this feed from your reader. For more information, visit the homepage.",
        pubDate: "2025-01-02",
        link: "https://jahinzee.github.io",
        categories: ["photos", "articles", "graphics"],
      },
    ],
    //       .concat(
    //         photos.map((p) => {
    //           return {
    //             title: `Photo: ${p.frontmatter.title}`,
    //             description:
    //               p.frontmatter.location !== undefined
    //                 ? `Taken at ${p.frontmatter.location}.`
    //                 : "",
    //             pubDate: p.frontmatter.date,
    //             link: p.url,
    //             categories: ["photos"],
    //           };
    //         })
    //       )
    //       .concat(
    //         articles.map((a) => {
    //           return {
    //             title: `Article: ${a.frontmatter.title}`,
    //             description: "",
    //             pubDate: a.frontmatter.date,
    //             link: a.url,
    //             categories: ["articles"],
    //           };
    //         })
    //       )
    //       .concat(
    //         graphics.map((g) => {
    //           return {
    //             title: `Graphic: ${g.frontmatter.title}`,
    //             description: "",
    //             pubDate: g.frontmatter.date,
    //             link: g.url,
    //             categories: ["graphics"],
    //           };
    //         })
    //       ),
  });
}
