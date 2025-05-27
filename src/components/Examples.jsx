import TabButton from "./TabButton"
import { EXAMPLES } from "../data"
import { useState } from "react"
import Section from "./Section"
export default function Examples() {
	const [activeTab, setActiveTab] = useState()

	const handleTabClick = selectedTab => {
		setActiveTab(selectedTab)
		console.log(`Active tab: ${activeTab}`)
		// This will log the previous state value, not the updated one
		console.log(`Active tab: ${selectedTab}`)
	}

	let tabContent = <p>Please select a tab.</p>
	if (activeTab) {
		tabContent = (
			<div id='tab-content'>
				<h3>{EXAMPLES[activeTab].title}</h3>
				<p>{EXAMPLES[activeTab].description}</p>
				<pre>
					<code>{EXAMPLES[activeTab].code}</code>
				</pre>
			</div>
		)
	}

	return (
		<Section id='examples'>
			<h2>Examples</h2>
			<menu>
				<TabButton
					onClick={() => handleTabClick("components")}
					isActive={activeTab === "components"}
				>
					Components
				</TabButton>
				<TabButton
					onClick={() => handleTabClick("jsx")}
					isActive={activeTab === "jsx"}
				>
					JSX
				</TabButton>
				<TabButton
					onClick={() => handleTabClick("props")}
					isActive={activeTab === "props"}
				>
					Props
				</TabButton>
				<TabButton
					onClick={() => handleTabClick("state")}
					isActive={activeTab === "state"}
				>
					State
				</TabButton>
			</menu>
			{tabContent}
		</Section>
	)
}
