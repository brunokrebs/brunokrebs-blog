import type { SiteConfig } from "@/lib/types";
const siteConfig: SiteConfig = {
  avatar: "/bruno-krebs.jpeg",
  siteUrl: "https://brunokrebs.com",
  siteName: "Bruno Krebs' Blog",
  siteDescription:
    "Blog where I write Software Engineer topics that I'm either learning, interested in, or trying to help the community with.",
  siteThumbnail: "/og-image.png",
  nav: [
    { label: "Posts", href: "/posts" },
    { label: "About", href: "/about" },
  ],
  social: {
    github: "https://github.com/brunokrebs",
    twitter: "https://twitter.com/brunoskrebs",
    linkedin: "https://www.linkedin.com/in/brunokrebs/",
  },
};
export default siteConfig;
