export type PortfolioData = {
  profile: {
    name: string;
    title: string;
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    resume: string;
    tagline: string;
    bio: string;
  };
  experience: Array<{
    company: string;
    role: string;
    location: string;
    period: string;
    summary: string;
    highlights: string[];
    stack: string[];
  }>;
  education: Array<{
    school: string;
    degree: string;
    period: string;
    detail: string;
  }>;
  projects: Array<{
    name: string;
    type: string;
    summary: string;
    stack: string[];
  }>;
  skills: Record<string, string[]>;
};
