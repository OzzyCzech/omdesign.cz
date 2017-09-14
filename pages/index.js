import Layout from '../components/layout'
import Nav from '../components/nav'
import GitHub from '../components/github'
import index from './index.css'


export default () => (
		<Layout css={index}>

			<header>
				<Nav/>
				<GitHub/>
			</header>

			<main>
				<article>
					<h1>Roman Ožana</h1>
					<p><a href="https://www.google.cz/search?q=Prague">Prague</a> based</p>
					<p><strong>a freelance web designer</strong> based in Prague.</p>
				</article>
			</main>

			<footer>
				<p>
					Made with <span>&hearts;</span>
				</p>
			</footer>

		</Layout>
)