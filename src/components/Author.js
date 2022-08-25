import React from 'react'
import author from "../assets/music.jpg"

const Author = () => {
  return (
    <section className='author-container'>
      <div className='author-img-box'>
        <img src={author} />
      </div>
    </section>
  )
}

export default Author
