import './App.css'
import priceCard from './Components/Pricecard'


function App() {
  return (
    <>
     
     
      <div>{priceCard("FREE",0)}</div>
      <div>{priceCard("PLUS",9)}</div>
      <div>{priceCard("PRO",49)}</div>
    </>
  )
}


export default App

