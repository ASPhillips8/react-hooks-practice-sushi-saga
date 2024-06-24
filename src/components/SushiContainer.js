import React, { useState } from "react"
import MoreButton from "./MoreButton"
import Sushi from "./Sushi"

function SushiContainer({ sushis, onEatSushiClick }) {
  const [startIndex, setStartIndex] = useState(0)
  const endIndex = startIndex + 4
  const visibleSushi = sushis.slice(startIndex, endIndex)

  const displayedSushis = visibleSushi.map((sushi) => {
    return (
      <Sushi key={sushi.id} sushi={sushi} onEatSushiClick={onEatSushiClick} />
    )
  })

  function handleMoreButtonClick() {
    setStartIndex(() => endIndex % sushis.length)
  }

  return (
    <div className="belt">
      {displayedSushis}
      <MoreButton onMoreClick={handleMoreButtonClick} />
    </div>
  )
}

export default SushiContainer
