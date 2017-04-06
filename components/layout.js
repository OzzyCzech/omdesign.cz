import Link from 'next/link'
import Head from 'next/head'

export default ({children, title = "Hi, I'm Roman Ožana a freelance web designer based in Prague", active = "/", css = ''}) => (
		<div className="page">
			<Head>
				<meta charSet="utf-8"/>
				<title>{title}</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width"/>
				<meta name="robots" content="all"/>
				<meta name="author" content="All: Roman Ozana; e-mail: ozana@omdesign.cz"/>
				<meta name="google-site-verification" content="4LFYmB-l6Y6CTN9Cto7z8EiPwQy-ecopaMP-6pxQUKo"/>
				<link rel="me" type="text/html" href="https://plus.google.com/102792250956539127203"/>
				<link rel="shortcut icon" href="/favicon.ico"/>
				<link rel="author" href="/humans.txt"/>
				<style dangerouslySetInnerHTML={{__html: css}}/>
			</Head>
			<header>
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
			</header>

			<a href="https://github.com/OzzyCzech/omdesign.cz" target="_blank" className="forkme">
				<img style={{
					position: 'absolute',
					top: 0,
					right: 0,
					border: 0
				}}
						src="https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67"
						alt="Fork me on GitHub"
						dataCanonicalSrc="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png"
				/>
			</a>

			{children}
		</div>
)

// <li><a href="http://blog.omdesign.cz">Blog</a></li>