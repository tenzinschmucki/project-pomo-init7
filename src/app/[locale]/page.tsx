import { Hero } from '@/components/Hero';
import { ReferralCard } from '@/components/ReferralCard';
import { Timeline } from '@/components/Timeline';
import { Benefits } from '@/components/Benefits';
import { FAQ } from '@/components/FAQ';
import { OfficialSection } from '@/components/OfficialSection';
import { GermanReferralGuide } from '@/components/GermanReferralGuide';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;

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
      {locale === 'de' && <GermanReferralGuide />}
      <OfficialSection />
    </>
  );
}
