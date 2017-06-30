import Layout from "../components/layout"
import Head from 'next/head'
import Nav from "../components/nav"
import resume from './resume.css'

export default () => (
		<Layout active="resume" css={resume}>
			<Head>
				<title>Resume</title>
			</Head>

			<header>
				<Nav active="resume"/>
			</header>

			<div>Resume</div>
		</Layout>
)