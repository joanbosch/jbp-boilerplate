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

export interface NavItemSection {
  title: string
  id: string
}

export interface NavItemWithChildren extends NavItem {
  sections?: NavItemSection[]
  items: NavItemWithChildren[]
}

export interface MainNavItem extends NavItem {}

export interface SidebarNavItem extends NavItemWithChildren {}