import Layout from '../components/layout'
import Nav from '../components/nav'
import SocialMedia from '../components/social-media';
import Head from 'next/head'
import contact from './contact.css'


const ContactInformation = () =>
		<section className="contact">

			<a href="/me" title="Download image..." className="avatar"></a>

			<h1>Ing. Roman Ožana</h1>

			<h1><a href="mailto:ozana@omdesign.cz">ozana@omdesign.cz</a></h1>

			<p><a href="tel:+420605783455" itemprop="telephone">+420&nbsp;605&nbsp;783&nbsp;455</a></p>

			<p>
				<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
					<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
					<path d="M0 0h24v24H0z" fill="none"/>
				</svg>

				Prague, Czech Republic
			</p>

			<p>
				IČ: <a href="http://www.rzp.cz/cgi-bin/aps_cacheWEB.sh?VSS_SERV=ZVWSBJFND&Action=Search&ICO=87098504"
				       title="Registration number" target="_blank">87098504</a>
			</p>
		</section>;


const ContactFooter = () =>
		<section className="contact-footer">
			<p>I'm <abbr title="sometimes :-)">available</abbr> for freelance work</p>
		</section>;

export default () => (
		<Layout css={contact} title="OMG">
			<Head>
				<title>Contact | Roman Ožana</title>
			</Head>
			<header>
				<Nav active="contact"/>
			</header>
			<main>
				<ContactInformation/>
			</main>
			<footer>
				<SocialMedia/>
			</footer>
		</Layout>
)
