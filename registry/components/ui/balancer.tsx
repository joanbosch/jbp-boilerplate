import { cn } from "@/lib/utils"

function Balancer({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> ) {  
  return (
    <div className={cn(`max-w-lg tracking-tight text-balance`)} {...props} >
      {children}
    </div>
  )
}

export { Balancer }