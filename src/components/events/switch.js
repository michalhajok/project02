import React from 'react'

import Event from './event'

const Switch = ({events, category}) => {
	switch (category) {
		case "all":
			return(
				events.map((event,index)=>(
					<Event key={"event " + index} event={event}/>
				))
			)
		case "concert":
			return(
				events.map((event,index)=>(
					event.category === "concert"?
						<Event key={"event " + index} event={event}/>
						:
						null
				))
			)
		case "movie":
			return(
				events.map((event,index)=>(
					event.category === "movie"?
						<Event key={"event " + index} event={event}/>
						:
						null
				))
			)
		case "event":
			return(
				events.map((event,index)=>(
					event.category === "event"?
						<Event key={"event " + index} event={event}/>
						:
						null
				))
			)
		default:
			break;
	}
}

export default Switch
