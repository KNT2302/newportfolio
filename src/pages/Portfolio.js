import React, { useRef, useState } from "react"
import Chicago from "../assets/Chicago.jfif"
import City from "../assets/CityByPhone.jfif"
import Highway from "../assets/Highway.jfif"
import EveCity from "../assets/evecity.jfif"
import NiceCity from "../assets/nicecity.jfif"

const Portfolio = () => {
  const cate = useRef([
    {
      img: Chicago,
      topic: 1,
      caption: "Vimeo",
    },
    {
      img: City,
      topic: 2,
      caption: "Youtube",
    },
    {
      img: Highway,
      topic: 3,
      caption: "Soundcloud",
    },
    {
      img: EveCity,
      topic: 4,
      caption: "Detail",
    },
    {
      img: NiceCity,
      topic: 5,
      caption: "Image",
    },
  ])

  const topics = useRef([
    "All",
    "Vimeo",
    "Youtube",
    "Soundcloud",
    "Detail",
    "Image",
  ])

  const renderCard = ({ img, caption }) => {
    return (
      <figure className="card">
        <img src={img} alt="" className="card-img" />
        <figcaption className="card-caption">
          <h4 className="card-caption-heading">something</h4>
          <h5 className="card-caption-topic">{caption}</h5>
        </figcaption>
      </figure>
    )

  }

  const handleSetTopic = (topicIndex) => {
    setTopicSelected(topicIndex)
  }
  const [topicSelected, setTopicSelected] = useState(0)
  return (
    <main className="main-content page portfolio-page">
      <article className="introduce">
        <h2 className="introduce__heading">Creative Portfolio</h2>
        <nav className="topic-nav">
          <ul className="topic-list">
            {topics.current.map((topic, idx) => (
              <li key={idx} className="topic-list-item" onClick={() => handleSetTopic(idx)}>
                {topic}
              </li>
            ))}
          </ul>
        </nav>
        <div className="portfolios">
          {topicSelected === 0 ?
            cate.current.map((img) =>
              renderCard(img)
            ) : cate.current.map((img) =>
              img.topic === topicSelected &&
              renderCard(img)
            )}
        </div>
      </article>
    </main>
  )
}

export default Portfolio
