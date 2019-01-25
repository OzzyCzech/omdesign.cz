import Link from 'next/link'

export default ({active = '/'}) =>
	<header>
		<nav>
			<ul>
				<li className={active === '/' ? 'active' : null}>
					<Link prefetch href="/"><a>Home</a></Link>
				</li>

				<li className={active === '/work' ? 'active' : null}>
					<Link prefetch href="/work"><a>Work</a></Link>
				</li>

				<li className={active === '/resume' ? 'active' : null}>
					<Link prefetch href="/resume"><a>Resume</a></Link>
				</li>

				<li>
					<a href="https://OzzyCzech.cz" target="_blank">Blog</a>
				</li>

				<li className={active === '/contact' ? 'active' : null}>
					<Link prefetch href="/contact"><a>Contact</a></Link>
				</li>
			</ul>
		</nav>
	</header>