//react imports
import React from 'react'
//style imports
import styles from './Landing.module.scss'
//component imports
import { Navbar } from '../../custom/components'

/**
 * Custom layout to display in column and screen-wide every section there is in children
 * @param
 * @returns {React.FunctionComponent}
 */
function Landing({ children }) {
	return (
		<div className={styles.Landing}>
			<Navbar />
			{children}
		</div>
	)
}

export default React.memo(Landing)
