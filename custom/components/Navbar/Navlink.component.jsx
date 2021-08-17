//react import
import React from 'react'
import { Link } from 'react-scroll'
import useWindowDimensions from '../../../hooks/useWindowDimesions'

/**
 * Custom navlink button
 * @param {string} label text label to show
 * @param {string} to id of element to scroll to
 * @param {string} className class to apply styles
 * @returns {React.FunctionComponent}
 */
function Navlink({
	label = 'NavLink',
	to = '#',
	className = '',
	onClick = () => null,
}) {
	const { width } = useWindowDimensions()
	let offset = width >= 1350 ? -96 : -80
	console.log(width)

	return (
		<Link
			to={to}
			duration={300}
			delay={50}
			smooth={true}
			className={`Navlink ${className}`}
			onClick={onClick}
			offset={offset}>
			{label}
		</Link>
	)
}

export default React.memo(Navlink)
