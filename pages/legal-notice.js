/* ** Mentions légales du site.
* */

import React from 'react'
import Layout from '../components/layout'
import Section from '../components/section'
import {identity} from '../datas/input'
import os from 'os'

export default function LegalNotice() {
	return (<>
		<Layout title='Mentions légales'>
			<header id='header'>
				<div className='content'>
					<div id="legal-notice-header">
						<h1>Mentions légales</h1>
						<strong>En savoir plus sur le site {os.hostname()}.</strong>
					</div>
				</div>
			</header>
			<Section cssClass='publication' title='Édition et publication'>
				<p>
					<span className="entitle">
						Éditeur :
						<strong>
							{(os.hostname() === 'my-resume-with-next-js.netlify.app')?'Jérémy Deurvillier':identity.name + ' ' + identity.lastname}
						</strong>
					</span>
				</p>
				<p>
					Pour me contacter, veuillez utiliser les informations de contact fournies en&nbsp;
					<a href="/">page d'accueil</a>.
				</p>
			</Section>
			<Section cssClass='host' title='Hébergement'>
				<p>
					<span className="entitle">
						Hébergeur :
						<span>Netlify</span>
					</span>
					<span className="entitle">
						Adresse :
						<span>2325 3rd Street, Suite 296, San Francisco, California 94107</span>
					</span>
					<span className="entitle">
						Site Internet :
						<a href="https://www.netlify.com" target="_blank">https://www.netlify.com</a>
					</span>
				</p>
			</Section>
			<Section cssClass='credits' title='Crédits'>
				<p>
					La photo de profil est issue d'une&nbsp;
					<a href="https://commons.wikimedia.org/w/index.php?curid=76353307" target="_blank">photo d'Elon Musk</a>&nbsp;
					publié par&nbsp;
					<a href="https://commons.wikimedia.org/wiki/User:Duncan.Hull" target="_blank">Duncan.Hull</a> sur&nbsp;
					<a href="https://fr.wikipedia.org/wiki/Elon_Musk">Wikipédia</a>.
				</p>
				<p>
					L'image d'arrière-plan, représentant une montagne à été publier par&nbsp;
					<a href="https://unsplash.com/@rohittandon" target="_blank">Rohit Tandon</a> sur le site&nbsp;
					<a href="https://unsplash.com/photos/9wg5jCEPBsw" target="_blank">Unsplash</a>.
				</p>
				<p>
					Le code source du site est disponible sur&nbsp;
					<a href="https://github.com/jeremy-deurvillier/my-resume-with-next-js" target="_blank">GitHub</a>.
				</p>
			</Section>

		</Layout>
	</>)
}
