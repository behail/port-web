interface Education {
  id: string;
  name: string;
  institution: string;
  type: "Degree" | "Masters" | "Certificate" | "Diploma";
  file: string;
  startTime?: Date;
  endDate?: Date;
  gpa?: number;
  maxPoint?: number;
  hour?: number;
}
export enum StudyLevel {
  DEGREE,
  MASTERS,
  CERTIFICATE,
  DIPLOMA,
}
export default Education;
