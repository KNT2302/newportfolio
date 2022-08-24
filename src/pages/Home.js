import React from "react"

const Home = () => {
  return (
    <main className="main-content home">
      <div>
        <h1 className="home__heading">TEGAN KAY</h1>
      </div>
      <section className="creative-section">
        <h2>Creative</h2>
        <ul className="creative-section__list">
          <li className="creative-section__list-item">Designer</li>
          <li className="creative-section__list-item">Freelancer</li>
          <li className="creative-section__list-item">Developer</li>
        </ul>
      </section>
      <div>
        <button className="button home-btn">Get in Touch</button>
      </div>
    </main>
  )
}

export default Home
