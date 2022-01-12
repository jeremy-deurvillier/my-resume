/* ** Importez vos donnnées ici.
* */
import mydata from './mydata-example.json'
import photo from '../public/img/Elon-Musk.png'

/* ** Les objets suivants contiennent les données à afficher.
* Modifiez-les en fonction de vos propres donées.
*
* Les données sont réparties par composant :
* 	- Header
* 	- Biography
* 	- Expériences
* 	- Education
* 	- Skills
* 	- Contact
* 	- Others
*
* Chaque composant a besoin de différentes données pour fonctionner.
* Les données nécessaires sont indiquées au début de chaque composant.
* */

/* ** HEADER **
* Données :
* 	- nom
* 	- prénom
* 	- age
* */
const identity = {
	pp: photo,
	name: mydata.identity.name,
	lastname: mydata.identity.lastname,
	age: 31,
	job: {
		title: mydata.job.title,
		tags: mydata.job.tags
	}
}

/* ** CONTACT **
* Données :
* 	- Un liste des différentes façons de vous contacter.
* */
const contact = mydata.contact

/* ** BIOGRAPHY **
* Données :
* 	- Un liste des paragraphes que vous voulez afficher pour vous décrire,
* 	indiquer votre parcours ou parler de vous.
* */
const about = mydata.about

/* ** EXPERIENCES **
* Données :
* 	- Une liste d'objets représentant vos expériences.
* */

const xp = mydata.experiences

/* ** EDUCATION **
* données :
* 	- Une liste d'objets représentant vos formations.
* */
const education = mydata.education

/* ** SKILLS **
* Données :
* 	- Un objet contenant des liste de mots représentants vos compétences.
* */
const skills = mydata.skills

/* ** OTHERS **
* Données :
* 	- Un objet contenant diverses informations suplémentaires 
* 	(par exemple vos passions, le nombre d'enfants ...).
* */
const others = mydata.others

/* ** EXPORTATION DES DONNÉES **
* NE PAS MODIFIER CE QUI SUIT.
* */
export {identity, contact, about, xp, education, skills, others}
