import React from 'react'
import styles from "./styles/menuTitle.module.scss"

type Props = {
  title: string
}

const MenuTitle = ({title}: Props) => {
  return (
    <div className={styles.heading}>{title?.toUpperCase()}</div>
  )
}

export default MenuTitle
