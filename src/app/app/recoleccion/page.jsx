'use client'

import { usePuntosRecoleccion } from '../registro/(api)/ContextRegistro'
import AccionesSolicitar from './(components)/AccionesSolicitar';

function Recoleccion() {
  const dataPuntos = usePuntosRecoleccion()

  return (
    <div className='h-full overflow-y-auto rounded-lg flex flex-col sm:flex-row sm:gap-6 wrap'>
      <div className='rounded-lg bg-bgcolor w-full sm:h-full sm:w-96 p-4 sm:overflow-y-auto'>
        <AccionesSolicitar dataPuntos={dataPuntos}/>
      </div>
      <div className='rounded-lg bg-bgcolor w-full sm:h-full sm:grow sm:overflow-y-auto p-4'>
        mapa
      </div>
    </div> 
  )
}

export default Recoleccion