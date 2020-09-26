import Head from 'next/head'
import github from "../data/github.json";

const Testomato = () =>
	<article className="grid grid-cols-2 gap-4">
		<div>
			<img src="/img/testomato.svg" alt="Testomato" className="logo"/>
			<p>
				I'm working on <a href="https://www.testomato.com" target="_blank">Testomato</a> least four years as main
				PHP/JS Developer. <a href="https://www.testomato.com" target="_blank">Testomato</a> starts as{' '}
				<a href="https://www.testomato.com/about">one man project</a>, from green field, based on ideas of <a href="https://michal.illich.cz/" target="_blank">Michal Illich</a>.
			</p>

			<p>
				<a href="https://www.testomato.com" target="_blank">Testomato</a> is a cloud-based
				<a href="https://www.testomato.com" target="_blank">automated monitoring tool</a>{' '}
				for checks any type of websites and alerts you to problems. It's fast and easiest way to monitor websites automatically!
			</p>

			<h3>Technologies &amp; Tools</h3>

			<ul>
				<li>PHP (Nette, Zend Framework)</li>
				<li>Mysql, Memcached, Mongodb, Redis</li>
				<li>our own <a href="https://github.com/testomato/minicrawler" target="_blank">Minicrawler</a></li>
				<li>Docker, git, DI, CI, TDD, &hellip;</li>
				<li>Angular JS + Javascript ES6</li>
				<li>Webpack</li>
			</ul>

			<p>
				<a href="https://www.testomato.com" target="_blank" className="btn btn-light">Testomato.com</a>
			</p>
		</div>
		<div>
			<a href="https://www.testomato.com">
				<img src="/img/work/testomato.png" alt="Testomato ScreenShot" />
			</a>
		</div>
	</article>;

const Zdrojak = () =>
	<article className="grid grid-cols-2">
		<div>
			<img src="/img/zdrojak.svg" alt="Zdrojak.cz" className="logo"/>

			<p>
				<a href="https://www.zdrojak.cz/" target="_blank">Zdrojak.cz</a> is one of the most famous Czech
				magazines about development. I am there since <a href="https://www.zdrojak.cz/clanky/novy-zdrojak-startuje-tri-dva-jedna/">the rebirth</a> as
				the lead developer and site administrator.
			</p>

			<p>
				Current version is build on Wordpress and multiple in-house plugins, modifications and tweaks.
			</p>

			<h3>Technologies &amp; Tools</h3>

			<ul>
				<li>PHP (Wordpress), Javascript</li>
				<li>MariaDB</li>
				<li>Docker, git, CI</li>
				<li>Webpack, Makefile</li>
			</ul>

			<p>
				<a href="https://www.zdrojak.cz" target="_blank" className="btn">Zdrojak.cz</a>
			</p>
		</div>
		<div>
			<a href="https://www.testomato.com"><img src="/img/work/zdrojak.png" alt=""/></a>
		</div>
	</article>;

const Sphido = () =>
	<article className="sphido">
		<a href="http://sphido.org" target="_sphido">
			<img src="/img/sphido.svg" alt="Sphido Logo"/>
		</a>
		<p>A rocket 🚀 fast, lightweight, static site generator</p>
		<p>
			<a href="https://sphido.org" target="_blank" className="btn btn-dark">Sphido.org</a>
		</p>
	</article>;

const Github = () =>
	<article className="github">
		<h2><a href="https://github.com/OzzyCzech" target="_blank" title="Visit my GitHub profile">GitHub</a></h2>
		<ul>
			{github.filter((item) => !item.fork && !item.archived).sort((a, b) => {
				return new Date(b.pushed_at) - new Date(a.pushed_at);
			}).map((item, index) => (<li key={index}>
				<a href={item.html_url} target="_blank">{item.name}</a> {item.description ? '- ' + item.description : ''}
			</li>))}
		</ul>
		<p>
			<a href="https://github.com/OzzyCzech" target="_blank" className="btn btn-dark" title="Visit my GitHub profile">More on GitHub</a>
		</p>
	</article>;

const Work = () =>
	<>
		<Head>
			<title>Work | Ing. Roman Ožana</title>
		</Head>
		<Testomato/>
		<Zdrojak/>
		<Sphido/>
		<Github/>
	</>

export default Work;