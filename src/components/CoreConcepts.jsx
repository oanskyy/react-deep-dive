import CoreConcept from "./CoreConcept"
import { CORE_CONCEPTS } from "../data.js"

export default function CoreConcepts() {
	return (
		<section id='core-concepts'>
			<h2>Core Concepts</h2>
			<ul>
				{CORE_CONCEPTS.map(item => {
					return (
						<CoreConcept
							key={item.title}
							{...item}
							// image={concept.image}
							// title={concept.title}
							// description={concept.description}
						/>
					)
				})}
			</ul>
		</section>
	)
}
