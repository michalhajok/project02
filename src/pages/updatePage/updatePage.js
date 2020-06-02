import React from 'react'

import { useParams } from '@reach/router'

import Nav from './../../components/nav'

const UpdatePage = ({ events, setEvents}) => {

	const param = useParams();

	return (
		<div>
			<Nav />
			<div>
				<form>
				<label>
					<input type="text"/>
				</label>
				<label>
					<input type="text"/>
				</label>
				<label>
					<input type="text"/>
				</label>
				<label>
					<input type="text"/>
				</label>
				<label>
					<input type="text"/>
				</label>
				<label>
					<input type="text"/>
				</label>
				<label>
					<input type="text"/>
				</label>
				<label>
					<input type="text"/>
				</label>
				<label>
					<input type="text"/>
				</label>
				<label>
					<input type="text"/>
				</label>
				</form>
			</div>
		</div>
	)
}

export default UpdatePage
