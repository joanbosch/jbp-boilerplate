"use client";

import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import config from '@/config';
import { Loader } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import { signIn } from 'next-auth/react';
import { providerMap } from "@/lib/auth"

export default function GoogleSignIn() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const serachParams = useSearchParams()
  const callbackUrl = serachParams.get("callbackUrl") || config.auth.callbackUrl

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)
    await signIn('google', {callbackUrl})
    setIsLoading(false)
  }

  return (
    <Button variant="outline" type="button" disabled={isLoading} onClick={onSubmit}>
      {isLoading ? (
        <Loader className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Icons.google className="mr-2 h-4 w-4" />
      )}{" "}
      Sign in with Google
    </Button>
  )
}
