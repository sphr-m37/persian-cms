import React from 'react'
// routing
import { useRoutes } from 'react-router-dom'
import { routes } from './index'
// components
import { Navbar } from './index'
import { SideBar } from './index'
// styles
import './App.css'
// redux
import { store } from './index'
import { Provider } from 'react-redux'

export const App = () => {
  const route = useRoutes(routes)
  return (
    <Provider store={store}>
      <div className="flex">
        <SideBar />
        <div className='sm:pr-52 w-full'>
          <Navbar />
          <div className='p-2'>
            {route}
          </div>
        </div>
      </div>
    </Provider>
  )
}
