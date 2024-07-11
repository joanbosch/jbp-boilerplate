import type { JSX } from "react";
import Link from "next/link";
import Image from "next/image";
import BadgeCategory from "./badge-category";
import Avatar from "./avatar-link";
import { articleType } from "../content";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

// This is the article card that appears in the home page, in the category page, and in the author's page
const CardArticle = ({
  article,
  tag = "h2",
  showCategory = true,
  isImagePriority = false,
}: {
  article: articleType;
  tag?: keyof JSX.IntrinsicElements;
  showCategory?: boolean;
  isImagePriority?: boolean;
}) => {
  const TitleTag = tag;

  return (
    <Link
      href={`/blog/${article.slug}`}
      className="link link-hover hover:link-primary group"
      title={article.title}
      rel="bookmark"
    >
      <article className="card bg-base-200 rounded-box overflow-hidden">
        <Card>
          {article.image?.src && (
            <CardHeader className="p-0 overflow-hidden rounded-t-md">
              <figure>
                <Image
                  src={article.image.src}
                  alt={article.image.alt}
                  width={600}
                  height={338}
                  priority={isImagePriority}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
                  className="aspect-video object-center object-cover group-hover:scale-[1.03] duration-200 ease-in-out w-full"
                />
              </figure>
            </CardHeader>
          )}
          <CardContent className="flex flex-col gap-2 pt-2">
            {/* CATEGORIES */}
            {showCategory && (
              <div className="flex flex-wrap gap-2 py-2">
                {article.categories.map((category) => (
                  <BadgeCategory category={category} key={category.slug} />
                ))}
              </div>
            )}

            {/* TITLE WITH RIGHT TAG */}
            <TitleTag>
              <CardTitle>
                {article.title}
              </CardTitle>
            </TitleTag>

            <div className=" text-base-content/80 space-y-4">
              {/* DESCRIPTION */}
              <CardDescription>{article.description}</CardDescription>
            </div>
          </CardContent>
          <CardFooter className="text-xs gap-5">
            {/* AUTHOR & DATE */}
            <Avatar article={article} />

            <span itemProp="datePublished">
              {new Date(article.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
              })}
            </span>
          </CardFooter>
        </Card>
      </article>
    </Link>
  );
};

export default CardArticle;
