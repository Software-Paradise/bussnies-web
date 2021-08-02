//react import
import React, { Fragment, useState } from 'react'
import { Link } from 'react-scroll'
//next import
import Image from 'next/image'
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
	className = '',
}) {
	//constants and hooks
	const [menuOpened, setMenuOpened] = useState(false)
	const [menuClosing, setMenuClosing] = useState(false)
	const flowSelected = logoPosition

	//Flow options depending on logoPosition prop, it applies certain justification styles on navbar, menu and buttons
	const FLOW_OPTIONS = {
		left: {
			nav: 'Navbar_flow_left',
			menu: '',
			buttons: 'Navbar___buttons_flow_left',
		},
		center: {
			nav: 'Navbar_flow_center',
			menu: 'Navbar___menu_flow_center',
			buttons: 'Navbar___buttons_flow_center',
		},
		right: {
			nav: 'Navbar_flow_right',
			menu: '',
			buttons: 'Navbar___buttons_flow_right',
		},
	}
	const DEFAULT_FLOW = FLOW_OPTIONS['left']

	const flow = FLOW_OPTIONS[flowSelected] || DEFAULT_FLOW

	// Functions to open and close side menu on responsive design
	const openSideMenu = _ => {
		setMenuOpened(true)
	}
	const closeSideMenu = _ => {
		setMenuOpened(false)
		setMenuClosing(true)
		setTimeout(() => {
			setMenuClosing(false)
		}, 280)
	}

	return (
		<>
			<nav
				className={`Navbar ${dark ? 'darkTheme' : 'lightTheme'} ${
					flow.nav
				} ${className}`}>
				<>
					{/* {if logo with position left or right} */}
					{logo && logoPosition !== 'center' && (
						<Link
							to="TopScreen"
							duration={300}
							delay={50}
							smooth={true}>
							<div className="Navbar___logo">
								<Image alt={logo?.alt} src={logo?.src} />
							</div>
						</Link>
					)}
					{/* {if there is a links array, then render it} */}
					<div className={`Navbar___menu ${flow.menu}`}>
						{links?.map(({ label, to }, index) => (
							<Fragment key={`${index}_${label}`}>
								<Navlink
									label={label}
									to={to}
									className={`${
										dark
											? 'text-info-light'
											: 'text-primary'
									} ${
										index === 0
											? 'font-bold text-black'
											: 'font-bold'
									}`}
								/>
								{index < links.length - 1 && (
									<div
										style={{ width: '3px' }}
										className="bg-secondary-light h-auto"
									/>
								)}
							</Fragment>
						))}
					</div>
					{/* {if logo with position center} */}
					{logo && logoPosition === 'center' && (
						<Link
							to="TopScreen"
							duration={300}
							delay={50}
							smooth={true}>
							<div className="Navbar___logo">
								<Image alt={logo?.alt} src={logo?.src} />
							</div>
						</Link>
					)}
					{/* {array of button styled links} */}
					<div className={`Navbar___buttons ${flow.buttons}`}>
						{buttons?.map(({ label, to }, index) => (
							<Navlink
								key={`${index}_${label}`}
								label={label}
								to={to}
								className={`Navbutton
								  ${dark ? 'text-info-light' : 'text-primary'} ${
									index === buttons.length - 1 &&
									(_ =>
										dark
											? `main_Navbutton bg-white text-bgDark hover:text-white`
											: `main_Navbutton bg-bgDark text-white`)()
								}`}
							/>
						))}
					</div>
					{/* burger with menu items in case of smaller screen devices */}
					<Burger onClick={openSideMenu} className="Burger">
						<FiMenu />
					</Burger>
				</>
			</nav>
			{/* side menu to show only on devices smaller than desktop */}
			<SideMenu
				items={[...links, ...buttons]}
				onClose={closeSideMenu}
				className={`SideMenu ${menuOpened && 'SideMenu_opened'} ${
					menuClosing && 'SideMenu_closing'
				}`}
			/>
		</>
	)
}

export default React.memo(Navbar)
