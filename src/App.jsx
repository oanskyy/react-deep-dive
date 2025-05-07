import { CORE_CONCEPTS } from "./data"
import reactImg from "./assets/react-core-concepts.png"

export function Header() {
	return (
		<header>
			<img src={reactImg} alt='Stylized atom' />
			<h1>React Essentials</h1>
			<p>
				Fundamental React concepts you will need for almost any app you are
				going to build!
			</p>
		</header>
	)
}

export function CoreConcepts(props) {
	return (
		<li>
			<img src={props.image} alt={props.title} />
			<h3>{props.title}</h3>
			<p>{props.description}</p>
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
						<CoreConcepts
							img={CORE_CONCEPTS[0].image}
							title={CORE_CONCEPTS[0].title}
							description={CORE_CONCEPTS[0].description}
						/>
					</ul>
				</section>
			</main>
		</div>
	)
}

export default App
