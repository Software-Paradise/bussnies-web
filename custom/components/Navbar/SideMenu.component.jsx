//react imports
import React from 'react'
//icons import
import { FiX } from 'react-icons/fi'
//component imports
import Navlink from './Navlink.component'

/**
 * Custom SideMenu
 * @param {Array} Items array of items to show as Navlinks
 * @param {String} className
 * @param {Function} onClose function to close this menu
 * @returns {React.FunctionComponent}
 */
function SideMenu({ items = null, className = '', onClose = () => null }) {
	return (
		<div className={`SideMenu ${className}`}>
			<button className="CloseButton" onClick={onClose}>
				<FiX />
			</button>
			{items?.map(({ label, to }, index) => (
				<Navlink
					key={`${index}_${label}`}
					label={label}
					to={to}
					className='Navlink'
				/>
			))}
		</div>
	)
}

export default React.memo(SideMenu)
