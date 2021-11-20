/* ** Layout complet de l'application.
* */

import React from 'react'
import Head from 'next/head'
import Footer from './footer'
import {identity} from '../datas/input'

class Layout extends React.Component {

	/* ** Constructeur.
	* */
	constructor(props) {
		super(props)

		this.title = props.title
		this.children = props.children
	}

	/* ** Rendu du composant.
	*
	* @return JSX Un élément JSX pour l'affichage.
	* */
	render() {
		return (<>
			<Head>
				<meta charSet='utf-8' />
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
				
				<title>{identity.name + ' ' + identity.lastname} - {this.title}</title>
				
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
				<link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
				<link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap' />
				<link rel='stylesheet' href='/css/style.css' />
				<link rel='stylesheet' href='/css/medium-style.css' />
			</Head>
			<main id='main'>{this.children}</main>
			<Footer>
			</Footer>
		</>)
	}
}

export default Layout
