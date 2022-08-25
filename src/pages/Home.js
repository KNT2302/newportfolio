import React from "react"

const Home = () => {

  useEffect(() => {
    const list = document.querySelector(".list")
    const text = document.querySelector(".lens-text")
    const textList = ["Student", "GenZ", "Programing"]
    let index = 0
    const timer = setInterval(() => {
      if (index === 3) {
        index = 0
      }
      list.innerHTML = textList[index]
      text.innerHTML = textList[index]
      index++
    }, 4000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <main className="main-content home">
      <div>
        <h1 className="home__heading">Khoi Nguyen</h1>
      </div>
      <section className="creative-section">
        <h2>Creative</h2>

        <ul className="creative-section__list">
          <li className="creative-section__list-item">Designer</li>
          <li className="creative-section__list-item">Freelancer</li>
          <li className="creative-section__list-item">Developer</li>
        </ul>
        <div className="list-container">
          <p className="list">GenZ</p>
          <div className="list-lens">
            <p className="lens-text">GenZ</p>
          </div>
        </div>
      </section>
      <div>
        <button className="button home-btn">Get in Touch</button>
      </div>
    </main>
  )
}

export default Home
