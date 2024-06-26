import React, { useEffect, useState } from "react"
import SushiContainer from "./SushiContainer"
import Table from "./Table"
import SushiWallet from "./SushiWallet"

const API = "http://localhost:3001/sushis"

function App() {
  const [sushis, setSushis] = useState([])
  const [money, setMoney] = useState(100)

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((sushisData) => setSushis(sushisData))
  }, [])

  function handleAddMoney(addedFunds) {
    setMoney((previousAmount) => previousAmount + parseFloat(addedFunds))
  }

  const eatenSushi = sushis.filter((sushi) => sushi.eaten)

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

  return (
    <div className="app">
      <SushiContainer sushis={sushis} onEatSushiClick={handleSushiEatClick} />
      <Table money={money} plates={eatenSushi} />
      <SushiWallet onAddMoney={handleAddMoney} />
    </div>
  )
}

export default App
