import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'My Portfolio',
  description: 'Built with Next.js + TailwindCSS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {children}
      </body>
    </html>
  );
}
