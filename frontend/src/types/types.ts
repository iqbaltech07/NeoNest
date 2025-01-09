interface IMenuItems {
  label: string;
  href: string;
  isActive: boolean;
}

interface IStatistic {
  id: number;
  label: string;
  value: number | string;
}

interface IBenefit {
  id: number;
  image: string;
  label: string;
  description: string;
}

interface IService {
  id: number;
  image: string;
  label: string;
  link: string;
}

interface ICardService {
  src: string;
  title: string;
  link: string;
}

interface ITestimonial {
  id: number;
  text: string;
  name: string;
  image: string;
}

interface ICardTestimoni {
  src: string;
  name: string;
  text: string;
}
