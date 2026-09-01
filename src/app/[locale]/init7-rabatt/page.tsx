import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ExternalLink } from 'lucide-react';
import { Link } from '@/lib/navigation';
import { OFFICIAL_LINKS, REFERRAL_DISCOUNT, REFERRAL_PROGRAM_LAST_VERIFIED, SITE_URL } from '@/lib/constants';

type Props = {
  params: Promise<{ locale: string }>;
};

const pagePath = '/de/init7-rabatt';
const pageUrl = `${SITE_URL}${pagePath}`;

export const metadata: Metadata = {
  title: 'Init7 Rabatt: CHF 111 mit Empfehlungscode auf Hardware',
  description:
    'Init7 Rabatt erklärt: Mit einem Empfehlungscode erhalten berechtigte Neukunden CHF 111 auf Hardware. Voraussetzungen, Einlösung und offizielle Bedingungen.',
  alternates: {
    canonical: pagePath,
    languages: {
      de: pageUrl,
      'x-default': pageUrl,
    },
  },
  openGraph: {
    title: 'Init7 Rabatt: CHF 111 mit Empfehlungscode auf Hardware',
    description:
      'Voraussetzungen und Einlösung des Init7 Rabatts für berechtigte Neukunden.',
    url: pagePath,
    type: 'article',
  },
};

export default async function Init7RabattPage({ params }: Props) {
  const { locale } = await params;
  if (locale !== 'de') notFound();

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: 'Init7 Rabatt: CHF 111 mit Empfehlungscode auf Hardware',
        description:
          'Voraussetzungen und Einlösung des Init7 Rabatts für berechtigte Neukunden.',
        inLanguage: 'de-CH',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Init7 Empfehlungscode',
            item: `${SITE_URL}/de`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Init7 Rabatt',
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <section className="pt-32 pb-20 sm:pt-40 sm:pb-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary">Init7 Empfehlungscode</Link>
          <span aria-hidden="true"> / </span>
          <span>Init7 Rabatt</span>
        </nav>

        <article className="rounded-2xl border border-border/50 bg-card/50 p-6 sm:p-10">
          <p className="text-sm font-medium text-primary">Init7 Rabatt</p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            CHF 111 Init7 Rabatt mit Empfehlungscode: Das gilt für Neukunden
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Mit einem Init7-Empfehlungscode können berechtigte Neukunden {REFERRAL_DISCOUNT} auf
            ihre Hardware-Bestellung sparen. Der Code muss direkt bei der Bestellung angegeben werden.
            Diese Seite erklärt klar, wann der Rabatt greift und wann nicht.
          </p>

          <section className="mt-10">
            <h2 className="text-2xl font-bold">Kurz erklärt: Was bringt der Init7 Rabatt?</h2>
            <dl className="mt-5 divide-y divide-border/50 border-y border-border/50">
              <div className="py-4 grid gap-1 sm:grid-cols-3 sm:gap-6">
                <dt className="font-medium">Höhe</dt>
                <dd className="sm:col-span-2 text-muted-foreground">{REFERRAL_DISCOUNT} einmalig auf die Hardware-Bestellung.</dd>
              </div>
              <div className="py-4 grid gap-1 sm:grid-cols-3 sm:gap-6">
                <dt className="font-medium">Für wen?</dt>
                <dd className="sm:col-span-2 text-muted-foreground">Für berechtigte Neukunden mit einem gültigen Empfehlungscode.</dd>
              </div>
              <div className="py-4 grid gap-1 sm:grid-cols-3 sm:gap-6">
                <dt className="font-medium">Wann eingeben?</dt>
                <dd className="sm:col-span-2 text-muted-foreground">Im Bestellvorgang, bevor die Bestellung abgeschickt wird.</dd>
              </div>
              <div className="py-4 grid gap-1 sm:grid-cols-3 sm:gap-6">
                <dt className="font-medium">Worauf gilt er?</dt>
                <dd className="sm:col-span-2 text-muted-foreground">Auf Hardware, nicht auf die laufende Abo-Gebühr.</dd>
              </div>
            </dl>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold">Voraussetzungen für den Rabatt</h2>
            <ul className="mt-5 space-y-3 list-disc list-outside ml-5 text-muted-foreground leading-relaxed">
              <li>Du bestellst einen berechtigten Init7-Anschluss als Neukunde.</li>
              <li>Du gibst einen persönlichen Init7 Empfehlungscode bei der Bestellung ein.</li>
              <li>Du bestellst Hardware; bei kostenloser Leihhardware oder ohne Hardware-Bestellung entfällt die Preisreduktion.</li>
              <li>Die offiziellen Bedingungen nennen Fiber7, Crossover7, Hybrid7 und Copper7 als berechtigte Abos.</li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold">So löst du den Init7 Rabatt ein</h2>
            <ol className="mt-5 space-y-3 list-decimal list-outside ml-5 text-muted-foreground leading-relaxed">
              <li>Öffne die <Link href="/" className="text-primary hover:text-primary/80">Init7-Empfehlungscode-Seite</Link> und kopiere den Code.</li>
              <li>Wähle auf Init7 das passende Abo und die gewünschte Hardware.</li>
              <li>Füge den Code im Feld «Empfehlungscode» ein, bevor du die Bestellung absendest.</li>
              <li>Kontrolliere die Bestellangaben und die endgültige Rechnung.</li>
            </ol>
          </section>

          <aside className="mt-10 rounded-xl bg-primary/10 p-5 text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Wichtig:</strong> Ein Init7 Code ist kein allgemeiner
            Gutschein für alle Kosten. Die aktuell ausgewiesene Ersparnis betrifft die Hardware. Die
            verbindlichen Bedingungen liegen bei Init7.
          </aside>

          <p className="mt-8 text-sm text-muted-foreground">
            Automatisch anhand der offiziellen Init7-Programmbedingungen geprüft am{' '}
            <time dateTime={REFERRAL_PROGRAM_LAST_VERIFIED}>{new Intl.DateTimeFormat('de-CH', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
              timeZone: 'Europe/Zurich',
            }).format(new Date(`${REFERRAL_PROGRAM_LAST_VERIFIED}T12:00:00Z`))}</time>.
          </p>
          <a
            href={OFFICIAL_LINKS.de}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-primary hover:text-primary/80"
          >
            Offizielle Teilnahmebedingungen bei Init7
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </a>
        </article>
      </div>
    </section>
  );
}
