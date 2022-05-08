import React from 'react'
import styles from "./styles/contentHeading.module.scss"
type Props = {
  title: string;
}

const ContentHeading = ({title}: Props) => {
  return (

    <h2 className={styles.heading}>{title}</h2>
  )
}

export default ContentHeading
