/* ** Affiche l'entête de la page.
* Contient une photo de profil, le nom, prénom et poste de l'utilisateur.
* Peut contenir une liste de tags. Permet d'affiner la catégorie du poste.
* Importe le composant Contact.
* */

import React from  'react'
import Image from 'next/image'
import Contact from './contact'
import {identity} from '../datas/input'

class Header extends React.Component {

	/* ** Constructeur.
	* */
	constructor(props) {
		super(props)

		this.pp = identity.pp
		this.name = identity.name + ' ' + identity.lastname
		this.imgalt = 'Photo de ' + this.name
		this.job = identity.job
	}

	/* ** Rendu du composant.
	* 
	* @return JSX Un élément JSX pour l'affichage.
	* */
	render() {
		return (
			<header id='header'>
				<div className='content'>
					<div id='identity'>
						<Image src={this.pp} alt={this.imgalt} width='155' height='155' placeholder="blur" />
						<h1>{this.name}</h1>
						<h2>{this.job.title}</h2>
						<h3>
							{this.job.tags.map((tag) => <strong key={tag}>{tag}</strong>)}
						</h3>
					</div>
					<div id='contact-header'>
						<Contact cssClass='contact-header' />
					</div>
				</div>
			</header>
		)
	}
}

export default Header
