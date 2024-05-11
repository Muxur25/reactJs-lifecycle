import React from 'react'
import ErrorComponent from '../error/error'
import MovieServices from '../services/movie-sevices'
import Spinner from '../spinner/spinner'
import './movie-info.scss'

class MovieInfo extends React.Component {
	state = {
		loading: true,
		error: false,
		movie: {},
	}

	componentDidMount() {
		const { movieId } = this.props
		this.getMovies(movieId)
	}

	getMovies = movieId => {
		if (!movieId) {
			this.setState({ error: true })
		} else {
			const movie = new MovieServices()
			movie
				.getDetail(movieId)
				.then(data => this.setState({ movie: data }))
				.catch(() => this.setState({ error: true }))
				.finally(() => this.setState({ loading: false }))
		}
	}

	render() {
		const { movie, error, loading } = this.state
		const loadingContent = loading ? <Spinner /> : null
		const errorContent = error ? <ErrorComponent /> : null
		const content = !(loadingContent || errorContent) ? (
			<Content movie={movie} />
		) : null
		return (
			<>
				{content}
				{loadingContent}
				{errorContent}
			</>
		)
	}
}

export default MovieInfo

const Content = ({ movie }) => {
	return (
		<div className='movieinfo'>
			<img src={movie.rasm} alt={movie.name} />
			<div className='movieinfo__descr'>
				<h1>{movie.name}</h1>
				<p>{movie.description}</p>
			</div>
		</div>
	)
}
