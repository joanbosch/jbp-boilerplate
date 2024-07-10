export const dynamic = 'force-dynamic'

import Link from "next/link"
import { UserAuthForm } from "./user-auth-form"
import config from "@/config"
import { getSEOTags } from "@/lib/seo";
import ReturnButton from "./components/return-button";
import ReturnAppName from "./components/return-app-name";
import { Suspense } from "react";

export const metadata = getSEOTags({
  title: `Login | ${config.appName}`,
  canonicalUrlRelative: "/login",
});

export default function AuthenticationPage() {
  return (
    <>
      <div className="relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <ReturnButton />
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <ReturnAppName />
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                {`"${config.appDescription}"`}
              </p>
              <footer className="text-sm">{config.ownerInfo.ownerName}</footer>
            </blockquote>
          </div>
        </div>
        <div className="relative p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Sign in
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create or login into your account
              </p>
            </div>
            <Suspense fallback={"Loading..."}>
              <UserAuthForm />
            </Suspense>
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
