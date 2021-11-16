/* ** Affiche la partie "A propos" du site.
* */

import React from 'react'
import {about} from '../datas/input'

class Biography extends React.Component {

	/* ** Constructeur.
	* */
	constructor(props) {
		super(props)

		this.about = about
	}

	/* ** Construit les paragraphes du composant.
	* Parcours le tableau this.about pour récupérer le contenu des paragraphes.
	*
	* @return Array Un tableau contenant les paragraphes à afficher.
	* */
	paragraphs() {
		let paragraphs = []
		let item = 0, content = null

		this.about.map((content) => {
			item ++

			paragraphs.push(<p key={item}>{content}</p>)
		})

		return paragraphs
	}

	/* ** Rendu du composant.
	* 
	* @return JSX Un élément JSX pour l'affichage.
	* */
	render() {
		return (<>{this.paragraphs()}</>)
	}
}

export default Biography
