export interface Testimonial {
  id: string;
  name: string;
  contact: string;
  association:"Colleague" | "Prevous Colleague" | "Manager" | "Prevous Manager";
  testimonial: string;
  social?: Social[];
}

interface Social {
  id: string;
  name: string;
  url: string;
}
