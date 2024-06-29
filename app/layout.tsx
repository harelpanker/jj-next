import type { Metadata } from 'next';
import { Alef } from 'next/font/google';
import './globals.css';

const alef = Alef({ subsets: ['hebrew', 'latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'אוסטריה עם יעקב',
  description:
    'טיולי יום מאורגנים באוסטריה, פראג ובראטיסלבה | איסוף משדה התעופה',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='he' dir='rtl' className='scroll-smooth'>
      <body className={alef.className}>
        <div className='style_wrap font-alef bg-theme-white'>
          <div className='flex flex-1 flex-col'>
            {/* <!-- Header --> */}
            <main className='relative z-10 flex-1'>{children}</main>
          </div>
          {/* <!-- <Footer /> --> */}
        </div>
      </body>
    </html>
  );
}
