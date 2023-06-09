'use client'

import { useState, useEffect } from 'react'
import { Auth, Hub, I18n } from 'aws-amplify'
import { Authenticator } from '@aws-amplify/ui-react'
import { translationsAwsAuth } from './(utils)/translationsAwsAuth'
import './(utils)/configureAmplifySSR'
import ThemeProvider from './(components)/ThemeProvider'

import { Menu } from 'antd'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'
import "@aws-amplify/ui-react/styles.css"
I18n.putVocabularies(translationsAwsAuth)

const items = [
  {
    label: 'GreenCube',
    key: 'greencube',
    icon: <MailOutlined />,
  },
  {
    label: 'Recolección',
    key: 'recoleccion',
    icon: <AppstoreOutlined />,
  },
  {
    label: 'Mis Puntos',
    key: 'recompensa',
    icon: <AppstoreOutlined />,
  },
  {
    label: 'Reciclaje',
    key: 'reciclaje',
    icon: <AppstoreOutlined />,
    // disabled: true,
  },
  {
    label: 'Registro',
    key: 'registro',
    icon: <AppstoreOutlined />,
    // disabled: true,
  },
  {
    label: 'e-learning',
    key: 'elearning',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  // {
  //   label: (
  //     <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
  //       Navigation Four - Link
  //     </a>
  //   ),
  //   key: 'alipay',
  // },
]

export default function LayoutApp({
  children,
}: {
  children: React.ReactNode
}) {

  const [signedUser, setSignedUser] = useState(false)
  const [itemMenu, setItemMenu] = useState('mail')

  useEffect(() => {
    authListener()
  }, [])

  async function authListener(){
    Hub.listen("auth", (data)=>{
      switch (data.payload.event){
        case "signIn":
          return setSignedUser(true)
        case "signOut":
          return setSignedUser(false)
      }
    });
    try {
      await Auth.currentAuthenticatedUser();
      setSignedUser(true);
    } catch (error) {
      console.log(`Error de autenticación: ${error}`)
    }
  }

  const handleMenuHeader = (e) => {
    setItemMenu(e.key)
  }
  
  return (
    <Authenticator className='h-screen' >
      {({ signOut, user }) => (
        <ThemeProvider>
          <header className='h-14 bg-secondary flex justify-between items-center px-6 w-full'>
            <Menu 
              onClick={handleMenuHeader} 
              selectedKeys={[itemMenu]} 
              mode="horizontal" 
              items={items}
              className='w-[200px] md:w-[650px] m-0' 
            />
            <span 
              onClick={signOut}
              className='cursor-pointer text-destacado hover:text-primary'
            > 
                Cerrar Sesión
              </span>
            {/* <span className='cursor-pointer' onClick={signOut}>{ user ? `Cerrar cuenta ${user.attributes.email}` : null}</span> */}
          </header>
          <main className='bg-bgcolor h-[calc(100vh-56px)] p-6'>
            {children}
          </main>
        </ThemeProvider>
      )}
    </Authenticator>
  )
}