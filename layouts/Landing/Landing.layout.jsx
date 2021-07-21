//react imports
import React from 'react'
//style imports
import styles from './Landing.module.scss'
//component imports
import { Navbar } from '../../custom/components'
//assets import
import { alysystemLogo } from '../../public'

/**
 * Custom layout to display in column and screen-wide every section there is in children
 * @param
 * @returns {React.FunctionComponent}
 */
function Landing({ children }) {
	const links = [
		{ label: 'Quiénes somos', to: '#' },
		{ label: 'Servicios', to: '#' },
		{ label: 'Beneficios', to: '#' },
		{ label: 'Nuestro equipo', to: '#' },
	]

	const buttons = [
		{ label: 'Criptomonedas', to: '#' },
		{ label: 'Nuestras Apps', to: '#' },
	]

	return (
		<div className={styles.Landing}>
			<Navbar
				logo={{ src: alysystemLogo, alt: 'AlySystem logo' }}
				logoPosition="center"
				links={links}
				buttons={buttons}
			/>
			{children}
		</div>
	)
}

export default React.memo(Landing)
