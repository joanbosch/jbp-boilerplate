import { Icons } from "@/components/icons"

export interface NavItem {
  title: string
  href?: string
  description?: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
  label?: string
}

export interface NavTocItem {
  title: string
  id: string
  items?: NavTocItem[]
}

export interface NavItemWithChildren extends NavItem {
  toc?: NavTocItem[]
  items: NavItemWithChildren[]
}

export interface MainNavItem extends NavItem {}

export interface SidebarNavItem extends NavItemWithChildren {}