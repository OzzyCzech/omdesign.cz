import Head from 'next/head'
import github from "../data/github.json";

const RightArrow = ({size = 20}) =>
	<svg height={size} width={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
	</svg>;

const Testomato = () =>
	<article className="testomato">
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
				<a href="https://www.testomato.com" target="_blank" className="visit">
					<span>Testomato.com</span>
					<RightArrow/>
				</a>
			</p>

		</div>
		<div>
			<a href="https://www.testomato.com">
				<img src="/img/work/testomato.png" alt="" className="shadow"/>
			</a>
		</div>
	</article>;

const Zdrojak = () =>
	<article className="zdrojak">
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
				<a href="https://www.zdrojak.cz" target="_blank" className="visit">
					Zdrojak.cz
					<RightArrow/>
				</a>
			</p>
		</div>
		<div>
			<a href="https://www.testomato.com"><img src="/img/work/zdrojak.png" alt=""/></a>
		</div>
	</article>;

const Sphido = () =>
	<article className="sphido">
		<a href="http://www.sphido.org" target="_sphido">
			<img src="/img/sphido.svg" alt="Sphido Logo"/>
		</a>
		<p>A rocket 🚀 fast, lightweight, static site generator</p>
		<p>
			<a href="https://sphido.org" target="_blank" className="visit dark">
				Sphido.org
				<RightArrow/>
			</a>
		</p>
	</article>;

const Wordpress = () =>
	<article className="wordpress">
		<div>
			<h3>Wordpress Plugins</h3>
			<ul>
				<li><a target="_blank" href="https://github.com/OzzyCzech/omSuggestContent">omSuggestContent</a> - A plugin for suggest post content from registered users.</li>
				<li><a target="_blank" href="https://github.com/OzzyCzech/omSocialButtons">omSocialButtons</a> - Simple plugin for Twitter, Facebook, Google Plus and Flatter social buttons in Wordpress posts</li>
				<li><a target="_blank" href="https://github.com/OzzyCzech/omShares">omShares</a> - Automatically update number of shares via different social networks</li>
				<li><a target="_blank" href="https://github.com/OzzyCzech/omLightbox">omLightBox</a> - Simple Lightbox for Wordpress</li>
				<li><a target="_blank" href="https://github.com/OzzyCzech/omPreformat">omPreformat</a> - Plugin for adding preformatted text to post easily</li>
				<li><a target="_blank" href="https://github.com/OzzyCzech/omSocialLogin">omSocialLogin</a> - Login via Facebook, Twitter of G+</li>
				<li><a target="_blank" href="https://github.com/OzzyCzech/omEmoji">omEmoji</a> - Add bunch of emoticons to posts</li>
				<li><a target="_blank" href="https://github.com/OzzyCzech/omRememberMe">omRememberMe</a> - Always remember Wordpress user for ever after successful login</li>
				<li><a target="_blank" href="https://github.com/OzzyCzech/omLinks">omLinks</a> - Wordpress plugin in post URL replacement</li>
				<li><a target="_blank" href="https://github.com/OzzyCzech/omUserPhotos">omUserPhotos</a> - Add custom user photo</li>
				<li><a target="_blank" href="https://github.com/OzzyCzech/omTaxonomyImages">omTaxonomyImages</a> - Add images for taxonomies</li>
				<li><a target="_blank" href="https://github.com/OzzyCzech/">and more&hellip;</a></li>
			</ul>
		</div>
		<div>
			<h3>Websites</h3>
			<ul>
				<li><a target="_blank" rel="nofollow" href="https://OzzyCzech.cz/">OzzyCzech.cz</a></li>
				<li><a target="_blank" rel="nofollow" href="https://lagunanj.cz/">lagunanj.cz</a></li>
				<li><a target="_blank" rel="nofollow" href="http://portalbozp.cz/">portalbozp.cz</a></li>
				<li><a target="_blank" rel="nofollow" href="http://www.tempo-reality.cz/">tempo-reality.cz</a></li>
				<li><a target="_blank" rel="nofollow" href="http://www.zuboz.cz">zuboz.cz</a></li>
				<li><a target="_blank" rel="nofollow" href="http://www.sazenice-stromky.cz">sazenice-stromky.cz</a></li>
				<li>and more&hellip;</li>
			</ul>
		</div>
	</article>;

const Github = () =>
	<article className="github">
		<h2>	<a href="https://github.com/OzzyCzech" target="_blank" title="Visit my GitHub profile">GitHub</a></h2>
		<ul>
			{github.filter((item) => !item.fork).sort((a, b) => {
				return new Date(b.pushed_at) - new Date(a.pushed_at);
			}).map((item, index) => (<li key={index}>
				<a href={item.html_url} target="_blank">{item.name}</a> {item.description ? '- ' + item.description : ''}
			</li>))}
		</ul>
		<p>
			<a href="https://github.com/OzzyCzech" target="_blank" className="visit dark" title="Visit my GitHub profile">More on GitHub <RightArrow/></a>
		</p>
	</article>;

export default () =>
	<>
		<Head>
			<title>Work | Ing. Roman Ožana</title>
		</Head>
		<Testomato/>
		<Zdrojak/>
		<Sphido/>
		<Github/>

	</>