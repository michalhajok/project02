import React from 'react'

import { Col, Jumbotron,Label, InputGroup, Input, Button } from 'reactstrap'

const Filter = ({category, setCategory}) => {
	return (
		<Jumbotron>
			<Col xs="4">
				<InputGroup htmlFor="">
					<Label for="title">
						<Button color="danger">Tytuł:</Button>
					</Label>
					<Input type="text" id="title"/>
				</InputGroup>
			</Col>
			<Col xs="4">
				<InputGroup>
					<Label color="success" for="category">
						<Button color="danger">Kategoria:</Button>
					</Label>
					<Input type="select" id="category" value={category} onChange={(event)=>{setCategory(event.target.value)}}>
						<option value="all">Wszystkie</option>
						<option value="concert">Koncerty</option>
						<option value="movie">Filmy/spektakle</option>
						<option value="event">Wydarzenia stacjonarne</option>
					</Input>
				</InputGroup>
			</Col>
			<Col xs="4"></Col>
		</Jumbotron>
	)
}

export default Filter
