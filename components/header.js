import Link from 'next/link'

export default ({active = '/'}) =>
	<header>
		<nav>
			<ul>
				<li className={active === '/' ? 'active' : null}>
					<Link href="/"><a>Home</a></Link>
				</li>

				<li className={active === '/work' ? 'active' : null}>
					<Link href="/work"><a>Work</a></Link>
				</li>

				<li className={active === '/resume' ? 'active' : null}>
					<Link href="/resume"><a>Resume</a></Link>
				</li>

				<li className={active === '/contact' ? 'active' : null}>
					<Link href="/contact"><a>Contact</a></Link>
				</li>
			</ul>
		</nav>
	</header>