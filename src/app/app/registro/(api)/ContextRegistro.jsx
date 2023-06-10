'use client'

import { createContext, useContext, useReducer } from 'react'
import { API, withSSRContext } from 'aws-amplify'
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import { listPuntoRecoleccions } from '@/graphql/queries'
import * as mutations from '@/graphql/mutations'

import '@/app/app/(utils)/configureAmplifySSR.js'
// import { headers } from 'next/headers'

const ContextData = createContext(null)
const DispatchContext = createContext(null)
let initialState;

(async function(){
    const result = await API.graphql({
        query: listPuntoRecoleccions,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
    })
    initialState =  result.data.listPuntoRecoleccions.items
})()

export default function ContextRegistro({children}) { // cambiar nombre
  const [data, dispatch] = useReducer(functionReducer, initialState)

  return (
    <ContextData.Provider value={data}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </ContextData.Provider>
  )
}

export function usePuntosRecoleccion() { // cambiar nombre
  return useContext(ContextData)
}

export function usePuntosDispatch() { // cambiar nombre
  return useContext(DispatchContext)
}

async function functionReducer(data, action) {
  // const req = {
  //   headers: {
  //     cookie: headers().get('cookie'),
  //   },
  // }
  // const SSR = withSSRContext({ req })
  const SSR = withSSRContext({})
  switch (action.type) {
    case 'create': {
      const payload = action.payload
      
      await SSR.API.graphql({
        query: mutations.createPuntoRecoleccion,
        variables: {input: payload},
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
      })
  
      const newState = await SSR.API.graphql({
        query: listPuntoRecoleccions,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
      });

      const newData = await newState.data.listPuntoRecoleccions.items
      console.log(newData)
      return newData
    }
    case 'update': {
      const payload = {
        id: action.id,
        ...action.payload
      }

      await SSR.API.graphql({
        query: mutations.updatePuntoRecoleccion,
        variables: {input: payload},
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
      })
  
      const newState = await SSR.API.graphql({
        query: listPuntoRecoleccions,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
      });

      const newData = await newState.data.listPuntoRecoleccions.items
      return newData
    }
    case 'delete': {
      const payload = {
        id: action.id
      }

      await SSR.API.graphql({
        query: mutations.deletePuntoRecoleccion,
        variables: {input: payload},
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
      })
  
      const newState = await SSR.API.graphql({
        query: listPuntoRecoleccions,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
      });

      const newData = await newState.data.listPuntoRecoleccions.items
      return newData
    }
    default: {
      throw Error('dispath desconocida - ActivosContext: ' + action.type); // cambiar nombre
    }
  }
}