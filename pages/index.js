import Layout from '../components/layout'
import Link from 'next/link'
import index from './index.css'

export default () => (
		<Layout css={index}>
			<main>
				<article>
					<header>
						<a href="/me" title="Download image..." className="avatar"></a>
					</header>
					<h1>Hi, I'm Roman.</h1>
					<p><strong>a freelance web designer</strong> based in Prague.</p>
					<footer>
						<Link href="/contact"><a className="btn btn-default">Hire me</a></Link>
					</footer>
				</article>

				<footer>
					<p>
						Made with <span>&hearts;</span> on <a href="https://www.apple.com"
							target="_blank">Mac</a> and <a href="https://github.com/zeit/next.js" target="_blank">Next.js</a>
					</p>
				</footer>
			</main>
		</Layout>
)