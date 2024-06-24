import React, { useEffect, useState } from "react"
import SushiContainer from "./SushiContainer"
import Table from "./Table"

const API = "http://localhost:3001/sushis"

function App() {
  const [sushis, setSushis] = useState([])
  const [money, setMoney] = useState(100)

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((sushisData) => setSushis(sushisData))
  }, [])

  function handleSushiEatClick(id, price) {
    if (money >= price) {
      const updatedSushis = sushis.map((sushi) =>
        sushi.id === id ? { ...sushi, eaten: true } : sushi
      )
      setSushis(updatedSushis)
      setMoney(money - price)
    } else {
      console.log("Add money to your Wallet")
    }
  }

  const eatenSushi = sushis.filter((sushi) => sushi.eaten)

  return (
    <div className="app">
      <SushiContainer sushis={sushis} onEatSushiClick={handleSushiEatClick} />
      <Table money={money} plates={eatenSushi} />
    </div>
  )
}

export default App
