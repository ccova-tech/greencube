'use client'

import { useState, useEffect } from 'react'
import { Button } from 'antd'

function AccionesSolicitar({dataPuntos}) {
  const [solicitar, setSolicitar] = useState(false)
  const [data, setData] = useState([])

  useEffect(()=>{
    (async function(){
      const newData = await dataPuntos
      setData(newData)
    })()
  },[dataPuntos])

  const handleCancel = () => {
    setSolicitar(false)
  }

  const handleClick = (item) => {
    console.log(item)
  }

  return (
    <aside>
      {
        !solicitar ? (
          <Button type='primary' ghost size='large' className='w-full font-bold' onClick={ () => setSolicitar(true) } >
            Solicitar Recolección
          </Button>
        ) : (
          <Button type='primary' ghost size='large' className='w-full font-bold' onClick={ handleCancel } >
            Cancelar
          </Button>
        )
      }
      {
        solicitar && (
          data.map( item => (
            <div key={item.id} className='mt-8 bg-primary rounded-md p-4 flex flex-col items-center select-none' >
              <div className='flex flex-col'>
                <h3 className='font-bold text-secondary uppercase truncate text-center'>{item.puntoRecoleccion} - {item.nombre}</h3>
                <p className='text-bgcolor truncate text-center'>{item.direccionComuna}. {item.direccionCalle}. {item.direccionNumero}</p>
              </div>
              <div 
                className='bg-primary-dark py-2 px-4 mt-4 rounded-md cursor-pointer active:bg-primary-light transition-all' 
                onClick={ () => handleClick(item)}
              > 
                Solicitar Recolección
              </div>
            </div>
          ))
        )
      }
    </aside>
  )
}

export default AccionesSolicitar