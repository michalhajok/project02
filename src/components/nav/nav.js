import React from 'react'

import { Link } from '@reach/router'
import './nav.css'

const Nav = () => {
	return (
		<div className="nav">
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/event/create">Create event</Link>
				</li>
			</ul>
		</div>
	)
}

export default Nav
