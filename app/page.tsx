import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { ExperienceSection } from '@/components/experience-section'
import { FeaturedSection } from '@/components/featured-section'
import { AboutSection } from '@/components/about-section'
import { SocialProofSection } from '@/components/social-proof-section'
import { InstagramSection } from '@/components/instagram-section'
import { VisitSection } from '@/components/visit-section'
import { FinalCtaSection } from '@/components/final-cta-section'
import { SiteFooter } from '@/components/site-footer'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ExperienceSection />
        <FeaturedSection />
        <AboutSection />
        <SocialProofSection />
        <InstagramSection />
        <VisitSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
