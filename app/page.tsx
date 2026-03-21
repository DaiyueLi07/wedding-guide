'use client'

import HeroSection from './sections/HeroSection'
import TransportSection from './sections/TransportSection'
import WeatherSection from './sections/WeatherSection'
import HotelSection from './sections/HotelSection'
import AttractionSection from './sections/AttractionSection'
import TravelGuideSection from './sections/TravelGuideSection'
import FoodSection from './sections/FoodSection'
import TimelineSection from './sections/TimelineSection'
import DressCodeSection from './sections/DressCodeSection'
import TipsSection from './sections/TipsSection'
import FooterSection from './sections/FooterSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-wedding-cream">
      <HeroSection />
      <TransportSection />
      <WeatherSection />
      <HotelSection />
      <AttractionSection />
      <TravelGuideSection />
      <FoodSection />
      <TimelineSection />
      <DressCodeSection />
      <TipsSection />
      <FooterSection />
    </main>
  )
}
