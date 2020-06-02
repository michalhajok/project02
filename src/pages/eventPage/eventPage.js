import React from 'react'

import { useParams, Link } from "@reach/router"

import Nav from './../../components/nav'

const EventPage = ({events}) => {

	const params = useParams();

	return (
		<div>
			<Nav/>
			<div>
				<figure><img src={events[params.id].cover_url} alt=""/></figure>
				<Link to={"/event/"+events[params.id].id+"/update"}>Update</Link>
				{events[params.id].title}
			</div>
		</div>
	)
}

export default EventPage
