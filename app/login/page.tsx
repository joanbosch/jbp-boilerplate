export const dynamic = 'force-dynamic'

import Link from "next/link"
import { UserAuthForm } from "./user-auth-form"
import config from "@/config/config";
import { getSEOTags } from "@/lib/seo";
import ReturnButton from "./_components/return-button";
import ReturnAppName from "./_components/return-app-name";
import { Suspense } from "react";
import { Marquee } from "@/components/grid-components/marquee";
import MarqueeItem from "@/components/marquee-item";
import { Icons } from "@/components/icons";
import { Activity, Atom, Bird, Cat } from "lucide-react";

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
          <section className={`container flex w-full justify-center mb-40`}>
            <div className="absolute overflow-hidden flex flex-col w-full h-fit top-[30%]">
              <Marquee duration={50} scrollDirection="reversed" stopOnHover>
                <MarqueeItem icon={Icons.gitHub} className="bg-red-200 border w-16" />
                <MarqueeItem icon={Bird} className="bg-green-200 border w-16" />
                <MarqueeItem icon={Icons.surkad} className="bg-orange-200 border w-16" />
                <MarqueeItem icon={Activity} className="bg-gray-200 border w-16" />
                <MarqueeItem icon={Atom} className="bg-blue-200 border w-16"  />
                <MarqueeItem icon={Icons.logo} className="bg-purple-200 border w-16" />
                <MarqueeItem icon={Icons.google} className="bg-stone-200 border w-16" />
                <MarqueeItem icon={Cat} className="bg-yellow-200 border w-16" />
                <MarqueeItem icon={Icons.gitHub} className="bg-red-200 border w-16" />
                <MarqueeItem icon={Bird} className="bg-green-200 border w-16" />
                <MarqueeItem icon={Icons.surkad} className="bg-orange-200 border w-16" />
                <MarqueeItem icon={Activity} className="bg-gray-200 border w-16" />
                <MarqueeItem icon={Atom} className="bg-blue-200 border w-16"  />
                <MarqueeItem icon={Icons.logo} className="bg-purple-200 border w-16" />
                <MarqueeItem icon={Icons.google} className="bg-stone-200 border w-16" />
                <MarqueeItem icon={Cat} className="bg-yellow-200 border w-16" />
              </Marquee>
              <Marquee duration={60}>
                <MarqueeItem icon={Cat} className="bg-yellow-200 border w-16" />
                <MarqueeItem icon={Atom} className="bg-blue-200 border w-16"  />
                <MarqueeItem icon={Icons.surkad} className="bg-orange-200 border w-16" />
                <MarqueeItem icon={Activity} className="bg-gray-200 border w-16" />
                <MarqueeItem icon={Icons.logo} className="bg-purple-200 border w-16" />
                <MarqueeItem icon={Icons.gitHub} className="bg-red-200 border w-16" />
                <MarqueeItem icon={Bird} className="bg-green-200 border w-16" />
                <MarqueeItem icon={Icons.google} className="bg-stone-200 border w-16" />
                <MarqueeItem icon={Cat} className="bg-yellow-200 border w-16" />
                <MarqueeItem icon={Atom} className="bg-blue-200 border w-16"  />
                <MarqueeItem icon={Icons.surkad} className="bg-orange-200 border w-16" />
                <MarqueeItem icon={Activity} className="bg-gray-200 border w-16" />
                <MarqueeItem icon={Icons.logo} className="bg-purple-200 border w-16" />
                <MarqueeItem icon={Icons.gitHub} className="bg-red-200 border w-16" />
                <MarqueeItem icon={Bird} className="bg-green-200 border w-16" />
                <MarqueeItem icon={Icons.google} className="bg-stone-200 border w-16" />
              </Marquee>
              <Marquee duration={40} stopOnHover >
                <MarqueeItem icon={Activity} className="bg-gray-200 border w-16" />
                <MarqueeItem icon={Atom} className="bg-blue-200 border w-16"  />
                <MarqueeItem icon={Bird} className="bg-green-200 border w-16" />
                <MarqueeItem icon={Cat} className="bg-yellow-200 border w-16" />
                <MarqueeItem icon={Icons.google} className="bg-stone-200 border w-16" />
                <MarqueeItem icon={Icons.gitHub} className="bg-red-200 border w-16" />
                <MarqueeItem icon={Icons.surkad} className="bg-orange-200 border w-16" />
                <MarqueeItem icon={Icons.logo} className="bg-purple-200 border w-16" />
                <MarqueeItem icon={Activity} className="bg-gray-200 border w-16" />
                <MarqueeItem icon={Atom} className="bg-blue-200 border w-16"  />
                <MarqueeItem icon={Bird} className="bg-green-200 border w-16" />
                <MarqueeItem icon={Cat} className="bg-yellow-200 border w-16" />
                <MarqueeItem icon={Icons.google} className="bg-stone-200 border w-16" />
                <MarqueeItem icon={Icons.gitHub} className="bg-red-200 border w-16" />
                <MarqueeItem icon={Icons.surkad} className="bg-orange-200 border w-16" />
                <MarqueeItem icon={Icons.logo} className="bg-purple-200 border w-16" />
              </Marquee>
              <Marquee duration={40} scrollDirection="reversed">
                <MarqueeItem icon={Activity} className="bg-gray-200 border w-16" />
                <MarqueeItem icon={Atom} className="bg-blue-200 border w-16"  />
                <MarqueeItem icon={Bird} className="bg-green-200 border w-16" />
                <MarqueeItem icon={Cat} className="bg-yellow-200 border w-16" />
                <MarqueeItem icon={Icons.google} className="bg-stone-200 border w-16" />
                <MarqueeItem icon={Icons.gitHub} className="bg-red-200 border w-16" />
                <MarqueeItem icon={Icons.surkad} className="bg-orange-200 border w-16" />
                <MarqueeItem icon={Icons.logo} className="bg-purple-200 border w-16" />
                <MarqueeItem icon={Activity} className="bg-gray-200 border w-16" />
                <MarqueeItem icon={Atom} className="bg-blue-200 border w-16"  />
                <MarqueeItem icon={Bird} className="bg-green-200 border w-16" />
                <MarqueeItem icon={Cat} className="bg-yellow-200 border w-16" />
                <MarqueeItem icon={Icons.google} className="bg-stone-200 border w-16" />
                <MarqueeItem icon={Icons.gitHub} className="bg-red-200 border w-16" />
                <MarqueeItem icon={Icons.surkad} className="bg-orange-200 border w-16" />
                <MarqueeItem icon={Icons.logo} className="bg-purple-200 border w-16" />
              </Marquee>
            </div>
          </section>
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
