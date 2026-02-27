"use client";
import ServiceDetailPage from '@/app/components/ServiceDetailPage';
import { TrendingUp, Settings, Database, Zap, Shield, Globe, Package, Bell, BarChart3, Smartphone } from 'lucide-react';


export default function SalesCloudPage() {
  return (
    <ServiceDetailPage
      icon={TrendingUp}
      serviceName="Sales Cloud Quick Start"
      serviceNameDe="Sales Cloud Quick Start"
      heroSubline="From License Purchase to Live Operations in 4 Weeks."
      heroSublineDe="Vom Lizenz-Kauf zum Live-Betrieb in 4 Wochen."
      heroDescription="We don't install empty software. We implement a validated sales process. Based on best practices from 50+ projects. Fixed scope. Fixed price. Guaranteed go-live."
      heroDescriptionDe="Wir installieren keine leere Software. Wir implementieren einen validierten Vertriebsprozess. Basierend auf Best-Practices aus 50+ Projekten. Fixer Scope. Fixer Preis. Garantierter Go-Live."
      
      // The Engineering Approach
      definitionHeadline="System instead of Experiment."
      definitionHeadlineDe="System statt Experiment."
      definitionText="While other agencies configure 'agile' on the fly, we follow a strict blueprint. We know which data models scale and which automations truly relieve the sales team. We build your Salesforce system to run cleanly from day 1 – without technical debt."
      definitionTextDe="Während andere Agenturen 'agil' in den Tag hinein konfigurieren, folgen wir einem strikten Bauplan. Wir wissen, welche Datenmodelle skalieren und welche Automatisierungen den Vertrieb wirklich entlasten. Wir bauen Ihr Salesforce-System so auf, dass es ab Tag 1 sauber läuft – ohne technische Schulden."
      
      // Technical Scope
      scopeHeadline="Technical Scope"
      scopeHeadlineDe="Der Lieferumfang"
      scopeCards={[
        {
          title: 'Core Architecture & Data',
          titleDe: 'Core Architecture & Data',
          description: 'Account & Contact Management: Clean 360° customer view including hierarchies (parent/subsidiary companies). Security & Roles: Role-based access control (RBAC). A sales rep sees their deals, the manager sees the team. Data privacy is embedded in the design. Data Migration: Import of your existing data from Excel or legacy systems. Including deduplication and cleansing before import. Outlook/Gmail Sync: Seamless integration of emails and calendars. No manual double entry of appointments.',
          descriptionDe: 'Account & Contact Management: Einrichtung einer sauberen 360°-Sicht auf Kunden inkl. Hierarchien (Mutter-/Tochtergesellschaften). Security & Roles: Rollenbasiertes Zugriffskonzept (RBAC). Ein Sales Rep sieht seine Deals, der Manager sieht das Team. Datenschutz ist im Design verankert. Data Migration: Import Ihrer Bestandsdaten aus Excel oder Legacy-Systemen. Inklusive Deduplizierung und Bereinigung vor dem Import. Outlook / Gmail Sync: Nahtlose Integration von E-Mails und Kalendern. Keine manuelle Doppeleingabe von Terminen.',
          icon: Settings
        },
        {
          title: 'Pipeline & Process Logic',
          titleDe: 'Pipeline & Process Logic',
          description: 'Lead-to-Opportunity Workflow: Standardized process from "click" to "close". Automatic capture of lead source. Sales Path Guidance: Setup of guided sales processes. The system dictates which fields (e.g., budget, decision-maker) must be maintained in each phase. Queue & Routing: Automatic distribution of incoming leads to the right employees or teams (queues) based on region or product.',
          descriptionDe: 'Lead-to-Opportunity Workflow: Standardisierter Prozess vom "Click" bis zum "Close". Automatische Erfassung der Lead-Quelle. Sales Path Guidance: Einrichtung von geführten Verkaufsprozessen. Das System gibt in jeder Phase vor, welche Felder (z.B. Budget, Entscheider) zwingend gepflegt werden müssen. Queue & Routing: Automatische Verteilung von eingehenden Leads an die richtigen Mitarbeiter oder Teams (Queues) basierend auf Region oder Produkt.',
          icon: Database
        },
        {
          title: 'Commercial Setup (CPQ Light)',
          titleDe: 'Commercial Setup (CPQ Light)',
          description: 'Product & Price Books: Storage of your product catalog and price lists. Support for different currencies and discount structures. Quote Generation: Creation of professional PDF quotes directly from the opportunity. Design adapted to your CI (logo, footer). Contract Management: Management of terms and contract documents directly on the customer record.',
          descriptionDe: 'Product & Price Books: Hinterlegung Ihres Produktkatalogs und der Preislisten. Unterstützung von verschiedenen Währungen und Rabatt-Strukturen. Quote Generation: Erstellung von professionellen PDF-Angeboten direkt aus der Opportunity. Design angepasst auf Ihr CI (Logo, Footer). Contract Management: Verwaltung von Laufzeiten und Vertragsdokumenten direkt am Kunden-Datensatz.',
          icon: Package
        },
        {
          title: 'Automation & Intelligence',
          titleDe: 'Automation & Intelligence',
          description: 'Big Deal Alerts: Real-time push notification (mobile app/Slack) to management for opportunities above a defined revenue threshold. Activity Tracking: Automatic logging of history. Everyone immediately sees when the last contact took place. Stale Deal Alerts: Automated task creation when an open opportunity has not been worked on for too long (e.g., > 14 days).',
          descriptionDe: 'Big Deal Alerts: Echtzeit-Push-Nachricht (Mobile App/Slack) an das Management bei Opportunities über einer definierten Umsatzschwelle. Activity Tracking: Automatische Protokollierung der Historie. Jeder sieht sofort, wann der letzte Kontakt stattfand. Stale Deal Alerts: Automatisierte Aufgaben-Erstellung, wenn eine offene Opportunity zu lange nicht bearbeitet wurde (z.B. > 14 Tage).',
          icon: Bell
        },
        {
          title: 'Analytics & Mobility',
          titleDe: 'Analytics & Mobility',
          description: 'Management Cockpit: Dashboards for forecast, pipeline health, and revenue targets. Sales Rep Dashboard: "My open tasks", "My pipeline", "My quota". Salesforce Mobile App: Complete configuration for field sales. Access to all customer data on the go.',
          descriptionDe: 'Management Cockpit: Dashboards für Forecast, Pipeline-Health und Umsatzziele. Sales Rep Dashboard: "Meine offenen Aufgaben", "Meine Pipeline", "Meine Quote". Salesforce Mobile App: Vollständige Konfiguration für den Aussendienst. Zugriff auf alle Kundendaten von unterwegs.',
          icon: Smartphone
        }
      ]}
      
      // Timeline
      timelineHeadline="The Timeline"
      timelineHeadlineDe="Der Projektplan"
      timelineSubline="Structure creates trust."
      timelineSublineDe="Struktur schafft Vertrauen."
      timelineSteps={[
        {
          week: 'Week 1',
          weekDe: 'Woche 1',
          title: 'Audit & Blueprint',
          titleDe: 'Audit & Blueprint',
          description: 'Capture of your requirements and mapping to our best-practice architecture.',
          descriptionDe: 'Aufnahme Ihrer Anforderungen und Mapping auf unsere Best-Practice Architektur.'
        },
        {
          week: 'Week 2',
          weekDe: 'Woche 2',
          title: 'Configuration (Zurich)',
          titleDe: 'Configuration (Zürich)',
          description: 'Setup of database, fields, permissions, and processes by our architects.',
          descriptionDe: 'Setup der Datenbank, Felder, Rechte und Prozesse durch unsere Architekten.'
        },
        {
          week: 'Week 3',
          weekDe: 'Woche 3',
          title: 'Data & Integration',
          titleDe: 'Data & Integration',
          description: 'Migration of existing data and connection of email clients.',
          descriptionDe: 'Migration der Bestandsdaten und Anbindung der E-Mail-Clients.'
        },
        {
          week: 'Week 4',
          weekDe: 'Woche 4',
          title: 'Training & Go-Live',
          titleDe: 'Training & Go-Live',
          description: 'End-user training on the live system. Handover and start of productive operations.',
          descriptionDe: 'End-User Training am Live-System. Übergabe und Start des produktiven Betriebs.'
        }
      ]}
      
      targetAudience={[
        { text: 'Startups scaling from spreadsheets to CRM', textDe: 'Startups, die von Excel-Listen zu CRM skalieren' },
        { text: 'SMEs seeking structured sales processes', textDe: 'KMUs auf der Suche nach strukturierten Verkaufsprozessen' },
        { text: 'Companies needing clean slate implementations', textDe: 'Unternehmen, die Clean-Slate-Implementierungen benötigen' }
      ]}
      
      faqItems={[
        {
          question: 'What is not included?',
          questionDe: 'Was ist nicht enthalten?',
          answer: 'Custom development (code) and complex interfaces to third-party systems (ERP) are not part of the Quick Start. We are happy to implement these as Phase 2 once the standard process is running.',
          answerDe: 'Custom Development (Code) und komplexe Schnittstellen zu Drittsystemen (ERP) sind nicht Teil des Quick Starts. Diese setzen wir gerne als Phase 2 um, sobald der Standard-Prozess läuft.'
        },
        {
          question: 'Which license do we need?',
          questionDe: 'Welche Lizenz benötigen wir?',
          answer: 'The Quick Start package works optimally with Sales Cloud Professional or Enterprise Edition. We advise you in advance on license selection.',
          answerDe: 'Das Quick Start Paket funktioniert optimal mit der Sales Cloud Professional oder Enterprise Edition. Wir beraten Sie vorab zur Lizenzwahl.'
        },
        {
          question: 'Who conducts the training?',
          questionDe: 'Wer führt das Training durch?',
          answer: 'No videos. An experienced consultant trains your team live (remote or on-site) to ensure acceptance from day 1.',
          answerDe: 'Keine Videos. Ein erfahrener Consultant schult Ihr Team live (Remote oder vor Ort), damit die Akzeptanz ab Tag 1 gesichert ist.'
        },
        {
          question: 'Can you integrate with our existing tools?',
          questionDe: 'Können Sie mit unseren bestehenden Tools integrieren?',
          answer: 'Yes, we can integrate with most common tools like Outlook, Gmail, Slack, and marketing automation platforms. Complex integrations may extend the timeline.',
          answerDe: 'Ja, wir können mit den meisten gängigen Tools wie Outlook, Gmail, Slack und Marketing-Automatisierungsplattformen integrieren. Komplexe Integrationen können den Zeitplan verlängern.'
        },
        {
          question: 'Is this suitable for complex sales cycles?',
          questionDe: 'Ist dies für komplexe Verkaufszyklen geeignet?',
          answer: 'The Quick Start is optimized for standard B2B sales. For enterprise-level complexity (multi-currency, territory management), we recommend our Custom Engineering package.',
          answerDe: 'Der Quick Start ist für standardmäßigen B2B-Vertrieb optimiert. Für Komplexität auf Enterprise-Ebene (Multi-Währung, Territory Management) empfehlen wir unser Custom Engineering-Paket.'
        }
      ]}
      
      ctaHeadline="Tired of Excel Lists?"
      ctaHeadlineDe="Haben Sie genug von Excel-Listen?"
      ctaText="Book your Quick Start Assessment now. We'll check if your requirements fit the package."
      ctaTextDe="Buchen Sie jetzt Ihr Quick Start Assessment. Wir prüfen, ob Ihre Anforderungen in das Paket passen."
      ctaButtonPrimary="Book Free Assessment"
      ctaButtonPrimaryDe="Kostenloses Assessment buchen"
      ctaButtonSecondary="Request Fixed Price"
      ctaButtonSecondaryDe="Festpreis anfragen"
      
      accentColor="#00CC66"
    />
  );
}
