//react import
import React from 'react'
//next import
import Image from 'next/image'
//styles import
import styles from './Navbar.module.scss'
//component import
import Navlink from './Navlink.component'

/**
 * Custom navbar
 * @param
 * @returns {React.FunctionComponent}
 */
function Navbar({
	logo = null,
	logoPosition = 'left',
	links = null,
	leftLinks = Math.ceil(links.lenth / 2),
	rightLinks = Math.floor(links.lenth / 2),
	dark = false,
}) {
	return (
		<nav
			className={`${styles.Navbar} ${
				dark ? styles.darkTheme : styles.lightTheme
			}`}>
			{/* logo position is neither right or center, it is assumed to be left */}
			{logoPosition !== 'center' && logoPosition !== 'right' && (
				<>
					{logo && (
						<div className={styles.Navbar___logo}>
							<Image alt={logo?.alt} src={logo?.src} />
						</div>
					)}
					<div className={styles.Navbar___links}>
						{links?.map(({ label, to }, index) => (
							<>
								<Navlink
									key={`${index}_${label}`}
									label={label}
									to={to}
									className={`${
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
										style={{ width: '2px' }}
										className="bg-secondary-light h-auto z-50"
									/>
								)}
							</>
						))}
					</div>
				</>
			)}

			{/* logo position is center */}
			{logoPosition === 'center' && null}

			{/* logo position is right */}
			{logoPosition === 'right' && null}
		</nav>
	)
}

export default React.memo(Navbar)
