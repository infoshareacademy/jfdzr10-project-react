import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import data from "./assets/data.json"
import OffersList from "./components/OffersList"

function App() {
  const [offers, setOffers] = useState(data)

  return (
    <div className="App">
     <OffersList offers={offers} />
    </div>
  )
}

export default App
