export interface Expereince {
  id: string;
  startDate: Date;
  companyName: string;
  position: string;
  rolDescription: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  base: "Remote" | "On-site";
  skills: Skill[];
  project: Project[];
  enddate?: Date;
  currentlyWorking?: boolean;
}

export interface Skill {
  id: string;
  name: string;
  level: number;
}

export interface Project {
  id: string;
  name: string;
  description: string;
}
