import React from 'react'
import styles from './modal.module.scss'

export const ModalLoading = () => {
  return (
    <div className={styles.modalContainer}>
        <div className={styles.loadingView} >

        Loading...
        </div>
    </div>
  )
}
