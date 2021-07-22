//react import
import React, { Fragment, useState } from 'react'
//next import
import Image from 'next/image'
//styles import
import styles from './Navbar.module.scss'
//component import
import Navlink from './Navlink.component'
import Burger from './Burger.component'
import SideMenu from './SideMenu.component'
//icon imports
import { FiMenu } from 'react-icons/fi'

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
	//constants and hooks
	const [menuOpened, setMenuOpened] = useState(false)
	const flowSelected = logoPosition

	//Flow options depending on logoPosition prop, it applies certain justification styles on navbar, menu and buttons
	const FLOW_OPTIONS = {
		left: {
			nav: styles.Navbar_flow_left,
			menu: '',
			buttons: styles.Navbar___buttons_flow_left,
		},
		center: {
			nav: styles.Navbar_flow_center,
			menu: styles.Navbar___menu_flow_center,
			buttons: styles.Navbar___buttons_flow_center,
		},
		right: {
			nav: styles.Navbar_flow_right,
			menu: '',
			buttons: styles.Navbar___buttons_flow_right,
		},
	}
	const DEFAULT_FLOW = FLOW_OPTIONS['left']

	const flow = FLOW_OPTIONS[flowSelected] || DEFAULT_FLOW

	// Functions to open and close side menu on responsive design
	const openSideMenu = e => {
		setMenuOpened(true)
	}
	const closeSideMenu = e => {
		setMenuOpened(false)
	}

	return (
		<>
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
									} ${
										index === 0
											? 'font-bold'
											: 'font-medium'
									}`}
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
					<div
						className={`${styles.Navbar___buttons} ${flow.buttons}`}>
						{buttons?.map(({ label, to }, index) => (
							<Navlink
								key={`${index}_${label}`}
								label={label}
								to={to}
								className={`${styles.Navlink} ${
									styles.Navbutton
								}  ${
									dark
										? 'text-info-light'
										: 'text-secondary-dark'
								} ${
									index === buttons.length - 1 &&
									(_ =>
										dark
											? `${styles.main_Navbutton} bg-white text-bgDark hover:text-white`
											: `${styles.main_Navbutton} bg-bgDark text-white`)()
								}`}
							/>
						))}
					</div>
					{/* burger with menu items in case of smaller screen devices */}
					<Burger onClick={openSideMenu} className={styles.Burger}>
						<FiMenu />
					</Burger>
				</>
			</nav>
			<SideMenu
				items={links}
				onClose={closeSideMenu}
				className={`${styles.SideMenu} ${
					menuOpened && styles.SideMenu_opened
				}`}
			/>
		</>
	)
}

export default React.memo(Navbar)
