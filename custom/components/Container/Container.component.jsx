import React from 'react'
import styles from './Container.module.scss'

export default function Container() {
	return (
		<div className={styles.Container}>
			<div className={styles.child}></div>
		</div>
	)
}
