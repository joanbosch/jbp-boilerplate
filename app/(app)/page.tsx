import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Button } from "@/components/ui/button";
import config from "@/config/config";
import { Activity, ArrowRight, Atom, Bird, Cat } from "lucide-react";
import Link from "next/link";
import { Icons } from "@/components/icons";
import MarqueeItem from "@/components/marquee-item";
import { OrbitingCirclesDemo } from "@/components/orbit";
import { SimpleCard, SimpleCardContent } from "@/registry/components/ui/simple-card";
import { AwesomeCard, AwesomeCardAction, AwesomeCardContent, AwesomeCardDescription, AwesomeCardFooter, AwesomeCardIcon, AwesomeCardImage, AwesomeCardText, AwesomeCardTitle } from "@/registry/components/ui/awesome-card";
import { Marquee } from "@/registry/components/ui/marquee";

export default function Home() {
  return (
    <main className="flex-1">
      <PageHeader className="items-center px-20">
        <PageHeaderHeading className="text-6xl md:text-8xl tracking-normal">{config.appName}</PageHeaderHeading>
        <PageHeaderDescription className="text-center">
          {config.appDescription}
        </PageHeaderDescription>
        <PageActions className="justify-center">
          <Button variant={"outline"}>Show preview</Button>
          <Button>Get now</Button>
        </PageActions>
      </PageHeader>
      <OrbitingCirclesDemo />
    </main>
  );
}
