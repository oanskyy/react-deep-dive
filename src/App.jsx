import CoreConcepts from "./components/CoreConcepts"
import Header from "./components/Header"
import { CORE_CONCEPTS } from "./data"

export function CoreConcepts({ image, title, description }) {
	return (
		<li>
			<img src={image} alt={title} />
			<h3>{title}</h3>
			<p>{description}</p>
		</li>
	)
}

function App() {
	return (
		<div>
			<Header />
			<main>
				<section id='core-concepts'>
					<h2>Core Concepts</h2>
					<ul>
						{CORE_CONCEPTS.map(concept => {
							return (
								<CoreConcepts
									image={concept.image}
									title={concept.title}
									description={concept.description}
								/>
							)
						})}
					</ul>
				</section>
			</main>
		</div>
	)
}

export default App
