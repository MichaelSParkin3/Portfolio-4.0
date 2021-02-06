import React, { useState } from "react"
import Ticker from "react-ticker"
import PageVisibility from "react-page-visibility"

import "../scss/infiniteCarousel.scss"

const InfiniteCarousel = props => {
  var previousIndex = -1

  const getNextIndex = () => {
    if (previousIndex + 1 >= props.phraseArray.length) {
      previousIndex = -1
    }
    previousIndex++
    return previousIndex
  }

  const [pageIsVisible, setPageIsVisible] = useState(true)

  const handleVisibilityChange = isVisible => {
    setPageIsVisible(isVisible)
  }
  return (
    <div className="carousel-cont">
      <PageVisibility onChange={handleVisibilityChange}>
        {pageIsVisible && (
          <Ticker speed={3}>
            {({ index }) => (
              <div key={index} className={"carousel-phrase"}>
                {props.phraseArray[getNextIndex()]}
              </div>
            )}
          </Ticker>
        )}
      </PageVisibility>
    </div>
  )
}

export default InfiniteCarousel
