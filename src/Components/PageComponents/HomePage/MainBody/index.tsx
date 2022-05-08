import React from 'react'
import { Hero } from './fragments'

type Props = {}

const MainBodyContent = (props: Props) => {
  return (
    <div>
      <div className="left">
      <Hero />
      </div>
      <div className="right">

      </div>
    </div>
  )
}

export default MainBodyContent
