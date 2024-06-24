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

  return (
    <div className="app">
      <SushiContainer sushis={sushis} />
      <Table />
    </div>
  )
}

export default App
