"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import NodemailerSignIn from "./_components/nodemailer-sign-in"
import GoogleSignIn from "./_components/google-sign-in"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <NodemailerSignIn />
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <GoogleSignIn />
    </div>
  )
}