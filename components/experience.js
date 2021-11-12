/* ** Affiche la liste des expériences professionnelles.
* */

import React from 'react'
import {xp} from '../datas/input'

class Experience extends React.Component {

	/* ** Constructeur.
	* */
	constructor(props) {
		super(props)

		this.xp = xp
	}

	/* ** Construit la vue des activités effectuées lors de chaque expérience professionnelle.
	*
	* @param activities Array Un tableau des activités effectuées.
	*
	* @return Array Un tableau des activités pour l'affichage.
	* */
	activityUI(activities) {
		let list = [], item = 0
	
		activities.map((activity) => {
			item ++

			list.push(<li key={item}>{activity.activity}</li>)
		})

		return list
	}

	/* ** Construit la vue d'une expérience.
	* 
	* @param xp Object Une expérience à formater pour l'affichage.
	* @param key Integer Un nombre entier correspondant à la clé unique du composant JSX.
	*
	* @return JSX Un élément JSX pour l'affichage.
	* */
	buildUI(xp, key) {
		return (<div key={key}>
			<p className='job-title'>{xp.job}</p>
			<p className='job-infos'>
				<span>{xp.company}</span>
				<span>{xp.dates}</span>
				<span>{xp.location}</span>
			</p>
			<ul>
				{this.activityUI(xp.activities)}
			</ul>
		</div>)
	}

	/* ** Parcours la liste des expériences.
	* Appel la méthode this.buildUI() pour construire la vue à affiché.
	*
	* @return Array Un tableau d'éléments JSX pour l'affichage.
	* */
	forEachXP() {
		let item = this.xp.length - 1
		let component = null, list = []

		for (; item > -1; item --) {
			component = this.buildUI(this.xp[item], item)

			list.push(component)
		}

		return list
	}

	/* ** Rendu du composant.
	*
	* @return JSX Un élément JSX pour l'affichage.
	* */
	render() {
		return <div>{this.forEachXP()}</div>
	}
}

export default Experience
