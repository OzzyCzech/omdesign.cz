import Layout from '../components/layout'
import Nav from '../components/nav'
import Head from 'next/head'
import contact from './contact.css'

const ContactClaim = () =>
		<section className="contact-claim">
			<p>I'm <span>available</span> for freelance work</p>
		</section>;

const ContactInformation = () =>
		<section className="contact-information">
			<div>
				<a href="/me" title="Download image..." className="avatar"></a>
			</div>
			<div>
				<ul>
					<li>
						<strong>Email:</strong>
						<a href="mailto:ozana@omdesign.cz">ozana@omdesign.cz</a>
					</li>
					<li>
						<strong>Mobile:</strong>
						<a href="tel:+420605783455" itemprop="telephone">+420&nbsp;605&nbsp;783&nbsp;455</a>
					</li>
					<li>
						<strong>IČ:</strong>
						<a href="http://www.rzp.cz/cgi-bin/aps_cacheWEB.sh?VSS_SERV=ZVWSBJFND&amp;Action=Search&amp;ICO=87098504"
						   title="Registration number" target="_blank">87098504</a>
					</li>
					<li>
						<strong>Address:</strong>
						<span><i className="material-icons">location_on</i>Prague, Czech Republic</span>
					</li>
				</ul>
			</div>
		</section>;

const ContactFooter = () =>
		<section className="contact-social">
			<a href="https://github.com/OzzyCzech/" target="_blank">GitHub</a>{' '}&bull;{' '}
			<a href="https://www.twitter.com/OzzyCzech" target="_blank">Twitter</a>{' '}&bull;{' '}
			<a href="https://www.facebook.com/roman.ozana" target="_blank">Facebook</a>{' '}&bull;{' '}
			<a href="https://www.linkedin.com/in/romanozana" target="_blank">LinkedIn</a>{' '}&bull;{' '}
			<a href="/vcf" title="Download vCard">VCard</a>
		</section>;


export default () => (
		<Layout active="contact" css={contact}>
			<Head><title>Roman Ožana - Contact</title></Head>
			<header>
				<Nav active="contact"/>
			</header>
			<main>
				<ContactClaim/>
				<ContactInformation/>
				<ContactFooter/>
			</main>
		</Layout>
)
