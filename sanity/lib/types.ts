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
  scopeCards?: ScopeCard[];
  targetAudience?: TargetAudience[];
  faqItems?: FAQItem[];
  accentColor?: string;
  seoTitle?: string;
  seoDescription?: string;
}
