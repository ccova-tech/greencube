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
  title: 'GreenCube',
  description: 'Tecnología para ayudar al planeta',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-primary text-onbgcolor`}>
        <RootStyleRegistry>
          {children}
        </RootStyleRegistry>
      </body>
    </html>
  )
}
