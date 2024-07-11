import dynamic from 'next/dynamic'
import { notFound } from "next/navigation"
import "@/styles/mdx.css"
import { docsConfig } from '@/config/docs'
import { getSEOTags } from '@/lib/seo'
import config from '@/config/config'

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
    <DocComponent />
  )
}
