interface Social {
  id: string;
  name: string;
  url: string;
}

export interface Testimonial {
  id: string;
  name: string;
  contact: string;
  association:'Colleague' | 'Former Colleague' | 'Manager' | 'Former Manager';
  testimonial: string;
  avator?: string;
  social?: Social[];
}
