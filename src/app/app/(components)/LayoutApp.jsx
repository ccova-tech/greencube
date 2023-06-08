'use client'

import { useState } from 'react'
import ThemeProvider from './ThemeProvider'
import { Menu } from 'antd'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'

const items = [
  {
    label: 'Navigation One',
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: 'Navigation Two',
    key: 'app',
    icon: <AppstoreOutlined />,
    // disabled: true,
  },
  {
    label: 'Navigation Two',
    key: 'app2',
    icon: <AppstoreOutlined />,
    // disabled: true,
  },
  {
    label: 'Navigation Two',
    key: 'app4',
    icon: <AppstoreOutlined />,
    // disabled: true,
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
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
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
    key: 'alipay',
  },
]

export default function LayoutApp({children}) {
  const [itemMenu, setItemMenu] = useState('mail')
  const handleMenuHeader = (e) => {
    setItemMenu(e.key)
  }
  return (
    <ThemeProvider>
      <header className='h-14 bg-secondary flex items-center px-4'>
        <Menu 
          onClick={handleMenuHeader} 
          selectedKeys={[itemMenu]} 
          mode="horizontal" 
          items={items}
          // className='w-full m-0 bg-secondary text-onprimary focus:text-red-400' 
          className='w-full m-0' 
        />
      </header>
      <main>{children}</main>
    </ThemeProvider>
  )
}