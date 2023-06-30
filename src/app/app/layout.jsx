'use client'

import { useState, useEffect, createContext } from 'react'
import { Auth, Hub, I18n, Amplify } from 'aws-amplify'
import { Authenticator } from '@aws-amplify/ui-react'
import { translationsAwsAuth } from './(utils)/translationsAwsAuth'
// import './(utils)/configureAmplifySSR'
import myAppConfig from './(utils)/amplifyConfigure';
import ThemeProvider from './(components)/ThemeProvider'
import ContextRegistro from '@/app/app/reciclaje/(api)/ContextRegistro';
import { items, itemsAdmin } from './(components)/MenuNav';

import { Menu, Select } from 'antd'
import "@aws-amplify/ui-react/styles.css"

I18n.putVocabularies(translationsAwsAuth)
Amplify.configure(myAppConfig)

export const MenuContext = createContext(null)

export default function LayoutApp({children}) {
  const [signedUser, setSignedUser] = useState(false)
  const [itemMenu, setItemMenu] = useState('')
  const [userApp, setUserApp] = useState('admin')

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

  const handleSignOut = async (signOut) => {
    await signOut() 
    window.location='/'
  }

  const handleChangeUserApp = (value) => {
    setUserApp(value)
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
                  items={ userApp === 'admin' ? itemsAdmin : items }
                  className='w-[200px] sm:w-[600px] m-0' 
                  key={ userApp === 'admin' ? itemsAdmin.key : items.key }
                />
                <div>
                  <span 
                    onClick={ () => handleSignOut(signOut) }
                    className='cursor-pointer text-destacado hover:text-primary mr-4'
                    > 
                      Cerrar Sesión
                  </span>
                  <Select
                    defaultValue='admin'
                    style={{
                      width: 120,
                    }}
                    className='focus:ring-primary focus:border-primary'
                    onChange={handleChangeUserApp}
                    options={[
                      {
                        value: 'admin',
                        label: 'Admin',
                      },
                      {
                        value: 'partner',
                        label: 'Partner',
                      },
                      {
                        value: 'aliado',
                        label: 'Aliado',
                      },
                    ]}
                  />
                </div>
                {/* <span className='cursor-pointer' onClick={signOut}>{ user ? `Cerrar cuenta ${user.attributes.email}` : null}</span> */}
              </header>
              <main className='bg-bgcolor sm:h-[calc(100vh-56px)]'>
                {children}
              </main>
            </MenuContext.Provider>
          </ContextRegistro>
        </ThemeProvider>
      )}
    </Authenticator>
  )
}