import * as React from "react"
import { cn } from "@/lib/utils"


interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  duration?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 40 | 60 | 80 | 100,
  orientation?: "horizontal" | "vertical",
  scrollDirection?: "default" | "reversed",
  stopOnHover?: boolean
}

function Marquee({
  className,
  children,
  duration = 20,
  orientation = "horizontal",
  scrollDirection = "default",
  stopOnHover = false,
  ...props
}: MarqueeProps) {  
  return (
    <div className={`relative flex flex-col items-center justify-center gap-y-2 w-full`}>
      <div
        className={cn(
          `group/marquee flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row w-full `,
          duration === 1 && "[--duration:1s]",
          duration === 2 && "[--duration:2s]",
          duration === 3 && "[--duration:3s]",
          duration === 4 && "[--duration:4s]",
          duration === 5 && "[--duration:5s]",
          duration === 6 && "[--duration:6s]",
          duration === 7 && "[--duration:7s]",
          duration === 8 && "[--duration:8s]",
          duration === 9 && "[--duration:9s]",
          duration === 10 && "[--duration:10s]",
          duration === 11 && "[--duration:11s]",
          duration === 12 && "[--duration:12s]",
          duration === 13 && "[--duration:13s]",
          duration === 14 && "[--duration:14s]",
          duration === 15 && "[--duration:15s]",
          duration === 16 && "[--duration:16s]",
          duration === 17 && "[--duration:17s]",
          duration === 18 && "[--duration:18s]",
          duration === 19 && "[--duration:19s]",
          duration === 20 && "[--duration:20s]",
          duration === 40 && "[--duration:40s]",
          duration === 60 && "[--duration:60s]",
          duration === 80 && "[--duration:80s]",
          duration === 100 && "[--duration:100s]",
          orientation === "vertical" && "flex-col",
          className
        )}
        {...props}
      >
        <MarqueeLayout orientation={orientation} scrollDirection={scrollDirection} stopOnHover={stopOnHover}>
          {children}
        </MarqueeLayout>
        <MarqueeLayout orientation={orientation} scrollDirection={scrollDirection} stopOnHover={stopOnHover}>
          {children}
        </MarqueeLayout>
        <MarqueeLayout orientation={orientation} scrollDirection={scrollDirection} stopOnHover={stopOnHover}>
          {children}
        </MarqueeLayout>
      </div>
    </div>
  )
}

interface MarqueeContentProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical",
  scrollDirection?: "default" | "reversed",
  stopOnHover?: boolean
}
function MarqueeLayout({
  className,
  children,
  orientation = "horizontal",
  scrollDirection = "default",
  stopOnHover = false,
  ...props
}: MarqueeContentProps) {
  return (
    <div
      className={cn(
        `flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row w-full h-full items-center`,
        scrollDirection === "default" && "[animation-direction:reverse]",
        stopOnHover && "group-hover/marquee:[animation-play-state:paused]",
        orientation === "vertical" ? "flex-col animate-marquee-y" : "flex-row animate-marquee",
        scrollDirection === "default" && "[animation-direction:reverse]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { Marquee }