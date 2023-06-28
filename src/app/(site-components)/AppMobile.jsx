'use client'

import { Fragment } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'

const tabs = [
  {
    name: 'Recicla',
    features: [
      {
        name: 'Recicla',
        description:
          'No botes tus residuos de cabello, plástico y/o café. Conviértelos en materia prima para fabricar productos de alta calidad.',
        imageSrc: '/greencube5.svg',
        imageAlt: 'Recicla',
      },
    ],
  },
  {
    name: 'Gana Puntos',
    features: [
      {
        name: 'Gana Puntos',
        description:
          'Entrega tus residuos a través de nuestra app y gana GreenPoints que podrás intercambiar por beneficios con nuestros aliados.',
        imageSrc: '/greencube2.svg',
        imageAlt:
          'Gana Puntos',
      },
    ],
  },
  {
    name: 'Obtén Beneficios',
    features: [
      {
        name: 'Obtén Beneficios',
        description:
          "Acumula GreenPoints y cambialos por beneficios, descuentos y ofertas en las tiendas de nuestros aliados.",
        imageSrc: '/greencube6.svg',
        imageAlt: 'Obtén Beneficios',
      },
    ],
  },
  {
    name: 'Salva al Planeta',
    features: [
      {
        name: "Salva al Planeta",
        description:
          'Deja menos huella. Al descargar y utilizar nuestra App contribuyes a reducir los efectos causados por la contaminación y el cambio climático.',
        imageSrc: '/greencube4.svg',
        imageAlt: 'Salva al Planeta',
      },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function AppMobile() {
  return (
    <div className="bg-primary">
      <div aria-hidden="true" className="relative flex justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-primary" />
        <Image
          src="/greencube0.svg"
          alt=""
          className=" lg:h-[90vh] w-full object-cover object-top"
          width={100}
          height={50}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary" />
      </div>

      <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
          <h2 className="font-bold tracking-tight text-onprimary-light text-4xl lg:text-7xl">Descarga nuestra App</h2>
          <p className="mt-4 text-secondary text-xl lg:text-3xl font-semibold">
            Conviértete en GreenPartner y contribuye a cuidar el planeta
          </p>
        </div>
      </div>

      <div className="bg-primary">
        <section aria-labelledby="features-heading" className="mx-auto max-w-7xl sm:px-2 lg:px-8">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
            <div className="max-w-3xl">
              <h2 id="features-heading" className="text-xl text-center lg:text-left font-bold tracking-tight text-secondary sm:text-5xl">
                Intercambia residuos por beneficios
              </h2>
              {/* <p className="mt-4 text-secondary text-xl">
                The Organize modular system offers endless options for arranging your favorite and most used items. Keep
                everything at reach and in its place, while dressing up your workspace.
              </p> */}
            </div>

            <Tab.Group as="div" className="mt-4">
              <div className="-mx-4 flex overflow-x-auto sm:mx-0">
                <div className="flex-auto border-b border-gray-200 px-4 sm:px-0">
                  <Tab.List className="-mb-px flex space-x-10">
                    {tabs.map((tab) => (
                      <Tab
                        key={tab.name}
                        className={({ selected }) =>
                          classNames(
                            selected
                              ? 'border-secondary text-onbgcolor'
                              : 'border-transparent text-secondary hover:border-bgcolor hover:text-bgcolor',
                            'whitespace-nowrap border-b-2 py-6 text-lg lg:text-xl font-semibold'
                          )
                        }
                      >
                        {tab.name}
                      </Tab>
                    ))}
                  </Tab.List>
                </div>
              </div>

              <Tab.Panels as={Fragment}>
                {tabs.map((tab) => (
                  <Tab.Panel key={tab.name} className="space-y-16 pt-10 lg:pt-16">
                    {tab.features.map((feature) => (
                      <div key={feature.name} className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
                        <div className="mt-6 lg:col-span-5 lg:mt-0">
                          <h3 className="text-2xl font-semibold text-bgcolor text-center lg:text-left">{feature.name}</h3>
                          <p className="mt-2 text-xl text-secondary text-center lg:text-left">{feature.description}</p>
                        </div>
                        <div className="lg:col-span-7">
                          <div className="aspect-h-1 aspect-w-2 overflow-hidden rounded-lg bg-primary sm:aspect-h-2 sm:aspect-w-3">
                            <Image src={feature.imageSrc} alt={feature.imageAlt} className="object-cover object-center" width={100} height={100}/>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>
        </section>
      </div>
    </div>
  )
}