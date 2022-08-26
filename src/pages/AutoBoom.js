import React, { useState } from 'react'

const AutoBoom = () => {
  const [arr, setArr] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ])

  const autoBoom = (arr, numberBoom) => {
    let countTurn = 0
    const setDefault = () => {
      arr.forEach((row, indexR) => {
        row.map((_, indexC) => arr[indexR][indexC] = 0)
      })
    }
    setDefault()
    while (countTurn < numberBoom) {
      const row = Math.floor(Math.random() * 10)
      const col = Math.floor(Math.random() * 10)
      if (arr[row][col] === 0) {
        arr[row][col] = 1
        countTurn += 1
      }
    }
    return setArr([...arr])
  }
  return (
    <main className='main-content page boom-page'>
      <div className='board-boom'>
        {arr.map((row, rowIdx) => (
          <div key={rowIdx} className='row'>
            {row.map((col, colIdx) => (
              <div key={colIdx} className='col' style={{ color: `${col === 1 ? "red" : "white"}` }}>{col}</div>
            ))}
          </div>
        ))}
      </div>
      <button className='button' onClick={() => autoBoom(arr, 10)}>Auto Boom</button>
    </main>
  )
}

export default AutoBoom
