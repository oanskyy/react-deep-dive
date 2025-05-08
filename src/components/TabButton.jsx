export default function TabButton({ children, onClick, isActive }) {
	return (
		<li>
			<button onClick={onClick} className={isActive && "active"}>
				{children}
			</button>
		</li>
	)
}
