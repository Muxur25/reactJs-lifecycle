class MovieServices {
	_api_url = 'https://api.themoviedb.org/3'
	_api_key = 'api_key=6a08c92d3759b55bb33190ae86926505'
	_api_leanguage = 'language=en-US'
	_api_image = 'https://image.tmdb.org/t/p/original'
	_page = 1

	getSorov = async url => {
		const sorov = await fetch(url)
		if (!sorov.ok) {
			throw new Error(`Sorovda muammo bor ${url}`)
		}
		return await sorov.json()
	}

	getPopular = async () => {
		return await this.getSorov(
			`${this._api_url}/movie/popular?${this._api_leanguage}&${this._api_key}`
		)
	}

	getReyting = async (page = this._page) => {
		const response = await this.getSorov(
			`${this._api_url}/movie/top_rated?${this._api_leanguage}&page=${page}&${this._api_key}`
		)
		return response.results.map(movie => this._movieFormat(movie))
	}

	getDetail = async id => {
		const detail = await this.getSorov(
			`${this._api_url}/movie/${id}?${this._api_leanguage}&${this._api_key}`
		)
		return this._movieFormat(detail)
	}

	getRandom = async () => {
		const res = await this.getPopular()
		const movie = res.results[Math.floor(Math.random() * res.results.length)]
		return this._movieFormat(movie)
	}

	_movieFormat = movie => {
		return {
			id: movie.id,
			name: movie.original_title,
			description: movie.overview,
			rasm: `${this._api_image}${movie.poster_path}`,
			release_date: movie.release_date,
			vote_average: movie.vote_average.toFixed(1),
		}
	}
}

export default MovieServices
