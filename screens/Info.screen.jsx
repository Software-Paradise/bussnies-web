//react import
import React from 'react'
//component imports
import { Button } from '../custom/components'

function Info() {
	return (
		<section name="InfoScreen" id="InfoScreen" className="Screen">
			<h1 id="InfoScreen_mainTitle">¿Qué es AlySystem?</h1>
			<p id="InfoScreen_paragraph">
				Somos una empresa dedicada al desarrollo de aplicaciones
				diseñadas con el propósito de darle usabilidad a las
				criptomonedas. Parte de nuestros objetivos es que una mayor
				cantidad de personas puedan acceder a las ventajas que ofrecen
				las finanzas digitales. Del mismo modo fomentamos el uso de
				criptomonedas en nuestro día a día de manera segura y confiable.
			</p>
			<div id="InfoScreen_buttonContainer">
				<Button id="VisionButton" variant="filled" onClick={null}>
					Visión
				</Button>
				<Button id="MisionButton" variant="filled" onClick={null}>
					Misión
				</Button>
			</div>
		</section>
	)
}

export default React.memo(Info)
