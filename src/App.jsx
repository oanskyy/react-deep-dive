import CoreConcepts from "./components/CoreConcepts"
import Header from "./components/Header/Header"
import TabButton from "./components/TabButton"
import { CORE_CONCEPTS, EXAMPLES } from "./data"
import { useState } from "react"

function App() {
	const [activeTab, setActiveTab] = useState("components")

	const handleTabClick = selectedTab => {
		setActiveTab(selectedTab)
		console.log(`Active tab: ${activeTab}`)
		// This will log the previous state value, not the updated one
		console.log(`Active tab: ${selectedTab}`)
	}

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
						<TabButton onClick={() => handleTabClick("components")}>
							Components
						</TabButton>
						<TabButton onClick={() => handleTabClick("jsx")}>JSX</TabButton>
						<TabButton onClick={() => handleTabClick("props")}>Props</TabButton>
						<TabButton onClick={() => handleTabClick("state")}>State</TabButton>
					</menu>
					{activeTab}
					<div id='tab-content'>
						<h3>{EXAMPLES[activeTab].title}</h3>
						<p>{EXAMPLES[activeTab].description}</p>
						<pre>
							<code>{EXAMPLES[activeTab].code}</code>
						</pre>
					</div>
				</section>
			</main>
		</div>
	)
}

export default App
