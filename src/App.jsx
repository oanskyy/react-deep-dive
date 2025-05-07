import CoreConcepts from "./components/CoreConcepts"
import Header from "./components/Header/Header"
import TabButton from "./components/TabButton"
import { CORE_CONCEPTS } from "./data"

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
				<section id='examples'>
					<h2>Examples</h2>
					<menu>
						<TabButton>Components</TabButton>
						<TabButton>JSX</TabButton>
						<TabButton>Props</TabButton>
						<TabButton>State</TabButton>
					</menu>
				</section>
			</main>
		</div>
	)
}

export default App
