import './row-movies-item.scss'

const RowMoviesItem = ({ movie, onOpen }) => {
	return (
		<div className='list__item' onClick={() => onOpen(movie.id)}>
			<img src={movie.rasm} alt={movie.name} />
			<h2>
				{movie.name.length > 15 ? `${movie.name.slice(0, 15)}...` : movie.name}
			</h2>
			<div className='list__item-descr'>
				<p>{movie.release_date}</p>
				<div className='dot' />
				<p>{movie.vote_average}m</p>
			</div>
		</div>
	)
}

export default RowMoviesItem
