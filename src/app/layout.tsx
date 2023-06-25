// import './app/(utils)/configureAmplifySSR'
import { RootStyleRegistry } from './app/(components)/RootStyleRegistry'
import './app/(styles)/globals.css'
import { Roboto } from 'next/font/google'
// import { Amplify } from 'aws-amplify'
// import myAppConfig from './app/(utils)/amplifyConfigure'
// Amplify.configure(myAppConfig)

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: 'GreenCube',
  description: 'Tecnologías para ayudar al planeta',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-primary text-onbgcolor`}>
        {/* <RootStyleRegistry> */}
          {children}
        {/* </RootStyleRegistry> */}
      </body>
    </html>
  )
}

