import React from 'react'

function Layer({ className = '', children, ...rest }) {
	return (
		<div className={`Layer ${className}`} {...rest}>
			{children}
		</div>
	)
}

export default React.memo(Layer)
