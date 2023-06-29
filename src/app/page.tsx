import Image from 'next/image'
import Link from 'next/link'

import Header from './(site-components)/Header'
import Hero from './(site-components)/Hero'
import AppMobile from './(site-components)/AppMobile'
import EcoProducts from './(site-components)/EcoProducts'

export default function Home() {
  return (
    <div className='flex flex-col'>
      <Header />
      <Hero />
      <AppMobile />
      <EcoProducts />
      {/* <main className='bg-primary h-screen w-full flex flex-col items-center justify-center text-black'>
        <h1 className='text-2xl font-bold'>GreenCube</h1>
      </main> */}
      <div className='h-14 bg-secondary text-secondary'>.</div>
    </div>
  )
}
