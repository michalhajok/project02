import React from 'react'

import { Card ,Col , CardBody, CardImg, CardTitle, CardText } from 'reactstrap';

import { Link } from '@reach/router'

const Event = ({event}) => {
	return (
		<Col xs="4">
			<Link to={"/event/"+ event.id}>
				<Card>
					<CardImg top height="250px" width="100%" src={event.cover_url} alt="" />
					<CardBody>
						<CardTitle>{event.title}</CardTitle>
					</CardBody>
				</Card>
			</Link>
		</Col>
	)
}

	export default Event
