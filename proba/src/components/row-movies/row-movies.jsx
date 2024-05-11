import React from 'react'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'

import ErrorComponent from '../error/error'
import MovieInfo from '../movie-info/movie-info'
import RowMoviesItem from '../row-movies-item/row-movies-item'
import MovieServices from '../services/movie-sevices'
import Spinner from '../spinner/spinner'
import './row-movies.scss'

class RowMovies extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			open: false,
			movies: [],
			loading: true,
			error: false,
			movieId: null,
			page: 2,
		}
		this.moviesServis = new MovieServices()
	}

	onClose = () => {
		this.setState({ open: false })
	}

	onOpen = id => {
		this.setState({ open: true, movieId: id })
	}

	componentDidMount() {
		this.moviel(this.state.page)
	}

	moviel = page => {
		this.moviesServis
			.getReyting(page)
			.then(data => this.setState({ movies: [...this.state.movies, ...data] }))
			.finally(() => this.setState({ loading: false }))
			.catch(() => this.setState({ error: true }))
	}

	getPage = () => {
		this.setState(state => ({ page: this.state.page + 1 }))
		this.moviel(this.state.page)
	}

	render() {
		const { open } = this.state
		const { movies, loading, error, movieId } = this.state

		const errorEl = error ? <ErrorComponent /> : null
		const loadingCom = loading ? <Spinner /> : null

		return (
			<div className='app__rowmovie'>
				<div className='app__rowmovie-top'>
					<div className='app__rowmovie-top__title'>
						<img src='/tranding.svg' alt='' />
						<h1>Trending</h1>
					</div>
					<div className='hr' />
					<a href='#'>See more</a>
				</div>

				<div className='app__rowmovie-lists'>
					{errorEl}
					{loadingCom}
					{movies.map(movie => (
						<RowMoviesItem key={movie.id} movie={movie} onOpen={this.onOpen} />
					))}

					<div className='hello'>
						<button className=' btn btn-secondary' onClick={this.getPage}>
							See Moree
						</button>
					</div>
				</div>

				<Modal open={open} onClose={this.onClose}>
					<MovieInfo movieId={movieId} />
				</Modal>
			</div>
		)
	}
}

export default RowMovies
