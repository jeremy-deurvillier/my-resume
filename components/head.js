import React from  'react'
import Image from 'next/image'

class Head extends React.Component {
	render() {
		let imgsrc = this.props.srcimg
		let name = this.props.name
		let imgalt = 'Photo de ' + name
		let job = this.props.job
		let tags = this.props.tags

		return (
			<header>
				<Image src={imgsrc} alt={imgalt} layout='fill' />
				<h1>{name}</h1>
				<h2>{job}</h2>
				<h3>{tags}</h3>
			</header>
		)
	}
}

export default Head
