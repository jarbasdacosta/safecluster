import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "safecluster",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "pt-BR",
    baseUrl: "jarbasdacosta.github.io/safecluster",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    generateSocialImages: false,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Archivo",
        body: "Archivo",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#FBFBFC",
          lightgray: "#A8ABB8",
          gray: "#A8ABB8",
          darkgray: "#5D6270",
          dark: "#15171D",
          secondary: "#4B48C8",
          tertiary: "#8D8AF0",
          highlight: "rgba(75, 72, 200, 0.08)",
          textHighlight: "#8D8AF055",
        },
        darkMode: {
          light: "#15171D",
          lightgray: "#434754",
          gray: "#434754",
          darkgray: "#B6BAC6",
          dark: "#F2F3F7",
          secondary: "#8D8AF0",
          tertiary: "#A9A6F7",
          highlight: "rgba(141, 138, 240, 0.12)",
          textHighlight: "#8D8AF055",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({ priority: ["frontmatter", "filesystem"] }),
      Plugin.SyntaxHighlighting({ theme: { light: "github-dark", dark: "github-dark" }, keepBackground: false }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({ enableSiteMap: true, enableRSS: true }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}
export default config
