import type { StaticImageData } from 'next/image';

export type LocaleParams = {
  params: {
    locale: string;
  };
};

export interface Project {
  href: string;
  title: string;
  date: string;
  imageSrc: StaticImageData;
  logos: string[];
}
