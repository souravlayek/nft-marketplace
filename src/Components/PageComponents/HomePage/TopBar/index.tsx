import React from 'react'
import { SearchInput, ProfileWithDetails } from 'Components'
import styles from "./styles/topBar.module.scss"


type Props = {}

const TopBar = (props: Props) => {
  return (
    <div className={styles.topBar}>
      <div className={styles.searchBox}>
<SearchInput />
      </div>
      <div className={styles.profileBox}>
<ProfileWithDetails />
      </div>
    </div>
  )
}

export default TopBar
