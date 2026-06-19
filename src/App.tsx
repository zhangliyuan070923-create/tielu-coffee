import { EmberPointer } from './components/interactions/EmberPointer';
import { SiteNavigation } from './components/navigation/SiteNavigation';
import { BrandStorySection } from './components/sections/BrandStorySection';
import { CityTemperatureSection } from './components/sections/CityTemperatureSection';
import { DailyRhythmSection } from './components/sections/DailyRhythmSection';
import { FieldNoteSection } from './components/sections/FieldNoteSection';
import { FinalCtaSection } from './components/sections/FinalCtaSection';
import { HeroSection } from './components/sections/HeroSection';
import { SiteFooter } from './components/sections/SiteFooter';
import { StoresSection } from './components/sections/StoresSection';

export function App() {
  return (
    <>
      <SiteNavigation />
      <main>
        <HeroSection />
        <BrandStorySection />
        <CityTemperatureSection />
        <DailyRhythmSection />
        <FieldNoteSection />
        <StoresSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
      <EmberPointer />
    </>
  );
}
