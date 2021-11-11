/* ** Point d'entrée de l'application.
* */

import Section from '../components/section'
import Header from '../components/header'
import Bio from '../components/biography'
import XP from '../components/experience'
import Education from '../components/education'
import Skill from '../components/skill'
import Contact from '../components/contact'

export default function Home() {
	return (<>
		<Header />
		<Section cssClass='about' title='A propos'>
			<Bio />
		</Section>
		<Section cssClass='experiences' title='Expériences'>
			<XP />
		</Section>
		<Section cssClass='education' title='Formation'>
			<Education />
		</Section>
		<Section cssClass='skills' title='Compétences'>
			<Skill />
		</Section>
		<Section cssClass='contact' title='Contact'>
			<Contact />
		</Section>
	</>)
}
