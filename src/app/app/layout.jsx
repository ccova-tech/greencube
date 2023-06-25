'use client'

import { useState, useEffect, createContext } from 'react'
import { Auth, Hub, I18n, Amplify } from 'aws-amplify'
import { Authenticator } from '@aws-amplify/ui-react'
import { translationsAwsAuth } from './(utils)/translationsAwsAuth'
// import './(utils)/configureAmplifySSR'
import myAppConfig from './(utils)/amplifyConfigure';
import ThemeProvider from './(components)/ThemeProvider'
import ContextRegistro from '@/app/app/registro/(api)/ContextRegistro';

import Link from 'next/link'
import { Menu } from 'antd'
import { CodepenOutlined, ApiOutlined, EnvironmentOutlined, SmileOutlined, SyncOutlined, SettingOutlined } from '@ant-design/icons'
import "@aws-amplify/ui-react/styles.css"

I18n.putVocabularies(translationsAwsAuth)
Amplify.configure(myAppConfig)

export const MenuContext = createContext(null)

const items = [
  {
    label: (
      <Link href="/app">
        GreenCube
      </Link>
    ),
    key: 'greencube',
    icon: <CodepenOutlined />,
  },
  {
    label: (
      <Link href="/app/registro">
        Registro
      </Link>
    ),
    key: 'registro',
    icon: <ApiOutlined />,
  },
  {
    label: (
      <Link href="/app/recoleccion">
        Recolección
      </Link>
    ),
    key: 'recoleccion',
    icon: <EnvironmentOutlined />,
  },
  {
    label: (
      <Link href="/app/mispuntos">
        Mis GreenPoints
      </Link>
    ),
    key: 'mispuntos',
    icon: <SmileOutlined />,
  },
  {
    label: (
      <Link href="/app/reciclaje">
        Reciclaje
      </Link>
    ),
    key: 'reciclaje',
    icon: <SyncOutlined />,
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
]

export default function LayoutApp({
  children,
}) {

  const [signedUser, setSignedUser] = useState(false)
  const [itemMenu, setItemMenu] = useState('greencube')

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
    <Authenticator className='sm:h-screen' hideSignUp={true}>
      {({ signOut, user }) => (
        <ThemeProvider>
          <ContextRegistro>
            <MenuContext.Provider value={setItemMenu}>
              <header className='h-14 bg-secondary flex justify-between items-center px-6 w-full'>
                <Menu 
                  onClick={handleMenuHeader} 
                  selectedKeys={[itemMenu]} 
                  mode="horizontal" 
                  items={items}
                  className='w-[200px] sm:w-[700px] m-0' 
                  key={items.key}
                  />
                <span 
                  onClick={signOut}
                  className='cursor-pointer text-destacado hover:text-primary'
                  > 
                    Cerrar Sesión
                  </span>
                {/* <span className='cursor-pointer' onClick={signOut}>{ user ? `Cerrar cuenta ${user.attributes.email}` : null}</span> */}
              </header>
              <main className='bg-bgcolor-surface sm:h-[calc(100vh-56px)] p-6'>
                {children}
              </main>
            </MenuContext.Provider>
          </ContextRegistro>
        </ThemeProvider>
      )}
    </Authenticator>
  )
}