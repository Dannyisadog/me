export type Skill = {
  category: string;
  skills: string[];
};

export type Experience = {
  company: string;
  position: string;
  duration: string;
  items: {
    description: string;
  }[];
};
