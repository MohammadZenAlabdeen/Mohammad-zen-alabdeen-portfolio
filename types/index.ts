export interface Experience {
  id: string;
  title: string;
  titleAr: string;
  company: string;
  companyAr: string;
  period: string;
  periodAr: string;
  description: string;
  descriptionAr: string;
  tech: string[];
}

export interface Project {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  tech: string;
}

export interface Skill {
  id: string;
  title: string;
  titleAr: string;
  skills: string[];
}

export interface ContactInfo {
  id: string;
  icon: string;
  label: string;
  labelAr: string;
  value: string;
  valueAr?: string;
  link: string;
}

export type Language = 'en' | 'ar';

export interface JobTitle {
  en: string;
  ar: string;
}
