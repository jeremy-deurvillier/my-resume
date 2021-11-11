/* ** Représente une section de page du site.
* Utile pour séparer correctement les différentes parties du site.
* */

import React from 'react'

class Section extends React.Component {

	/* ** Constructeur. 
	* */
	constructor(props) {
		super(props)

		this.cssClass = props.cssClass?props.cssClass:'no-css-class'
		this.title = props.title?props.title:'no title'
	}

	/* ** Compte le nombre d'enfant dans props.children.
	* Si des enfants sont trouvés, retourne un élément HML DIV contenant les-dits enfants.
	*
	* @return Array Un tableau contenant les enfants d'une Section.
	* */
	forEachChildren() {
		let children = []

		if (React.Children.count(this.props.children) > 0) {
			React.Children.forEach(this.props.children, (child) => children.push(child))
		}

		return children
	}
	
	/* ** Rendu du composant.
	*
	* @return JSX Un élément JSX pour l'affichage.
	* */
	render() {
		return (
			<section className={this.cssClass}>
				<h4>{this.title}</h4>
				<div>
					{this.forEachChildren()}
				</div>
			</section>
		)
	}
}

export default Section
