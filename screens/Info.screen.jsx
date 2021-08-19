//react import
import React, { useState } from 'react'
//component imports
import { Button } from '../custom/components'

function Info() {
	const [visionOpen, setVisionOpen] = useState(false)
	const [visionClosing, setVisionClosing] = useState(false)

	const [misionOpen, setMisionOpen] = useState(false)
	const [misionClosing, setMisionClosing] = useState(false)

	const switchVisionOpen = _ => {
		setVisionOpen(!visionOpen)
		if (visionOpen) {
			setVisionClosing(true)
			setTimeout(() => {
				setVisionClosing(false)
			}, 300)
		}
	}

	const switchMisionOpen = _ => {
		setMisionOpen(!misionOpen)
		if (misionOpen) {
			setMisionClosing(true)
			setTimeout(() => {
				setMisionClosing(false)
			}, 300)
		}
	}

	return (
		<section name="InfoScreen" id="InfoScreen" className="Screen">
			<h2 id="InfoScreen_mainTitle">¿Qué es AlySystem?</h2>
			<p id="InfoScreen_paragraph">
				Somos una empresa dedicada al desarrollo de aplicaciones
				diseñadas con el propósito de darle usabilidad a las
				criptomonedas. Parte de nuestros objetivos es que una mayor
				cantidad de personas puedan acceder a las ventajas que ofrecen
				las finanzas digitales. Del mismo modo fomentamos el uso de
				criptomonedas en nuestro día a día de manera segura y confiable.
			</p>
			<div id="InfoScreen_buttonContainer">
				<Button
					id="VisionButton"
					variant="filled"
					onClick={switchVisionOpen}>
					Visión
				</Button>
				<Button
					id="MisionButton"
					variant="filled"
					onClick={switchMisionOpen}>
					Misión
				</Button>
			</div>
			<article
				id="VisionModal"
				className={`InfoModal ${visionOpen && 'visible'} ${
					visionClosing && 'closing'
				}`}
				onClick={switchVisionOpen}>
				<h3>Visión</h3>
				<p>
					Ser una empresa reconocida por su innovación en tecnología
					blockchain y creadora de herramientas financieras con las
					cuales se pueden hacer transacciones seguras entre personas
					en todo el mundo sin necesidad de intermediarios.
				</p>
			</article>
			<article
				id="MisionModal"
				className={`InfoModal ${misionOpen && 'visible'} ${
					misionClosing && 'closing'
				}`}
				onClick={switchMisionOpen}>
				<h3>Misión</h3>
				<p>
					Desarrollar sistemas y aplicaciones mediante la tecnología
					blockchain que promuevan el uso de criptomonedas a nivel
					nacional e internacional.
				</p>
			</article>
		</section>
	)
}

export default React.memo(Info)
