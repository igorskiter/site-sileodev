import type { Metadata } from 'next';
import { ReactNode } from 'react';

// These styles apply to every route in the application
// eslint-disable-next-line import/no-unresolved
import './globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
