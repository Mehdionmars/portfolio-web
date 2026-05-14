import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mehdi Moungid — Software Engineer & AI/ML',
  description: 'Professional portfolio of Mehdi Moungid, Software Engineer and AI/ML Enthusiast. Specializing in full-stack development, machine learning, and automation.',
  keywords: ['Mehdi Moungid', 'Software Engineer', 'AI/ML', 'Full Stack Developer', 'Machine Learning', 'React', 'Python'],
  authors: [{ name: 'Mehdi Moungid' }],
  openGraph: {
    title: 'Mehdi Moungid — Software Engineer & AI/ML',
    description: 'Professional portfolio showcasing innovative software solutions and AI/ML projects',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mehdi Moungid — Software Engineer & AI/ML',
    description: 'Professional portfolio showcasing innovative software solutions and AI/ML projects',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
