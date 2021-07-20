//react import
import React from 'react'
//style import
import styles from './Top.module.scss'

function Top() {
	return <section id="TopScreen" className={styles.TopScreen}></section>
}

export default React.memo(Top)
