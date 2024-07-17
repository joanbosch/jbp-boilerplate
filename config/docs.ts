import { MainNavItem, SidebarNavItem } from "@/types/nav"

export interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Components",
      href: "/docs/components/accordion",
    },
    {
      title: "Blocks",
      href: "/blocks",
    },
    {
      title: "Charts",
      href: "/charts",
    },
    {
      title: "Themes",
      href: "/themes",
    },
    {
      title: "Examples",
      href: "/examples",
    },
    {
      title: "Colors",
      href: "/colors",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          description: "Beautifully designed grids that you can edit and embeed in your website. Accessible. Customizable. Awesome.",
          href: "/docs",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [],
        }
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Marquee",
          href: "/docs/components/marquee",
          items: [],
        },
        {
          title: "Awesome Card",
          href: "/docs/components/awesome-card",
          items: [],
        },
        {
          title: "Balancer",
          href: "/docs/components/balancer",
          items: [],
        }
      ],
    },
  ]
}