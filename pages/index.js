import Head from 'next/head'
// place-content-center
//
const ContactInformation = () =>
	<section className="lg:container lg:mx-auto self-center align-center" itemScope itemType="http://schema.org/Person">

		<div className="flex flex-wrap justify-center my-10">
			<div className="w-6/12 sm:w-2/12">
				<a href="/img/roman-ozana.jpg" download="Roman Ožana.jpg" title="Download image...">
					<img src="/img/roman-ozana.jpg" alt="..." className="shadow shadow-lg rounded-full max-w-full h-auto align-middle border-none"/>
				</a>
			</div>
		</div>

		<div className="text-center">
			<h1 itemProp="name">Ing. Roman Ožana</h1>

			<a href="mailto:roman@omdesign.cz" itemProp="email" className="text-3xl text-current font-bold">roman@omdesign.cz</a>

			<p>
				<a href="tel:+420605783455" itemProp="telephone">+420 605 783 455</a> | <a href="http://m.me/roman.ozana" target="_blank">Messenger</a>
			</p>

			<p itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
				<span hidden itemProp="streetAddress">Přímětická 1199/36</span>
				<span itemProp="addressLocality">Prague</span>,{' '}
				<span itemProp="addressRegion">Czech Republic</span>
				<span hidden itemProp="postalCode">14000</span>
			</p>

			<p>
				IN: <a href="http://www.rzp.cz/cgi-bin/aps_cacheWEB.sh?VSS_SERV=ZVWSBJFND&Action=Search&ICO=87098504" title="Registration number" target="_blank">87098504</a>
			</p>

			<a href="/ozana.vcf" download="Ing. Roman Ozana.vcf" className="btn btn-blue mt-5">
				<svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
					<path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
				</svg>
				<span>Add to Contacts</span>
			</a>
		</div>

	</section>;

const Homepage = () =>
	<>
		<Head>
			<title>Ing. Roman Ožana</title>
		</Head>
		<ContactInformation/>
	</>


export default Homepage