'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Tienda', href: '#' },
  { name: 'GreenPoints', href: '#' },
  { name: 'Reciclaje', href: '#' },
  { name: 'Contacto', href: '#' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="h-14 bg-secondary text-onbgcolor flex items-center">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:p-0 lg:px-8 w-full" aria-label="Global">
        <a href="#" className="-m-1.5 p-1.5">
          <span className='font-bold text-primary'>GreenCube</span>
        </a>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 ">
              {item.name}
            </a>
          ))}
          <Link href="/app" className="text-sm font-semibold leading-6 text-primary">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-secondary px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="h-14 flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span>GreenCube</span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-onbgcolor"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 bg-primary-light text-secondary hover:bg-primary"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/app"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 bg-primary-light text-secondary hover:bg-primary"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
