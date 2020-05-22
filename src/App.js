import React, { Component } from 'react';

import { Container } from 'reactstrap'

import EventList from './events/eventList'
import Filter from './filter/filter'

class App extends Component{
  state={
    events:[],
    category:"all"
  }
  componentDidMount = () =>{
    fetch('https://extendsclass.com/api/json-storage/bin/bfefdbb')
    .then(response => response.json())
    .then(data => {
      this.setState({
        events: data
      })
      console.log(this.state.events)
    })
  }
  handleCategory=(event)=>{
    this.setState({
      category:event
    })
  }

  render(){
    const { events, category } = this.state;
    return(
      <Container className="themed-container" fluid={true}>
        <Filter category={category} setCategory={this.handleCategory} />
        <EventList category={category} events={events} />
      </Container>
    )
  }
}

export default App;
