'use client'

import { useState } from 'react'
import RegistroForm from './(components)/RegistroForm'
import RegistroData from './(components)/RegistroData'
import { usePuntosRecoleccion } from './(api)/ContextRegistro'

function Registro() {
  const [agregarNuevo, setAgregarNuevo] = useState(false)
  const [updateData, setUpdateData] = useState({})
  const [statusForm, setStatusForm] = useState('create')
  const dataRegistro = usePuntosRecoleccion()

  return (
    <div className='h-full overflow-y-auto rounded-lg flex flex-col sm:flex-row sm:gap-6 wrap'>
      <div className='rounded-lg bg-bgcolor-surface w-full sm:h-full sm:w-96 p-4 sm:overflow-y-auto'>
        <RegistroForm 
          agregarNuevo={agregarNuevo} 
          setAgregarNuevo={setAgregarNuevo} 
          updateData={updateData} 
          statusForm={statusForm} 
          setStatusForm={setStatusForm} 
          key={statusForm === 'update' ? 'update' : 'create'}
        />
      </div>
      <div className='rounded-lg bg-bgcolor-surface w-full h-full sm:h-full sm:grow sm:overflow-y-auto'>
        <RegistroData 
          dataRegistro={dataRegistro} 
          setAgregarNuevo={setAgregarNuevo} 
          setUpdateData={setUpdateData} 
          setStatusForm={setStatusForm} 
        />
      </div>
    </div>
  )
}

export default Registro