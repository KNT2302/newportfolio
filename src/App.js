import { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { About, Home } from './pages'
import { AppHeader, AsideNav, Author, Footer } from './components'
import Contact from './pages/Contact'

function App() {

  useEffect(() => {
    const circleInner = document.querySelector(".circle-inner")
    const circleOuter = document.querySelector(".circle-outer")

    document.addEventListener("mousemove", (e) => {
      const y = e.pageY
      const x = e.pageX
      circleInner.style.top = y + "px"
      circleInner.style.left = x + "px"

      circleOuter.style.top =  y - 7.5 + "px"
      circleOuter.style.left =  x -7.5 + "px"
    })
  }, [])

  return (
    <div className="App">
      <AppHeader />
      <hr />
      <section className='content'>
        <Author />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </section>
      <hr />
      <Footer />
      <div className='container'></div>
      <div className='circle-inner'></div>
      <div className='circle-outer'></div>
      <div className='over-lay'></div>
      <AsideNav />
    </div>
  )
}

export default App
