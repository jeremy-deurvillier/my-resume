/* ** Affiche le footer du site.
* Contient les scripts JS.
* Présent sur toutes les pages du site.
* */

import React from 'react'
import {identity} from '../datas/input'
import os from 'os'

class Footer extends React.Component {
	/* ** 
	* */
	constructor(props) {
		super(props)

		this.children = props.children
	}

	/* ** Rendu du composant.
	* 
	* @return JSX Un élément JSX pour l'affichage.
	* */
	render() {
		const poweredby = <>Powered by <a href="https://jeremy-deurvillier.com" target="_blank">Jérémy Deurvillier</a></>

		return (<>
			<footer id='footer'>
				<p>
					<span>
						<a href="/" className="footer-link">Accueil</a>&nbsp;
						<a href="/legal-notice" className="footer-link">Mentions légales</a>
					</span>
					<span>
						Copyright 2021 -&nbsp;
						{(os.hostname() === 'my-resume-with-next-js.netlify.app')?poweredby:identity.name + ' ' + identity.lastname}
					</span>
				</p>
			</footer>
			{this.children}
		</>)
	}
}

export default Footer
