import dynamic from 'next/dynamic'
import { notFound } from "next/navigation"
import { allDocs } from "contentlayer/generated"

import "@/styles/mdx.css"

import { getSEOTags } from '@/lib/seo'

import config from '@/config/config'
import { cn } from '@/lib/utils'

import { ChevronRightIcon } from 'lucide-react'

import { ScrollArea } from '@/components/ui/scroll-area'
import { DashboardTableOfContents } from '@/components/toc'

import { Balancer } from '@/components/grid-components/balancer'
import { Metadata } from 'next/types'
import { getTableOfContents } from '@/lib/toc'
import { Contribute } from '@/components/docs-contribute'
import { Mdx } from '@/components/mdx-components'
import { DocPager } from '@/components/docs-pager'


interface DocPageProps {
  params: {
    slug: string[]
  }
}

async function getDocFromParams({ params }: DocPageProps) {
  const slug = params.slug?.join("/") || ""
  const doc = allDocs.find((doc) => doc.slugAsParams === slug)

  if (!doc) {
    return null
  }

  return doc
}

export async function generateMetadata({
  params,
}: DocPageProps): Promise<Metadata> {
  const doc = await getDocFromParams({ params })

  if (!doc) {
    return {}
  }

  const metadata = getSEOTags({
    title: `${doc.title}`,
    description: `${doc.description}`,
  });

  return {
    ...metadata,
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: "article",
    }
  }
}

export async function generateStaticParams(): Promise<
  DocPageProps["params"][]
> {
  return allDocs.map((doc) => ({
    slug: doc.slugAsParams.split("/"),
  }))
}

export default async function Docs({ params }: DocPageProps) {

  const doc = await getDocFromParams({ params })

  if (!doc || !doc.published) {
    notFound();
  }

  const toc = await getTableOfContents(doc.body.raw);

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
      <div className="pb-12 pt-8">
          <Mdx code={doc.body.code} />
        </div>
        <DocPager doc={doc} />
    </div>
    {doc.toc && (
      <div className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 pt-4">
          <ScrollArea className="pb-10">
            <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] py-12">
            <DashboardTableOfContents toc={toc} />
            <Contribute doc={doc} />
            </div>
          </ScrollArea>
        </div>
      </div>
    )}
  </main>
)
}
