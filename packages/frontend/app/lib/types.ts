import type { StaticImageData } from 'next/image';

export interface PageProps {
  params: Promise<{
    locale: string;
  }>;
}

export type Project = {
  href: string;
  title: string;
  date: string;
  imageSrc: StaticImageData;
  logos: string[];
};
