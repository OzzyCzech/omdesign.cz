import Layout from "../../components/layout"
import Head from 'next/head'
import Nav from "../../components/nav"
import resume from './resume.css'
import humanizeDuration from 'humanize-duration';

import Experiences from './experiences';

export default () => (
		<Layout css={resume}>
			<Head>
				<title>Resume | Roman Ožana</title>
			</Head>

			<header className="hidden-print">
				<Nav active="resume"/>
			</header>

			<main>
				<Experiences/>
				<section className="resume-skills-expertise">
					<h2>Skills &amp; Expertise</h2>

					<article>
						<h3>Server</h3>
						<ul>
							<li>PHP up to 7.1</li>
							<li>OOP, DI, IOC, design patterns</li>
							<li>Linux</li>
						</ul>
					</article>

					<article>
						<h3>Databases</h3>
						<ul>
							<li>SQL language</li>
							<li>MySQL</li>
							<li>Redis, MongoDB, Memcached</li>
						</ul>
					</article>

					<article>
						<h3>Frontend</h3>
						<ul>
							<li>Javascript ES5 + ES6</li>
							<li>Angular 1.x, React, jQuery</li>
							<li>HTML5, CSS3 + incl. common preprocessors</li>
							<li>Basics of Photoshop CS6 and Adobe Illustrator</li>
						</ul>
					</article>

					<article>
						<h3>Testing</h3>
						<ul>
							<li>
								E2E: {' '}
								<a href="https://github.com/angular/protractor" target="_blank">Protractor</a>, {' '}
								<a href="http://www.seleniumhq.org/" target="_blank">Selenium</a>
							</li>
							<li>
								Unit: {' '}
								<a href="https://phpunit.de/" target="_blank">PHP Unit</a>, {' '}
								<a href="https://github.com/mochajs/mocha" target="_blank">Mocha</a>
							</li>
						</ul>
					</article>
				</section>

				<section className="resume-languages">
					<h2>Languages</h2>

				</section>

				<section className="resume-additional-info">
					<h2>Additional Info</h2>

				</section>

				<section className="resume-education">
					<h2>Education</h2>
					<article>
						<h3>VŠB - Technical University of Ostrava</h3>
						<h4>2002 – 2007: Geoinformatics</h4>
						<ul>
							<li>
								<strong>Study program:</strong> {' '}
								<a href="//goo.gl/ZPtBm" target="_blank">Geodesy and cartography, Geoinformaticsa</a>
							</li>
							<li><strong>Degree:</strong> Master's degree (Msc., Geoingormatics)</li>
							<li><strong>Address:</strong> VŠB – Technical university of Ostrava, 17.listopadu 15, Ostrava – Poruba,
								Faculty of Mining and Geology - <a href="http://goo.gl/knKOR" target="_blank">map</a>
							</li>
						</ul>
					</article>
				</section>
			</main>

			<footer>
				<a href="TODO">Download as PDF</a>
			</footer>
		</Layout>
)