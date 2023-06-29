import Image from "next/image";

export default function Hero(){
  return (
    <div className='h-[100vh] flex justify-center'>
      <div className='max-w-7xl w-full lg:w-[1280px] flex lg:flex-row flex-col lg:h-full flex-wrap'>
        <div className='p-8 lg:p-0 lg:w-1/2 h-1/2 lg:h-full flex flex-col justify-center text-secondary font-semibold text-center lg:text-left'>
          <h2 className='text-lg lg:text-xl lg:ml-2 mb-2 text-primary-dark'>Proyecto de Economía Circular</h2>
          <h1 className='text-6xl lg:text-8xl'>GreenCube</h1>
          <h3 className='text-xl lg:text-2xl mt-10 lg:mt-24 lg:ml-2 text-bgcolor'>Transformamos residuos de Cabello, Plástico y Café.</h3>
          <h3 className='text-xl lg:text-2xl mt-4 lg:ml-2'>Fabricamos productos de alta calidad para los sectores agrícola y construcción.</h3>
        </div>
        <div className='lg:w-1/2 h-1/2 lg:h-full flex justify-center items-center'>
          <Image src='/herologomin.png' alt='earth greencube' width={600} height={600} className='h-[400px] lg:h-[600px] w-[400px] lg:w-[600px]'/>
        </div>
      </div>
    </div>
  )
}