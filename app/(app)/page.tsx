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
import { ArrowRight, Layout, LayoutPanelLeft } from "lucide-react";
import Link from "next/link";
import { Icons } from "@/components/icons";

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
      <section className="grid w-full auto-rows-[22rem] grid-cols-4 gap-4 max-w-[80rem] px-8 mx-auto mb-40">
        <AwesomeCard className="col-span-2">
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
      <section className="container relative cursor-default h-full w-full lg:max-w-[24rem] transform-gpu rounded-lg border bg-background lg:max-h-[500px]">
        <div className={`flex h-full w-full cursor-pointer flex-col items-start justify-between`}>
          <div className={`group relative flex h-[300px] w-full cursor-pointer flex-col items-center justify-center gap-y-1 overflow-hidden rounded-t-xl p-4`}>
            <div className={`relative flex flex-col items-center justify-center gap-y-2 px-10`}>
              <div className={`group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row -delay-[200ms] [--duration:20s]`}>
                <>
                {Array.from({ length: 5 }).map((_, index) => {
                  <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row [animation-direction:reverse]">
                    <>
                    {
                      Array.from({ length: 5 }).map((_, index) => {
                        <div className={`relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4  transform-gpu dark:bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]`}>
                          HOLA
                        </div>
                      })
                    }
                    </>
                  </div>
                })}
                </>
              </div>
              <div className={`group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:30s]`}>
              <>
                {Array.from({ length: 5 }).map((_, index) => {
                  <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row [animation-direction:reverse]">
                    <>
                    {
                      Array.from({ length: 5 }).map((_, index) => {
                        <div className={`relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4  transform-gpu dark:bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]`}>
                          HOLA
                        </div>
                      })
                    }
                    </>
                  </div>
                })}
                </>
              </div>
              <div className={`group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row -delay-[200ms] [--duration:20s]`}>
              <>
                {Array.from({ length: 5 }).map((_, index) => {
                  <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row [animation-direction:reverse]">
                    <>
                    {
                      Array.from({ length: 5 }).map((_, index) => {
                        <div className={`relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4  transform-gpu dark:bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]`}>
                          HOLA
                        </div>
                      })
                    }
                    </>
                  </div>
                })}
                </>
              </div>
              <div className={`group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:30s]`}>
              <>
                {Array.from({ length: 5 }).map((_, index) => {
                  <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row [animation-direction:reverse]">
                    <>
                    {
                      Array.from({ length: 5 }).map((_, index) => {
                        <div className={`relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4  transform-gpu dark:bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]`}>
                          HOLA
                        </div>
                      })
                    }
                    </>
                  </div>
                })}
                </>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
