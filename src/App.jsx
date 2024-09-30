import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const friends = ["Charli Shaffer",
    "Dexter Cuevas",
    "Adele Figueroa",
    "Spencer Rice",
    "Ada Gray",
    "Nicholas Keith",
    "Elyse Charles",
    "Conrad Sampson",
    "Meilani McCullough",
    "Briar Crosby"]

  return (
    <>
      {friends.map(friend=><div>Hello {friend}</div>)}
    </>
  )
}

export default App
