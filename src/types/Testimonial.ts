interface Social {
  id: string;
  name: string;
  url: string;
}

export interface Testimonial {
  id: string;
  name: string;
  contact: string;
  association:'Colleague' | 'Prevous Colleague' | 'Manager' | 'Prevous Manager';
  testimonial: string;
  avator?: string;
  social?: Social[];
}
