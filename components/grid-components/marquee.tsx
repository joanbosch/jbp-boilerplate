import * as React from "react"
import { cn } from "@/lib/utils"


interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  duration?: 1 | 2 | 3| 4 | 5 | 6 | 7 | 8 | 9 | 10 | 20 | 40 | 60 | 80 | 100,
  orientation?: "horizontal" | "vertical",
  scrollDirection?: "default" | "reversed"
}

function Marquee({
  className,
  children,
  duration = 20,
  orientation = "horizontal",
  scrollDirection = "default",
  ...props
}: MarqueeProps) {  
  return (
    <div className={`relative flex flex-col items-center justify-center gap-y-2 w-full`}>
      <div
        className={cn(
          `group/marquee flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row w-full`,
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
        <MarqueeLayout orientation={orientation} scrollDirection={scrollDirection}>
          {children}
        </MarqueeLayout>
        <MarqueeLayout orientation={orientation} scrollDirection={scrollDirection}>
          {children}
        </MarqueeLayout>
        <MarqueeLayout orientation={orientation} scrollDirection={scrollDirection}>
          {children}
        </MarqueeLayout>
      </div>
    </div>
  )
}

interface MarqueeContentProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical",
  scrollDirection?: "default" | "reversed"
}
function MarqueeLayout({
  className,
  children,
  orientation = "horizontal",
  scrollDirection = "default",
  ...props
}: MarqueeContentProps) {
  return (
    <div
      className={cn(
        `flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row [animation-direction:reverse] w-full`,
        orientation === "vertical" && "flex-col",
        scrollDirection === "reversed" && "[animation-direction:reverse]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { Marquee }