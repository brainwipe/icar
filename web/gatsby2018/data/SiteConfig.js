module.exports = {
  siteTitle: "Icar - Free Sci Fi TTRPG", // Site title.
  siteTitleShort: "Icar TTRPG", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Icar free Sci Fi Tabletop Roleplaying Game", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "http://www.icar.co.uk", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "Stuff", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteGATrackingID: "", // Tracking code ID for google analytics.
  disqusShortname: "", // Disqus shortname.
  postDefaultCategoryID: "Design", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Rob Lang", // Username to display in the author segment.
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Reading, UK", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "Stuff.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "Twitter",
      url: "https://twitter.com/icarrpg",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:roblang@icar.co.uk",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2018. Rob Lang"
};
