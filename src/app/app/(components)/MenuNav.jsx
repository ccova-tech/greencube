import React from 'react'
import Link from 'next/link'
import { CodepenOutlined, ApiOutlined, EnvironmentOutlined, SmileOutlined, SyncOutlined, SettingOutlined } from '@ant-design/icons'


export const itemsAdmin = [
  {
    label: (
      <Link href="/app/dashboard">
        Dashboard
      </Link>
    ),
    key: 'dashboard',
    icon: <CodepenOutlined />,
  },
  {
    label: (
      <Link href="/app/partners">
        Partners
      </Link>
    ),
    key: 'partners',
    icon: <CodepenOutlined />,
  },
  {
    label: (
      <Link href="/app/aliados">
        Aliados
      </Link>
    ),
    key: 'aliados',
    icon: <CodepenOutlined />,
  },
  {
    label: (
      <Link href="/app/greenpoints">
        GreenPoints
      </Link>
    ),
    key: 'greenpoints',
    icon: <SmileOutlined />,
  },
  {
    label: (
      <Link href="/app/reciclaje">
        Reciclaje
      </Link>
    ),
    key: 'reciclaje',
    icon: <ApiOutlined />,
  },
  {
    label: (
      <Link href="/app/beneficios">
        Beneficios
      </Link>
    ),
    key: 'beneficios',
    icon: <ApiOutlined />,
  },
  // {
  //   label: (
  //     <Link href="/app/recoleccion">
  //       Beneficios
  //     </Link>
  //   ),
  //   key: 'recoleccion',
  //   icon: <EnvironmentOutlined />,
  // },
  {
    label: (
      <Link href="/app/aportealplaneta">
        Aporte Al Planeta
      </Link>
    ),
    key: 'aportealplaneta',
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

export const items = [
  {
    label: (
      <Link href="/app/greenpoints">
        GreenPoints
      </Link>
    ),
    key: 'greenpoints',
    icon: <SmileOutlined />,
  },
  {
    label: (
      <Link href="/app/reciclaje">
        Reciclaje
      </Link>
    ),
    key: 'reciclaje',
    icon: <ApiOutlined />,
  },
  {
    label: (
      <Link href="/app/beneficios">
        Beneficios
      </Link>
    ),
    key: 'beneficios',
    icon: <ApiOutlined />,
  },
  {
    label: (
      <Link href="/app/aportealplaneta">
        Aporte Al Planeta
      </Link>
    ),
    key: 'aportealplaneta',
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
