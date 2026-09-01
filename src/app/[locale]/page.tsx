import { Hero } from '@/components/Hero';
import { ReferralCard } from '@/components/ReferralCard';
import { Timeline } from '@/components/Timeline';
import { Benefits } from '@/components/Benefits';
import { FAQ } from '@/components/FAQ';
import { OfficialSection } from '@/components/OfficialSection';
import { GermanReferralGuide } from '@/components/GermanReferralGuide';
import { SchemaOrg } from '@/components/SchemaOrg';
import type { Locale } from '@/config/i18n';
import { getReferralProgramStatus } from '@/lib/referral-program';

type Props = {
  params: Promise<{ locale: string }>;
};

export const revalidate = 86400;

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const referralProgramStatus = await getReferralProgramStatus();

  return (
    <>
      <SchemaOrg locale={locale as Locale} />
      <Hero />
      <section className="pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ReferralCard lastVerified={referralProgramStatus.verifiedAt} />
        </div>
      </section>
      <Timeline />
      <Benefits />
      <FAQ />
      {locale === 'de' && <GermanReferralGuide lastVerified={referralProgramStatus.verifiedAt} />}
      <OfficialSection />
    </>
  );
}
