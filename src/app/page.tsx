import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='bg-primary h-screen w-full flex flex-col items-center justify-center text-black'>
      <h1 className='text-2xl font-bold'>GreenCube</h1>
      <div>
        <Link href='/app' className='cursor-pointer mt-4'>click</Link>
      </div>
    </main>
  )
}
