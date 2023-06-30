'use client'

import { useEffect } from 'react'
import { usePuntosDispatch } from '@/app/app/reciclaje/(api)/ContextRegistro';

export default function RecoleccionLayout({children}) {
  const dispatch = usePuntosDispatch()

  useEffect( () => {
    dispatch({
      type: 'getdata'
    })
  }, [])

  return (
    <div className='h-full rounded-md p-6'>
      {children}
    </div>
  )
}