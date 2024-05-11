import PropTypes from 'prop-types'
import React from 'react'
import ErrorComponent from '../error/error'
import MovieServices from '../services/movie-sevices'
import Spinner from '../spinner/spinner'
import './hero.scss'

class Hero extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			movie: {},
			loading: true,
			error: false,
		}
	}

	componentDidMount() {
		this.getRamdom()
	}

	getRamdom = () => {
		const hell = new MovieServices()
		hell
			.getRandom()
			.then(data => this.setState({ movie: data }))
			.finally(() => this.setState({ loading: false }))
			.catch(() => this.setState({ error: true }))
	}

	render() {
		const { movie, error, loading } = this.state
		const loadingContent = loading ? <Spinner /> : null
		const errorContent = error ? <ErrorComponent /> : null
		const content = !(loadingContent || errorContent) ? (
			<Content movie={movie} />
		) : null

		return (
			<div className='app__hero'>
				<div className='app__hero-info'>
					<h2>FIND MOVIES</h2>
					<h1>TV shows and more</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
						sapiente sit placeat minus dolorum, magnam, tempora quas neque
						quasi, sequi odit doloremque velit saepe autem facilis! Laudantium
						consequatur accusantium mollitia.
					</p>
					<button className='btn btn__primary'>DETAILS</button>
				</div>
				{content}
				{loadingContent}
				{errorContent}
			</div>
		)
	}
}

export default Hero

const Content = ({ movie }) => {
	return (
		<div className='app__hero-moive'>
			<img src={movie.rasm} />
			<div className='app__hero-moive__descr'>
				<h2>{movie.name}</h2>
				<p>
					{movie.description && movie.description.length > 200
						? movie.description.slice(0, 200)
						: movie.description}
					...
				</p>
				<div>
					<button className='btn btn__secondary'>RANDOM MOVIE</button>
					<button className='btn btn__primary'>DETAILS</button>
				</div>
			</div>
		</div>
	)
}

Content.propTypes = {
	movie: {
		description: PropTypes.string,
		name: PropTypes.string,
		id: PropTypes.number,
	},
}
