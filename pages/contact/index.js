import Layout from '../../components/layout'
import Nav from '../../components/nav'
import SocialMedia from '../../components/social-media';
import Head from 'next/head'
import contact from './contact.css'


const ContactInformation = () =>
		<section className="contact" itemScope itemType="http://schema.org/Person">

			<a href="/me" title="Download image..." className="avatar"></a>

			<h1 itemProp="name">Ing. Roman Ožana</h1>

			<h1><a href="mailto:roman@omdesign.cz" itemProp="email">roman@omdesign.cz</a></h1>

			<p>
				<a href="tel:+420605783455" itemProp="telephone">+420&nbsp;605&nbsp;783&nbsp;455</a> | <a href="http://m.me/roman.ozana" target="_blank">Messenger</a>
			</p>

			<p>Bank: 1236400056/3030</p>

			<p>
				IN: <a href="http://www.rzp.cz/cgi-bin/aps_cacheWEB.sh?VSS_SERV=ZVWSBJFND&Action=Search&ICO=87098504" title="Registration number" target="_blank">87098504</a>
			</p>

			<p>
				<span itemProp="addressLocality">Prague</span>, <span itemProp="addressRegion">Czech Republic</span>
			</p>

			<a href="/vcf" className="download">
				<svg fill="#ffffff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
					<path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
					<path d="M0 0h24v24H0z" fill="none"/>
				</svg>
				Download VCard
			</a>

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
