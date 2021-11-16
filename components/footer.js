/* ** Affiche le footer du site.
* Contient les scripts JS.
* Présent sur toutes les pages du site.
* */

import React from 'react'

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
		return (<>
			<footer id='footer'>
				<p>
					<span>
						<a href="/legal-notice">Mentions légales</a>
					</span>
					<span>
						Copyright 2021 - Jérémy Deurvillier
					</span>
				</p>
			</footer>
			{this.children}
		</>)
	}
}

export default Footer
