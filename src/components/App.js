import React, { useEffect, useState } from "react"
import SushiContainer from "./SushiContainer"
import Table from "./Table"

const API = "http://localhost:3001/sushis"

function App() {
  const [sushis, setSushis] = useState([])

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((sushisData) => setSushis(sushisData))
  }, [])

  function handleSushiEatClick(id) {
    const updatedSushis = sushis.map((sushi) =>
      sushi.id === id ? { ...sushi, eaten: true } : sushi
    )
    setSushis(updatedSushis)
  }

  // table has plate prop
  // plate is an array that show eaten choices
  // if eaten is true pass into new array
  const eatenSushi = sushis.filter((sushi) => sushi.eaten)

  return (
    <div className="app">
      <SushiContainer sushis={sushis} onEatSushiClick={handleSushiEatClick} />
      <Table plates={eatenSushi} />
    </div>
  )
}

export default App
