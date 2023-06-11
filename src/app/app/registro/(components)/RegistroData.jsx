'use client'

import { useState, useEffect } from 'react'
import { usePuntosDispatch } from '../(api)/ContextRegistro';
import { Button } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

export default function RegistroData({dataRegistro, setAgregarNuevo, setUpdateData, setStatusForm}) {
  const [data, setData] = useState([])
  const dispatch = usePuntosDispatch()

  useEffect(()=>{
    (async function(){
      const newData = await dataRegistro
      setData(newData)
    })()
  },[dataRegistro])

  const handleEdit = (item) => {
    setStatusForm('update')
    setAgregarNuevo(true)
    setUpdateData(item)
  }

  const handleDelete = (item) => {
    dispatch({
      type: 'delete',
      id: item.id,
    })
  }
  
  return (
    <div className='p-4'>
      <h2 className='flex items-center h-10 border-b border-solid border-primary' onClick={()=>console.log(data)}>Mis Puntos de Recolección</h2>
      {
        data ? (
          data.map( item => (
            <div key={item.id} className='mt-8 bg-primary rounded-md h-24 p-4 flex justify-between items-center select-none'>
              <div className='flex items-center'>
                <div className='w-16 h-16 mr-4 bg-primary-dark hidden sm:flex justify-center items-center rounded'></div>
                <div className='flex flex-col'>
                  <h3 className='font-bold text-secondary uppercase'>{item.puntoRecoleccion} - {item.nombre}</h3>
                  <p className='text-bgcolor'>{item.direccionComuna}. {item.direccionCalle}. {item.direccionNumero}</p>
                  <p className='text-bgcolor'>Teléfono: +56 {item.telefono}</p>
                </div>
              </div>
              <div className='flex gap-4'>
                <Button type='primary' size='large' ghost icon={<EditOutlined className='text-bgcolor-surface'/>} onClick={() => handleEdit(item)} />
                <Button type='primary' size='large' ghost icon={<DeleteOutlined className='text-bgcolor-surface'/>} onClick={() => handleDelete(item)} />
              </div>
            </div>
          ))
        ) : null
      }
    </div>
  )
}