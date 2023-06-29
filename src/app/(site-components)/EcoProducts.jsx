import Image from 'next/image'
import React from 'react'

const collections = [
  {
    name: "Perfiles WPC",
    href: '#',
    imageSrc: '/barner5.jpg',
    imageSrc2: '/barner55.jpg',
    imageAlt: 'Perfiles WPC',
  },
  {
    name: "Revestimientos WPC",
    href: '#',
    imageSrc: '/barner3.jpg',
    imageSrc2: '/barner33.jpg',
    imageAlt: 'Revestimientos WPC',
  },
  {
    name: 'Baldosas WPC',
    href: '#',
    imageSrc: '/barner4.jpg',
    imageSrc2: '/barner44.jpg',
    imageAlt: 'Baldosas WPC',
  },
]

export default function EcoProducts() {
  return (
    <div>
      <div className="relative bg-primary mt-48 lg:mt-80">
        {/* Background image and overlap */}
        <div aria-hidden="true" className="absolute inset-0 hidden sm:flex sm:flex-col">
          <div className="relative w-full flex-1 bg-primary">
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src="/maderaygrama.jpg"
                alt=""
                className="h-full w-full object-cover object-center"
                width={2000}
                height={1000}
              />
            </div>
            <div className="absolute inset-0 bg-gray-900 opacity-50" />
          </div>
          <div className="h-32 w-full bg-primary md:h-40 lg:h-48" />
        </div>

        <div className="relative mx-auto max-w-3xl px-4 pb-96 text-center sm:px-6 sm:pb-0 lg:px-8">
          {/* Background image and overlap */}
          <div aria-hidden="true" className="absolute inset-0 flex flex-col sm:hidden">
            <div className="relative w-full flex-1 bg-gray-800">
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="/maderaygrama.jpg"
                  alt=""
                  className="h-full w-full object-cover object-center"
                  width={2000}
                  height={1000}
                />
              </div>
              <div className="absolute inset-0 bg-gray-900 opacity-50" />
            </div>
            <div className="h-48 w-full bg-primary" />
          </div>
          <div className="relative py-32">
            <h1 className="text-4xl font-bold tracking-tight text-onprimary-light sm:text-5xl md:text-7xl">Eco Productos</h1>
            {/* <div className="mt-4 sm:mt-6">
              <a
                href="#"
                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 font-medium text-white hover:bg-indigo-700"
              >
                Shop Collection
              </a>
            </div> */}
          </div>
        </div>

        <section aria-labelledby="collection-heading" className="relative -mt-96 sm:mt-0">
          <h2 id="collection-heading" className="sr-only">
            Collections
          </h2>
          <div className="mx-auto grid max-w-md grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 sm:px-6 lg:gap-x-8 lg:px-8">
            {collections.map((collection) => (
              <div
                key={collection.name}
                className="group relative lg:h-96 rounded-lg shadow-xl sm:aspect-h-5 sm:aspect-w-4 sm:h-auto aspect-h-1 aspect-w-2 overflow-hidden"
              >
                <div>
                  <div aria-hidden="true" className="lg:absolute inset-0 overflow-hidden rounded-lg">
                    <div className="lg:absolute inset-0 overflow-hidden transition-all group">
                      <Image
                        src={collection.imageSrc}
                        alt={collection.imageAlt}
                        className="h-full w-full object-cover object-center group-hover:invisible max-sm:aspect-h-1 max-sm:aspect-w-2 max-sm:overflow-hidden"
                        width={500}
                        height={500}
                      />
                      <Image
                        src={collection.imageSrc2}
                        alt={collection.imageAlt}
                        className="top-0 h-full w-full object-cover object-center absolute invisible group-hover:visible max-sm:aspect-h-1 max-sm:aspect-w-2 max-sm:overflow-hidden"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
                  </div>
                  <div className="absolute inset-0 flex items-end rounded-lg p-6">
                    <div>
                      {/* <p aria-hidden="true" className="text-sm text-white">
                        Shop the collection
                      </p> */}
                      <h3 className="mt-1 font-semibold text-white text-xl">
                        <a href={collection.href}>
                          <span className="absolute inset-0" />
                          {collection.name}
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="bg-primary">
        <div className="mx-auto max-w-7xl px-4 lg:py-16 sm:px-6 sm:py-24 lg:px-8">
          {/* <div className="sm:flex sm:items-baseline sm:justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Shop by Category</h2>
            <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
              Browse all categories
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div> */}

          <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
            <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
              <div className='group'>
                <Image
                  src='/barner2.jpeg'
                  alt='Tablas WPC'
                  className="h-full w-full object-cover object-center group-hover:invisible"
                  width={500}
                  height={500}
                />
                <Image
                  src='/barner22.jpg'
                  alt='Tablas WPC'
                  className="top-0 h-full w-full object-cover object-center absolute invisible group-hover:visible"
                  width={500}
                  height={500}
                />
              </div>
              <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50" />
              <div className="flex items-end p-6">
                <div>
                  <h3 className="font-semibold text-white text-xl">
                    <a href="#">
                      <span className="absolute inset-0" />
                      Tablas WPC
                    </a>
                  </h3>
                  {/* <p aria-hidden="true" className="mt-1 text-sm text-white">
                    Shop now
                  </p> */}
                </div>
              </div>
            </div>
            <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
              <div className='object-cover object-center sm:absolute sm:inset-0 sm:h-full sm:w-full group'>
                <Image
                  src='/aislantes.jpg.webp'
                  alt='Tablas WPC'
                  className="h-full w-full object-cover object-center group-hover:invisible"
                  width={500}
                  height={500}
                />
                <Image
                  src='/aislantes2.webp'
                  alt='Tablas WPC'
                  className="top-0 h-full w-full object-cover object-center absolute invisible group-hover:visible"
                  width={500}
                  height={500}
                />
              </div>
              <div
                aria-hidden="true"
                className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
              />
              <div className="flex items-end p-6 sm:absolute sm:inset-0">
                <div>
                  <h3 className="font-semibold text-white text-xl">
                    <a href="#">
                      <span className="absolute inset-0" />
                      Bio-Aislantes
                    </a>
                  </h3>
                  {/* <p aria-hidden="true" className="mt-1 text-sm text-white">
                    Shop now
                  </p> */}
                </div>
              </div>
            </div>
            <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
              <div className='object-cover object-center sm:absolute sm:inset-0 sm:h-full sm:w-full group'>
                <Image
                  src='/agropelo.jpg'
                  alt='BioAgro'
                  className="h-full w-full object-cover object-bottom group-hover:invisible"
                  width={500}
                  height={500}
                />
                <Image
                  src='/agropelo2.jpeg'
                  alt='BioAgro'
                  className="top-0 h-full w-full object-cover object-top absolute invisible group-hover:visible"
                  width={500}
                  height={500}
                />
              </div>
              <div
                aria-hidden="true"
                className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
              />
              <div className="flex items-end p-6 sm:absolute sm:inset-0">
                <div>
                  <h3 className="font-semibold text-white text-xl">
                    <a href="#">
                      <span className="absolute inset-0" />
                      AgroPelo
                    </a>
                  </h3>
                  {/* <p aria-hidden="true" className="mt-1 text-sm text-white">
                    Shop now
                  </p> */}
                </div>
              </div>
            </div>
          </div>

          {/* <div className="mt-6 sm:hidden">
            <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              Browse all categories
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  )
}