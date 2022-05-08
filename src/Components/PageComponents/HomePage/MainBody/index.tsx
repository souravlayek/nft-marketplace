import React from 'react'
import { Hero, TopSellers } from './fragments'

type Props = {}

const MainBodyContent = (props: Props) => {
  return (
    <div>
      <div  className="left">
      <Hero />
      <TopSellers />
      </div>
      <div className="right">

      </div>
    </div>
  )
}

export default MainBodyContent