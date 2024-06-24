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

  return (
    <div className="app">
      <SushiContainer sushis={sushis} onEatSushiClick={handleSushiEatClick} />
      <Table />
    </div>
  )
}

export default App
