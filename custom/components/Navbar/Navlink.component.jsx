//react import
import React from 'react'
//next import
import Link from 'next/link'
//style import
import styles from './Navlink.module.scss'

/**
 * Custom navlink button
 * @param
 * @returns {React.FunctionComponent}
 */
function Navlink({ label = 'NavLink', to = '#', className = '', ...rest }) {
	return (
		<Link href={to} {...rest}>
			<a className={`${styles.Navlink} ${className}`}>{label}</a>
		</Link>
	)
}

export default React.memo(Navlink)
