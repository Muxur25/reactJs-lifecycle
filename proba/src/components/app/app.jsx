import ErrorBoundry from '../ErrorBoundry/error-boundry'
import Header from '../header/header'
import Hero from '../hero/hero'
import RowMovies from '../row-movies/row-movies'
import MovieServices from '../services/movie-sevices'

const App = () => {
	const movies = new MovieServices()

	return (
		<div className='app'>
			<Header />
			<Hero />
			<ErrorBoundry>
				<RowMovies />
			</ErrorBoundry>
		</div>
	)
}

export default App
