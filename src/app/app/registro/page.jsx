import RegistroForm from './(components)/RegistroForm';
import RegistroData from './(components)/RegistroData';
import ContextRegistro from './(api)/ContextRegistro';

function Registro() {

  return (
    <ContextRegistro>
      <div className='h-full overflow-y-auto rounded-lg flex flex-col sm:flex-row sm:gap-6 wrap'>
        <div className='rounded-lg bg-bgcolor w-full sm:h-full sm:w-96 p-4'>
          <RegistroForm />
        </div>
        <div className='rounded-lg bg-bgcolor w-full sm:h-full sm:grow'>
          <RegistroData />
        </div>
      </div>
    </ContextRegistro>
  )
}

export default Registro