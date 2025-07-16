const MenuItem = ({ title, href }: { title: string; href: string }) => {
	// Comprobar si window está definido (navegador) antes de usarlo
	const isRootActive = typeof window !== 'undefined' ? window.location.pathname === href : false
	const isActive =
		typeof window !== 'undefined'
			? (window.location.href.includes(href) && href !== '/') || isRootActive
			: false

	return (
		<li class={`mr-5 pb-1 ${isActive ? 'border-b-2 border-gray-200' : ''}`}>
			<a class='hover:text-gray-200' href={href}>
				{title}
			</a>
		</li>
	)
}

export default MenuItem
