import React from 'react'
import { Marquee } from '../ui/marquee'
import { Icons } from '@/components/icons'
import { Activity, Atom, Bird, Cat } from 'lucide-react'
import { cn } from '@/lib/utils'

interface MarqueeItemProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>> | ((props: React.HTMLAttributes<SVGElement>) => React.SVGProps<SVGSVGElement>)
  strokeWidth?: number
}

export const MarqueeItem = ({
  icon,
  children,
  className,
  strokeWidth = 1,
  ...props
}: MarqueeItemProps) => {
  let Icon = icon as React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>
  return (
    <div className={cn(`flex items-center content-center justify-center p-2 rounded-xl bg-muted aspect-square text-black hover:blur-0 transition-all ease-in-out duration-200`, className)} {...props}>
      <Icon className="h-full w-full" strokeWidth={strokeWidth}/>
    </div>
  )
}

export default function MarqueeDemo() {
  return (
    <section className={`relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl`}>
          <Marquee duration={14} scrollDirection="reversed" stopOnHover>
            <MarqueeItem icon={Icons.gitHub} className="bg-red-200 border w-16" />
            <MarqueeItem icon={Bird} className="bg-green-200 border w-16" />
            <MarqueeItem icon={Icons.apple} className="bg-orange-200 border w-16" />
            <MarqueeItem icon={Activity} className="bg-gray-200 border w-16" />
            <MarqueeItem icon={Atom} className="bg-blue-200 border w-16"  />
            <MarqueeItem icon={Icons.logo} className="bg-purple-200 border w-16" />
            <MarqueeItem icon={Icons.google} className="bg-stone-200 border w-16" />
            <MarqueeItem icon={Cat} className="bg-yellow-200 border w-16" />
          </Marquee>
          <Marquee duration={17}>
            <MarqueeItem icon={Cat} className="bg-yellow-200 border w-16" />
            <MarqueeItem icon={Atom} className="bg-blue-200 border w-16"  />
            <MarqueeItem icon={Icons.apple} className="bg-orange-200 border w-16" />
            <MarqueeItem icon={Activity} className="bg-gray-200 border w-16" />
            <MarqueeItem icon={Icons.logo} className="bg-purple-200 border w-16" />
            <MarqueeItem icon={Icons.gitHub} className="bg-red-200 border w-16" />
            <MarqueeItem icon={Bird} className="bg-green-200 border w-16" />
            <MarqueeItem icon={Icons.google} className="bg-stone-200 border w-16" />
          </Marquee>
          <Marquee duration={12} stopOnHover >
            <MarqueeItem icon={Activity} className="bg-gray-200 border w-16" />
            <MarqueeItem icon={Atom} className="bg-blue-200 border w-16"  />
            <MarqueeItem icon={Bird} className="bg-green-200 border w-16" />
            <MarqueeItem icon={Cat} className="bg-yellow-200 border w-16" />
            <MarqueeItem icon={Icons.google} className="bg-stone-200 border w-16" />
            <MarqueeItem icon={Icons.gitHub} className="bg-red-200 border w-16" />
            <MarqueeItem icon={Icons.apple} className="bg-orange-200 border w-16" />
            <MarqueeItem icon={Icons.logo} className="bg-purple-200 border w-16" />
          </Marquee>
          <Marquee duration={20} scrollDirection="reversed">
            <MarqueeItem icon={Activity} className="bg-gray-200 border w-16" />
            <MarqueeItem icon={Atom} className="bg-blue-200 border w-16"  />
            <MarqueeItem icon={Bird} className="bg-green-200 border w-16" />
            <MarqueeItem icon={Cat} className="bg-yellow-200 border w-16" />
            <MarqueeItem icon={Icons.google} className="bg-stone-200 border w-16" />
            <MarqueeItem icon={Icons.gitHub} className="bg-red-200 border w-16" />
            <MarqueeItem icon={Icons.apple} className="bg-orange-200 border w-16" />
            <MarqueeItem icon={Icons.logo} className="bg-purple-200 border w-16" />
          </Marquee>
      </section>
  )
}
