import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google"

import GlobalProvider from "@/components/providers/global-provider";
import PlausibleProvider from 'next-plausible'

import config from "@/config/config";
import { getSEOTags } from "@/lib/seo";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = getSEOTags({
  title: `${config.appName}`,
  description: `${config.appDescription}`,
  canonicalUrlRelative: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={config.i18n.defaultLocale} suppressHydrationWarning>
      {config.domainName && (
        <head>
          <PlausibleProvider domain={config.domainName} />
        </head>
      )}
      <body className={cn("min-h-screen bg-background font-sans antialiased",fontSans.variable)}>
        <GlobalProvider>
          {children}
        </GlobalProvider>
      </body>
    </html>
  );
}
