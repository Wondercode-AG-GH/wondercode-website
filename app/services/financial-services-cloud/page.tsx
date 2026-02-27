"use client";
import ServiceDetailPage from '@/app/components/ServiceDetailPage';
import { Shield, Settings, Database, Zap, Users } from 'lucide-react';

export default function FSCPage() {
  return (
    <ServiceDetailPage
      icon={Shield}
      serviceName="Financial Services Cloud"
      serviceNameDe="Financial Services Cloud"
      heroSubline="From Zero to Live in 4 Weeks. Engineered for scalability."
      heroSublineDe="Von Null auf Live in 4 Wochen. Für Skalierbarkeit entwickelt."
      definitionText="A standardized implementation package focused on wealth management and advisory processes with FINMA compliance and secure client 360° views."
      definitionTextDe="Ein standardisiertes Implementierungspaket, das sich auf Vermögensverwaltung und Beratungsprozesse mit FINMA-Konformität und sicheren Client-360°-Ansichten konzentriert."
      scopeCards={[
        {
          title: 'Client 360° Setup',
          titleDe: 'Client-360°-Setup',
          description: 'Household structure, relationships, and financial accounts with Swiss banking standards.',
          descriptionDe: 'Haushaltsstruktur, Beziehungen und Finanzkonten nach Schweizer Banking-Standards.',
          icon: Settings
        },
        {
          title: 'Secure Data Architecture',
          titleDe: 'Sichere Datenarchitektur',
          description: 'Field-level encryption, audit trails, and role-based access for FINMA compliance.',
          descriptionDe: 'Feldverschlüsselung, Audit-Trails und rollenbasierter Zugriff für FINMA-Konformität.',
          icon: Database
        },
        {
          title: 'Advisory Workflows',
          titleDe: 'Beratungs-Workflows',
          description: 'Automated compliance checks, risk assessments, and client review processes.',
          descriptionDe: 'Automatisierte Compliance-Prüfungen, Risikobewertungen und Kunden-Review-Prozesse.',
          icon: Zap
        },
        {
          title: 'Advisor Training',
          titleDe: 'Berater-Schulung',
          description: 'Specialized onboarding for financial advisors with compliance and productivity guidance.',
          descriptionDe: 'Spezialisiertes Onboarding für Finanzberater mit Compliance- und Produktivitätsleitfaden.',
          icon: Users
        }
      ]}
      targetAudience={[
        { text: 'Swiss wealth management firms', textDe: 'Schweizer Vermögensverwaltungsfirmen' },
        { text: 'Independent financial advisors (IFA)', textDe: 'Unabhängige Finanzberater (IFA)' },
        { text: 'Banks digitizing client advisory', textDe: 'Banken, die Kundenberatung digitalisieren' }
      ]}
      faqItems={[
        {
          question: 'Is this FINMA-compliant out of the box?',
          questionDe: 'Ist dies standardmäßig FINMA-konform?',
          answer: 'We configure security and audit features aligned with FINMA requirements. Final compliance responsibility rests with your institution and may require legal review.',
          answerDe: 'Wir konfigurieren Sicherheits- und Audit-Features gemäß FINMA-Anforderungen. Die endgültige Compliance-Verantwortung liegt bei Ihrer Institution und kann rechtliche Überprüfung erfordern.'
        },
        {
          question: 'Can you integrate with our core banking system?',
          questionDe: 'Können Sie mit unserem Core-Banking-System integrieren?',
          answer: 'Yes, we have experience integrating with major Swiss banking platforms (Avaloq, Finnova, etc.). Complex integrations may extend beyond the 4-week timeline.',
          answerDe: 'Ja, wir haben Erfahrung mit der Integration in große Schweizer Banking-Plattformen (Avaloq, Finnova, etc.). Komplexe Integrationen können über den 4-Wochen-Zeitrahmen hinausgehen.'
        },
        {
          question: 'How is client data security handled?',
          questionDe: 'Wie wird die Sicherheit von Kundendaten gehandhabt?',
          answer: 'We implement Salesforce Shield for encryption, event monitoring, and data residency controls. All data can be stored in Swiss or EU data centers.',
          answerDe: 'Wir implementieren Salesforce Shield für Verschlüsselung, Event-Monitoring und Data-Residency-Kontrollen. Alle Daten können in Schweizer oder EU-Rechenzentren gespeichert werden.'
        }
      ]}
      accentColor="#00CC66"
    />
  );
}
