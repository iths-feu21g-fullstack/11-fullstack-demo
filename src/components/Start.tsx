import { useState } from 'react'
import { fixUrl } from '../utils'
import { Fruit } from '../models/Fruit'

const Start = () => {
	const [maybeData, setMaybeData] = useState<Fruit[] | null>(null)

	const getData: (() => Promise<void>) = async () => {
		const response = await fetch(fixUrl('/fruits'))
		const data = await response.json()
		// om response.json misslyckas: kontrollera din URL, kontrollera om du får en HTML-sida
		setMaybeData(data)
	}

	return (
		<>
		<button onClick={getData}> Get data from API </button>
		<section> {maybeData ? (
			maybeData.map(fruit => (<p key={fruit.name}> {fruit.name} .. {fruit.price}€ </p>))
		) : 'No data yet...'} </section>

		<img src={fixUrl("/img/hamster-14.jpg")} />
		</>
		)
}

export default Start
