import React from 'react'

class ErrorBoundry extends React.Component {
	state = {
		error: false,
	}

	componentDidCatch() {
		this.setState({ error: true })
	}

	render() {
		if (this.state.error) {
			return <div>Someting weng wrong</div>
		}
		return this.props.children
	}
}

export default ErrorBoundry
