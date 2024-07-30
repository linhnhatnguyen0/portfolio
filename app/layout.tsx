import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nhat Linh NGUYEN',
  description: 'This is my personal website.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
