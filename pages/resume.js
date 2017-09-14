import Layout from "../components/layout"
import Head from 'next/head'
import Nav from "../components/nav"
import resume from './resume.css'

export default () => (
		<Layout css={resume}>
			<Head>
				<title>Resume | Roman Ožana</title>
			</Head>

			<header>
				<Nav active="resume"/>
			</header>

			<main>
				<section className="resume-experience">
					<h2>Former experiences</h2>

					<article>
						<h3>Co-founder & developer at <a
								href="http://www.rzp.cz/cgi-bin/aps_cacheWEB.sh?VSS_SERV=ZVWSBJFND&Action=Search&ICO=29200784">Testomato s.r.o.</a></h3>
					</article>

					<article>
						<h3>PHP/JS programmer at <a href="http://www.rzp.cz/cgi-bin/aps_cacheWEB.sh?VSS_SERV=ZVWSBJFND&Action=Search&ICO=24683507">Devel.cz
							Lab s.r.o.</a></h3>

						<p>
							Work as PHP/JS programmer and web developer mostly on <a href="https://www.testomato.com">testomato.com</a> and <a
								href="https://www.zdrojak.cz">zdrojak.cz</a>
						</p>
					</article>

					<article>
						<h3>Application Engineer at <a href="http://www.intergraph.com/global/cz/">Intergraph s.r.o.</a></h3>
						<p>
							Application Engineer (external consultant) – testing of corporate solution for metadata
							sharing and managing. Developing of simple C# .NET applications.
						</p>
					</article>

					<article>
						<h3>PHP programmer at <a href="http://www.skvely.cz">Skvely.CZ s.r.o.</a></h3>
						<p>
							Works there as web application developer mostly in PHP and developing modules for e-commerce Magento.
						</p>
					</article>
				</section>

				<section className="resume-skills-expertise">
					<h2>Skills &amp; Expertise</h2>
				</section>

				<section className="resume-languages">
					<h2>Languages</h2>

				</section>

				<section className="resume-additional-info">
					<h2>Additional Info</h2>

				</section>

				<section className="resume-education">
					<h2>Education</h2>
				</section>
			</main>

			<footer>
				<a href="TODO">Download as PDF</a>
			</footer>
		</Layout>
)