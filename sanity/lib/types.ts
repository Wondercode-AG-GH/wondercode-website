export interface ScopeCard {
  title: string;
  titleDe?: string;
  description?: string;
  descriptionDe?: string;
  icon?: string;
}

export interface TargetAudience {
  text: string;
  textDe?: string;
}

export interface FAQItem {
  question: string;
  questionDe?: string;
  answer?: string;
  answerDe?: string;
}

export interface Service {
  title: string;
  titleDe?: string;
  slug: { current: string };
  heroSubline?: string;
  heroSublineDe?: string;
  definitionText?: string;
  definitionTextDe?: string;
  scopeHeadlineWhite?: string;
  scopeHeadlineAccent?: string;
  scopeHeadlineWhiteDe?: string;
  scopeHeadlineAccentDe?: string;
  timelineHeadlineWhite?: string;
  timelineHeadlineAccent?: string;
  timelineHeadlineWhiteDe?: string;
  timelineHeadlineAccentDe?: string;
  benefitList?: { text: string; textDe?: string }[];
  heroCta?: string;
  heroCtaDe?: string;
  scopeCards?: ScopeCard[];
  targetAudience?: TargetAudience[];
  faqItems?: FAQItem[];
  caseStudyEyebrow?: string;
  caseStudyEyebrowDe?: string;
  caseStudyHeadline?: string;
  caseStudyHeadlineDe?: string;
  caseStudySubline?: string;
  caseStudySublineDe?: string;
  caseStudyProblem?: string;
  caseStudyProblemDe?: string;
  caseStudySolution?: string;
  caseStudySolutionDe?: string;
  caseStudyResult?: string;
  caseStudyResultDe?: string;
  caseStudyQuoteText?: string;
  caseStudyQuoteTextDe?: string;
  caseStudyQuoteAuthor?: string;
  caseStudyQuoteAuthorDe?: string;
}
