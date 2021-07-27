//react import
import React from 'react'
//next import
import Link from 'next/link'
//style import
import styles from './Navlink.module.scss'

/**
 * Custom navlink button
 * @param {string} label text label to show
 * @param {string} to id of element to scroll to
 * @param {string} className class to apply styles
 * @returns {React.FunctionComponent}
 */
function Navlink({ label = 'NavLink', to = '#', className = '' }) {
	return (
		<Link href={to}>
			<a className={`${styles.Navlink} ${className}`}>{label}</a>
		</Link>
	)
}

export default React.memo(Navlink)
