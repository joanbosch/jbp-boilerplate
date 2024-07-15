import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Button } from "@/components/ui/button";
import { AwesomeCard, AwesomeCardAction, AwesomeCardContent, AwesomeCardDescription, AwesomeCardFooter, AwesomeCardIcon, AwesomeCardImage, AwesomeCardText, AwesomeCardTitle } from "@/components/grid-components/awesome-card";
import config from "@/config/config";
import { Activity, ArrowRight, Atom, Bird, Cat, Layout, LayoutPanelLeft } from "lucide-react";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { Marquee } from "@/components/grid-components/marquee";
import MarqueeItem from "@/components/marquee-item";
import { SimpleCard, SimpleCardContent } from "@/components/grid-components/simple-card";
import { OrbitingCirclesDemo } from "@/components/orbit";

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
      <section className={`flex w-full justify-center mb-40`}>
        <div className="overflow-hidden flex flex-col w-full h-fit">
          <Marquee duration={40} stopOnHover className="h-full">
            <SimpleCard blur>
              <SimpleCardContent>
                The Product Hunt Launch Day (PH) is behind me, and I've taken a moment to catch my breath and corral my thoughts.
                First and foremost, I'm at a loss for words to express my gratitude and admiration for the support I received yesterday on X and LinkedIn: Thank you, you're all incredibly awesome 🙌
              </SimpleCardContent>
            </SimpleCard>
            <SimpleCard blur>
              <SimpleCardContent>
                Just had an amazing experience using Gridwow to create embedded tables for my app. It’s incredibly intuitive and the designs are stunning. Highly recommend! 🌟 #Gridwow
              </SimpleCardContent>
            </SimpleCard>
            <SimpleCard blur>
              <SimpleCardContent>
                Big shoutout to Gridwow for making the creation of embedded tables a breeze! The interface is user-friendly, and the results are beautiful. Perfect for any app developer. 🙌 #Gridwow #AppDevelopment
              </SimpleCardContent>
            </SimpleCard>
            <SimpleCard blur>
              <SimpleCardContent>
                I recently used Gridwow to create embedded tables for my application, and I couldn’t be more pleased with the experience. The platform is incredibly intuitive, allowing for easy customization and stunning designs. The embedded tables look fantastic and integrate seamlessly within my app. I highly recommend Gridwow to any developer looking to enhance their application’s functionality and appearance. #Gridwow #AppDevelopment 🌟
              </SimpleCardContent>
            </SimpleCard>
            <SimpleCard blur>
              <SimpleCardContent>
                A huge shoutout to Gridwow for making the creation of embedded tables such a breeze. The platform offers a fantastic range of customization options and the end results are visually stunning. It’s incredibly easy to use, even for someone who’s not a design expert. The embedded tables fit perfectly within my app and have greatly improved its aesthetic and functionality. Highly recommend Gridwow! #Gridwow #AppDevelopment 🙌
              </SimpleCardContent>
            </SimpleCard>
            <SimpleCard blur>
              <SimpleCardContent>
                I’ve been using Gridwow to create embedded tables for my application, and the experience has been nothing short of amazing. The platform is very intuitive, making it simple to design tables that are not only functional but also visually appealing. The seamless integration with my app has elevated the overall user experience. For any developer looking to embed tables, Gridwow is an absolute must-try. #Gridwow #DeveloperTools 👏
              </SimpleCardContent>
            </SimpleCard>
          </Marquee>
        </div>
      </section>
      <section className="grid w-full auto-rows-[22rem] gap-4 max-w-[80rem] px-8 mx-auto mb-40">
        <AwesomeCard>
          <AwesomeCardContent>
            <AwesomeCardImage
              src="https://pbs.twimg.com/profile_banners/870434768/1540888400/1500x500"
              alt="Awesome card image"
            />
            <AwesomeCardText className="text-white">
                The Product Hunt Launch Day (PH) is behind me, and I've taken a moment to catch my breath and corral my thoughts.
                First and foremost, I'm at a loss for words to express my gratitude and admiration for the support I received yesterday on X and LinkedIn: Thank you, you're all incredibly awesome 🙌
            </AwesomeCardText>
          </AwesomeCardContent>
          <AwesomeCardFooter>
            <AwesomeCardIcon icon={Icons.surkad}/>
            <AwesomeCardTitle>
              Joan Bosch Pons
            </AwesomeCardTitle>
            <AwesomeCardDescription>
              Founder & CTO
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
      <section className={`container flex w-full justify-center mb-40`}>
        <div className="overflow-hidden border rounded-xl shadow-xl flex flex-col w-1/2 h-full">
          <Marquee duration={14} scrollDirection="reversed" stopOnHover>
            <MarqueeItem icon={Icons.gitHub} className="bg-red-200 border w-16" />
            <MarqueeItem icon={Bird} className="bg-green-200 border w-16" />
            <MarqueeItem icon={Icons.apple} className="bg-orange-200 border w-16" />
            <MarqueeItem icon={Activity} className="bg-gray-200 border w-16" />
            <MarqueeItem icon={Atom} className="bg-blue-200 border w-16"  />
            <MarqueeItem icon={Icons.logo} className="bg-purple-200 border w-16" />
            <MarqueeItem icon={Icons.google} className="bg-stone-200 border w-16" />
            <MarqueeItem icon={Cat} className="bg-yellow-200 border w-16" />
          </Marquee>
          <Marquee duration={17}>
            <MarqueeItem icon={Cat} className="bg-yellow-200 border w-16" />
            <MarqueeItem icon={Atom} className="bg-blue-200 border w-16"  />
            <MarqueeItem icon={Icons.apple} className="bg-orange-200 border w-16" />
            <MarqueeItem icon={Activity} className="bg-gray-200 border w-16" />
            <MarqueeItem icon={Icons.logo} className="bg-purple-200 border w-16" />
            <MarqueeItem icon={Icons.gitHub} className="bg-red-200 border w-16" />
            <MarqueeItem icon={Bird} className="bg-green-200 border w-16" />
            <MarqueeItem icon={Icons.google} className="bg-stone-200 border w-16" />
          </Marquee>
          <Marquee duration={12} stopOnHover >
            <MarqueeItem icon={Activity} className="bg-gray-200 border w-16" />
            <MarqueeItem icon={Atom} className="bg-blue-200 border w-16"  />
            <MarqueeItem icon={Bird} className="bg-green-200 border w-16" />
            <MarqueeItem icon={Cat} className="bg-yellow-200 border w-16" />
            <MarqueeItem icon={Icons.google} className="bg-stone-200 border w-16" />
            <MarqueeItem icon={Icons.gitHub} className="bg-red-200 border w-16" />
            <MarqueeItem icon={Icons.apple} className="bg-orange-200 border w-16" />
            <MarqueeItem icon={Icons.logo} className="bg-purple-200 border w-16" />
          </Marquee>
          <Marquee duration={20} scrollDirection="reversed">
            <MarqueeItem icon={Activity} className="bg-gray-200 border w-16" />
            <MarqueeItem icon={Atom} className="bg-blue-200 border w-16"  />
            <MarqueeItem icon={Bird} className="bg-green-200 border w-16" />
            <MarqueeItem icon={Cat} className="bg-yellow-200 border w-16" />
            <MarqueeItem icon={Icons.google} className="bg-stone-200 border w-16" />
            <MarqueeItem icon={Icons.gitHub} className="bg-red-200 border w-16" />
            <MarqueeItem icon={Icons.apple} className="bg-orange-200 border w-16" />
            <MarqueeItem icon={Icons.logo} className="bg-purple-200 border w-16" />
          </Marquee>
        </div>
      </section>
      <OrbitingCirclesDemo />
    </main>
  );
}
