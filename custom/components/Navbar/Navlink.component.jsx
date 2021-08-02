//react import
import React from 'react'
import { Link } from 'react-scroll'

/**
 * Custom navlink button
 * @param {string} label text label to show
 * @param {string} to id of element to scroll to
 * @param {string} className class to apply styles
 * @returns {React.FunctionComponent}
 */
function Navlink({ label = 'NavLink', to = '#', className = '' }) {
	return (
		<Link
			to={to}
			duration={300}
			delay={50}
			smooth={true}
			className={`Navlink ${className}`}>
			{label}
		</Link>
	)
}

export default React.memo(Navlink)
