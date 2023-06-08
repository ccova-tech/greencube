import { RootStyleRegistry } from './app/(components)/RootStyleRegistry';

import './app/(styles)/globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: 'EcoBuild',
  description: 'EcoApp',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-bgcolor text-onbgcolor`}>
        <RootStyleRegistry>
          {children}
        </RootStyleRegistry>
      </body>
    </html>
  )
}
