import About from "./components/about"
import Home from "./components/Home"
import Projects from "./components/Projects"
function App(){
  const obj = {
    name:"eve",
    age:26
  }
  return(
    <div>
    <h1>hello</h1>
    <About obj={obj}/>
    <Home name="adam"/>
    <Projects/>
    </div>
  )
}

export default App