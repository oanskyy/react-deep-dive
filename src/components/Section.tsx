export default function Section({
	title,
	children,
	...props
}: {
	title: string
	children: React.ReactNode
    props?: React.HTMLAttributes<HTMLElement>
}) {
	return (
		<section {...props}>
			<h2>{title}</h2>
			{children}
		</section>
	)
}
