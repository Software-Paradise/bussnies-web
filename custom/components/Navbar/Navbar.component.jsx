//react import
import React, { Fragment } from 'react'
//next import
import Image from 'next/image'
//styles import
import styles from './Navbar.module.scss'
//component import
import Navlink from './Navlink.component'

/**
 * Custom navbar
 * @param {Object} object with keys "src" (source for image to show as logo) and "alt" (alternative text)
 * @param {String} logoPosition it can be left, center or right, left as default
 * @param {Array} links array of objects, each one with keys "label" and "to"
 * @param {Array} buttons array of objects, each one with keys "label" and "to", these are going to be shown as buttons
 * @param {Boolean} dark if true then background is white, if false then background is black
 * @returns {React.FunctionComponent}
 */
function Navbar({
	logo = null,
	logoPosition = 'left',
	links = null,
	buttons = null,
	dark = false,
}) {
	const FLOW_OPTIONS = {
		left: { nav: 'justify-start', menu: '', buttons: 'absolute right-0' },
		center: {
			nav: 'justify-center',
			menu: 'absolute left-8',
			buttons: 'absolute right-8',
		},
		right: {
			nav: 'flex-row-reverse',
			menu: '',
			buttons: 'absolute left-0 flex-row-reverse',
		},
	}
	const DEFAULT_FLOW = 'justify-start'

	const flow = FLOW_OPTIONS[logoPosition] || DEFAULT_FLOW

	return (
		<nav
			className={`${styles.Navbar} ${
				dark ? styles.darkTheme : styles.lightTheme
			} ${flow.nav}`}>
			<>
				{/* {if logo with position left or right} */}
				{logo && logoPosition !== 'center' && (
					<div className={styles.Navbar___logo}>
						<Image alt={logo?.alt} src={logo?.src} />
					</div>
				)}
				{/* {if there is a links array, then render it} */}
				<div className={`${styles.Navbar___menu} ${flow.menu}`}>
					{links?.map(({ label, to }, index) => (
						<Fragment key={`${index}_${label}`}>
							<Navlink
								label={label}
								to={to}
								className={`${styles.Navlink} ${
									dark
										? 'text-info-light'
										: 'text-secondary-dark'
								} ${index === 0 ? 'font-bold' : 'font-medium'}`}
							/>
							{index < links.length - 1 && (
								<div
									style={{ width: '3px' }}
									className="bg-secondary-light h-auto z-50"
								/>
							)}
						</Fragment>
					))}
				</div>
				{/* {if logo with position center} */}
				{logo && logoPosition === 'center' && (
					<div className={`${styles.Navbar___logo}`}>
						<Image alt={logo?.alt} src={logo?.src} />
					</div>
				)}
				{/* {array of button styled links} */}
				<div className={`${styles.Navbar___buttons} ${flow.buttons}`}>
					{buttons?.map(({ label, to }, index) => (
						<Navlink
							key={`${index}_${label}`}
							label={label}
							to={to}
							className={`${styles.Navlink} ${
								styles.Navbutton
							}  ${
								dark ? 'text-info-light' : 'text-secondary-dark'
							} ${
								index === buttons.length - 1 &&
								(() =>
									dark
										? `${styles.main_Navbutton} bg-white text-bgDark hover:text-white`
										: `${styles.main_Navbutton} bg-bgDark text-white`)()
							}`}
						/>
					))}
				</div>
			</>
		</nav>
	)
}

export default React.memo(Navbar)
