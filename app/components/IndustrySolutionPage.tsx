"use client";
import { motion } from 'motion/react';
import { ArrowRight, LucideIcon, AlertTriangle, Plus, Minus } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { iconMap } from '@/sanity/lib/iconMap';

interface Challenge {
  icon: string | LucideIcon;
  title: string;
  titleDe: string;
  description: string;
  descriptionDe: string;
}

interface CapabilityCard {
  title: string;
  titleDe: string;
  description: string;
  descriptionDe: string;
  icon: string | LucideIcon;
  isAI?: boolean;
}

interface WorkflowStep {
  label: string;
  labelDe: string;
  isAI?: boolean;
}

interface FAQItem {
  question: string;
  questionDe: string;
  answer: string;
  answerDe: string;
}

interface IndustrySolutionProps {
  industryName: string;
  industryNameDe: string;
  heroSubline: string;
  heroSublineDe: string;
  heroIcon: string | LucideIcon;
  contextHeadline: string;
  contextHeadlineDe: string;
  contextParagraph1: string;
  contextParagraph1De: string;
  contextParagraph2: string;
  contextParagraph2De: string;
  heroImage?: {
    asset?: { url: string; _id?: string };
    alt?: string;
    hotspot?: any;
    crop?: any;
  };
  challenges: Challenge[];
  capabilityCards: CapabilityCard[];
  useCaseTitle: string;
  useCaseTitleDe: string;
  workflowSteps: WorkflowStep[];
  faqItems: FAQItem[];
  accentColor?: string;
}

