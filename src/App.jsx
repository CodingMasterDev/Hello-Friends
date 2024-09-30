import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './components/Welcome/Welcome'

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
      {friends.map(friend=><Welcome name={friend}/>)}
    </>
  )
}

export default App
