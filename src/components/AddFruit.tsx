import { Fruit } from '../models/Fruit'
import  { useState } from 'react'
import { fixUrl } from '../utils'

const AddFruit = () => {
	const [name, setName] = useState<string>('')
	const [price, setPrice] = useState<string>('')

	// Saknas: validering! Kontrollera om värdena är korrekta
	const fruit: Fruit = {
		name: name,
		price: Number(price)
	}

	// fungerar som "Computed properties"
	const nameIsValid = fruit.name !== ''
	const priceIsValid = fruit.price >= 0
	const formIsValid = nameIsValid && priceIsValid
	// Detta "måste" kompletteras med användarvänliga felmeddelanden

	const handleAddFruit = () => {
		fetch(fixUrl('/fruits'), {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(fruit)
		})
		// Använd try/catch och await om du behöver hantera eventuella fel
	}
	
	return (
		<div className="add-fruit">
			<h3> Enter the fruit information </h3>
			<input type="text" placeholder="Fruit name"
				onChange={event => setName(event.target.value)}
				value={name} />
			<input type="text" placeholder="Price"
				onChange={event => setPrice(event.target.value)}
				value={price} />
			<button disabled={!formIsValid} onClick={handleAddFruit}> Ok add the fruit! </button>
		</div>
	)
}

export default AddFruit
