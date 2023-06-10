'use client'

import { useState } from 'react'
import { usePuntosDispatch } from '../(api)/ContextRegistro'
import { Button, Form, Input, Select } from 'antd'

export default function RegistroForm() {
  const [agregarNuevo, setAgregarNuevo] = useState(false)
  const [form] = Form.useForm()
  const dispatch = usePuntosDispatch()

  const onFinishFailed = (errorInfo) => {
    console.log('error submit carga de datos:', errorInfo)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const onFinish = (values) => {
    // console.log(dispatch)
    dispatch({
      type: 'create',
      payload: {...values}
    })
    form.resetFields()
  }
  
  return (
    <aside>
      {
        !agregarNuevo ? (
          <Button type='primary' ghost size='large' className='w-full font-bold' onClick={ () => setAgregarNuevo(true) } >
            Agregar Nuevo
          </Button>
        ) : (
          <Button type='primary' ghost size='large' className='w-full font-bold' onClick={ () => {setAgregarNuevo(false); form.resetFields()} } >
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
              rules={[
                {
                  required: true,
                  message: 'Por Favor seleccione un tipo',
                },
              ]}
            >
              <Select
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
              />
            </Form.Item>

            <Form.Item
              label="Nombre del Punto"
              name="nombre"
              rules={[
                {
                  required: true,
                  message: 'Por favor introduzca un nombre descriptivo',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Dirección - Comuna"
              name="direccionComuna"
              rules={[
                {
                  required: true,
                  message: 'Por favor introduzca una comuna',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Dirección - Calle"
              name="direccionCalle"
              rules={[
                {
                  required: true,
                  message: 'Por favor introduzca una dirección',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Dirección - Número"
              name="direccionNumero"
              rules={[
                {
                  required: true,
                  message: 'Por favor introduzca un número de calle',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Teléfono"
              name="telefono"
              rules={[
                {
                  required: true,
                  message: 'Por favor introduzca un teléfono válido',
                },
              ]}
            >
              <Input addonBefore='+56' placeholder='900001111' type='tel' />
            </Form.Item>

            <Form.Item>
              <Button type="primary" ghost size='large' className='w-full font-bold' htmlType="submit">
                Registrar
              </Button>
            </Form.Item>
          </Form>
        )
      }
    </aside>
  )
}