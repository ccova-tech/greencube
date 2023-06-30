'use client'

import { useEffect } from 'react'
import { usePuntosDispatch } from '@/app/app/registro/(api)/ContextRegistro';

export default function RegistroLayout({children}) {
  const dispatch = usePuntosDispatch()

  useEffect( () => {
    dispatch({
      type: 'getdata'
    })
  }, [])

  return (
    <div className='h-full p-6'>
      {children}
    </div>
  )
}