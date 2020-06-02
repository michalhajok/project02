import React, { useState, useEffect } from 'react'

import { Container } from 'reactstrap'
import { Router } from '@reach/router'

import Home from './pages/home'
import About from './pages/about'
import CreateEvent from './pages/createEvent'
import EventPage from './pages/eventPage'
import UpdatePage from './pages/updatePage'

const NotFound = () => <p>Sorry, nothing here</p>

function App() {
  const [events, setEvents] = useState([])
  const [category, setCategory] = useState("all")

  useEffect(() => {
    fetch('/database.json')
    .then(response => response.json())
    .then(data => {
      setEvents(data)
    })
  }, [events.title])
  return(
      <Container className="themed-container" fluid={true}>
        <Router>
          <Home path="/" category={category} setCategory={setCategory} events={events} />
          <About path='/about' />
          <CreateEvent path="/event/create" events={events} setEvents={setEvents} />
          <EventPage path="/event/:id" events={events}/>
          <UpdatePage path="/event/:id/update" events={events} setEvents={setEvents} />
          <NotFound default />
        </Router>
      </Container>
    )

}

export default App;
