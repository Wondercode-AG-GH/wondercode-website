'use client';

import { motion } from 'motion/react';
import { TrendingUp, Headphones, Shield, Receipt, Heart, Globe, Radio, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function CoreExpertise() {
  const capabilityMatrix = [
    // Row 1
    {
      icon: TrendingUp,
      title: 'Sales Cloud',
      description: 'Von der Lead-Generierung bis zum Abschluss. Wir automatisieren komplexe Sales-Prozesse und Forecasts, damit Ihr Team verkauft, statt Daten zu pflegen.',
      link: '/services/sales-cloud'
    },
    {
      icon: Headphones,
      title: 'Service Cloud',
      description: 'Exzellenter Kundenservice auf allen Kanälen. Automatisierte Ticket-Verteilung und KI-Support verwandeln Ihren Service vom Kostenfaktor zum Kundenmagneten.',
      link: '/services/service-cloud'
    },
    {
      icon: Shield,
      title: 'Financial Services',
      description: 'Spezialisiert auf Banken und Versicherungen. Wir bilden komplexe Haushalts-Strukturen ab und sichern FINMA-konforme Beratungsprozesse.',
      link: '/services/financial-services-cloud'
    },
    {
      icon: Receipt,
      title: 'Revenue Cloud',
      description: 'Beherrschen Sie komplexe Preismodelle und Abos. Fehlerfreie Angebote (CPQ) und automatisierte Abrechnung (Billing) auf Knopfdruck.',
      link: '/services/revenue-cloud'
    },
    // Row 2
    {
      icon: Heart,
      title: 'Non Profit Cloud',
      description: 'Maximieren Sie Ihren Impact. Professionelles Spendenmanagement und Programm-Tracking für NGOs, die effizient skalieren wollen.',
      link: '#'
    },
    {
      icon: Globe,
      title: 'Experience Cloud',
      description: 'Nahtlose digitale Portale für Kunden und Partner. Sichere Self-Service Zonen, die tief in Ihre Datenprozesse integriert sind.',
      link: '#'
    },
    {
      icon: Radio,
      title: 'Marketing Cloud',
      description: '1:1 Kommunikation im großen Stil. Datengetriebene Customer Journeys, die den Kunden zur richtigen Zeit erreichen und konvertieren.',
      link: '#'
    },
    {
      icon: Sparkles,
      title: 'Agentforce',
      description: 'Die Zukunft der Arbeit. Wir konfigurieren autonome AI-Agenten, die Aufgaben in allen oben genannten Clouds selbstständig planen und ausführen.',
      link: '#',
      isHighlighted: true // Green accent for newest innovation
    }
  ];

  return (
    <section id="services" className="relative py-20 md:py-32 bg-[#0A0A0A] px-5 md:px-8" style={{ position: 'relative' }}>
      {/* Technical grid overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#00CC66 1px, transparent 1px), linear-gradient(90deg, #00CC66 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-[1600px] mx-auto" style={{ position: 'relative' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
          style={{ position: 'relative' }}
        >
          <div className="inline-flex items-center gap-3 px-4 md:px-6 py-2 md:py-3 rounded-full border backdrop-blur-xl mb-6 md:mb-8"
            style={{
              backgroundColor: 'rgba(0, 204, 102, 0.1)',
              borderColor: 'rgba(0, 204, 102, 0.3)'
            }}
          >
            <motion.div
              className="w-2.5 h-2.5 bg-[#00CC66] rounded-full"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm font-medium text-[#00CC66]">SALESFORCE-ÖKOSYSTEM</span>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold mb-6 text-white">
            Das gesamte <span className="text-[#00CC66]">Salesforce-Ökosystem.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Wir beherrschen die Klaviatur der komplexesten Clouds. Ob hochregulierte Bankprozesse, komplexe Abo-Modelle oder Non-Profit-Management: Wir integrieren spezialisierte Module zu einer nahtlosen Gesamtarchitektur.
          </p>
        </motion.div>

        {/* 8-Card Capability Matrix - Periodic Table Style */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4" style={{ position: 'relative' }}>
          {capabilityMatrix.map((capability, index) => {
            const CardContent = (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ 
                  y: -4,
                }}
                className="group relative h-full min-h-[200px] md:min-h-[240px] p-4 md:p-6 rounded-xl overflow-hidden cursor-pointer flex flex-col"
                style={{
                  background: '#111111',
                  border: capability.isHighlighted 
                    ? '1px solid rgba(0, 204, 102, 0.3)' 
                    : '1px solid rgba(75, 85, 99, 0.3)',
                  position: 'relative'
                }}
              >
                {/* Hover: Enhanced border */}
                <div 
                  className={`absolute inset-0 rounded-xl border ${
                    capability.isHighlighted 
                      ? 'border-[#00CC66]/50 group-hover:border-[#00CC66]' 
                      : 'border-transparent group-hover:border-[#00CC66]'
                  } transition-all duration-300 pointer-events-none`}
                  style={{ position: 'absolute' }} 
                />

                {/* Subtle background glow on hover */}
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    position: 'absolute',
                    background: 'radial-gradient(circle at 50% 100%, rgba(0, 204, 102, 0.05) 0%, rgba(0, 0, 0, 0) 70%)',
                    pointerEvents: 'none'
                  }}
                />

                {/* Card Content */}
                <div className="relative z-10 flex flex-col h-full" style={{ position: 'relative' }}>
                  {/* Icon - Top */}
                  <motion.div
                    className={`mb-6 w-12 h-12 rounded-lg ${
                      capability.isHighlighted 
                        ? 'bg-[#00CC66]/10 border border-[#00CC66]/30' 
                        : 'bg-white/5 border border-white/10'
                    } flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: capability.isHighlighted ? 0 : 5 }}
                  >
                    <capability.icon 
                      className={`w-6 h-6 ${
                        capability.isHighlighted 
                          ? 'text-[#00CC66]' 
                          : 'text-white'
                      }`} 
                    />
                  </motion.div>

                  {/* Title - Middle */}
                  <h3 className={`text-xl font-bold mb-3 leading-tight ${
                    capability.isHighlighted 
                      ? 'text-[#00CC66]' 
                      : 'text-white group-hover:text-[#00CC66]'
                  } transition-colors duration-300`}>
                    {capability.title}
                  </h3>

                  {/* Description - Bottom */}
                  <p className="text-sm text-gray-400 leading-relaxed mt-auto">
                    {capability.description}
                  </p>
                </div>

                {/* Corner accent for Agentforce */}
                {capability.isHighlighted && (
                  <motion.div 
                    className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl pointer-events-none"
                    style={{ 
                      position: 'absolute',
                      backgroundColor: 'rgba(0, 204, 102, 0.1)'
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                )}
              </motion.div>
            );

            // If link is '#', render as div instead of Link
            return capability.link === '#' ? (
              <div key={index} className="block">
                {CardContent}
              </div>
            ) : (
              <Link key={index} href={capability.link} className="block">
                {CardContent}
              </Link>
            );
          })}
        </div>

        {/* Bottom Status Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
          style={{ position: 'relative' }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#111111] border border-gray-800">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00CC66] rounded-full animate-pulse" />
              <span className="text-sm text-gray-400">
                Vom Fundament bis zur Frontier. Vollständige Salesforce-Expertise.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}