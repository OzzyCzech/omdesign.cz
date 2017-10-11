import Layout from "../../components/layout"
import Nav from "../../components/nav"

import Head from 'next/head'
import work from './work.css';

const RightArrow = () =>
		<svg fill="#fff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
			<path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
			<path d="M0-.25h24v24H0z" fill="none"/>
		</svg>;

const Testomato = () =>
		<article className="testomato">
			<div>
				<img src="/static/img/testomato.svg" alt="Testomato" className="logo"/>
				<p>
					I'm working on <a href="https://www.testomato.com" target="_blank">Testomato</a> least four years as main
					PHP/JS Developer. <a href="https://www.testomato.com" target="_blank">Testomato</a> starts as{' '}
					<a href="https://www.testomato.com/about">one man project</a>, from green field, based on ideas of Michal Illich.
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

				<p className="visit">
					<a href="https://www.testomato.com" target="_blank">
						Visit Testomato
						<RightArrow/>
					</a>
				</p>

			</div>
			<div>
				<a href="https://www.testomato.com">
					<img src="/static/img/work/testomato.png" alt="" className="shadow"/>
				</a>
			</div>
		</article>;

const Zdrojak = () =>
		<article className="zdrojak">
			<div>
				<img src="/static/img/zdrojak.svg" alt="Zdrojak.cz" className="logo"/>

				<p>


					<a href="https://www.zdrojak.cz/" target="_blank">Zdrojak.cz</a> is one of the most famous Czech magazines about development.
				</p>

				<p>
					I joined to <a href="https://www.zdrojak.cz/" target="_blank">Zdrojak.cz</a> team
					since <a href="https://www.zdrojak.cz/clanky/novy-zdrojak-startuje-tri-dva-jedna/">rebirth</a> and stay
					as main developer to present days.
				</p>

				<p>
					Current version was build on Wordpress with multiple in-house plugins, modifications and tweaks.
				</p>

				<h3>Technologies &amp; Tools</h3>

				<ul>
					<li>PHP (Wordpress), Javascript</li>
					<li>MariaDB</li>
					<li>Docker, git, CI</li>
					<li>Webpack</li>
				</ul>


				<p className="visit">
					<a href="https://www.zdrojak.cz" target="_blank" className="btn btn-lg btn-hollow">
						Visit Zdrojak
						<RightArrow/>
					</a>
				</p>
			</div>
			<div>
				<a href="https://www.testomato.com">
					<img src="/static/img/work/zdrojak.png" alt=""/>
				</a>
			</div>
		</article>;

const Sphido = () =>
		<article className="sphido">
			<a href="http://www.sphido.org" target="_sphido">
				<img src="/static/img/sphido.svg" alt="Sphido Logo" className="/img-responsive"/>
			</a>
			<p className="h2">A rocket fast, lightweight, flat file CMS for PHP</p>
			<div className="buttons">
				<a href="https://github.com/sphido" target="_blank" className="btn btn-lg btn-default">
					<i className="icon-github-circled"></i> GitHub
				</a>
				<a href="https://www.sphido.org" target="_sphido" className="btn btn-lg btn-default">sphido.org</a>
			</div>
		</article>;


const Wordpress = () =>
		<article className="wordpress">
			<h3>Wordpress Plugins</h3>
			<ul>
				<li><a href="https://github.com/OzzyCzech/omSuggestContent">omSuggestContent</a> - A plugin for suggest
					post content from registered users.
				</li>
				<li><a href="https://github.com/OzzyCzech/omSocialButtons">omSocialButtons</a> - Simple plugin for
					Twitter, Facebook, Google Plus and Flatter social buttons in Wordpress posts
				</li>
				<li><a href="https://github.com/OzzyCzech/omShares">omShares</a> - Automatically update number of shares
					via different social networks
				</li>
				<li><a href="https://github.com/OzzyCzech/omLightbox">omLightBox</a> - Simple Lightbox for Wordpress</li>
				<li><a href="https://github.com/OzzyCzech/omPreformat">omPreformat</a> - Plugin for adding preformatted
					text to post easily
				</li>
				<li><a href="https://github.com/OzzyCzech/omSocialLogin">omSocialLogin</a> - Login via Facebook, Twitter
					of G+
				</li>
				<li><a href="https://github.com/OzzyCzech/omEmoji">omEmoji</a> - Add bunch of emoticons to posts</li>
				<li><a href="https://github.com/OzzyCzech/omRememberMe">omRememberMe</a> - Always remember Wordpress user
					for ever after successful login
				</li>
				<li><a href="https://github.com/OzzyCzech/omLinks">omLinks</a> - Wordpress plugin in post URL replacement
				</li>
				<li><a href="https://github.com/OzzyCzech/omUserPhotos">omUserPhotos</a> - Add custom user photo</li>
				<li><a href="https://github.com/OzzyCzech/omTaxonomyImages">omTaxonomyImages</a> - Add images for
					taxonomies
				</li>
				<li>and <a href="https://github.com/OzzyCzech/">more</a></li>
			</ul>
			<h3>Websites</h3>
			<ul>
				<li><a href="https://blog.testomato.com/" target="_blank" rel="nofollow">blog.testomato.com</a></li>
				<li><a href="http://www.portalbozp.com" target="_blank" rel="nofollow">portalbozp.cz</a></li>
				<li><a href="http://www.zuboz.com" target="_blank" rel="nofollow">zuboz.cz</a></li>
				<li><a href="http://www.tempo-reality.cz/" target="_blank" rel="nofollow">tempo-reality.cz</a></li>
				<li>and more&hellip;</li>
			</ul>
		</article>;

const AndMore = () =>
		<article className="and-more">
			<h2>and more&hellip;</h2>
			<p>
				<a href="https://github.com/OzzyCzech" target="_blank" className="btn btn-lg btn-primary">
					<i className="icon-github-circled"></i>
					GitHub
				</a>
			</p>
		</article>;

export default () => (
		<Layout css={work}>
			<Head>
				<title>Work | Roman Ožana</title>
			</Head>

			<header>
				<Nav active="work"/>
			</header>

			<main>
				<Testomato/>
				<Zdrojak/>
				<Sphido/>
				<Wordpress/>
				<AndMore/>
			</main>

		</Layout>
)