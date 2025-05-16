export interface IMenuItems {
  label: string;
  href: string;
  section: string;
}
export interface IStatistic {
  id: number;
  label: string;
  value: number | string;
}
export interface IBenefit {
  id: number;
  image: string;
  label: string;
  description: string;
}

export interface IService {
  id: number;
  image: string;
  label: string;
  link: string;
}

export interface ITestimonial {
  id: number;
  text: string;
  name: string;
  image: string;
}
export interface ICount {
  data?: {
    id: number;
    label: string;
    value: number | string;
  }[];
}

export interface ICardTestimoni {
  src: string;
  name: string;
  text: string;
}

export interface ICardService {
  src: string;
  title: string;
  link: string;
}
interface IDataNeoBoostService {
  id: number;
  name: string;
  count: number;
  isPromo: boolean;
  price: number;
}

export interface IDataNeoBoostCategory {
  id: number;
  category: string;
  services: IDataNeoBoostService[];
}

