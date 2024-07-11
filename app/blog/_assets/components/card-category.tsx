import type { JSX } from "react";
import Link from "next/link";
import { categoryType } from "../content";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// This is the category card that appears in the home page and in the category page
const CardCategory = ({
  category,
  tag = "h2",
}: {
  category: categoryType;
  tag?: keyof JSX.IntrinsicElements;
}) => {
  const TitleTag = tag;

  return (
    <Link
      className={cn(buttonVariants({variant: "secondary"}))}
      href={`/blog/category/${category.slug}`}
      title={category.title}
      rel="tag"
    >
      <TitleTag className="md:text-lg font-medium">
        {category?.titleShort || category.title}
      </TitleTag>
    </Link>
  );
};

export default CardCategory;
