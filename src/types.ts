export type Skill = {
  category: string;
  skills: string[];
};

export type Experience = {
  company: string;
  website: string;
  position: string;
  duration: string;
  items: {
    description: string;
  }[];
};
