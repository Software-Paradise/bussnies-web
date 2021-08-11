import React, { useEffect, useState } from 'react'

/**
 * Custom component for button
 * @returns {React.FunctionComponent}
 */
const Button = ({
	className = '',
	variant = '',
	disabled = false,
	children,
	onClick = () => {},
	...rest
}) => {
	const variantList = {
		outlined: 'outlined',
		filled: 'filled',
	}
	const variantChosen = variantList[variant] || 'outlined'

	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className={`Button ${variantChosen} ${className}`}
			{...rest}>
			{children}
		</button>
	)
}

export default React.memo(Button)
