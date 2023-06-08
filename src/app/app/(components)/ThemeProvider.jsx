"use client"

import { useState, createContext, useMemo } from "react"

import { ConfigProvider } from "antd"
import { lightTheme, darkTheme } from "../(styles)/antDesignThemes"

export const DarkTheme = createContext({ toggleColorMode: () => {} })

const ThemeProvider = ({ children }) => {
  const [ocontrolDarkTheme, setOcontrolDarkTheme] = useState(false)

  const colorMode = useMemo(() => (
    {
      toggleColorMode: () => {
        setOcontrolDarkTheme((prevMode) => (prevMode === false ? true : false))
      },
    }
    ), []
  )

  return (
    <DarkTheme.Provider value={colorMode}>
      <ConfigProvider theme={ocontrolDarkTheme ? darkTheme : lightTheme}>
        {children}
      </ConfigProvider>
    </DarkTheme.Provider>
  )
}

export default ThemeProvider
