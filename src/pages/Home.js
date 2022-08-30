import React, { useEffect, useRef, useState } from "react"

const Home = () => {

  const [visibleIdx, setVisibleIdx] = useState(0)

  console.log(visibleIdx)
  const skills = useRef(["HTML", "CSS", "JavaScript", "ReactJs"])

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleIdx(prev => (prev + 1) % 4)
    }, 3000)

    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <main className="main-content home">
      <div>
        <h1 className="home__heading">ALAN WALKER</h1>
      </div>
      <section className="creative-section">
        <h2 className="creative-section__heading">Technical Skills</h2>
        <ul className="list-container">
          {skills.current.map((skill, index) => (
            <li className={`list-container-item ${visibleIdx === index ? "visible" : ""}`}>{skill}</li>
          ))}
        </ul>
      </section>
      <div>
        <button className="button home-btn">Get in Touch</button>
      </div>
    </main>
  )
}

export default Home
