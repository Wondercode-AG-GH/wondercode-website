import { client } from '@/sanity/lib/client';
import { allCaseStudiesQuery } from '@/sanity/lib/sanity.queries';

interface CaseStudy {
  _id: string;
  title: string;
  titleDe: string;
  slug: string;
  industry: string;
  challenge?: {
    intro: string;
    introDe: string;
  };
  solution?: {
    intro: string;
    introDe: string;
  };
  galleryMetric: string;
  galleryMetricDe: string;
  galleryMetricLabel: string;
  galleryMetricLabelDe: string;
}

interface FormattedCaseStudy {
  _id: string;
  title: string;
  titleDe: string;
  slug: string;
  industry: string;
  problem: string;
  problemDe: string;
  solution: string;
  solutionDe: string;
  metric: string;
  metricDe: string;
  metricLabel: string;
  metricLabelDe: string;
  color: string;
}

const colorMap: { [key: string]: string } = {
  'Healthcare': '#00CC66',
  'Finance': '#00ff88',
  'Retail': '#00aa55',
  'Manufacturing': '#33dd77',
  'Technology': '#00CC66',
  'Non-profit': '#00ff88',
  'Education': '#00aa55',
};

export async function GET() {
  try {
    const caseStudies = await client.fetch(allCaseStudiesQuery) as CaseStudy[];
    
    const formatted: FormattedCaseStudy[] = caseStudies.map((study) => ({
      _id: study._id,
      title: study.title,
      titleDe: study.titleDe || study.title,
      slug: study.slug,
      industry: study.industry,
      problem: study.challenge?.intro || 'Challenge details',
      problemDe: study.challenge?.introDe || study.challenge?.intro || 'Challenge details',
      solution: study.solution?.intro || 'Solution details',
      solutionDe: study.solution?.introDe || study.solution?.intro || 'Solution details',
      metric: study.galleryMetric || '+100%',
      metricDe: study.galleryMetricDe || study.galleryMetric || '+100%',
      metricLabel: study.galleryMetricLabel || 'Key Result',
      metricLabelDe: study.galleryMetricLabelDe || study.galleryMetricLabel || 'Key Result',
      color: colorMap[study.industry] || '#00CC66',
    }));

    return Response.json(formatted);
  } catch (error) {
    console.error('Failed to fetch case studies:', error);
    return Response.json({ error: 'Failed to fetch case studies' }, { status: 500 });
  }
}
