"use client";
import ServiceDetailPage from '@/app/components/ServiceDetailPage';
import { DollarSign, Settings, Database, Zap, Users } from 'lucide-react';

export default function RevenueCloudPage() {
  return (
    <ServiceDetailPage
      icon={DollarSign}
      serviceName="Revenue Cloud"
      serviceNameDe="Revenue Cloud"
      heroSubline="From Zero to Live in 4 Weeks. Engineered for scalability."
      heroSublineDe="Von Null auf Live in 4 Wochen. Für Skalierbarkeit entwickelt."
      definitionText="A standardized implementation package focused on quote-to-cash automation to accelerate revenue cycles and eliminate manual pricing errors."
      definitionTextDe="Ein standardisiertes Implementierungspaket, das sich auf Quote-to-Cash-Automatisierung konzentriert, um Umsatzzyklen zu beschleunigen und manuelle Preisfehler zu eliminieren."
      scopeCards={[
        {
          title: 'CPQ Configuration',
          titleDe: 'CPQ-Konfiguration',
          description: 'Product catalog, pricing rules, discounting policies, and quote templates for rapid proposals.',
          descriptionDe: 'Produktkatalog, Preisregeln, Rabattrichtlinien und Angebots-Templates für schnelle Proposals.',
          icon: Settings
        },
        {
          title: 'Contract Management',
          titleDe: 'Vertragsmanagement',
          description: 'Automated contract generation, amendment tracking, and renewal workflows.',
          descriptionDe: 'Automatisierte Vertragserstellung, Änderungs-Tracking und Verlängerungs-Workflows.',
          icon: Database
        },
        {
          title: 'Billing Automation',
          titleDe: 'Abrechnungsautomatisierung',
          description: 'Subscription billing, invoice generation, and revenue recognition automation.',
          descriptionDe: 'Abonnement-Abrechnung, Rechnungserstellung und Umsatzrealisierungs-Automatisierung.',
          icon: Zap
        },
        {
          title: 'Sales Training',
          titleDe: 'Verkaufs-Schulung',
          description: 'CPQ best practices training to ensure sales teams maximize the platform capabilities.',
          descriptionDe: 'CPQ-Best-Practices-Schulung, damit Verkaufsteams die Plattform-Fähigkeiten maximieren.',
          icon: Users
        }
      ]}
      targetAudience={[
        { text: 'B2B companies with complex pricing', textDe: 'B2B-Unternehmen mit komplexer Preisgestaltung' },
        { text: 'Subscription-based business models', textDe: 'Abonnement-basierte Geschäftsmodelle' },
        { text: 'Organizations reducing quote turnaround time', textDe: 'Organisationen, die Angebots-Durchlaufzeiten reduzieren' }
      ]}
      faqItems={[
        {
          question: 'How complex can our pricing models be?',
          questionDe: 'Wie komplex können unsere Preismodelle sein?',
          answer: 'The Quick Start handles tiered pricing, volume discounts, and basic bundles. Enterprise pricing (usage-based, multi-dimensional) requires Custom Engineering.',
          answerDe: 'Der Quick Start handhabt gestaffelte Preise, Mengenrabatte und grundlegende Bundles. Enterprise-Preisgestaltung (nutzungsbasiert, mehrdimensional) erfordert Custom Engineering.'
        },
        {
          question: 'Can you integrate with our ERP system?',
          questionDe: 'Können Sie mit unserem ERP-System integrieren?',
          answer: 'Yes, we can integrate with major ERP systems (SAP, Oracle, Microsoft Dynamics). Integration complexity may extend the timeline.',
          answerDe: 'Ja, wir können mit großen ERP-Systemen integrieren (SAP, Oracle, Microsoft Dynamics). Integrationskomplexität kann den Zeitrahmen verlängern.'
        },
        {
          question: 'Is revenue recognition automated?',
          questionDe: 'Ist die Umsatzrealisierung automatisiert?',
          answer: 'Yes, we configure revenue schedules aligned with ASC 606 / IFRS 15 standards. Complex recognition rules may require accounting consultation.',
          answerDe: 'Ja, wir konfigurieren Umsatzpläne gemäß ASC 606 / IFRS 15 Standards. Komplexe Erkennungsregeln können Buchhaltungsberatung erfordern.'
        }
      ]}
      accentColor="#00CC66"
    />
  );
}
