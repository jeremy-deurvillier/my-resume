/* ** TODO :
* 1 - Header composé d'une photo, nom, prénom et profession.
* 	* Le header rétrécit au scroll, mais reste toujours en haut de l'écran.
* 2 - Une section contenant ma biographie (histoire, a propos).
* 	* N'est pas afficher si l'utilisateur demande une impression.
* 3 - Séparation en 2 de la page.
* 4 - Côté gauche :
* 	- Section 1 : infos de contact
* 	- Section 2 : * infos  persos
* 	- Section 3 : * centres d'intérêts
* 	- Section 4 : Nuage de tags (affiché par défaut, masqué à l'impression)
* 	- Section 5 : liens divers
*
* 	* * Infos masqué par défaut. S'affiche quand l'utilisateur demande une impression.
* 5 - Côté droit :
* 	- Section 1 : Expériences
* 	- Section 2 : Formation
* 	- Section 3 : Compétences
*
* -----------------------------------------------------------------------
*
* * "Pages" / modules :
* 	- head
* 	- biography
* 	- contact
* 	- infosPerso
* 	- hobbies
* 	- tagscloud
* 	- otherslinks
* 	- experiences
* 	- education
* 	- skills
*
* * Composants :
* 	- header
* 	- footer
* 	- liElm
* 	- experience
* 	- school
* 	- skill
* */

import Head from '../components/head'

export default function Home() {
	return (<>
		<Head 
			srcimg='/../img/mon-image.png'
			name='Jérémy Deurvillier' 
			job='Développeur Web' 
			tags='React | Node | Laravel' />
	</>)
}

