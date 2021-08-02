//react imports
import React from 'react'
//component imports
import { Navbar, Footer } from '../../custom/components'
//assets import
import { alysystemLogo } from '../../public'

/**
 * Custom layout to display in column and screen-wide every section there is in children
 * @param
 * @returns {React.FunctionComponent}
 */
function Landing({ children }) {
	const links = [
		{ label: 'Quiénes somos', to: 'InfoScreen' },
		{ label: 'Servicios', to: 'AppScreen' },
		{ label: 'Beneficios', to: 'BenefitsScreen' },
		{ label: 'Nuestro equipo', to: 'TeamScreen' },
	]

	const buttons = [
		{ label: 'Criptomonedas', to: 'CryptoScreen' },
		{ label: 'Nuestras Apps', to: 'AppScreen' },
	]

	return (
		<div id="LandingLayout">
			<Navbar
				logo={{ src: alysystemLogo, alt: 'AlySystem logo' }}
				logoPosition="center"
				links={links}
				buttons={buttons}
				className="Navbar"
			/>
			{children}
			<Footer />
		</div>
	)
}

export default React.memo(Landing)