export default function IndustrySolutionPage({
  industryName,
  industryNameDe,
  heroSubline,
  heroSublineDe,
  heroIcon: heroIconProp,
  contextHeadline,
  contextHeadlineDe,
  contextParagraph1,
  contextParagraph1De,
  contextParagraph2,
  contextParagraph2De,
  heroImage,
  challenges,
  capabilityCards,
  useCaseTitle,
  useCaseTitleDe,
  workflowSteps,
  faqItems,
  accentColor = '#00CC66'
}: IndustrySolutionProps) {
  const [activeLanguage, setActiveLanguage] = useState<'en' | 'de'>('en');
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  // Resolve hero icon (string or component)
  const HeroIcon = typeof heroIconProp === 'string' 
    ? (iconMap[heroIconProp] ?? AlertTriangle) as LucideIcon
    : heroIconProp;
  
  // Debug log to see what icon is being resolved
  if (typeof heroIconProp === 'string' && process.env.NODE_ENV !== 'production') {
    console.log(`Hero icon requested: "${heroIconProp}", Found in iconMap: ${!!iconMap[heroIconProp]}`);
  }

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: '#050505', fontFamily: 'Inter, Helvetica, sans-serif' }}>
      {/* Back Navigation */}
      <div className="fixed top-24 left-8 z-50">
        <Link href="/">
          <motion.button
            whileHover={{ x: -4 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border transition-all text-sm"
            style={{
              backgroundColor: '#111111',
              borderColor: '#333333'
            }}
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            <span>{activeLanguage === 'en' ? 'Back to Home' : 'Zurück zur Startseite'}</span>
          </motion.button>
        </Link>
      </div>

      {/* Language Switcher */}
      <div className="fixed top-24 right-8 z-50 flex gap-2">
        <motion.button
          onClick={() => setActiveLanguage('en')}
          className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all"
          style={{
            backgroundColor: activeLanguage === 'en' ? accentColor : 'rgba(255, 255, 255, 0.1)',
            color: activeLanguage === 'en' ? '#050505' : '#CCCCCC',
          }}
        >
          EN
        </motion.button>
        <motion.button
          onClick={() => setActiveLanguage('de')}
          className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all"
          style={{
            backgroundColor: activeLanguage === 'de' ? accentColor : 'rgba(255, 255, 255, 0.1)',
            color: activeLanguage === 'de' ? '#050505' : '#CCCCCC',
          }}
        >
          DE
        </motion.button>
      </div>

      {/* 1. CINEMATIC HERO */}
      <section className="relative pt-40 pb-32 px-8 overflow-hidden" style={{ position: 'relative' }}>
        {/* Animated background gradient */}
        <div className="absolute inset-0" style={{ position: 'absolute' }}>
          <motion.div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at 30% 20%, ${accentColor}15 0%, rgba(0, 204, 102, 0) 50%)`
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="relative max-w-[1400px] mx-auto" style={{ position: 'relative' }}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ position: 'relative' }}
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1]">
                {activeLanguage === 'en' ? industryName : industryNameDe}
                <br />
                <span style={{ color: accentColor }}>Architecture</span>
              </h1>

              <p className="text-xl md:text-2xl leading-relaxed mb-10" style={{ color: '#BBBBBB' }}>
                {activeLanguage === 'en' ? heroSubline : heroSublineDe}
              </p>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: `0 0 40px ${accentColor}50` }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-3"
                style={{
                  backgroundColor: accentColor,
                  color: '#050505'
                }}
              >
                {activeLanguage === 'en' ? 'Explore Architecture' : 'Architektur erkunden'}
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </motion.div>

            {/* Right: Hero Image or 3D Abstract Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative h-[500px] md:h-[600px]"
              style={{ position: 'relative' }}
            >
              {heroImage?.asset?.url ? (
                /* Display Hero Image if available */
                <motion.img
                  src={heroImage.asset.url}
                  alt={heroImage.alt || 'Industry visualization'}
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                  style={{
                    boxShadow: `0 0 80px ${accentColor}30`,
                    position: 'absolute'
                  }}
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ) : (
                /* Fallback: 3D Abstract Visualization */
                <>
                  {/* Outer glow sphere */}
                  <motion.div
                    className="absolute inset-0 rounded-full blur-3xl"
                    style={{
                      background: `radial-gradient(circle, ${accentColor}20 0%, rgba(0, 204, 102, 0) 70%)`,
                      position: 'absolute'
                    }}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.4, 0.7, 0.4]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Central shield/vault structure */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ position: 'absolute' }}
                    animate={{
                      rotateY: [0, 360],
                      rotateZ: [0, 5, 0, -5, 0]
                    }}
                    transition={{
                      rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
                      rotateZ: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    <div
                      className="w-64 h-64 md:w-80 md:h-80 rounded-3xl flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, rgba(17, 17, 17, 0.9) 0%, rgba(5, 5, 5, 0.95) 100%)',
                        border: `2px solid ${accentColor}60`,
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        boxShadow: `0 0 80px ${accentColor}30, inset 0 0 80px rgba(0, 0, 0, 0.6)`
                      }}
                    >
                      <HeroIcon className="w-40 h-40 md:w-48 md:h-48" style={{ color: accentColor }} />
                    </div>
                  </motion.div>

                  {/* Data stream particles */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-16 rounded-full"
                      style={{
                        background: `linear-gradient(180deg, ${accentColor}80 0%, rgba(0, 204, 102, 0) 100%)`,
                        left: `${15 + (i * 12)}%`,
                        bottom: '10%',
                        position: 'absolute'
                      }}
                      animate={{
                        y: [-500, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 3 + (i * 0.3),
                        repeat: Infinity,
                        delay: i * 0.4
                      }}
                    />
                  ))}

                  {/* Orbiting nodes */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={`orbit-${i}`}
                      className="absolute w-3 h-3 rounded-full"
                      style={{
                        backgroundColor: accentColor,
                        top: '50%',
                        left: '50%',
                        position: 'absolute',
                        boxShadow: `0 0 20px ${accentColor}`
                      }}
                      animate={{
                        x: [0, Math.cos((i * 120 * Math.PI) / 180) * 200, 0],
                        y: [0, Math.sin((i * 120 * Math.PI) / 180) * 200, 0]
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        delay: i * 2,
                        ease: "linear"
                      }}
                    />
                  ))}
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. INDUSTRY CONTEXT - Editorial Text Section */}
      <section className="relative py-32 px-8" style={{ position: 'relative' }}>
        <div className="max-w-[800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ position: 'relative' }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">
              {activeLanguage === 'en' ? contextHeadline : contextHeadlineDe}
            </h2>

            <div className="space-y-8">
              <p className="text-xl leading-relaxed" style={{ color: '#CCCCCC' }}>
                {activeLanguage === 'en' ? contextParagraph1 : contextParagraph1De}
              </p>

              <p className="text-xl leading-relaxed" style={{ color: '#CCCCCC' }}>
                {activeLanguage === 'en' ? contextParagraph2 : contextParagraph2De}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. THE CHALLENGE - 3-Point Horizontal List */}
      <section className="relative py-32 px-8" style={{ position: 'relative' }}>
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
            style={{ position: 'relative' }}
          >
            <h2 className="text-5xl md:text-6xl font-bold">
              {activeLanguage === 'en' ? 'Core ' : 'Kern-'}
              <span style={{ color: accentColor }}>
                {activeLanguage === 'en' ? 'Challenges' : 'Herausforderungen'}
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-0" style={{ position: 'relative' }}>
            {challenges.map((challenge, index) => {
              const ChallengeIcon = typeof challenge.icon === 'string'
                ? (iconMap[challenge.icon] ?? AlertTriangle) as LucideIcon
                : challenge.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="px-8 py-12"
                  style={{
                    position: 'relative',
                    borderRight: index < challenges.length - 1 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
                  }}
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <ChallengeIcon className="w-10 h-10" style={{ color: '#EF4444' }} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4">
                    {activeLanguage === 'en' ? challenge.title : challenge.titleDe}
                  </h3>

                  {/* Description */}
                  <p className="text-base leading-relaxed" style={{ color: '#999999' }}>
                    {activeLanguage === 'en' ? challenge.description : challenge.descriptionDe}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CAPABILITY MATRIX - 2x2 Bento Grid */}
      <section className="relative py-32 px-8" style={{ position: 'relative' }}>
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
            style={{ position: 'relative' }}
          >
            <h2 className="text-5xl md:text-6xl font-bold">
              {activeLanguage === 'en' ? 'Engineered for ' : 'Entwickelt für '}
              <span style={{ color: accentColor }}>
                {activeLanguage === 'en' ? industryName : industryNameDe}
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {capabilityCards.map((card, index) => {              const CapIcon = typeof card.icon === 'string'
                ? (iconMap[card.icon] ?? AlertTriangle) as LucideIcon
                : card.icon;              const CardIcon = card.icon;
              const isAI = card.isAI;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group relative rounded-2xl p-10"
                  style={{
                    backgroundColor: '#111111',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    position: 'relative'
                  }}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{
                      background: `linear-gradient(135deg, ${accentColor}10 0%, rgba(0, 204, 102, 0) 100%)`,
                      position: 'absolute'
                    }}
                  />

                  <div className="relative z-10" style={{ position: 'relative' }}>
                    {/* Icon */}
                    <div className="mb-6">
                      <CardIcon 
                        className="w-12 h-12" 
                        style={{ color: isAI ? accentColor : '#FFFFFF' }} 
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-4 leading-tight">
                      {activeLanguage === 'en' ? card.title : card.titleDe}
                    </h3>

                    {/* Technical Description */}
                    <p className="text-base leading-relaxed" style={{ color: '#999999' }}>
                      {activeLanguage === 'en' ? card.description : card.descriptionDe}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. USE CASE SPOTLIGHT - Technical Process Flow */}
      <section className="relative py-32 px-8" style={{ position: 'relative' }}>
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
            style={{ position: 'relative' }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              {activeLanguage === 'en' ? 'Real-World ' : 'Reale '}
              <span style={{ color: accentColor }}>
                {activeLanguage === 'en' ? 'Application' : 'Anwendung'}
              </span>
            </h2>
            <p className="text-xl" style={{ color: '#BBBBBB' }}>
              {activeLanguage === 'en' ? useCaseTitle : useCaseTitleDe}
            </p>
          </motion.div>

          {/* Technical Workflow Process Bar */}
          <div className="relative" style={{ position: 'relative' }}>
            {/* Connection line */}
            <div
              className="absolute top-1/2 left-0 right-0 h-[2px] hidden md:block"
              style={{
                background: `linear-gradient(90deg, ${accentColor}40 0%, ${accentColor}80 50%, ${accentColor}40 100%)`,
                position: 'absolute',
                transform: 'translateY(-50%)'
              }}
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {workflowSteps.map((step, index) => {
                const isAI = step.isAI;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    onHoverStart={() => setHoveredStep(index)}
                    onHoverEnd={() => setHoveredStep(null)}
                    className="relative flex flex-col items-center"
                    style={{ position: 'relative' }}
                  >
                    {/* Step Node */}
                    <motion.div
                      className="relative z-10 w-32 h-32 rounded-full flex items-center justify-center text-center px-4 cursor-pointer mb-6"
                      style={{
                        backgroundColor: isAI ? `${accentColor}20` : '#111111',
                        border: `2px solid ${isAI ? accentColor : '#333333'}`,
                        position: 'relative',
                        boxShadow: isAI ? `0 0 40px ${accentColor}50` : 'none'
                      }}
                      whileHover={{ scale: 1.1 }}
                      animate={
                        isAI
                          ? {
                              boxShadow: [
                                `0 0 40px ${accentColor}50`,
                                `0 0 60px ${accentColor}70`,
                                `0 0 40px ${accentColor}50`
                              ]
                            }
                          : {}
                      }
                      transition={
                        isAI
                          ? {
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }
                          : {}
                      }
                    >
                      <span 
                        className="text-base font-bold leading-tight"
                        style={{ color: isAI ? accentColor : '#FFFFFF' }}
                      >
                        {activeLanguage === 'en' ? step.label : step.labelDe}
                      </span>

                      {/* AI Glow Ring */}
                      {isAI && (
                        <motion.div
                          className="absolute inset-0 rounded-full"
                          style={{
                            border: `2px solid ${accentColor}`,
                            position: 'absolute'
                          }}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0, 0.5]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      )}
                    </motion.div>

                    {/* Arrow connector */}
                    {index < workflowSteps.length - 1 && (
                      <motion.div
                        className="hidden md:block absolute top-16 left-[calc(50%+4rem)] z-0"
                        style={{ position: 'absolute' }}
                        animate={{
                          x: [0, 8, 0],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3
                        }}
                      >
                        <ArrowRight className="w-8 h-8" style={{ color: accentColor }} />
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ ACCORDION */}
      <section className="relative py-32 px-8" style={{ position: 'relative' }}>
        <div className="max-w-[900px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
            style={{ position: 'relative' }}
          >
            <h2 className="text-5xl md:text-6xl font-bold">
              {activeLanguage === 'en' ? 'Common ' : 'Häufige '}
              <span style={{ color: accentColor }}>
                {activeLanguage === 'en' ? 'Questions' : 'Fragen'}
              </span>
            </h2>
          </motion.div>

          <div className="space-y-0" style={{ position: 'relative' }}>
            {faqItems.map((item, index) => {
              const isExpanded = expandedFAQ === index;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b"
                  style={{
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    position: 'relative'
                  }}
                >
                  <button
                    onClick={() => setExpandedFAQ(isExpanded ? null : index)}
                    className="w-full py-8 flex items-center justify-between text-left group"
                  >
                    <span className="text-xl md:text-2xl font-semibold pr-8 group-hover:text-[#00CC66] transition-colors">
                      {activeLanguage === 'en' ? item.question : item.questionDe}
                    </span>
                    
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      {isExpanded ? (
                        <Minus className="w-6 h-6" style={{ color: accentColor }} />
                      ) : (
                        <Plus className="w-6 h-6" style={{ color: '#666666' }} />
                      )}
                    </motion.div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isExpanded ? 'auto' : 0,
                      opacity: isExpanded ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="pb-8 pr-16">
                      <p className="text-lg leading-relaxed" style={{ color: '#999999' }}>
                        {activeLanguage === 'en' ? item.answer : item.answerDe}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 px-8" style={{ position: 'relative' }}>
        <div className="max-w-[1000px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ position: 'relative' }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {activeLanguage === 'en' ? 'Ready to Transform?' : 'Bereit zu transformieren?'}
            </h2>
            <p className="text-xl mb-12" style={{ color: '#BBBBBB' }}>
              {activeLanguage === 'en'
                ? `Let's architect your ${industryName.toLowerCase()} solution.`
                : `Lassen Sie uns Ihre ${industryNameDe}-Lösung konzipieren.`}
            </p>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: `0 0 40px ${accentColor}50` }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 rounded-xl font-semibold text-lg flex items-center gap-3 mx-auto"
              style={{
                backgroundColor: accentColor,
                color: '#050505'
              }}
            >
              {activeLanguage === 'en' ? 'Schedule Architecture Review' : 'Architektur-Review vereinbaren'}
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}