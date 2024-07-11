import Link from "next/link";
import { categoryType } from "../content";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// This is the category badge that appears in the article page and in <CardArticle /> component
const Category = ({
  category,
  extraStyle,
}: {
  category: categoryType;
  extraStyle?: string;
}) => {
  return (
    <Link
      href={`/blog/category/${category.slug}`}
      title={`Posts in ${category.title}`}
      rel="tag"
    >
      <Badge className={cn(extraStyle)}>
        {category.titleShort}
      </Badge>
    </Link>
  );
};

export default Category;
