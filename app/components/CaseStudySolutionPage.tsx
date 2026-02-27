"use client";
import { motion } from 'motion/react';
import { ArrowRight, AlertTriangle, LucideIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { iconMap } from '@/sanity/lib/iconMap';

interface ChallengeIssue {
  title: string;
  titleDe: string;
  description: string;
  descriptionDe: string;
  icon?: string;
}

interface CustomerHighlight {
  title: string;
  titleDe: string;
  description: string;
  descriptionDe: string;
}

interface TechStack {
  name: string;
  category: string;
  categoryDe: string;
  description: string;
  descriptionDe: string;
  icon?: string;
}

interface ResultItem {
  text: string;
  textDe: string;
}

interface ResultPillar {
  title: string;
  titleDe: string;
  icon?: string;
  items: ResultItem[];
}

interface CaseStudyPageProps {
  activeLanguage?: 'en' | 'de';
  heroHeadline: string;
  heroHeadlineDe: string;
  heroSubline: string;
  heroSublineDe: string;
  timelineMetric: string;
  timelineLabel: string;
  timelineLabelDe: string;
  executiveSummary: string[];
  executiveSummaryDe: string[];
  customerName: string;
  customerHeadline: string;
  customerHeadlineDe: string;
  customerDescription: string;
  customerDescriptionDe: string;
  customerHighlights: CustomerHighlight[];
  challengeHeadline: string;
  challengeHeadlineDe: string;
  challengeIntro: string;
  challengeIntroDe: string;
  challengeIssues: ChallengeIssue[];
  solutionHeadline: string;
  solutionHeadlineDe: string;
  solutionIntro: string;
  solutionIntroDe: string;
  techStacks: TechStack[];
  resultsHeadline: string;
  resultsHeadlineDe: string;
  resultsPillars: ResultPillar[];
  testimonialQuote: string;
  testimonialQuoteDe: string;
  testimonialAuthor: string;
  testimonialRole: string;
  testimonialRoleDe: string;
  ctaHeadline: string;
  ctaHeadlineDe: string;
  ctaDescription: string;
  ctaDescriptionDe: string;
  ctaButtonText: string;
  ctaButtonTextDe: string;
}

export default function CaseStudySolutionPage({
  activeLanguage: defaultLanguage = 'en',
  heroHeadline,
  heroHeadlineDe,
  heroSubline,
  heroSublineDe,
  timelineMetric,
  timelineLabel,
  timelineLabelDe,
  executiveSummary,
  executiveSummaryDe,
  customerName,
  customerHeadline,
  customerHeadlineDe,
  customerDescription,
  customerDescriptionDe,
  customerHighlights,
  challengeHeadline,
  challengeHeadlineDe,
  challengeIntro,
  challengeIntroDe,
  challengeIssues,
  solutionHeadline,
  solutionHeadlineDe,
  solutionIntro,
  solutionIntroDe,
  techStacks,
  resultsHeadline,
  resultsHeadlineDe,
  resultsPillars,
  testimonialQuote,
  testimonialQuoteDe,
  testimonialAuthor,
  testimonialRole,
  testimonialRoleDe,
  ctaHeadline,
  ctaHeadlineDe,
  ctaDescription,
  ctaDescriptionDe,
  ctaButtonText,
  ctaButtonTextDe,
}: CaseStudyPageProps) {
  const [activeLanguage, setActiveLanguage] = useState<'en' | 'de'>(defaultLanguage);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getIcon = (iconName?: string): LucideIcon => {
    if (!iconName) return AlertTriangle;
    return (iconMap[iconName] ?? AlertTriangle) as LucideIcon;
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#050505' }}>
      {/* SECTION 1: HERO & EXECUTIVE SUMMARY */}
      <section className="relative pt-32 pb-24 px-8" style={{ position: 'relative' }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left: Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Project Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border" style={{ 
                borderColor: 'rgba(0, 204, 102, 0.3)',
                backgroundColor: 'rgba(0, 204, 102, 0.05)'
              }}>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#00CC66' }} />
                <span className="text-xs font-medium uppercase tracking-wider" style={{ color: '#00CC66' }}>
                  Case Study
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-[0.95] tracking-tight" style={{ color: 'white' }}>
                {activeLanguage === 'en' ? heroHeadline : heroHeadlineDe}
              </h1>

              <p className="text-2xl mb-12 leading-relaxed" style={{ color: '#666666' }}>
                {activeLanguage === 'en' ? heroSubline : heroSublineDe}
              </p>

              {/* Metric Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-block px-8 py-4 rounded-2xl border-2" 
                style={{ 
                  borderColor: '#00CC66',
                  backgroundColor: 'rgba(0, 204, 102, 0.1)'
                }}
              >
                <div className="text-sm uppercase tracking-wider mb-1" style={{ color: '#00CC66' }}>
                  {activeLanguage === 'en' ? timelineLabel : timelineLabelDe}
                </div>
                <div className="text-4xl font-bold" style={{ color: 'white' }}>
                  {timelineMetric}
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Executive Summary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:pt-16"
            >
              <div className="p-8 lg:p-12 rounded-3xl backdrop-blur-xl border" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                borderColor: 'rgba(255, 255, 255, 0.1)'
              }}>
                <h3 className="text-sm uppercase tracking-[0.2em] mb-6 font-medium" style={{ color: '#00CC66' }}>
                  Executive Summary
                </h3>
                <div className="text-lg leading-relaxed space-y-6" style={{ color: '#CCCCCC' }}>
                  {(activeLanguage === 'en' ? executiveSummary : executiveSummaryDe).map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CONTEXT GRID (Customer & Challenge) */}
      <section className="py-24 px-8" style={{ position: 'relative' }}>
        <div className="max-w-[1400px] mx-auto" style={{ position: 'relative' }}>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Column 1: Customer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ position: 'relative' }}
            >
              <div className="mb-12">
                <div className="w-12 h-1 mb-6" style={{ backgroundColor: '#00CC66' }} />
                <h2 className="text-4xl font-bold mb-8" style={{ color: 'white' }}>
                  {activeLanguage === 'en' ? customerHeadline : customerHeadlineDe}
                  <br />
                  {customerName}
                </h2>
              </div>

              <p className="text-xl leading-relaxed mb-12" style={{ color: '#999999' }}>
                {activeLanguage === 'en' ? customerDescription : customerDescriptionDe}
              </p>

              <div className="space-y-8">
                {customerHighlights.map((highlight, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#00CC66' }} />
                    <div>
                      <div className="text-lg font-semibold mb-2" style={{ color: 'white' }}>
                        {activeLanguage === 'en' ? highlight.title : highlight.titleDe}
                      </div>
                      <p className="text-base leading-relaxed" style={{ color: '#777777' }}>
                        {activeLanguage === 'en' ? highlight.description : highlight.descriptionDe}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Column 2: Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ position: 'relative' }}
            >
              <div className="mb-12">
                <div className="w-12 h-1 mb-6" style={{ backgroundColor: '#FF4444' }} />
                <h2 className="text-4xl font-bold mb-8" style={{ color: 'white' }}>
                  {activeLanguage === 'en' ? challengeHeadline : challengeHeadlineDe}
                </h2>
              </div>

              <p className="text-xl leading-relaxed mb-12" style={{ color: '#999999' }}>
                {activeLanguage === 'en' ? challengeIntro : challengeIntroDe}
              </p>

              <div className="space-y-6">
                {challengeIssues.map((issue, idx) => {
                  const IssueIcon = getIcon(issue.icon);
                  return (
                    <div key={idx} className="p-6 rounded-2xl border-l-4" style={{ 
                      backgroundColor: 'rgba(255, 68, 68, 0.05)',
                      borderLeftColor: '#FF4444'
                    }}>
                      <div className="flex items-start gap-4">
                        <IssueIcon className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#FF4444' }} />
                        <div>
                          <div className="text-lg font-semibold mb-2" style={{ color: 'white' }}>
                            {activeLanguage === 'en' ? issue.title : issue.titleDe}
                          </div>
                          <p className="text-base leading-relaxed" style={{ color: '#AAAAAA' }}>
                            {activeLanguage === 'en' ? issue.description : issue.descriptionDe}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SOLUTION */}
      <section className="py-24 px-8 relative" style={{ position: 'relative' }}>
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
            style={{ position: 'relative' }}
          >
            <div className="inline-block mb-6">
              <div className="w-16 h-1 mx-auto" style={{ backgroundColor: '#00CC66' }} />
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-8" style={{ color: 'white' }}>
              {activeLanguage === 'en' ? solutionHeadline : solutionHeadlineDe}
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#999999' }}>
              {activeLanguage === 'en' ? solutionIntro : solutionIntroDe}
            </p>
          </motion.div>

          <div className="space-y-6">
            {techStacks.map((tech, idx) => {
              const TechIcon = getIcon(tech.icon);
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group p-8 rounded-3xl backdrop-blur-xl border hover:border-[#00CC66]/50 transition-all duration-500"
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    position: 'relative'
                  }}
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center" style={{ 
                      backgroundColor: 'rgba(0, 204, 102, 0.1)',
                      border: '2px solid rgba(0, 204, 102, 0.3)'
                    }}>
                      <TechIcon className="w-8 h-8" style={{ color: '#00CC66' }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl font-bold" style={{ color: 'white' }}>
                          {tech.name}
                        </h3>
                        <span className="px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider" style={{ 
                          backgroundColor: 'rgba(0, 204, 102, 0.2)',
                          color: '#00CC66'
                        }}>
                          {activeLanguage === 'en' ? tech.category : tech.categoryDe}
                        </span>
                      </div>
                      <p className="text-lg leading-relaxed" style={{ color: '#AAAAAA' }}>
                        {activeLanguage === 'en' ? tech.description : tech.descriptionDe}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: RESULTS */}
      <section className="py-24 px-8 relative" style={{ position: 'relative' }}>
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
            style={{ position: 'relative' }}
          >
            <div className="inline-block mb-6">
              <div className="w-16 h-1 mx-auto" style={{ backgroundColor: '#00CC66' }} />
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold" style={{ color: 'white' }}>
              {activeLanguage === 'en' ? resultsHeadline : resultsHeadlineDe}
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {resultsPillars.map((pillar, idx) => {
              const PillarIcon = getIcon(pillar.icon);
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  style={{ position: 'relative' }}
                >
                  <div className="h-full p-8 rounded-3xl border" style={{ 
                    backgroundColor: 'rgba(0, 204, 102, 0.03)',
                    borderColor: 'rgba(0, 204, 102, 0.2)'
                  }}>
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style={{ 
                      backgroundColor: 'rgba(0, 204, 102, 0.2)'
                    }}>
                      <PillarIcon className="w-6 h-6" style={{ color: '#00CC66' }} />
                    </div>
                    <h3 className="text-2xl font-bold mb-6" style={{ color: 'white' }}>
                      {activeLanguage === 'en' ? pillar.title : pillar.titleDe}
                    </h3>
                    <ul className="space-y-4">
                      {pillar.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex gap-3">
                          <span className="text-2xl" style={{ color: '#00CC66' }}>•</span>
                          <span className="text-base leading-relaxed" style={{ color: '#CCCCCC' }}>
                            {activeLanguage === 'en' ? item.text : item.textDe}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: TESTIMONIAL */}
      <section className="py-32 px-8 relative" style={{ position: 'relative' }}>
        <div className="max-w-[900px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative' }}
          >
            <div className="mb-8">
              <svg className="w-16 h-16 mx-auto" style={{ color: '#00CC66', opacity: 0.3 }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>
            </div>

            <blockquote className="text-2xl lg:text-4xl font-light leading-relaxed mb-12 italic" style={{ color: 'white' }}>
              "{activeLanguage === 'en' ? testimonialQuote : testimonialQuoteDe}"
            </blockquote>

            <div className="flex items-center justify-center gap-4">
              <div className="w-1 h-12" style={{ backgroundColor: '#00CC66' }} />
              <div className="text-left">
                <div className="text-xl font-semibold mb-1" style={{ color: 'white' }}>
                  {testimonialAuthor}
                </div>
                <div className="text-base" style={{ color: '#00CC66' }}>
                  {activeLanguage === 'en' ? testimonialRole : testimonialRoleDe}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: CTA */}
      <section className="py-24 px-8 relative" style={{ position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-[1200px] mx-auto p-16 rounded-3xl text-center border-2"
          style={{ 
            backgroundColor: 'rgba(0, 204, 102, 0.05)',
            borderColor: '#00CC66',
            position: 'relative'
          }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-8" style={{ color: 'white' }}>
            {activeLanguage === 'en' ? ctaHeadline : ctaHeadlineDe}
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed" style={{ color: '#AAAAAA' }}>
            {activeLanguage === 'en' ? ctaDescription : ctaDescriptionDe}
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(0, 204, 102, 0.6)' }}
            whileTap={{ scale: 0.98 }}
            className="group px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 mx-auto transition-all relative overflow-hidden"
            style={{
              backgroundColor: '#00CC66',
              color: '#050505',
              position: 'relative',
              boxShadow: '0 0 0px rgba(0, 204, 102, 0)'
            }}
          >
            <span className="relative z-10">{activeLanguage === 'en' ? ctaButtonText : ctaButtonTextDe}</span>
            <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#00ff88] to-[#00CC66]"
              style={{ position: 'absolute' }}
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </section>

      {/* Bottom Padding */}
      <div className="h-24" />
    </div>
  );
}
