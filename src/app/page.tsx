import Image from 'next/image'
import Link from 'next/link'

import Header from './(site-components)/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <main className='bg-primary h-screen w-full flex flex-col items-center justify-center text-black'>
        <h1 className='text-2xl font-bold'>GreenCube</h1>
      </main>
    </div>
  )
}
