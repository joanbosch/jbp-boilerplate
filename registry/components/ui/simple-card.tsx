import { cn } from '@/lib/utils'
import React from 'react'

interface SimpleCardProps extends React.HTMLAttributes<HTMLDivElement> {
  blur?: boolean
}

function SimpleCard({
  className,
  children,
  blur = false,
  ...props
}: SimpleCardProps) {
  return (
    <div
      className={cn(
        "border rounded-lg max-w-80 md:max-w-96  h-full flex flex-col",
        blur && "blur-[1px] hover:blur-none transition-all ease-in-out duration-200",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

function SimpleCardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "p-4 h-full",
        className
      )}
      {...props}
    />
  )
}

function SimpleCardAuthor({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "p-4",
        className
      )}
      {...props}
    />
  )
}

export { SimpleCard, SimpleCardContent }
