import React, { useEffect, useState } from 'react'

/**
 * Custom component for button
 * @returns {React.FunctionComponent}
 */
const Button = ({
	label = '',
	className = '',
	variant = '',
	disabled = false,
	children,
	onClick = () => {},
	...rest
}) => {
	return <button {...rest}></button>
}

export default React.memo(Button)
