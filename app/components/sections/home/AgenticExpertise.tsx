'use client';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Cpu, Rocket, Brain, Shield, TrendingUp, Zap } from 'lucide-react';
import { useState } from 'react';

export default function AgentforceSplitScreen() {
  const [activeFeature, setActiveFeature] = useState(0);

  const processSteps = [
    {
      icon: Search,
      title: 'Potenzial-Analyse',
      description: 'Wir identifizieren nicht nur Lücken, wir finden die "High-Impact" Prozesse, wo Autonomie sofortigen, messbaren ROI liefert. Wir zeigen Ihnen, was möglich ist.'
    },
    {
      icon: Cpu,
      title: 'Agenten Design',
      description: 'Wir bauen keine Chatbots, wir designen digitale Mitarbeiter. Wir übersetzen Ihre besten Best-Practices in Algorithmen, die 24/7 für Sie skalieren.'
    },
    {
      icon: Rocket,
      title: 'Skalierung & Go-Live',
      description: 'Starten Sie nicht mit einem Big Bang, sondern mit einem präzisen Pilot-Projekt. Sehen Sie Ergebnisse in Wochen und rollen Sie dann die Autonomie auf das ganze Unternehmen aus.'
    }
  ];

  const features = [
    {
      icon: Brain,
      label: 'Entscheidungs-Kraft',
      title: 'Reasoning Engine',
      description: 'Es ist keine Science-Fiction mehr. Diese Agenten verstehen Kontext, wägen ab und treffen Entscheidungen autonom – oft präziser und schneller als der Mensch.',
      badge: 'PRODUCTION READY'
    },
    {
      icon: Shield,
      label: 'Sicherheit',
      title: 'Einstein Trust Layer',
      description: 'Das größte Hindernis ist beseitigt: Ihre Daten bleiben sicher. Der Trust Layer garantiert, dass keine sensiblen Infos die Unternehmensgrenzen verlassen.',
      badge: 'PRODUCTION READY'
    },
    {
      icon: TrendingUp,
      label: 'Lernkurve',
      title: 'Lernende Systeme',
      description: 'Ein menschlicher Mitarbeiter braucht Monate Einarbeitung. Ihr Agentic Enterprise lernt über Nacht. Jede Interaktion macht das System intelligenter.',
      badge: 'PRODUCTION READY'
    },
    {
      icon: Zap,
      label: 'Speed',
      title: 'Geschwindigkeit als Waffe',
      description: 'Während die Konkurrenz noch Emails sortiert, hat Ihr Agent das Problem bereits gelöst. Antwortzeiten in Millisekunden sind der neue Standard.',
      badge: 'PRODUCTION READY'
    }
  ];

  return (
    <section 
      id="agentforce" 
      className="relative py-20 md:py-32 px-5 md:px-8" 
      style={{ 
        position: 'relative',
        backgroundColor: '#0B0C10'
      }}
    >
      <div className="max-w-[1400px] mx-auto" style={{ position: 'relative' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
          style={{ position: 'relative' }}
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border mb-6 md:mb-8"
            style={{
              backgroundColor: 'rgba(0, 204, 102, 0.05)',
              borderColor: 'rgba(0, 204, 102, 0.2)'
            }}
          >
            <motion.div
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: '#00CC66' }}
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-xs font-medium tracking-wide" style={{ color: '#00CC66' }}>
              AGENTIC ENTERPRISE
            </span>
          </div>
          
          <h2 className="text-3xl md:text-6xl font-bold mb-3 md:mb-4" style={{ color: 'white' }}>
            Der Schritt zum <span style={{ color: '#00CC66' }}>Agentic Enterprise.</span>
          </h2>
          <p className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: 'rgba(156, 163, 175, 1)' }}>
            Die Ära der rein manuellen Arbeit endet hier. Warten ist keine Strategie mehr. Verwandeln Sie starre Abteilungen jetzt in agile, autonome Einheiten. Der Wettbewerbsvorteil gehört denen, die den Schritt heute wagen.
          </p>
        </motion.div>

        {/* 2-Column Asymmetrical Layout - Responsive */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          
          {/* Left Column: The Roadmap */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
            style={{ position: 'relative' }}
          >
            {/* Headline */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'white' }}>
                The Roadmap
              </h3>
              <p className="text-base leading-relaxed" style={{ color: 'rgba(156, 163, 175, 1)' }}>
                Wie wir den Sprung sicher machen
              </p>
            </div>

            {/* Timeline-Style Steps */}
            <div className="relative space-y-6" style={{ position: 'relative' }}>
              {/* Connecting Line */}
              <div 
                className="absolute left-6 top-8 bottom-8 w-px"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              />

              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative flex items-start gap-4"
                  style={{ position: 'relative' }}
                >
                  {/* Icon */}
                  <div 
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center z-10"
                    style={{
                      backgroundColor: '#0B0C10',
                      border: '1px solid rgba(0, 204, 102, 0.3)'
                    }}
                  >
                    <step.icon className="w-5 h-5" style={{ color: '#00CC66' }} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h4 className="text-lg font-semibold mb-2" style={{ color: 'white' }}>
                      {step.title}
                    </h4>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(156, 163, 175, 1)' }}>
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: The Tech Specs (Tab Switcher) */}
          
          {/* Desktop: Split-View Feature Switcher */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden lg:flex gap-6"
            style={{ position: 'relative' }}
          >
            {/* Zone A: Tab Menu (Vertical List) */}
            <motion.div 
              className="flex flex-col gap-3"
              style={{ position: 'relative', minWidth: '160px' }}
            >
              {/* Subheadline */}
              <div className="mb-2 px-4">
                <p className="text-xs font-medium uppercase tracking-wider" style={{ color: '#666666' }}>
                  The Tech Specs
                </p>
                <p className="text-xs mt-1" style={{ color: '#555555' }}>
                  Warum es jetzt funktioniert
                </p>
              </div>

              {features.map((feature, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className="relative text-left py-3 px-4 transition-colors duration-300"
                  style={{ position: 'relative' }}
                  whileHover={{ x: 4 }}
                >
                  {/* Active Indicator Line */}
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full"
                    style={{
                      position: 'absolute',
                      backgroundColor: '#00CC66'
                    }}
                    initial={false}
                    animate={{
                      opacity: activeFeature === index ? 1 : 0,
                      scaleY: activeFeature === index ? 1 : 0.5
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Text */}
                  <motion.span
                    className="text-sm font-medium block pl-4"
                    style={{
                      position: 'relative',
                      color: activeFeature === index ? '#FFFFFF' : '#666666'
                    }}
                    animate={{
                      fontWeight: activeFeature === index ? 600 : 500
                    }}
                  >
                    {feature.label}
                  </motion.span>
                </motion.button>
              ))}
            </motion.div>

            {/* Zone B: Preview Window */}
            <AnimatePresence mode="wait">
              <motion.div
                className="flex-1 rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[450px]"
                style={{
                  position: 'relative',
                  backgroundColor: 'rgba(21, 23, 27, 0.4)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}
                key={activeFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Icon with Glow Effect */}
                <motion.div
                  className="relative mb-8"
                  style={{ position: 'relative' }}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                >
                  {/* Glow Background */}
                  <motion.div
                    className="absolute inset-0 rounded-full blur-3xl"
                    style={{
                      position: 'absolute',
                      width: '160px',
                      height: '160px',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)'
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      backgroundColor: [
                        'rgba(0, 204, 102, 0.3)',
                        'rgba(0, 204, 102, 0.5)',
                        'rgba(0, 204, 102, 0.3)'
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Icon Container */}
                  <motion.div
                    className="relative w-32 h-32 rounded-2xl flex items-center justify-center"
                    style={{
                      position: 'relative',
                      backgroundColor: 'rgba(0, 204, 102, 0.1)',
                      border: '2px solid rgba(0, 204, 102, 0.3)'
                    }}
                  >
                    {(() => {
                      const ActiveIcon = features[activeFeature].icon;
                      return <ActiveIcon className="w-16 h-16" style={{ color: '#00CC66' }} />;
                    })()}
                  </motion.div>
                </motion.div>

                {/* Feature Title */}
                <motion.h4
                  className="text-2xl font-bold mb-4"
                  style={{ color: '#FFFFFF' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {features[activeFeature].title}
                </motion.h4>

                {/* Feature Description */}
                <motion.p
                  className="text-base leading-relaxed max-w-md"
                  style={{ color: 'rgba(156, 163, 175, 1)' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {features[activeFeature].description}
                </motion.p>

                {/* Status Badge */}
                <motion.div
                  className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{
                    backgroundColor: 'rgba(0, 204, 102, 0.1)',
                    border: '1px solid rgba(0, 204, 102, 0.3)'
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: '#00CC66' }}
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-xs font-medium uppercase tracking-wide" style={{ color: '#00CC66' }}>
                    {features[activeFeature].badge}
                  </span>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Mobile: Horizontal Swipe Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:hidden"
            style={{ position: 'relative' }}
          >
            {/* Section Label for Mobile */}
            <div className="mb-6 text-center">
              <p className="text-sm font-medium uppercase tracking-wider" style={{ color: '#666666' }}>
                The Tech Specs
              </p>
              <p className="text-xs mt-1" style={{ color: '#555555' }}>
                Warum es jetzt funktioniert
              </p>
            </div>

            {/* Swipeable Card Container */}
            <div className="relative overflow-x-auto scrollbar-hide -mx-5 px-5" style={{ position: 'relative' }}>
              <div className="flex gap-4 pb-6" style={{ width: `${features.length * 100}%` }}>
                {features.map((feature, index) => {
                  const FeatureIcon = feature.icon;
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setActiveFeature(index)}
                      className="flex-shrink-0 rounded-2xl p-6 flex flex-col items-center justify-center text-center"
                      style={{
                        position: 'relative',
                        width: 'calc(100vw - 60px)',
                        minHeight: '420px',
                        backgroundColor: activeFeature === index 
                          ? 'rgba(21, 23, 27, 0.6)' 
                          : 'rgba(21, 23, 27, 0.3)',
                        backdropFilter: 'blur(20px)',
                        border: activeFeature === index 
                          ? '1px solid rgba(0, 204, 102, 0.3)'
                          : '1px solid rgba(255, 255, 255, 0.05)'
                      }}
                    >
                      {/* Tab Label */}
                      <div className="text-xs font-medium uppercase tracking-wider mb-6" style={{ color: '#666666' }}>
                        {feature.label}
                      </div>

                      {/* Icon with Glow Effect */}
                      <motion.div
                        className="relative mb-6"
                        style={{ position: 'relative' }}
                        animate={{
                          scale: activeFeature === index ? 1 : 0.9
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Glow Background */}
                        {activeFeature === index && (
                          <motion.div
                            className="absolute inset-0 rounded-full blur-2xl"
                            style={{
                              position: 'absolute',
                              width: '120px',
                              height: '120px',
                              top: '50%',
                              left: '50%',
                              transform: 'translate(-50%, -50%)'
                            }}
                            animate={{
                              scale: [1, 1.2, 1],
                              backgroundColor: [
                                'rgba(0, 204, 102, 0.3)',
                                'rgba(0, 204, 102, 0.5)',
                                'rgba(0, 204, 102, 0.3)'
                              ]
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                        )}

                        {/* Icon Container */}
                        <motion.div
                          className="relative w-24 h-24 rounded-xl flex items-center justify-center"
                          style={{
                            position: 'relative',
                            backgroundColor: activeFeature === index 
                              ? 'rgba(0, 204, 102, 0.15)' 
                              : 'rgba(0, 204, 102, 0.05)',
                            border: activeFeature === index 
                              ? '2px solid rgba(0, 204, 102, 0.4)' 
                              : '1px solid rgba(0, 204, 102, 0.2)'
                          }}
                        >
                          <FeatureIcon 
                            className="w-12 h-12" 
                            style={{ color: activeFeature === index ? '#00CC66' : '#669977' }} 
                          />
                        </motion.div>
                      </motion.div>

                      {/* Feature Title */}
                      <h4
                        className="text-xl font-bold mb-3"
                        style={{ 
                          color: activeFeature === index ? '#FFFFFF' : '#999999' 
                        }}
                      >
                        {feature.title}
                      </h4>

                      {/* Feature Description */}
                      <p
                        className="text-sm leading-relaxed px-4"
                        style={{ 
                          color: activeFeature === index 
                            ? 'rgba(156, 163, 175, 1)' 
                            : 'rgba(156, 163, 175, 0.6)' 
                        }}
                      >
                        {feature.description}
                      </p>

                      {/* Status Badge - Only on active card */}
                      {activeFeature === index && (
                        <motion.div
                          className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
                          style={{
                            backgroundColor: 'rgba(0, 204, 102, 0.1)',
                            border: '1px solid rgba(0, 204, 102, 0.3)'
                          }}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <motion.div
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: '#00CC66' }}
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          <span className="text-xs font-medium uppercase tracking-wide" style={{ color: '#00CC66' }}>
                            {feature.badge}
                          </span>
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className="transition-all duration-300"
                  style={{
                    width: activeFeature === index ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    backgroundColor: activeFeature === index 
                      ? '#00CC66' 
                      : 'rgba(255, 255, 255, 0.2)'
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
