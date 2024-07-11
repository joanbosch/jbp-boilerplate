import dynamic from 'next/dynamic'
import { notFound } from "next/navigation"

import "@/styles/mdx.css"

import { docsConfig } from '@/config/docs'
import { getSEOTags } from '@/lib/seo'
import config from '@/config/config'
import { cn } from '@/lib/utils'
import { ChevronRightIcon } from 'lucide-react'
import Balancer from "react-wrap-balancer"
import { ScrollArea } from '@/components/ui/scroll-area'
import { DashboardTableOfContents } from '@/components/toc'

interface DocPageProps {
  params: {
    slug: string[]
  }
}

async function getDocFromParams({ params }: DocPageProps) {
  const slug = `/docs${params.slug?.join("/") ? `/${params.slug?.join("/")}` : ""}`;
  console.log(slug)
  const sections = docsConfig.sidebarNav;
  for (const section of sections) {
    const doc = section.items.find((doc) => doc.href === slug);
    if (doc) {
      return doc;
    }
  }
  return null;
}

export async function generateMetadata({
  params,
}: DocPageProps): Promise<any> {
  const doc = await getDocFromParams({ params })
  const md = getSEOTags({
    title: `${doc?.title} | ${config.appName}`,
    description: `${doc?.description}`,
    canonicalUrlRelative: `/docs${params.slug?.join("/") ? `/${params.slug?.join("/")}` : ""}`,
  });
  return md;
}

export default async function Docs({ params }: DocPageProps) {

  const doc = await getDocFromParams({ params })

  if (!doc) {
    notFound()
  }

  const DocComponent = dynamic(() => import(`./../../../../content${doc.href}.tsx`))

  return (
  <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
    <div className="mx-auto w-full min-w-0">
      <div className="mb-4 flex items-center space-x-1 text-sm leading-none text-muted-foreground">
        <div className="truncate">Docs</div>
        <ChevronRightIcon className="h-3.5 w-3.5" />
        <div className="text-foreground">{doc.title}</div>
      </div>
      <div className="space-y-2">
        <h1 className={cn("scroll-m-20 text-3xl font-bold tracking-tight")}>
          {doc.title}
        </h1>
        {doc.description && (
          <p className="text-base text-muted-foreground">
            <Balancer>{doc.description}</Balancer>
          </p>
        )}
      </div>
      <div className={`pb-12 pt-8`}>
        <DocComponent />
      </div>
    </div>
    {doc.toc && (
      <div className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 pt-4">
          <ScrollArea className="pb-10">
            <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] py-12">
            <DashboardTableOfContents toc={doc.toc} />
            </div>
          </ScrollArea>
        </div>
      </div>
    )}
  </main>
)
}
