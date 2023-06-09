'use client'

import { useContext } from 'react'
import Link from 'next/link'
import { MenuContext } from './layout';
import { ApiOutlined, EnvironmentOutlined, SmileOutlined, SyncOutlined } from '@ant-design/icons'

export default function App() {
  const setItemMenu = useContext(MenuContext)

  return (
    <div className='sm:h-full flex flex-wrap justify-center items-center gap-10 sm:bg-primary rounded-xl'>

      <Link href='/app/registro' key='registro' onClick={() => setItemMenu('registro')}>
        <div className='group w-64 h-80 hover:shadow-card transition-all cursor-pointer bg-secondary rounded-xl overflow-hidden'>
          <div className='h-2/3 flex flex-col justify-center items-center'>
            <ApiOutlined className='text-7xl text-destacado group-hover:text-primary'/>
            <h2 className='font-bold text-lg text-destacado group-hover:text-primary mt-4'>Registro</h2>
          </div>
          <div className='h-1/3 bg-destacado group-hover:bg-primary flex justify-center items-center p-4'>
            <p className='text-center text-secondary text-base font'>Registra tus GreenCube, negocios o sucursales</p>
          </div>
        </div>
      </Link>

      <Link href='/app/recoleccion' key='recoleccion' onClick={() => setItemMenu('recoleccion')}>
        <div className='group w-64 h-80 hover:shadow-card transition-all cursor-pointer bg-secondary rounded-xl overflow-hidden'>
          <div className='h-2/3 flex flex-col justify-center items-center'>
            <EnvironmentOutlined className='text-7xl text-destacado group-hover:text-primary'/>
            <h2 className='font-bold text-lg text-destacado group-hover:text-primary mt-4'>Recolección</h2>
          </div>
          <div className='h-1/3 bg-destacado group-hover:bg-primary flex justify-center items-center p-4'>
            <p className='text-center text-secondary text-base font'>Solicita la recolección de tus residuos</p>
          </div>
        </div>
      </Link>

      <Link href='/app/mispuntos' key='mispuntos' onClick={() => setItemMenu('mispuntos')}>
        <div className='group w-64 h-80 hover:shadow-card transition-all cursor-pointer bg-secondary rounded-xl overflow-hidden'>
          <div className='h-2/3 flex flex-col justify-center items-center'>
            <SmileOutlined className='text-7xl text-destacado group-hover:text-primary'/>
            <h2 className='font-bold text-lg text-destacado group-hover:text-primary mt-4'>Mis Puntos</h2>
          </div>
          <div className='h-1/3 bg-destacado group-hover:bg-primary flex justify-center items-center p-4'>
            <p className='text-center text-secondary text-base font'>Recompensas por tu aporte y donaciones</p>
          </div>
        </div>
      </Link>

      <Link href='/app/reciclaje' key='reciclaje' onClick={() => setItemMenu('reciclaje')}>
        <div className='group w-64 h-80 hover:shadow-card transition-all cursor-pointer bg-secondary rounded-xl overflow-hidden'>
          <div className='h-2/3 flex flex-col justify-center items-center'>
            <SyncOutlined className='text-7xl text-destacado group-hover:text-primary'/>
            <h2 className='font-bold text-lg text-destacado group-hover:text-primary mt-4'>Reciclaje</h2>
          </div>
          <div className='h-1/3 bg-destacado group-hover:bg-primary flex justify-center items-center p-4'>
            <p className='text-center text-secondary text-base font'>Visualiza cómo estas ayudando al planeta</p>
          </div>
        </div>
      </Link>
  
    </div>
  )
}