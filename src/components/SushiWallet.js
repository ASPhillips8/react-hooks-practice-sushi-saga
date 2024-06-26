import React, { useState } from "react"

function SushiWallet({ onAddMoney }) {
  const [inputAmount, setInputAmount] = useState(0)

  function handleSubmit(event) {
    event.preventDefault()
    onAddMoney(inputAmount)
    setInputAmount(0)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Amount:
        <input
          type="number"
          value={inputAmount}
          onChange={(e) => setInputAmount(e.target.value)}
          min="0"
          step="0.01"
          placeholder="Enter amount"
          required
        />
      </label>
      <button type="submit">Add to Wallet</button>
    </form>
  )
}

export default SushiWallet
