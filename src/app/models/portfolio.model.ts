export interface ExperienceItem {
  company: string;
  location?: string;
  role: string;
  period: string;
  project?: string;
  technologies: string[];
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export interface SkillGroup {
  label: string;
  skills: string[];
}
