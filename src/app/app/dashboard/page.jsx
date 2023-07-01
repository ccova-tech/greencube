import Image from 'next/image'

export default function Dashboard() {
  return (
    <div className='h-full overflow-y-auto rounded-lg flex flex-col sm:flex-row sm:gap-6 wrap p-6'>
      <div className='rounded-lg bg-bgcolor-surface w-full sm:h-full sm:w-96 p-4 sm:overflow-y-auto'>
        
      </div>
      <div className='rounded-lg bg-bgcolor-surface w-full h-full sm:h-full sm:grow sm:overflow-y-auto p-6'>

        <div className='flex justify-center items-center h-[calc(100vh-50px)]'>
          <Image src='/economiacircular.png' alt='economia circular greencube' width={500} height={500}/>
        </div>
        
        <div className='bg-primary text-secondary my-6 text-xl rounded-md p-6 mb-24'>
          <h2 className='font-semibold'> ADMIN</h2>
          <h5 className='text-primary-dark'>Módulos:</h5>
          <p><span className='pl-10 font-semibold'>1. Dashboard:</span> analíticas globales</p>
          <p><span className='pl-10 font-semibold'>2. Partners:</span> CRUD Partners. Recolección. Beneficios. Transacciones GreenPoints. Aportes</p>
          <p><span className='pl-10 font-semibold'>3. Aliados:</span> CRUD Aliados. Recolección. Beneficios. Transacciones GreenPoints. Aportes</p>
          <p><span className='pl-10 font-semibold'>4. Reciclaje:</span> Listado de solicitudes de recolección. Monitoreo y solicitud recolección. Registra puntos de recolección. Histórico reciclaje global y específico</p>
          <p><span className='pl-10 font-semibold'>5. GreenPoints:</span> CRUD GreenPoints. Intercambia GreenPoints. Listado de Transacciones con  Partners. Listado de Transacciones con Aliados</p>
          <p><span className='pl-10 font-semibold'>6. Beneficios:</span> CRUD Gift Cards, Códigos Promocionales, Bienes por GreenPoints</p>
          <p><span className='pl-10 font-semibold'>7. Aporte al Planeta:</span> Analíticas de aportes Globales</p>
        </div>
        
        <div className='bg-primary text-secondary my-6 text-xl rounded-md p-6 mb-24'>
          <h2 className='font-semibold'> PARTNERS</h2>
          <h5 className='text-primary-dark'>Módulos:</h5>
          <p><span className='pl-10 font-semibold'>1. GreenPoints:</span> Sistema Transaccional. Visualiza sus GreenPoints Acumulados. Intercambia GreenPoints. Listado de Transacciones con Aliados</p>
          <p><span className='pl-10 font-semibold'>2. Reciclaje:</span> CRUD Registra sus puntos de recolección. Solicita recolección. Histórico reciclaje</p>
          <p><span className='pl-10 font-semibold'>3. Beneficios:</span> READ Listado de beneficios con status: Gift Cards. Códigos Promocionales. Bienes por GreenPoints</p>
          <p><span className='pl-10 font-semibold'>4. Aporte al Planeta:</span> Analíticas de su aporte puntual</p>
        </div>
        
        <div className='bg-primary text-secondary my-6 text-xl rounded-md p-6 mb-24'>
          <h2 className='font-semibold'> ALIADOS</h2>
          <h5 className='text-primary-dark'>Módulos:</h5>
          <p><span className='pl-10 font-semibold'>1. GreenPoints:</span> Sistema Transaccional. Visualiza sus GreenPoints Acumulados. Intercambia GreenPoints. Listado de Transacciones con Partners</p>
          <p><span className='pl-10 font-semibold'>2. Reciclaje:</span>CRUD Registra sus puntos de recolección. Solicita recolección. Histórico reciclaje</p>
          <p><span className='pl-10 font-semibold'>3. Beneficios:</span> CRUD Gift Cards, Códigos Promocionales, Bienes por GreenPoints</p>
          <p><span className='pl-10 font-semibold'>4. Aporte al Planeta:</span> Analíticas de su aporte puntual</p>
        </div>

      </div>
    </div>
  )
}
