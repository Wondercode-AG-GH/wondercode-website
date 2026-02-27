'use client';

import ServiceDetailPage from '@/app/components/ServiceDetailPage';
import { Headphones, Settings, Database, Zap, Users } from 'lucide-react';


export default function ServiceCloudPage() {
  return (
    <ServiceDetailPage
      icon={Headphones}
      serviceName="Service Cloud"
      serviceNameDe="Service Cloud"
      heroSubline="From Zero to Live in 4 Weeks. Engineered for scalability."
      heroSublineDe="Von Null auf Live in 4 Wochen. Für Skalierbarkeit entwickelt."
      definitionText="A standardized implementation package focused on customer service excellence to ensure rapid deployment and measurable support quality improvements."
      definitionTextDe="Ein standardisiertes Implementierungspaket, das sich auf exzellenten Kundenservice konzentriert, um schnelle Bereitstellung und messbare Verbesserungen der Support-Qualität zu gewährleisten."
      scopeCards={[
        {
          title: 'Case Management Setup',
          titleDe: 'Case-Management-Setup',
          description: 'Complete case routing, escalation rules, and SLA tracking for efficient support operations.',
          descriptionDe: 'Vollständiges Case-Routing, Eskalationsregeln und SLA-Tracking für effizienten Support-Betrieb.',
          icon: Settings
        },
        {
          title: 'Knowledge Base',
          titleDe: 'Wissensdatenbank',
          description: 'Structured knowledge articles with search and self-service portal for customer empowerment.',
          descriptionDe: 'Strukturierte Wissenartikel mit Suche und Self-Service-Portal zur Kunden-Selbstbedienung.',
          icon: Database
        },
        {
          title: 'Omnichannel Routing',
          titleDe: 'Omnichannel-Routing',
          description: 'Intelligent case distribution across email, chat, and phone channels to the right agents.',
          descriptionDe: 'Intelligente Case-Verteilung über E-Mail, Chat und Telefon-Kanäle an die richtigen Agents.',
          icon: Zap
        },
        {
          title: 'Agent Training',
          titleDe: 'Agent-Schulung',
          description: 'Comprehensive onboarding for support teams with best practices and productivity tips.',
          descriptionDe: 'Umfassendes Onboarding für Support-Teams mit Best Practices und Produktivitätstipps.',
          icon: Users
        }
      ]}
      targetAudience={[
        { text: 'Support teams drowning in email tickets', textDe: 'Support-Teams, die in E-Mail-Tickets ertrinken' },
        { text: 'Companies seeking to reduce response times', textDe: 'Unternehmen, die Reaktionszeiten reduzieren möchten' },
        { text: 'Organizations needing structured support workflows', textDe: 'Organisationen, die strukturierte Support-Workflows benötigen' }
      ]}
      faqItems={[
        {
          question: 'Can we migrate our existing support tickets?',
          questionDe: 'Können wir unsere bestehenden Support-Tickets migrieren?',
          answer: 'Yes, we include migration of historical cases and customer interactions. The scope depends on your current system and data quality.',
          answerDe: 'Ja, wir migrieren historische Cases und Kundeninteraktionen. Der Umfang hängt von Ihrem aktuellen System und der Datenqualität ab.'
        },
        {
          question: 'Is live chat included?',
          questionDe: 'Ist Live-Chat enthalten?',
          answer: 'Basic chat setup is included. Advanced features like chatbots and AI-powered routing are available as add-ons.',
          answerDe: 'Grundlegendes Chat-Setup ist enthalten. Erweiterte Features wie Chatbots und KI-gestütztes Routing sind als Add-ons verfügbar.'
        },
        {
          question: 'How do you measure support quality improvements?',
          questionDe: 'Wie messen Sie Verbesserungen der Support-Qualität?',
          answer: 'We configure dashboards tracking response time, resolution time, customer satisfaction (CSAT), and agent productivity metrics.',
          answerDe: 'Wir konfigurieren Dashboards zur Verfolgung von Reaktionszeit, Lösungszeit, Kundenzufriedenheit (CSAT) und Agent-Produktivitätsmetriken.'
        }
      ]}
      accentColor="#00CC66"
    />
  );
}
