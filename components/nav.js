import Link from 'next/link'

export default ({active = '/'}) => (
		<nav>
			<ul>
				<Link prefetch href="/">
					<li className={active === '/' ? 'active' : null}><a>Home</a></li>
				</Link>
				<Link prefetch href="/work">
					<li className={active === 'work' ? 'active' : null}><a>Work</a></li>
				</Link>
				<Link prefetch href="/resume">
					<li className={active === 'resume' ? 'active' : null}><a>Resume</a></li>
				</Link>
				<Link prefetch href="/contact">
					<li className={active === 'contact' ? 'active' : null}><a>Contact</a></li>
				</Link>
			</ul>
		</nav>
)