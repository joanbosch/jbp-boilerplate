import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { AwesomeCard, AwesomeCardAction, AwesomeCardContent, AwesomeCardDescription, AwesomeCardFooter, AwesomeCardIcon, AwesomeCardImage, AwesomeCardText, AwesomeCardTitle } from "@/components/grid-components/awesome-card";
import config from "@/config/config";
import { Activity, ArrowRight, Layout, LayoutPanelLeft } from "lucide-react";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { Marquee } from "@/components/grid-components/marquee";

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
      <section className="grid w-full auto-rows-[22rem] gap-4 max-w-[80rem] px-8 mx-auto mb-40">
        <AwesomeCard>
          <AwesomeCardContent>
            <AwesomeCardImage
              src="https://pbs.twimg.com/profile_banners/1761393513562824704/1709550727/600x200"
              alt="Awesome card image"
            />
            <AwesomeCardText>
                The Product Hunt Launch Day (PH) is behind me, and I've taken a moment to catch my breath and corral my thoughts.
                First and foremost, I'm at a loss for words to express my gratitude and admiration for the support I received yesterday on X and LinkedIn: Thank you, you're all incredibly awesome 🙌
            </AwesomeCardText>
          </AwesomeCardContent>
          <AwesomeCardFooter>
            <AwesomeCardIcon icon={Icons.apple}/>
            <AwesomeCardTitle>
              Awsome Grid
            </AwesomeCardTitle>
            <AwesomeCardDescription>
              This is a card description
            </AwesomeCardDescription>
          </AwesomeCardFooter>
          <AwesomeCardAction>
            <Link href="/docs" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 pointer-events-auto">
              Get your automated health score
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </AwesomeCardAction>
        </AwesomeCard>
      </section>
      <section>
      <Marquee duration={2} className="w-56">
        <div className={`flex items-center content-center justify-center p-2 rounded-xl bg-muted`}>
          <Activity className="w-6 h-6" />
        </div>
      </Marquee>
      </section>
    </main>
  );
}
