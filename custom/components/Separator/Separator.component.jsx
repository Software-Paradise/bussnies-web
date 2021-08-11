import React from 'react'

function Separator({ children, rest }) {
	return (
		<div className="Separator" {...rest}>
			{children}
		</div>
	)
}

export default React.memo(Separator)
