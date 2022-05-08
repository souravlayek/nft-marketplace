import React from 'react'
import Avatar from './Avatar'
import styles from "./styles/groupedAvatar.module.scss"

type Props = {
  userList: string[]
}

const GroupedAvatar = ({userList}: Props) => {
  return (
    <div className={styles.groupedAvatar}>
      {userList.map(item => (
        <div key={item} className={styles.avatar}>
          <Avatar size={30} src={item}/>
        </div>
      ))}
    </div>
  )
}

export default GroupedAvatar
