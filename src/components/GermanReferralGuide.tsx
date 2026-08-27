import { ExternalLink, Info } from 'lucide-react';
import { OFFICIAL_LINKS, REFERRAL_DISCOUNT, REFERRAL_PROGRAM_LAST_VERIFIED } from '@/lib/constants';

const lastVerifiedLabel = new Intl.DateTimeFormat('de-CH', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'Europe/Zurich',
}).format(new Date(`${REFERRAL_PROGRAM_LAST_VERIFIED}T12:00:00Z`));

export function GermanReferralGuide() {
  return (
    <section
      className="py-20 sm:py-28 border-t border-border/50"
      aria-labelledby="empfehlungscode-guide-title"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border/50 bg-card/50 p-6 sm:p-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Info className="w-5 h-5 text-primary" aria-hidden="true" />
            </div>
            <p className="text-sm font-medium text-primary">Init7 Code &amp; Empfehlungscode</p>
          </div>

          <h2 id="empfehlungscode-guide-title" className="text-2xl sm:text-3xl font-bold tracking-tight">
            Init7-Empfehlungscode einlösen: So erhältst du CHF 111 Rabatt
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Ein Init7-Empfehlungscode ist ein persönlicher Code eines bestehenden Init7-Kunden.
            Gib den Code direkt während deiner Bestellung ein. Der Rabatt von {REFERRAL_DISCOUNT} wird
            einmalig auf die Hardware-Bestellung gutgeschrieben, sofern deine Bestellung die aktuellen
            Teilnahmebedingungen erfüllt.
          </p>

          <h3 className="mt-8 text-lg font-semibold">So verwendest du den Init7 Code</h3>
          <ol className="mt-4 space-y-3 list-decimal list-outside ml-5 text-muted-foreground leading-relaxed">
            <li>Kopiere den Empfehlungscode oben auf dieser Seite.</li>
            <li>Wähle auf der Init7-Website dein gewünschtes Internet-Abo.</li>
            <li>Trage den Code im Feld «Empfehlungscode» ein, bevor du die Bestellung abschickst.</li>
            <li>Prüfe die Bestellübersicht: Der Rabatt gilt für die Hardware und wird auf der Rechnung abgezogen.</li>
          </ol>

          <h3 className="mt-8 text-lg font-semibold">Wichtig vor der Bestellung</h3>
          <ul className="mt-4 space-y-3 list-disc list-outside ml-5 text-muted-foreground leading-relaxed">
            <li>Der Empfehlungscode muss bei der Bestellung angegeben werden; nachträglich kann er nicht berücksichtigt werden.</li>
            <li>Der Neukunden-Rabatt gilt laut Init7 für berechtigte Fiber7-, Crossover7-, Hybrid7- und Copper7-Abos mit Hardware-Bestellung.</li>
            <li>Bei kostenloser Leihhardware oder ohne Hardware-Bestellung entfällt der Hardware-Rabatt.</li>
            <li>Die Aktion gilt derzeit für Bestellungen bis zum 31. Dezember 2027. Massgeblich sind immer die offiziellen Teilnahmebedingungen.</li>
          </ul>

          <p className="mt-8 pt-6 border-t border-border/50 text-sm text-muted-foreground leading-relaxed">
            Stand: <time dateTime={REFERRAL_PROGRAM_LAST_VERIFIED}>{lastVerifiedLabel}</time>. Diese unabhängige Seite fasst die
            öffentlich verfügbaren Bedingungen zusammen und ersetzt nicht die Angaben von Init7.
          </p>
          <a
            href={OFFICIAL_LINKS.de}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Offizielle Init7-Teilnahmebedingungen ansehen
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
