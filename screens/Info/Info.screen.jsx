//react import
import React from 'react'
//style import
import styles from './Info.module.scss'

function Info() {
	return <section id="InfoScreen" className={styles.InfoScreen}></section>
}

export default React.memo(Info)
