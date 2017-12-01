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


					<h1>Hi, I'm Roman.</h1>

					<p>
						a	freelance frontend / backend / developer
						from <span title="From Prague :-)">Czech Republic</span>
					</p>

					<h1><a href="mailto:roman@omdesign.cz">roman@omdesign.cz</a></h1>

				</article>


			</main>

			<footer>
				<p>
					Made by <span>&#10084;</span> on &#63743;
				</p>
			</footer>

		</Layout>
)