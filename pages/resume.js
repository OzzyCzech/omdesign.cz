import Head from 'next/head'

import Experiences from './resume.experiences';

function experiences() {
	let d = new Date();
	return d.getFullYear() - 2009;
}

export default () => (
			<>
				<Head>
					<title>Resume | Ing. Roman Ožana</title>
				</Head>

				<h1>Ing. Roman Ožana / Resume</h1>

				<section className="intro">

					<img src="/static/img/roman-ozana.jpg" alt="Roman Ožana"/>
					<p>Hi there,</p>
					<p>
						my name is Roman Ožana. I am a freelance webdesigner and developer with <strong>more than {experiences()} years of
						experiences</strong>. I'm here to create websites and applications easy to use, intuitive and modern inside. I love tech
						startups and community around. Enjoy working in small and effective team.
					</p>

					<p>Say hi on Twitter <a href="https://www.twitter.com/OzzyCzech">@OzzyCzech</a></p>

					<ul>
						<li>Address: Prague, Přímětická st.</li>
						<li>Web: <a href="https://www.omdesign.cz">www.omdesign.cz</a></li>
						<li>Email: <a href="mailto:ozana@omdesign.cz?subject=Resume">ozana@omdesign.cz</a></li>
						<li>Phone: <a href="tel:+420605783455">+420&nbsp;605&nbsp;783&nbsp;455</a></li>
					</ul>
				</section>

				<Experiences/>

				<section className="skills">
					<h2>Skills &amp; Technologies</h2>
					<article>
						<h3>Day-to-day comfort</h3>
						<ul>
							<li>PHP (up to 7.x)</li>
							<li>OOP, DI, IOC, design patterns</li>
							<li>SQL language (MariaDB, MySQL)</li>
							<li>MySQL, Redis, MongoDB, Memcached</li>
							<li>Javascript</li>
							<li>Angular, jQuery</li>
							<li>HTML5, CSS3 (incl. LESS, Sass, cssnext, PostCSS)</li>
							<li>Webpack 4 &amp; Makefile</li>
							<li>Responsive Layout and Design</li>
							<li>Basics of Photoshop and Adobe Illustrator</li>
						</ul>
					</article>

					<article>
						<h3>Experience with</h3>
						<ul>
							<li>React, NextJS</li>
							<li>Node.js</li>
							<li>Gulp &amp; Grunt</li>
							<li>Couchbase</li>
						</ul>
					</article>

					<article>
						<h3>Quality assurance</h3>
						<ul>
							<li>E2E testing with Protractor</li>
							<li>Selenium + Selenium IDE</li>
							<li>Unit Testing (PHP Unit, Nette Tester, Mocha)</li>
						</ul>
					</article>

					<article>
						<h3>DevStack</h3>
						<ul>
							<li>Docker</li>
							<li>Git version control</li>
							<li>Webpack, Makefile</li>
							<li>Travis &amp; GitLab CI</li>
							<li>MacOS and Linux</li>
						</ul>
					</article>
				</section>

				<section className="languages">
					<h2>Languages</h2>

					<article>
						<ul>
							<li>Czech &ndash; native language</li>
							<li>English &ndash; communicative</li>
						</ul>
					</article>
				</section>

				<section className="resume-additional-info">
					<h2>Additional Info</h2>
					<article>
						<ul>
							<li>Driving license: B</li>
						</ul>
					</article>
				</section>

				<section className="education">
					<h2>Education</h2>
					<article>
						<h3>VŠB &ndash; Technical University of Ostrava</h3>
						<h4>2002 – 2007: Geoinformatics</h4>
						<ul>
							<li>Study program: Geodesy and cartography, Geoinformatics</li>
							<li>Degree: Master's degree (Msc., Geoingormatics)</li>
							<li>Address: VŠB – Technical university of Ostrava, 17.listopadu 15, Ostrava – Poruba, Faculty of Mining and Geology</li>
						</ul>
					</article>
					<article>
						<h3>SPŠE Rožnov pod Radhoštěm</h3>
						<h4>1997 – 2001: Electronic computer systems </h4>
					</article>
				</section>

				<section className="download">
					<a href="/cv">
						<svg fill="#ffffff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
							<path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
							<path d="M0 0h24v24H0z" fill="none"/>
						</svg>
						Download as PDF
					</a>
				</section>
			</>
)
