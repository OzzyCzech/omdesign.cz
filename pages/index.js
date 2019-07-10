import Head from 'next/head'
import './_document.css'
import "./index.css";


export default () =>
	<>
		<Head>
			<title>Hi I'm Roman</title>
		</Head>
		<article>
			<p>Hi</p>
			<p>I'm Roman</p>
			<p>A freelance Full Stack Developer from Czech Republic</p>
			<p>Say hello to <a href="mailto:roman@omdesign.cz">roman@omdesign.cz</a></p>
		</article>
	</>