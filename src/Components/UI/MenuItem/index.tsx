import React from 'react'
import styles from "./styles/menuitem.module.scss"
type Props = {
  isActive?: boolean,
  icon: ReactNode,
  label: string,
}

const MenuItem = ({isActive = false, icon: Icon, label}: Props) => {
  return (
    <div className={`${styles.menuItem} ${isActive ? styles.active : ''}`}>
      <div className={styles.menuItemContent}>
        <div className={styles.icon}>
          <Icon isActive={isActive} />
        </div>
        <div className={styles.label}>
          {label}
        </div>
      </div>
      {isActive && <div className={styles.sidebar} />}
    </div>
  )
}

export default MenuItem
