//react imports
import React from 'react'
//styles import
import styles from './Burger.module.scss'

/**
 * Custom burger
 * @param Icon it must be inserted as a child of the Burger element
 * @returns {React.FunctionComponent}
 */
function Burger({ children, className = '' }) {
	return (
		<button className={`${styles.Burger} ${className}`}>{children}</button>
	)
}

export default React.memo(Burger)
