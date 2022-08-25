import { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { About, Home } from './pages'
import { AppHeader, AsideNav, Author, Footer } from './components'

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
      <AppHeader />
      <hr />
      <section className='content'>
        <Author />
        <Switch>
          <Route path="/about">
            <About />
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
      <AsideNav />
    </div>
  )
}

export default App
