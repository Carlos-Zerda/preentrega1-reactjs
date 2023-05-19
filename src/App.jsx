import React from 'react'
import ResponsiveAppBar from './components/NavBar/NavBar'
import ButtonBases from './components/ItemListContainer/ItemListContainer'
import ShoppingCartIcon from './components/CartWidget/CartWidget'


const App =()=>{
  return(
    <div className='App'>
    <ResponsiveAppBar/>
    <ButtonBases/>
    <ShoppingCartIcon/>0
    </div>
  )
}

export default App
