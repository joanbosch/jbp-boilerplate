import * as React from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

function AwesomeCard({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "border bg-card text-card-foreground shadow-sm realtive group/awesome-card relative flex flex-col justify-end overflow-hidden rounded-xl [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

function AwesomeCardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "absolute w-full h-full p-0 top-0 rounded-md transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover/awesome-card:scale-105",
        className
      )}
      {...props}
    />
  )
}

interface AwesomeCardImageProps extends React.HTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
}

function AwesomeCardImage({
  className,
  src,
  alt,
  ...props
}: AwesomeCardImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={cn("object-cover w-full h-full -z-10", className)}
      {...props}
    />
  )
}

function AwesomeCardText({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("p-6 z-0", className)} {...props}>
      {children}
    </p>
  )
}

function AwesomeCardFooter({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "pt-0 pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover/awesome-card:-translate-y-10 items-start",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

function AwesomeCardTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "text-2xl font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  )
}

function AwesomeCardDescription({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-sm text-muted-foreground mt-0",
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
}

function AwesomeCardAction({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover/awesome-card:translate-y-0 group-hover/awesome-card:opacity-100",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

interface AwesomeCardIconProps extends React.HTMLAttributes<SVGSVGElement> {
  icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>> | ((props: React.HTMLAttributes<SVGElement>) => React.SVGProps<SVGSVGElement>)
}

function AwesomeCardIcon({
  className,
  icon,
  ...props
}: AwesomeCardIconProps) {
  let Icon = icon as React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>
  return (
    <Icon
      className={cn(
        "lucide lucide-circle-gauge h-12 w-12 origin-left transform-gpu transition-all duration-300 ease-in-out group-hover/awesome-card:scale-75",
        className
      )}
      {...props}
    />
  )
}

export { AwesomeCard, AwesomeCardContent, AwesomeCardImage, AwesomeCardText, AwesomeCardFooter, AwesomeCardTitle, AwesomeCardDescription, AwesomeCardAction, AwesomeCardIcon }