import React from 'react'
import { AwesomeCard, AwesomeCardAction, AwesomeCardContent, AwesomeCardDescription, AwesomeCardFooter, AwesomeCardIcon, AwesomeCardImage, AwesomeCardText, AwesomeCardTitle } from '../ui/awesome-card'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Icons } from '@/components/icons'

export default function AwesomeCardDemo() {
  return (
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
  )
}
