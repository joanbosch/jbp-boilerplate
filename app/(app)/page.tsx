import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Button } from "@/components/ui/button";
import config from "@/config/config";

export default function Home() {
  return (
    <>
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
      </main>
    </>
  );
}
