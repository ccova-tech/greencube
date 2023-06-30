'use client'

import { useContext, useEffect } from 'react'
import Link from 'next/link'
import { MenuContext } from './layout';
import { ApiOutlined, EnvironmentOutlined, SmileOutlined, SyncOutlined } from '@ant-design/icons'

export default function App() {
  const setItemMenu = useContext(MenuContext)

  return (
    <div className='sm:h-full flex flex-wrap justify-center items-center gap-10 sm:bg-primary'>

      <Link href='/app/greenpoints' key='mispuntos' onClick={() => setItemMenu('mispuntos')}>
        <div className='group w-64 h-80 hover:shadow-card transition-all cursor-pointer bg-secondary rounded-lg overflow-hidden border border-solid border-secondary'>
          <div className='h-2/3 flex flex-col justify-center items-center'>
            <SmileOutlined className='text-7xl text-destacado group-hover:text-primary'/>
            <h2 className='font-bold text-lg text-destacado group-hover:text-primary mt-4'>GreenPoints</h2>
          </div>
          <div className='h-1/3 bg-destacado group-hover:bg-primary flex justify-center items-center p-4'>
            <p className='text-center text-secondary text-base font'>Acumula GreenPoints e intercámbialos por beneficios.</p>
          </div>
        </div>
      </Link>
      
      <Link href='/app/reciclaje' key='registro' onClick={() => setItemMenu('registro')}>
        <div className='group w-64 h-80 hover:shadow-card transition-all cursor-pointer bg-secondary rounded-lg overflow-hidden border border-solid border-secondary'>
          <div className='h-2/3 flex flex-col justify-center items-center'>
            <ApiOutlined className='text-7xl text-destacado group-hover:text-primary'/>
            <h2 className='font-bold text-lg text-destacado group-hover:text-primary mt-4'>Reciclaje</h2>
          </div>
          <div className='h-1/3 bg-destacado group-hover:bg-primary flex justify-center items-center p-4'>
            <p className='text-center text-secondary text-base font'>Registra tus GreenCube, negocios o sucursales y solicita la recolección de tus residuos.</p>
          </div>
        </div>
      </Link>

      <Link href='/app/beneficios' key='recoleccion' onClick={() => setItemMenu('recoleccion')}>
        <div className='group w-64 h-80 hover:shadow-card transition-all cursor-pointer bg-secondary rounded-lg overflow-hidden border border-solid border-secondary'>
          <div className='h-2/3 flex flex-col justify-center items-center'>
            <EnvironmentOutlined className='text-7xl text-destacado group-hover:text-primary'/>
            <h2 className='font-bold text-lg text-destacado group-hover:text-primary mt-4'>Beneficios</h2>
          </div>
          <div className='h-1/3 bg-destacado group-hover:bg-primary flex justify-center items-center p-4'>
            <p className='text-center text-secondary text-base font'>Sistema de recompensa por tus residuos y por ayudar a cuidar el planeta.</p>
          </div>
        </div>
      </Link>

      <Link href='/app/aportealplaneta' key='reciclaje' onClick={() => setItemMenu('reciclaje')}>
        <div className='group w-64 h-80 hover:shadow-card transition-all cursor-pointer bg-secondary rounded-lg overflow-hidden border border-solid border-secondary'>
          <div className='h-2/3 flex flex-col justify-center items-center'>
            <SyncOutlined className='text-7xl text-destacado group-hover:text-primary'/>
            <h2 className='font-bold text-lg text-destacado group-hover:text-primary mt-4'>Aporte al Planeta</h2>
          </div>
          <div className='h-1/3 bg-destacado group-hover:bg-primary flex justify-center items-center p-4'>
            <p className='text-center text-secondary text-base font'>Visualiza cómo estas ayudando al planeta.</p>
          </div>
        </div>
      </Link>
  
    </div>
  )
}