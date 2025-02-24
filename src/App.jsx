import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component from '/src/Component'

import Dashboard from './components/Dashboard'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"





function App() {
  
  return (
    <>
      <Dashboard />
      <div className='w-full text-left mt-8 space-y-2'>
        <h1 className='font-extrabold text-2xl'>Features roadmap</h1>
        <ul>
          <li> - KPIs automatically ✅</li>
          <li> - sorting by date</li>
          <li> - once a task done, it goes to the bottom</li>
          <li> - colors (yellow) ✅</li>
        </ul>
      </div>
    </>
  )
}

export default App
