import Layout from '../components/layout'
import Nav from '../components/nav'
import Head from 'next/head'
import contact from './contact.css'

const ContactInformation = () =>
		<section className="contact-information">

			<a href="/me" title="Download image..." className="avatar"></a>

			<h1>Ing. Roman Ožana</h1>

			<h1><a href="mailto:ozana@omdesign.cz">ozana@omdesign.cz</a></h1>

			<p><a href="tel:+420605783455" itemprop="telephone">+420&nbsp;605&nbsp;783&nbsp;455</a></p>

			<p>Prague, Czech Republic</p>

			<p>
				IČ: <a href="http://www.rzp.cz/cgi-bin/aps_cacheWEB.sh?VSS_SERV=ZVWSBJFND&Action=Search&ICO=87098504"
				       title="Registration number" target="_blank">87098504</a>
			</p>
		</section>;

const SocialMedia = () =>
		<section className="contact-social">
			<a href="https://github.com/OzzyCzech/" target="_blank">GitHub</a>{' '}&bull;{' '}
			<a href="https://www.twitter.com/OzzyCzech" target="_blank">Twitter</a>{' '}&bull;{' '}
			<a href="https://www.facebook.com/roman.ozana" target="_blank">Facebook</a>{' '}&bull;{' '}
			<a href="https://www.linkedin.com/in/romanozana" target="_blank">LinkedIn</a>{' '}&bull;{' '}
			<a href="/vcf" title="Download vCard">VCard</a>
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
