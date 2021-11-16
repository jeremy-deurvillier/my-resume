/* ** Affiche les compétences qu'on a.
* */

import React from 'react'
import {skills} from '../datas/input'

class Skill extends React.Component {

	/* ** Constructeur.
	* */
	constructor(props) {
		super(props)

		this.skills = skills
	}

	/* ** Construit la vue d'une compétence.
	* 
	* @param String categ La catégorie de la liste de compétences.
	* @param Array Une liste de compétences.
	*
	* @return Array Un liste d'élément JSX pour l'affichage.
	* */
	buildUI(categ, skills) {
		let list = [], item = 0, elm = null

		skills.map((skill) => {
			item ++

			elm = <strong key={categ + '-' + item} className={categ + ' tag'}>{skill}</strong>

			list.push(elm)
		})

		return list
	}

	/* ** Parcours les compétences.
	* Appel la méthode this.buildUI() pour construire la vue.
	* 
	* @return Array Un tableau d'élément JSX pour l'affichage.
	* */
	forEachEduc() {
		let list = []
		let categ = null, skill = null
		let elm = null

		for (categ in this.skills) {
			elm = this.buildUI(categ, this.skills[categ])

			list.push(elm)
		}

		return list
	}

	/* ** Rendu du composant.
	*
	* @return JSX Un élément JSX pour l'affichage.
	* */
	render() {
		return (<>{this.forEachEduc()}</>)
	}
}

export default Skill
