//react imports
import React from 'react'

/**
 * Custom burger
 * @param Icon it must be inserted as a child of the Burger element
 * @returns {React.FunctionComponent}
 */
function Burger({ children, className = '', onClick = () => null }) {
	return (
		<button onClick={onClick} className={`Burger ${className}`}>
			{children}
		</button>
	)
}

export default React.memo(Burger)
