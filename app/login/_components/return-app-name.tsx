"use client"

import { Icons } from "@/components/icons"
import config from "@/config"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useMemo } from "react"

export default function ReturnAppName() {
  const searchParams = useSearchParams()
  
  const returnUrl = useMemo(() => {
    return searchParams.get("callbackUrl") || config.auth.callbackUrl
  }, [searchParams])
  
  return (
    <Link
      href={returnUrl}
      className="relative z-20 flex items-center text-lg font-medium hover:border-b-2 w-fit transition-all ease-in duration-100"
    >
      <Icons.logo className="h-6 w-6" />
      {config.appName}
    </Link>
  )
}
