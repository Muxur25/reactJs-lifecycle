import "./hero.scss"

const Hero = () => {
	return (
		<div className='hero'>
			<div className='hero__info'>
				<h2>FIND MOVIES</h2>
				<h1>TV shows and more</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat sunt necessitatibus veritatis labore provident similique neque praesentium debitis maiores. Nihil consectetur, veniam labore magnam ab similique optio perferendis error earum.
				</p>
				<button className='btn btn-primary'>Details</button>
			</div>
			<div className='hero__movie'>
				<img src='/image1.svg' alt='img' />

				<div className='hero__movie-descr'>
					<h2>Madellin</h2>	
					<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, sint id dolore at autem iusto iure! Sit provident id, explicabo, qui tenetur totam eius nemo dolores amet eveniet quod earum?</p>
					<div>
						<button className='btn btn-secondary'>Radnom movie</button>
						<button className='btn btn-primary'>Details</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero