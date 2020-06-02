import React from 'react'

import { Container, CardGroup } from 'reactstrap'

import Switch from './switch'


const EventList = ({events, category}) => (
	<Container>
		<CardGroup>
			<Switch category={category} events={events} />
		</CardGroup>
	</Container>
)
export default EventList
