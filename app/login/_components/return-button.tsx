"use client"

import { buttonVariants } from '@/components/ui/button'
import config from "@/config/config";
import { cn } from '@/lib/utils'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React, { useMemo } from 'react'

export default function ReturnButton() {
  const searchParams = useSearchParams()
  
  const returnUrl = useMemo(() => {
    return searchParams.get("callbackUrl") || config.auth.callbackUrl
  }, [searchParams])
  
  return (
    <Link
      href={returnUrl}
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "absolute lg:hidden left-0 top-4 flex flex-row gap-2 items-center justify-center m-2"
      )}
    >
      <ChevronLeft size={16} />
      {config.appName}
    </Link>
  )
}
