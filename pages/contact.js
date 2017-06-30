import Layout from '../components/layout'
import Nav from '../components/nav'
import Head from 'next/head'
import Link from 'next/link'
import contact from './contact.css'

const ContactClaim = () =>
		<section className="contact-claim">
			<p>I'm <span>available</span> for freelance work</p>
		</section>;

const ContactInformation = () =>
		<section className="contact-information">
			<div>
				<Link href="/me"><a title="Download image..." className="avatar"></a></Link>
			</div>
			<div>
				<ul className="list-unstyled">
					<li>
						<span>Email:</span>
						<a href="mailto:ozana@omdesign.cz">ozana@omdesign.cz</a>
					</li>
					<li>
						<span>Mobile:</span>
						<a href="tel:+420605783455" itemprop="telephone">+420&nbsp;605&nbsp;783&nbsp;455</a>
					</li>
					<li>
						<span>IČ:</span>
						<a href="http://www.rzp.cz/cgi-bin/aps_cacheWEB.sh?VSS_SERV=ZVWSBJFND&amp;Action=Search&amp;ICO=87098504"
						   title="Registration number" target="_blank">87098504</a>
					</li>
					<li>
						<span>Address:</span>
						<span><i className="icon-location"></i>Prague, Czech Republic</span>
					</li>
				</ul>
			</div>
		</section>;

const ContactFooter = () =>
		<section className="contact-social">
			<a href="http://www.twitter.com/OzzyCzech" target="_blank" title="Twitter"><i className="icon-twitter"></i></a>
			<a href="https://www.facebook.com/roman.ozana" target="_blank" title="Facebook"><i className="icon-facebook"></i></a>
			<a href="https://www.linkedin.com/in/romanozana"><i className="icon-linkedin"></i></a>
			<a href="/vcf" title="Download vCard"><i className="icon-download"></i></a>
		</section>;


export default () => (
		<Layout active="contact" css={contact}>
			<Head><title>Roman Ožana - Contact</title></Head>
			<header>
				<Nav active="contact"/>
			</header>
			<main>
				<ContactClaim />
				<ContactInformation />
				<ContactFooter />
			</main>
		</Layout>
)