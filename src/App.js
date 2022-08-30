import { Route, Switch } from 'react-router-dom'
import { About, Home, News, Portfolio } from './pages'
import { AppHeader, AsideNav, Author, Footer } from './components'
import Contact from './pages/Contact'

function App() {
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
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </section>
      <hr />
      <Footer />
      <div className='container'></div>
      {/* <div className='over-lay'></div> */}
      <AsideNav />
    </div>
  )
}

export default App
