import type { StaticImageData } from 'next/image';

export interface LocaleParams {
  params: {
    locale: string;
  };
}

export type Project = {
  href: string;
  title: string;
  date: string;
  imageSrc: StaticImageData;
  logos: string[];
};
