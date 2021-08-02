//react import
import React from 'react'
//component imports
import { VideoBackground, Layer, Button } from '../custom/components'

const videoArray = ['/videos/PLANE_1920x480.mp4']

function Top() {
	return (
		<section name="TopScreen" id="TopScreen" className="Screen">
			<VideoBackground videoArray={videoArray} />
			<Layer id="TopScreen_layer">
				<h1 id="MainTitle">SÚMESE AL CAMBIO</h1>
				<h2 id="MainSubtitle">
					Use sus criptomonedas en todo el mundo
				</h2>
				<Button />
			</Layer>
		</section>
	)
}

export default React.memo(Top)
