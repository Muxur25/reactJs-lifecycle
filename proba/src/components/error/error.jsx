import React from 'react'

import error from '../../../public/error.gif'

const ErrorComponent = () => {
	return (
		<div className='center'>
			<img src={error} alt='error' />
		</div>
	)
}

export default ErrorComponent
