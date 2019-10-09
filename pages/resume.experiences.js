import moment from 'moment';

function duration(start, end) {
	let s = moment(start).add(-1, 'day');
	let e = moment(end);

	let duration = moment.duration(e.diff(s));

	return [
		duration.years() ? duration.years() + (duration.years() === 1 ? ' year ' : ' years ') : '',
		duration.months() ? duration.months() + (duration.months() === 1 ? ' month ' : ' months ') : '',
		duration.days() ? duration.days() + (duration.days() === 1 ? ' day ' : ' days ') : '',
	].join(' ');
}


export const Testomato = () =>
	<article>
		<small>{duration(new Date(2012, 3, 1), new Date())}</small>
		<h3>
			<a href="https://www.testomato.com" target="_blank">Testomato s.r.o.</a> &ndash;
			Co-founder & main developer
		</h3>

		<h4>March 2012 &ndash; present</h4>

	</article>;

const Devel = () =>
	<article>
		<small>{duration(new Date(2011, 5, 1))}</small>

		<h3><a href="http://www.rzp.cz/cgi-bin/aps_cacheWEB.sh?VSS_SERV=ZVWSBJFND&Action=Search&ICO=24683507" target="_blank">Devel.cz
			Lab s.r.o.</a> &ndash; PHP/JS developer</h3>

		<h4>October 2009 &ndash; present</h4>

		<p>
			Work as PHP/JS developer and web designer mostly on <a href="https://www.zdrojak.cz">zdrojak.cz</a>
		</p>
	</article>;

const Intergraph = () =>
	<article>
		<small>{duration(new Date(2010, 7, 1), new Date(2011, 3, 31))}</small>

		<h3>Intergraph s.r.o. &ndash; Application Engineer</h3>

		<h4>July 2010 &ndash; April 2011</h4>

		<p>
			Application Engineer (external consultant) – testing of corporate solution for metadata
			sharing and managing. Developing of simple C# .NET applications.
		</p>
	</article>;

const Skvely = () =>
	<article>
		<small>{duration(new Date(2009, 3, 1), new Date(2010, 7, 31))}</small>

		<h3>Skvely.CZ s.r.o. &ndash; PHP developer</h3>

		<h4>March 2009 &ndash; July 2010</h4>

		<p>Works there as web application developer mostly in PHP and developing some modules for e-commerce Magento.</p>
	</article>;

const Freelancer = () =>
	<article>
		<small>{duration(new Date(2009, 2, 1))}</small>

		<h3><a href="https://omdesign.cz">omdesign.cz</a> &ndash; Freelance web designer</h3>

		<h4>October 2009 &ndash; present</h4>

		<p>Freelance web designer and developer of Internet application &ndash; mostly in PHP/Javascript.</p>
	</article>;


export default () => (
	<section className="experiences">
		<h2>Work Experiences</h2>
		<Testomato/>
		<Devel/>
		<Freelancer/>
		<h2>Former Work Experiences</h2>
		<Intergraph/>
		<Skvely/>
	</section>

)