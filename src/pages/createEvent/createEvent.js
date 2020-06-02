import React, { useState } from 'react'

import Nav from './../../components/nav'

const CreateEvent = ({events, setEvents }) => {
	const [title, setTitle] = useState("")
	const [description, setDescription] = useState("")
	const [cover_url, setCover_url] = useState("")
	const [price, setPrice] = useState(0)
	const [city, setCity] = useState("")
	const [category, setCategory] = useState("concert")
	const [address, setAddress] = useState("")
	const [date, setDate] = useState("")
	const [hour, setHour] = useState("")

	const addEvent = (e) =>{
		setEvents([...events, {
			title:title,
			description:description,
			cover_url:cover_url,
			price:price,
			city:city,
			category:category,
			address:address,
			date:date,
			hour:hour
		}])
		e.preventDefault();
	}
	return (
		<div>
			<Nav />
			<form onSubmit={addEvent}>
				<label>Tytuł:
					<input required={true} value={title} onChange={(e)=>setTitle(e.target.value)} type="text"/>
				</label>
				<label>Opis:
					<input required={true} value={description} onChange={(e)=>setDescription(e.target.value)} type="text"/>
				</label>
				<label>Link do zdjęcia:
					<input required={true} value={cover_url} onChange={(e)=>setCover_url(e.target.value)} type="text"/></label>
				<label>Cena:
					<input required={true} value={price} onChange={(e)=>setPrice(e.target.value)}  type="number"/>
				</label>
				<label>Miejscowość:
					<input required={true} value={city} onChange={(e)=>setCity(e.target.value)}  type="text"/>
				</label>
				<label>Kategoria:
					<select value={category} onChange={(e)=>{setCategory(e.target.value)}}>
						<option value="concert">Koncerty</option>
						<option value="movie">Filmy/Spektakle</option>
						<option value="events">Wydarzenia stacjonarne</option>
					</select>
				</label>
				<label>Address:
					<input required={true} value={address} onChange={(e)=>setAddress(e.target.value)}  type="text"/>
				</label>
				<label>Data:
					<input required={true} value={date} onChange={(e)=>setDate(e.target.value)}  type="text"/>
				</label>
				<label>Godzina rozpoczęcia:
					<input required={true} value={hour} onChange={(e)=>setHour(e.target.value)}  type="text"/>
				</label>
				<label><input type="submit" value="Dodaj"/></label>
			</form>
		</div>
	)
}

export default CreateEvent
