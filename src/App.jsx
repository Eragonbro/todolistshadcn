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
  const [count, setCount] = useState(0)

  return (
    <>
      <Dashboard />
    </>
  )
}

export default App
