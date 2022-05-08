import { Card } from 'Components'
import { ContentHeading } from 'Components/UI'
import React from 'react'
import { JUST_DROPPED_CONTENT } from 'utils'
import styles from "./styles/justDropped.module.scss"

type Props = {}

const JustDropped = (props: Props) => {
  return (
    <div className={styles.justDroppedContainer}>
      <div className={styles.topBox}>
        <ContentHeading title='Just Dropped' />
        <div className={styles.viewAll}>
          View All
        </div>
      </div>
      <div className={styles.cardList}>
        {JUST_DROPPED_CONTENT.map(item => <Card key={item.name} {...item} />)}
      {/* <Card /> */}

      </div>
    </div>
  )
}

export default JustDropped
