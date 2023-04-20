import { useState } from "preact/hooks";
import { MENU } from "../config";

const NavMenu = () => {
	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	return (
		<>
			<button
				class="p-2 lg:hidden z-20"
				onClick={toggleMenu}
				aria-label="Toggle menu"
			>
				{showMenu ? (
					<svg
						className="h-6 w-6 text-gray-900"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M6 18L18 6M6 6L18 18"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				) : (
					<svg
						className="h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				)}
			</button>
			<nav
				className={`fixed bg-gray-50 top-0 left-0 w-full h-full overflow-auto z-10 ${
					showMenu ? "opacity-100" : "opacity-0 pointer-events-none"
				}`}
				onClick={toggleMenu}
			>
				<div className="container mx-auto px-4 py-32 lg:px-0">
					<div className="flex flex-col items-center justify-center h-full">
						{MENU.map(({ title, href }) => (
							<a
								className={
									"my-4 font-bold text-2xl text-gray-700 hover:text-gray-900"
								}
								href={href}
							>
								{title}
							</a>
						))}
					</div>
				</div>
			</nav>
		</>
	);
};

export default NavMenu;
