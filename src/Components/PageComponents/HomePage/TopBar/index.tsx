import { SearchInput } from 'Components'
import React from 'react'

type Props = {}

const TopBar = (props: Props) => {
  return (
    <div className="topBar">
      <div className="searchBox">
<SearchInput />
      </div>
      <div className="profileBox">

      </div>
    </div>
  )
}

export default TopBar
