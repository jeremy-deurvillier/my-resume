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

			list.push(
				<li key={item}>
					<i className='material-icons'>check</i>
					{activity.activity}
				</li>
			)
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
		let dates = (xp.dates[0] === xp.dates[1])?xp.dates[0]:xp.dates[0] + ' - ' + xp.dates[1]

		return (<div key={key} className='single-job'>
			<p className='job-title'>{xp.job}</p>
			<p className='job-infos'>
				<span className='job-dates'>
					<i className='material-icons'>date_range</i>
					{dates}
				</span>
				<span className='company-name'>
					<i className='material-icons'>work</i>
					{xp.company}
				</span>
				<span className='company-location'>
					<i className='material-icons'>location_on</i>
					{xp.location}
				</span>
			</p>
			<ul className='activities-list'>
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
		return <>{this.forEachXP()}</>
	}
}

export default Experience
