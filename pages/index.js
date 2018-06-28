import Footer from '../components/footer'
import Header from '../components/header'

import './layout.css';
import './index.css';

export default () =>
		<>
		<Header active="/" title='WTF' />

		<main>
			<article>
				<p>Hi</p>
				<p>I'm Roman</p>
				<p>A freelance frontend / backend / developer from Czech Republic</p>
				<p>Say hello to <a href="mailto:roman@omdesign.cz">roman@omdesign.cz</a></p>
			</article>
		</main>

		<Footer/>
		</>
