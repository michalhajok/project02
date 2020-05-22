import React from 'react'

import { Card ,Col , CardBody, CardImg, CardTitle, CardText } from 'reactstrap';

const Event = ({event}) => {
	return (
		<Col xs="4">
			<Card>
				<CardImg top height="250px" width="100%" src={event.cover_url} alt="" />
				<CardBody>
					<CardTitle>{event.title}</CardTitle>
				</CardBody>
			</Card>
		</Col>
	)
}

	export default Event
