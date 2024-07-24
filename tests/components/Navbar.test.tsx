import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import Navbar from '@/app/components/Navbar/Navbar';
import { navLinks } from '@/app/components/Navbar/navLinks';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {
      language: 'en',
    },
  }),
}));

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    refresh: vi.fn(),
  }),
  usePathname: vi.fn(() => '/'),
}));

describe('Navbar', () => {
  test('navLinks is not empty', () => {
    expect(navLinks.length).toBeGreaterThan(0);
  });

  test('renders navigation links', () => {
    render(<Navbar />);

    navLinks.forEach((link) => {
      const navLink = screen.getByText(`navbar:${link.name}`);
      expect(navLink).toBeInTheDocument();
    });
  });
});
