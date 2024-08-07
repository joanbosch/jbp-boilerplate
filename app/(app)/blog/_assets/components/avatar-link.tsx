import Link from "next/link";
import { articleType } from "../content";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

// This is the author avatar that appears in the article page and in <CardArticle /> component
const AvatarLink = ({ article }: { article: articleType }) => {
  return (
    <Link
      href={`/blog/author/${article.author.slug}`}
      title={`Posts by ${article.author.name}`}
      className="inline-flex items-center gap-2 group/avatar"
      rel="author"
    >
      <span itemProp="author">
        <Avatar className="w-7 h-7 rounded-full">
          <AvatarImage src={article.author.avatar} alt={article.author.name}/>
          <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
        </Avatar>
      </span>
      <span className="group-hover/avatar:underline">{article.author.name}</span>
    </Link>
  );
};

export default AvatarLink;
