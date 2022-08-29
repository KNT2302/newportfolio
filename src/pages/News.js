import React, { useRef } from "react"



const News = () => {

  const news = useRef([{
    id: 1,
    title: "Reasons Why People Use Discord",
    date: "August 29th",
    comment: 2
  },
  {
    id: 2,
    title: "Why We Should Read Fewer Books",
    date: "August 20th",
    comment: 0
  },
  {
    id: 3,
    title: "A Final Farewell to the iPod",
    date: "August 5th",
    comment: 3
  },
  {
    id: 4,
    title: "Dealing with Spring Allergy Symptoms",
    date: "August 5th",
    comment: 5
  },
  ])

  const renderNew = ({ id, title, date, comment }) => {
    return (
      <div className="news-block">
        <div className="number">{id}</div>
        <div className="line"></div>
        <div className="new">
          <div className="info">{date}/{comment}</div>
          <h4 className="new-title">{title}</h4>
        </div>
        <div className="img-news">
        </div>
      </div>
    )
  }
  return (
    <main className="main-content page news-page">
      <article className="introduce">
        <h2 className="introduce__heading">Last news</h2>
        <section className="introduce__content news-content">
          {news.current.map(lastNew => renderNew(lastNew))}
        </section>
      </article>
    </main>
  )
}

export default News
