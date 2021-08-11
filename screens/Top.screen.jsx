//react import
import React, { useState } from 'react'
//component imports
import { VideoBackground, Layer, Button, Separator } from '../custom/components'
//icon imports
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const videoArray = ['/videos/alysystem 1920x1080.mp4']

function Top() {
	const [socialMediaVisible, setSocialMediaVisible] = useState(false)
	const [socialMediaClosing, setSocialMediaClosing] = useState(false)

	const switchSocialMediaVisible = _ => {
		setSocialMediaVisible(!socialMediaVisible)
		if (socialMediaVisible) {
			setSocialMediaClosing(true)
			setTimeout(() => {
				setSocialMediaClosing(false)
			}, 300)
		}
	}

	return (
		<section name="TopScreen" id="TopScreen" className="Screen">
			<VideoBackground videoArray={videoArray} />
			<Layer id="TopScreen_layer">
				<h1 id="MainTitle">SÚMESE AL CAMBIO</h1>
				<h2 id="MainSubtitle">
					Use sus criptomonedas en todo el mundo
				</h2>
				<div id="knowUs">
					<Button
						id="knowUs_button"
						variant="filled"
						onClick={switchSocialMediaVisible}>
						Conózcanos más
					</Button>
					<div
						id="knowUs_socialMedia"
						className={`${socialMediaVisible && 'visible'} ${
							socialMediaClosing && 'closing'
						}`}>
						<a
							href="https://www.facebook.com/AlySystemTechnology"
							className="socialMedia_link"
							target="_blank"
							rel="noopener noreferrer">
							<FiFacebook />
						</a>
						<a
							href="https://www.instagram.com/alysystem_1/?hl=es"
							className="socialMedia_link"
							target="_blank"
							rel="noopener noreferrer">
							<FiInstagram />
						</a>
						<a
							href="https://wa.link/yi8r8z"
							className="socialMedia_link"
							target="_blank"
							rel="noopener noreferrer">
							<FaWhatsapp />
						</a>
						<a
							href="https://twitter.com/AlySystem_1"
							className="socialMedia_link"
							target="_blank"
							rel="noopener noreferrer">
							<FiTwitter />
						</a>
						<a
							href="https://www.youtube.com/channel/UC-A2j357_2-G4FET7fVGm1g"
							className="socialMedia_link"
							target="_blank"
							rel="noopener noreferrer">
							<FiYoutube />
						</a>
					</div>
				</div>
				<Separator />
			</Layer>
		</section>
	)
}

export default React.memo(Top)
