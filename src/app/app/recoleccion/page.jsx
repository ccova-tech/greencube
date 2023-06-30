'use client'

import { usePuntosRecoleccion } from '../registro/(api)/ContextRegistro'
import AccionesSolicitar from './(components)/AccionesSolicitar';
import Map from './(components)/Map';

function Recoleccion() {
  const dataPuntos = usePuntosRecoleccion()

  return (
    <div className='h-full overflow-y-auto rounded-lg flex flex-col sm:flex-row sm:gap-6 wrap'>
      <div className='rounded-lg bg-bgcolor-surface w-full sm:h-full sm:w-96 p-4 sm:overflow-y-auto'>
        <AccionesSolicitar dataPuntos={dataPuntos}/>
      </div>
      <div className='rounded-lg bg-bgcolor-surface w-full sm:h-full sm:grow sm:overflow-y-auto p-4'>
        <Map address='Tobalaba 1499, 7510330 Providencia, Región Metropolitana' className='h-full' />
      </div>
    </div> 
  )
}

export default Recoleccion