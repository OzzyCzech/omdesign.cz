import Layout from '../components/layout'
import Nav from '../components/nav'
import index from './index.css'

export default () => (
		<Layout css={index}>

			<header>
				<Nav/>
			</header>

			<main>
				<article>
					<p>Hi, I'm Roman</p>
					<p>
						A freelance frontend / backend / developer
						from <span title="From Prague :-)">Czech Republic</span>
					</p>
					<p>
						Say hello to <a href="mailto:roman@omdesign.cz">roman@omdesign.cz</a>
					</p>
				</article>
			</main>

			<footer>
				<p>
					<a href="https://github.com/OzzyCzech/omdesign.cz">Made by</a> <span>&#10084;</span> on &#63743;
				</p>
			</footer>

		</Layout>
)