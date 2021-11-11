/* ** Affiche une liste d'éléments de contact (par exemple: téléphone, adresse mail ...).
* Prends un nom de classe CSS comme props, utile en fonction de l'emplacement du composant.
* */

import React from 'react'
import {contact} from '../datas/input'

class Contact extends React.Component {

	/* ** Constructeur.
	* */
	constructor(props) {
		super(props)

		this.cssClass = props.cssClass?props.cssClass:'contact-list'
		this.contactList = contact
	}

	/* ** Parcours la liste des éléments de contact.
	* 
	* @return Array Un tableau d'éléments JSX.
	* */
	forEachContactList() {
		let list = []
		let item = 0, elm = null

		this.contactList.map((contact) => {
			item ++

			elm = <a href='mailto' key={item}>{contact}</a>

			list.push(elm)
		})

		return list
	}

	/* ** Rendu du composant.
	*
	* @return JSX Un élément JSX pour l'affichage.
	* */
	render() {
		return (
			<address className={this.cssClass}>
				{this.forEachContactList()}
			</address>
		)
	}
}

export default Contact
