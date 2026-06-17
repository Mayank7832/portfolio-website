import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mayank Chopra | Software Development Engineer',
  description: 'Developer portfolio for Mayank Chopra, Software Development Engineer.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
