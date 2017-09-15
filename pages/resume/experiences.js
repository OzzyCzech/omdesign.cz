import humanizeDuration from 'humanize-duration';

const Freelancer = () =>
		<article>
			<h3>Freelance web designer</h3>
			<h4>
				October 2009 – present {' '}
				<small>{humanizeDuration(new Date() - new Date(2009, 2, 1), {conjunction: ' and ', serialComma: false, largest: 3})}</small>
			</h4>
			<p>
				Freelance web designer and programmer of Internet application - mostly in PHP/Javascript.
			</p>
		</article>;

export const Testomato = () =>
		<article>
			<h3>
				Co-founder & developer at {' '}
				<a href="http://www.rzp.cz/cgi-bin/aps_cacheWEB.sh?VSS_SERV=ZVWSBJFND&Action=Search&ICO=29200784">Testomato s.r.o.</a>
			</h3>

			<h4>
				March 2012 – present {' '}
				<small>{humanizeDuration(new Date() - new Date(2012, 3, 1), {conjunction: ' and ', serialComma: false, largest: 3})}</small>
			</h4>
		</article>;

const Intergraph = () =>
		<article>
			<h3>Application Engineer at <a href="http://www.intergraph.com/global/cz/">Intergraph s.r.o.</a></h3>
			<p>
				Application Engineer (external consultant) – testing of corporate solution for metadata
				sharing and managing. Developing of simple C# .NET applications.
			</p>
		</article>;

const Skvely = () =>

		<article>
			<h3>PHP programmer at <a href="http://www.skvely.cz">Skvely.CZ s.r.o.</a></h3>
			<p>
				Works there as web application developer mostly in PHP and developing modules for e-commerce Magento.
			</p>
		</article>;

const Devel = () =>
		<article>
			<h3>PHP/JS programmer at <a href="http://www.rzp.cz/cgi-bin/aps_cacheWEB.sh?VSS_SERV=ZVWSBJFND&Action=Search&ICO=24683507">Devel.cz
				Lab s.r.o.</a></h3>

			<h4>
				October 2009 – present {' '}
				<small>{humanizeDuration(new Date() - new Date(2011, 5, 1), {conjunction: ' and ', serialComma: false, largest: 3})}</small>
			</h4>


			<p>
				Work as PHP/JS programmer and web developer mostly on <a href="https://www.testomato.com">testomato.com</a> and <a
					href="https://www.zdrojak.cz">zdrojak.cz</a>
			</p>
		</article>;


export default () => (
		<section className="resume-experience">
			<h2>Former experiences</h2>
			<Testomato/>
			<Devel/>
			<Intergraph/>
			<Skvely/>
			<Freelancer/>
		</section>

)