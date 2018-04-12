import Layout from '../components/layout'
import Nav from '../components/nav'
import './index.css'

export default () => (
	<Layout>

		<header>
			<Nav/>
		</header>

		<main>
			<article>
				<p>Hi</p>
				<p>I'm Roman</p>
				<p>A freelance frontend / backend / developer from Czech Republic</p>
				<p>Say hello to <a href="mailto:roman@omdesign.cz">roman@omdesign.cz</a></p>
			</article>
		</main>

		<footer>
			<p>
				<a href="https://github.com/OzzyCzech/omdesign.cz" target="_blank">Made with

					<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="13px" height="13px" viewBox="0 0 13 13" enableBackground="new 0 0 13 13">
						<path fill="#D2322D"
						      d="M6.461,2.633c0.525-1.244,1.723-2.112,3.117-2.112c1.879,0,3.23,1.606,3.4,3.521 c0,0,0.092,0.475-0.109,1.331c-0.275,1.165-0.922,
						      2.201-1.794,2.991L6.461,12.48L1.924,8.363c-0.872-0.79-1.518-1.826-1.793-2.991 c-0.202-0.855-0.11-1.331-0.11-1.331c0.17-1.915,
						      1.522-3.521,3.4-3.521C4.816,0.52,5.937,1.389,6.461,2.633z"/>
					</svg>

					on &#63743;
				</a>
			</p>
		</footer>

	</Layout>
)