import { useEffect } from 'react'
import logo from './logo.svg'

function App() {

  useEffect(() => {
    const circleInner = document.querySelector(".circle-inner")
    const circleOuter = document.querySelector(".circle-outer")

    document.addEventListener("mousemove", (e) => {
      circleInner.style.top = e.pageY + "px"
      circleInner.style.left = e.pageX + "px"

      circleOuter.style.top = e.pageY + "px"
      circleOuter.style.left = e.pageX + "px"
    })
  }, [])
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <div className='circle-inner'></div>
      <div className='circle-outer'></div>
    </div>
  )
}

export default App
