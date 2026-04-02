export const site = {
  title: "Ben Lewis (@bupedev)",
  author: "Ben Lewis",
  email: "ben@bupe.dev",
  location: "Brisbane, Australia",
  domain: "bupe.dev",
  url: "https://bupe.dev",
  socials: [
    {
      name: "LinkedIn",
      id: "bupedev",
      url: "linkedin.com/in/",
      icon: "fa-brands fa-linkedin",
    },
    {
      name: "Twitter",
      id: "bupedev",
      url: "twitter.com/",
      icon: "fa-brands fa-square-twitter",
    },
    {
      name: "Instagram",
      id: "bupedev",
      url: "instagram.com/",
      icon: "fa-brands fa-square-instagram",
    },
    {
      name: "Github",
      id: "bupedev",
      url: "github.com/",
      icon: "fa-brands fa-square-github",
    },
    {
      name: "E-Mail",
      id: "ben@bupe.dev",
      url: "mailto:",
      icon: "fa-solid fa-square-envelope",
    },
  ],
  navigation: [
    { title: "Home", href: "/" },
    { title: "Blog", href: "/blog/" },
    { title: "Experience", href: "/experience/" },
  ],
} as const;
