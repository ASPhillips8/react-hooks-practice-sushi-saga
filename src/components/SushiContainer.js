import React, { useState } from "react"
import MoreButton from "./MoreButton"
import Sushi from "./Sushi"

function SushiContainer({ sushis }) {
  const [startIndex, setStartIndex] = useState(0)
  // this i where i need to handle the only four
  // will tie into moreButton component
  const endIndex = startIndex + 4
  const visibleSushi = sushis.slice(startIndex, endIndex)

  console.log(endIndex)
  console.log(sushis.slice(startIndex, endIndex))

  const displayedSushis = visibleSushi.map((sushi) => {
    return <Sushi key={sushi.id} sushi={sushi} />
  })

  function handleMoreButtonClick() {
    setStartIndex(startIndex + 4)
  }

  return (
    <div className="belt">
      {displayedSushis}
      <MoreButton onMoreClick={handleMoreButtonClick} />
    </div>
  )
}

export default SushiContainer
