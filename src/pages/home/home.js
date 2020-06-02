import React from 'react'

import Nav from './../../components/nav'
import Filter from './../../components/filter'
import EventList from './../../components/events'

const Home = ({category, setCategory, events}) => {
	return (
		<div>
			<Nav />
			<Filter path="/" category={category} setCategory={setCategory} />
        	<EventList path="/" category={category} events={events} />
		</div>
	)
}

export default Home
