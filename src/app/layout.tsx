import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import './globals.css';
import { TimeOfDayProvider } from '@/components/providers/TimeOfDayProvider';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sarah Abdul Khader — Software Engineer',
  description:
    'Frontend-focused software engineer building interfaces that feel fast, intentional, and human.',
  openGraph: {
    title: 'Sarah Abdul Khader — Software Engineer',
    description:
      'Frontend-focused software engineer building interfaces that feel fast, intentional, and human.',
    url: 'https://sarahabkh.com',
    siteName: 'Sarah Abdul Khader',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <TimeOfDayProvider>
            {children}
          </TimeOfDayProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
