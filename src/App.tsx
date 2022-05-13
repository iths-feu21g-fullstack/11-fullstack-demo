import { useState } from 'react'
import './App.css'
import { fixUrl } from './utils'
import { Link, Route, Routes } from 'react-router-dom'
import Start from './components/Start'
import AllFruits from './components/AllFruits'
import AddFruit from './components/AddFruit'

function App() {

	return (
		<div className="app">
			<header>
				<h2>My awesome fullstack app</h2> 
				<nav>
					<Link to ="/"> Start </Link>
					<Link to="/allfruits"> All fruits </Link>
					<Link to="/addnew"> Add a new fruit </Link>
				</nav>
			</header>
			<main>
				<Routes>
					<Route path="/" element={<Start />} />
					<Route path="/allfruits" element={<AllFruits />} />
					<Route path="/addnew" element={<AddFruit />} />
					<Route path="/*" element={<FourOhFour />} />
				</Routes>
				
			</main>
		</div>
	)
}
function FourOhFour() {
	return (<p> 404 not found!! </p>)
}

export default App
