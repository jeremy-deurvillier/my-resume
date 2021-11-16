/* ** Affiche les formations qu'on a fait.
* */

import React from 'react'
import {education} from '../datas/input'

class Education extends React.Component {
	/* ** Constructeur.
	* */
	constructor(props) {
		super(props)

		this.educ = education
	}

	/* ** Construit la vue d'une formation.
	* 
	* @param educ Object Une formation à formater pour l'affichage.
	* @param key Integer Un nombre entier correspondant à la clé unique du composant JSX.
	*
	* @return JSX Un élément JSX pour l'affichage.
	* */
	buildUI(educ, key) {
		return (<div key={key} className='single-diploma'>
			<p className='diploma-name'>
				{educ.diploma} {educ.title}
			</p>
			<p className='diploma-infos'>
				<span>
					<i className='material-icons'>date_range</i>
					{educ.date}
				</span>
				<span>
					<i className='material-icons'>school</i>
					{educ['training-site']}
				</span>
				<span>
					<i className='material-icons'>location_on</i>
					{educ.location}
				</span>
			</p>
		</div>)
	}

	/* ** Parcours la liste des formations.
	* Appel la méthode this.buildUI() pour construire la vue à affiché.
	*
	* @return Array Un tableau d'éléments JSX pour l'affichage.
	* */
	forEachEduc() {
		let item = this.educ.length - 1
		let component = null, list = []

		for (; item > -1; item --) {
			component = this.buildUI(this.educ[item], item)

			list.push(component)
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

export default Education
