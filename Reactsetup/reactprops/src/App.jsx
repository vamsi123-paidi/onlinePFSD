import React from 'react'
import Child from './components/Child'
import Counter from './components/Counter'
import TextPrinting from './components/TextPrinting'
import Visible from './components/Visible'
import ArrayExample from './components/ArrayExample'
import "./App.css"
import ObjExample from './components/ObjExample'
import BasicUseeEffect from './components/BasicUseeEffect'
import ConterUseEffect from './components/ConterUseEffect'
import FetchExample from './components/FetchExample'
import BasicExUseRef from './components/BasicExUseRef'
import NavScrollExample from './components/NavbarComp'
import UseMemoExample from './components/UseMemoExample'
import UseCallbackExample from './components/UseCallbackExample'
import CounterComponent from './components/CounterComponent'
const App = () => {
  const obj = {
    name:"adam",
    age:25,
    image:"https://media.istockphoto.com/id/2173059563/vector/coming-soon-image-on-white-background-no-photo-available.jpg?s=612x612&w=0&k=20&c=v0a_B58wPFNDPULSiw_BmPyhSNCyrP_d17i2BPPyDTk="
  }
  return (
    <>
      {/* <Child obj={obj}/> */}
      {/* <Counter/> */}
      {/* <TextPrinting/> */}
      {/* <Visible/> */}
      {/* <ArrayExample/> */}
      {/* <ObjExample/> */}
      {/* <BasicUseeEffect/> */}
      {/* <ConterUseEffect/> */}
      {/* <FetchExample/> */}
      {/* <BasicExUseRef/> */}
      {/* <NavScrollExample/> */}
      {/* <UseMemoExample/> */}
      {/* <UseCallbackExample/> */}
      <CounterComponent/>
    </>
  )
}

export default App