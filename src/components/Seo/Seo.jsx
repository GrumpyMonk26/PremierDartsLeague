import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const siteName = "Premier Darts League";
const defaultDescription =
  "Join Premier Darts League, a competitive online darts league. Follow live tables, fixtures, results, player statistics and league news.";

const pageMetadata = {
  "/": {
    title: "Online Darts League",
    description: defaultDescription,
  },
  "/dashboard": {
    title: "Player Dashboard",
    description:
      "Search for your Premier Darts League player profile and view your latest league position, matches and season statistics.",
  },
  "/tables": {
    title: "League Tables",
    description:
      "View the latest Premier Darts League standings and follow every division throughout the season.",
  },
  "/fixtures": {
    title: "Fixtures & Results",
    description:
      "See the latest Premier Darts League fixtures, match results and upcoming games across every division.",
  },
  "/statistics": {
    title: "League Statistics",
    description:
      "Explore Premier Darts League statistics, including 180 leaders, highest checkouts, best legs and season averages.",
  },
  "/rules": {
    title: "League Rules",
    description:
      "Read the Premier Darts League rules, match format and community standards for competitive online darts.",
  },
};

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = pageMetadata[pathname] || pageMetadata["/"];
    const title = `${metadata.title} | ${siteName}`;
    const pageUrl = new URL(pathname, window.location.origin).href;
    const imageUrl = new URL("/PDL_Social.png?v=20260814", window.location.origin)
      .href;

    document.title = title;
    setMeta("name", "description", metadata.description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", metadata.description);
    setMeta("property", "og:url", pageUrl);
    setMeta("property", "og:image", imageUrl);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", metadata.description);
    setMeta("name", "twitter:image", imageUrl);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", pageUrl);
  }, [pathname]);

  return null;
}

export default Seo;
