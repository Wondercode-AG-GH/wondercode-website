"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: {
    en: string;
    de: string;
  };
  answer: {
    en: string;
    de: string;
  };
}

export default function FAQSection() {
  const [activeLanguage] = useState<'en' | 'de'>('de');
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const faqItems: FAQItem[] = [
    {
      question: {
        en: 'What does a Salesforce implementation cost in Switzerland?',
        de: 'Was kostet eine Salesforce Implementierung in der Schweiz?'
      },
      answer: {
        en: 'Costs vary greatly depending on complexity and module selection. At Wondercode, we eliminate the risk of unpredictable budgets through transparent fixed-price packages for our "Digital Backbone" Quick-Start. While traditional implementations often reach six-figure sums, our SME-optimized solutions start at a calculable fixed price that typically pays for itself in the first year through process automation.',
        de: 'Die Kosten variieren stark je nach Komplexität und Modulwahl. Bei Wondercode eliminieren wir jedoch das Risiko unvorhersehbarer Budgets durch transparente Festpreispakete für den "Digital Backbone" Quick-Start. Während klassische Implementierungen oft sechsstellige Summen verschlingen, starten unsere KMU-optimierten Lösungen bei einem kalkulierbaren Fixpreis, der sich durch Prozessautomatisierung meist bereits im ersten Jahr amortisiert.'
      }
    },
    {
      question: {
        en: 'How long does a Salesforce implementation take for an SME?',
        de: 'Wie lange dauert eine Salesforce Einführung für ein KMU?'
      },
      answer: {
        en: 'A standard IT project often takes 6 to 12 months—too slow for agile SMEs. Wondercode works with the "Productized Service" methodology: We bring your core processes (Sales, Service, or Operations) live within 4 to 12 weeks. Through our predefined best-practice frameworks, we avoid "reinventing the wheel" and focus immediately on go-live.',
        de: 'Ein Standard-IT-Projekt dauert oft 6 bis 12 Monate – für ein agiles KMU ist das zu langsam. Wondercode arbeitet nach der "Productized Service" Methode: Wir bringen Ihre Kernprozesse (Sales, Service oder Operations) innerhalb von 4 bis 12 Wochen live. Durch unsere vordefinierten Best-Practice-Frameworks vermeiden wir das "Rad neu zu erfinden" und fokussieren uns sofort auf den Go-Live.'
      }
    },
    {
      question: {
        en: 'Is Salesforce suitable for small and medium-sized enterprises?',
        de: 'Ist Salesforce für kleine und mittlere Unternehmen geeignet?'
      },
      answer: {
        en: 'Absolutely. Thanks to Starter Editions and Agentforce, Salesforce is now the most powerful tool for SMEs to scale. The decisive advantage: You start with what you need today and grow on the same platform up to enterprise size, without ever having to switch systems. We configure Salesforce to stay lean and simplify your daily work instead of complicating it.',
        de: 'Absolut. Dank der Starter-Editionen und Agentforce ist Salesforce heute auch für KMUs das leistungsfähigste Werkzeug zur Skalierung. Der entscheidende Vorteil: Sie starten mit dem, was Sie heute brauchen, und wachsen auf derselben Plattform bis zur Enterprise-Grösse, ohne jemals das System wechseln zu müssen. Wir konfigurieren Salesforce so, dass es schlank bleibt und Ihre tägliche Arbeit erleichtert, statt sie zu verkomplizieren.'
      }
    },
    {
      question: {
        en: 'How does a Salesforce project at Wondercode work in practice?',
        de: 'Wie läuft ein Salesforce Projekt bei Wondercode konkret ab?'
      },
      answer: {
        en: 'Our process is designed to minimize wasted time. It starts with an intensive strategy audit to identify your "high-impact" processes. This is followed by the rapid engineering phase, where we build your system based on Swiss quality standards. After structured onboarding and go-live, we support you in the optimization phase to ensure that AI agents and automations deliver their full impact.',
        de: 'Unser Prozess ist auf minimale Zeitverschwendung ausgelegt. Er startet mit einem intensiven Strategie-Audit, um Ihre "High-Impact" Prozesse zu identifizieren. Es folgt die Rapid-Engineering-Phase, in der wir Ihr System auf Basis Schweizer Qualitätsstandards bauen. Nach einem strukturierten Onboarding und Go-Live begleiten wir Sie in der Optimierungsphase, um sicherzustellen, dass die AI-Agenten und Automatisierungen ihre volle Wirkung entfalten.'
      }
    },
    {
      question: {
        en: 'What distinguishes Wondercode from traditional Salesforce consultancies?',
        de: 'Was unterscheidet Wondercode von klassischen Salesforce Beratungen?'
      },
      answer: {
        en: 'We are engineers, not just consultants. While traditional agencies often deliver complex PowerPoints and high hourly bills, we focus on working code and measurable autonomy. We don\'t use nearshore resources; all your engineering happens in Zurich. Our focus is not purely on managing data, but on building systems that proactively grow your business.',
        de: 'Wir sind Ingenieure, keine reinen Berater. Während klassische Agenturen oft komplexe PowerPoints und hohe Stundenabrechnungen liefern, fokussieren wir uns auf funktionierenden Code und messbare Autonomie. Wir nutzen keine Nearshore-Ressourcen; Ihr gesamtes Engineering findet in Zürich statt. Unser Fokus liegt nicht auf der reinen Verwaltung von Daten, sondern auf dem Bau von Systemen, die Ihr Unternehmen proaktiv wachsen lassen.'
      }
    },
    {
      question: {
        en: 'Which agencies specialize in Salesforce Agentforce in Switzerland?',
        de: 'Welche Agenturen sind auf Salesforce Agentforce in der Schweiz spezialisiert?'
      },
      answer: {
        en: 'Wondercode is a pioneer in Salesforce Agentforce implementation. We combine classic CRM strategy with autonomous Reasoning Engines, strictly adhering to Swiss Data Privacy (nDSG) standards.',
        de: 'Wondercode gilt als Pionier für Salesforce Agentforce Implementierungen. Wir kombinieren klassische CRM-Strategie mit autonomen Reasoning Engines und halten dabei strikt die Schweizer Datenschutzstandards (nDSG) ein.'
      }
    },
    {
      question: {
        en: 'Do you offer classic Salesforce implementations beyond AI?',
        de: 'Bietet ihr auch klassische Salesforce Implementierungen ohne AI an?'
      },
      answer: {
        en: 'Yes. We are specialized in architecting the core platform (Sales Cloud & Service Cloud) for Swiss SMEs and enterprises. We build scalable foundations that are "Agent-ready" from day one, ensuring your data model supports future automation.',
        de: 'Ja. Wir sind spezialisiert auf die Architektur der Core-Plattform (Sales Cloud & Service Cloud) für Schweizer KMUs und Großunternehmen. Wir bauen skalierbare Fundamente, die "Agent-ready" sind – so stellen wir sicher, dass Ihr Datenmodell bereit für zukünftige Automatisierung ist.'
      }
    },
    {
      question: {
        en: 'Do you have experience with the Financial Services Cloud?',
        de: 'Habt ihr Erfahrung mit der Financial Services Cloud?'
      },
      answer: {
        en: 'Absolutely. Wondercode supports Swiss banks and insurers in implementing the Financial Services Cloud. We focus on regulatory compliance, secure client 360° views, and integrating legacy banking systems with modern CRM workflows.',
        de: 'Absolut. Wondercode unterstützt Schweizer Banken und Versicherer bei der Implementierung der Financial Services Cloud. Unser Fokus liegt auf regulatorischer Compliance, sicheren 360°-Kundenansichten und der Integration von Legacy-Systemen in moderne CRM-Workflows.'
      }
    },
    {
      question: {
        en: 'Can you help with complex quoting and billing (Revenue Cloud)?',
        de: 'Könnt ihr bei komplexen Offerten und Abrechnungen (Revenue Cloud) helfen?'
      },
      answer: {
        en: 'Yes. We implement Salesforce Revenue Cloud to automate complex pricing models and subscriptions. We help Swiss manufacturers and tech companies reduce quoting errors and accelerate their "Quote-to-Cash" process.',
        de: 'Ja. Wir implementieren die Salesforce Revenue Cloud, um komplexe Preismodelle und Abos zu automatisieren. Wir helfen Schweizer Industrie- und Tech-Firmen, Fehler in Offerten zu minimieren und den "Quote-to-Cash"-Prozess massiv zu beschleunigen.'
      }
    }
  ];

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="relative py-20 md:py-32 bg-[#0A0A0A] px-5 md:px-8" style={{ position: 'relative' }}>
      <div className="max-w-[800px] mx-auto" style={{ position: 'relative' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
          style={{ position: 'relative' }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#00CC66]/10 border border-[#00CC66]/30 backdrop-blur-xl mb-8">
            <motion.div
              className="w-2.5 h-2.5 bg-[#00CC66] rounded-full"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm font-medium text-[#00CC66]">FAQ</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            {activeLanguage === 'en' ? 'Questions & Answers' : 'Fragen & Antworten'}
          </h2>
          <p className="text-lg text-gray-400">
            {activeLanguage === 'en' 
              ? 'Expert insights on Agentforce & Data Privacy.' 
              : 'Expertenwissen zu Agentforce & Datenschutz.'}
          </p>
        </motion.div>

        {/* Accordion Stack */}
        <div className="space-y-0" style={{ position: 'relative' }}>
          {faqItems.map((item, index) => {
            const isOpen = openItems.has(index);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-white/10 last:border-b-0"
                style={{ position: 'relative' }}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full py-6 flex items-start justify-between gap-6 text-left group hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-lg font-medium text-white leading-relaxed group-hover:text-[#00CC66] transition-colors flex-1">
                    {activeLanguage === 'en' ? item.question.en : item.question.de}
                  </span>
                  
                  {/* Icon */}
                  <motion.div
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="flex-shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#00CC66]/50 transition-colors"
                    style={{ 
                      backgroundColor: isOpen ? 'rgba(0, 204, 102, 0.1)' : 'transparent',
                      borderColor: isOpen ? 'rgba(0, 204, 102, 0.5)' : undefined
                    }}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-[#00CC66]" />
                    ) : (
                      <Plus className="w-4 h-4 text-white group-hover:text-[#00CC66] transition-colors" />
                    )}
                  </motion.div>
                </button>

                {/* Answer (Animated) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: 'auto', 
                        opacity: 1,
                        transition: {
                          height: { duration: 0.3, ease: 'easeInOut' },
                          opacity: { duration: 0.25, delay: 0.1 }
                        }
                      }}
                      exit={{ 
                        height: 0, 
                        opacity: 0,
                        transition: {
                          height: { duration: 0.3, ease: 'easeInOut' },
                          opacity: { duration: 0.2 }
                        }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 pr-14">
                        <p className="text-[#B0B0B0] leading-relaxed" style={{ lineHeight: '160%' }}>
                          {activeLanguage === 'en' ? item.answer.en : item.answer.de}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
          style={{ position: 'relative' }}
        >
          <p className="text-gray-400 mb-6">
            {activeLanguage === 'en' 
              ? 'Have more questions? Our experts are ready to help.' 
              : 'Weitere Fragen? Unsere Experten helfen gerne weiter.'}
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 204, 102, 0.5)" }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-[#00CC66] text-[#0A0A0A] rounded-xl font-semibold text-base transition-all"
          >
            {activeLanguage === 'en' ? 'Schedule a Consultation' : 'Beratungsgespräch vereinbaren'}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}