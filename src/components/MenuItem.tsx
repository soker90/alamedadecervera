const MenuItem = ({ title, href }: {title: string, href: string}) => {
	const isRootActive = window.location.pathname === href
	const isActive = (window.location.href.includes(href) && href !== '/') || isRootActive

	return (
		<li class={`mr-5 pb-1 ${isActive ? 'border-b-2 border-gray-200' : ''}`}>
			<a class='hover:text-gray-200' href={href}>{title}</a>
		</li>
	)
}

export default MenuItem
