'use client'

import { usePuntosDispatch } from '../(api)/ContextRegistro'
import { Button, Form, Input, Select } from 'antd'

export default function RegistroForm({ agregarNuevo, setAgregarNuevo, updateData, statusForm, setStatusForm }) {
  const [form] = Form.useForm()
  const dispatch = usePuntosDispatch()  

  const handleCancel = () => {
    setAgregarNuevo(false)
    form.resetFields() 
    setStatusForm('create')
  }

  const onFinishFailed = (errorInfo) => {
    console.log('error submit carga de datos:', errorInfo)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const onFinish = (values) => {
    if( statusForm === 'create'){
      dispatch({
        type: 'create',
        payload: {...values}
      })
    } else if ( statusForm === 'update'){
      dispatch({
        type: 'update',
        id: updateData.id,
        payload: {...values}
      })
    }
    form.resetFields()
    setAgregarNuevo(false)
    setStatusForm('create')
  }
  
  return (
    <aside>
      {
        !agregarNuevo ? (
          <Button type='primary' ghost size='large' className='w-full font-bold' onClick={ () => setAgregarNuevo(true) } >
            Agregar Nuevo
          </Button>
        ) : (
          <Button type='primary' ghost size='large' className='w-full font-bold' onClick={ handleCancel } >
            Cancelar
          </Button>
        )
      }
      {
        agregarNuevo && (
          <Form
            name='registroForm'
            form={form}
            layout='vertical'
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            onSubmit={handleSubmit}
            autoComplete="off"
            className='mt-8'
          >
            <Form.Item
              label="Nuevo Punto de Recolección"
              name="puntoRecoleccion"
              initialValue={statusForm === "update" ? updateData.puntoRecoleccion : ""}
              rules={[
                {
                  required: true,
                  message: 'Por Favor seleccione un tipo',
                },
              ]}
            >
              <Select
                size='large'
                options={[
                  {
                    value: 'greencube',
                    label: 'GreenCube',
                  },
                  {
                    value: 'negocio',
                    label: 'Negocio',
                  },
                  {
                    value: 'sucursal',
                    label: 'Sucursal',
                  },
                ]}
                className='focus:ring-primary focus:border-primary'
              />
            </Form.Item>

            <Form.Item
              label="Nombre del Punto"
              name="nombre"
              initialValue={statusForm === "update" ? updateData.nombre : ""}
              rules={[
                {
                  required: true,
                  message: 'Por favor introduzca un nombre descriptivo',
                },
              ]}
            >
              <Input className='focus:ring-primary focus:border-primary' />
            </Form.Item>

            <Form.Item
              label="Dirección - Comuna"
              name="direccionComuna"
              initialValue={statusForm === "update" ? updateData.direccionComuna : ""}
              rules={[
                {
                  required: true,
                  message: 'Por favor introduzca una comuna',
                },
              ]}
            >
              <Input className='focus:ring-primary focus:border-primary' />
            </Form.Item>

            <Form.Item
              label="Dirección - Calle"
              name="direccionCalle"
              initialValue={statusForm === "update" ? updateData.direccionCalle : ""}
              rules={[
                {
                  required: true,
                  message: 'Por favor introduzca una dirección',
                },
              ]}
            >
              <Input className='focus:ring-primary focus:border-primary' />
            </Form.Item>

            <Form.Item
              label="Dirección - Número"
              name="direccionNumero"
              initialValue={statusForm === "update" ? updateData.direccionNumero : ""}
              rules={[
                {
                  required: true,
                  message: 'Por favor introduzca un número de calle',
                },
              ]}
            >
              <Input className='focus:ring-primary focus:border-primary' />
            </Form.Item>

            <Form.Item
              label="Teléfono"
              name="telefono"
              initialValue={statusForm === "update" ? updateData.telefono : ""}
              rules={[
                {
                  required: true,
                  message: 'Por favor introduzca un teléfono válido',
                },
              ]}
            >
              <Input addonBefore='+56' placeholder='900001111' type='tel' className='focus:ring-primary focus:border-primary' />
            </Form.Item>

            <Form.Item>
              <Button type="primary" ghost size='large' className='w-full font-bold' htmlType="submit">
                { statusForm === 'update' ? 'Actualizar' : 'Registrar' }
              </Button>
            </Form.Item>
          </Form>
        )
      }
    </aside>
  )
}