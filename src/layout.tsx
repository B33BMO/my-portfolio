import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'My Portfolio',
  description: 'Built with Next.js + TailwindCSS',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
