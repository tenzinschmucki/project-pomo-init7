import { Hero } from '@/components/Hero';
import { ReferralCard } from '@/components/ReferralCard';
import { Timeline } from '@/components/Timeline';
import { Benefits } from '@/components/Benefits';
import { FAQ } from '@/components/FAQ';
import { OfficialSection } from '@/components/OfficialSection';
import { SeoContent } from '@/components/SeoContent';

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ReferralCard />
        </div>
      </section>
      <Timeline />
      <Benefits />
      <FAQ />
      <OfficialSection />
      <SeoContent />
    </>
  );
}
