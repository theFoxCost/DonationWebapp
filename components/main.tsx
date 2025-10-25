import React from 'react'
import HeroSection from './hero-section'
import FAQs from './faqs'
import FooterSection from './footer'
import WhoSection from './whoisfor'
import StatsSection from './count'

function main() {
  return (
    <div>
        <HeroSection />
        <WhoSection />
        <StatsSection />
        <FAQs />
        <FooterSection />
    </div>
  )
}

export default main