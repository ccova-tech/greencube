'use client'

import { usePuntosRecoleccion } from '../(api)/ContextRegistro'

export default function RegistroData() {
  const data = usePuntosRecoleccion()
  return (
    <div onClick={()=>console.log(data)}>RegistroData</div>
  )
}