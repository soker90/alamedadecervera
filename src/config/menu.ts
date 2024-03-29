export const SECTIONS = [
	{
		title: 'Actualidad',
		href: '/actualidad/1',
		description: 'Información de actualidad sobre la Alameda',
		logo: '/icons/news.svg'
	},
	{
		title: 'Historia',
		href: '/historia',
		description: 'Conoce algunos acontecimientos históricos que ocurrieron aquí',
		logo: '/icons/history.svg'
	},
	{
		title: 'Pueblo',
		href: '/pueblo',
		description: 'Descubre que puedes visitar y que servicios ofrece el pueblo',
		logo: '/icons/village.svg'
	},
	{
		title: 'Actividades',
		href: '/actividades',
		description: 'Te mostramos algunas de las actividades que puedes realizar en nuestro pueblo',
		logo: '/icons/activity.svg'
	},
	{
		title: 'Empresas',
		href: '/empresas',
		description: 'Empresas en el pueblo o con servicio a domicilio en él',
		logo: '/icons/shop.svg'
	}
	// {title: 'En venta', href: '/en-venta', description: 'Casas, chalets y terrenos en venta'},
	// {
	// 	title: 'Contacto',
	// 	href: '/contacto',
	// 	description: '¿Quieres ver dónde estamos? ¿O cómo puedes contactarme?'
	// }
]

export const MENU = [{ title: 'Inicio', href: '/' }, ...SECTIONS]
