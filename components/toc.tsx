"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { NavTocItem } from "@/types/nav"
import { useMounted } from "@/hooks/use-mounted"
import { usePathname } from "next/navigation"
import Link from "next/link"

interface TocProps {
  toc: NavTocItem[]
}

export function DashboardTableOfContents({ toc }: TocProps) {
  const itemIds : string[] = React.useMemo(
    () => {
      const ids = toc
            .flatMap((item) => [item.id, item?.items?.map((item) => item.id)])
            .flat()
            .filter(Boolean)
            .filter((id) => typeof id === "string")
      return ids
    }, [toc])
  const activeHeading = useActiveItem(itemIds)
  const mounted = useMounted()

  if (!toc || !mounted) {
    return null
  }

  return (
    <div className="space-y-2">
      <p className="font-medium">On This Page</p>
      <Tree tree={toc} activeItem={activeHeading} />
    </div>
  )
}

function useActiveItem(itemIds: string[]): string {
  const [activeId, setActiveId] = React.useState<string | null>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: `0% 0% -80% 0%` }
    )

    itemIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      itemIds?.forEach((id) => {
        const element = document.getElementById(id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [itemIds])

  return activeId as string
}

interface TreeProps {
  tree: NavTocItem[]
  level?: number
  activeItem?: string
}

function Tree({ tree, level = 1, activeItem }: TreeProps) {
  const pathname = usePathname()
  console.log(pathname)
  return tree?.length && level < 3 ? (
    <ul className={cn("m-0 list-none", { "pl-4": level !== 1 })}>
      {tree.map((item, index) => {
        return (
          <li key={index} className={cn("mt-0 pt-2")}>
            <Link
              href={`#${item.id}`}
              className={cn(
                "inline-block no-underline transition-colors hover:text-foreground",
                item.id === `${activeItem}`
                  ? "font-medium text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {item.title}
            </Link>
            {item.items?.length ? (
              <Tree tree={item.items} level={level + 1} activeItem={activeItem} />
            ) : null}
          </li>
        )
      })}
    </ul>
  ) : null
}
