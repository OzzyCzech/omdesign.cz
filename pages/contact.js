import './_document.css'
import './contact.css'
import Head from 'next/head'

const ContactInformation = () =>
		<section className="contact" itemScope itemType="http://schema.org/Person">

			<a href="/me" title="Download image..." className="avatar"></a>

			<h1 itemProp="name">Ing. Roman Ožana</h1>

			<a href="mailto:roman@omdesign.cz" itemProp="email">roman@omdesign.cz</a>

			<p>
				<a href="tel:+420605783455" itemProp="telephone">+420 605 783 455</a> | <a href="http://m.me/roman.ozana" target="_blank">Messenger</a>
			</p>

			<p>Bank: 1236400056/3030</p>

			<p>
				IN: <a href="http://www.rzp.cz/cgi-bin/aps_cacheWEB.sh?VSS_SERV=ZVWSBJFND&Action=Search&ICO=87098504" title="Registration number" target="_blank">87098504</a>
			</p>

			<p itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
				<span hidden itemProp="streetAddress">Pobočná 1199/36</span>
				<span itemProp="addressLocality">Prague</span>,{' '}
				<span itemProp="addressRegion">Czech Republic</span>
				<span hidden itemProp="postalCode">14000</span>
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

export default () =>
		<>
			<Head>
				<title>Contact | Roman Ožana</title>
			</Head>
			<ContactInformation/>
		</>
