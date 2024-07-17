import { cn } from "@/lib/utils"

interface MarqueeItemProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>> | ((props: React.HTMLAttributes<SVGElement>) => React.SVGProps<SVGSVGElement>)
  strokeWidth?: number
}

export default function MarqueeItem({
  icon,
  children,
  className,
  strokeWidth = 1,
  ...props
}: MarqueeItemProps) {
  let Icon = icon as React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>
  return (
    <div className={cn(`flex items-center content-center justify-center p-2 rounded-xl bg-muted aspect-square text-black hover:blur-0 transition-all ease-in-out duration-200`, className)} {...props}>
      <Icon className="h-full w-full" strokeWidth={strokeWidth}/>
    </div>
  )
}
