import Layout from "../components/layout"
import Link from 'next/link'
import Head from 'next/head'
import work from './work.css';

const Testomato = () =>
  <article className="testomato">
    <div>
      <img src="img/testomato.svg" alt="" className="img-fluid" />
      <p>
        I'm working on Testomato least four years as PHP/JS Developer.
					Testomato starts as <Link href="/me"><a>one man project</a></Link>, from
					green field, based on ideas of Michal Illich.
				</p>

      <p>
        Testomato is a cloud-based
					<a href="https://www.testomato.com" target="_blank">automated monitoring tool</a> for
					checks any type of websites and alerts you to problems. It's fast and easiest way to monitor websites
					automatically!
				</p>

      <h3>The Testomato Engine</h3>

      <ul>
        <li>Nette Framework and Zend Framework 1</li>
        <li>Mysql, Memcached, Mongodb, Redis</li>
        <li>our own <a href="https://github.com/testomato/minicrawler" target="_blank">Minicrawler</a></li>
        <li>git, Selenium and unit tests</li>
      </ul>

      <h3>The Testomato Face</h3>

      <ul>
        <li>Twitter Bootstrap with LESS</li>
        <li>Angular JS, jQuery and Javascript</li>
      </ul>

      <p className="text-center">
        <a href="https://www.testomato.com" target="_blank" className="btn btn-lg btn-hollow">Visit Testomato</a>
      </p>
    </div>
    <div>
      <a href="https://www.testomato.com">
        <img src="/img/work/testomato.png" alt="" className="img-fluid" />
      </a>
    </div>
  </article>;

const Zdrojak = () =>
  <article className="zdrojak">
    <div>
      <img src="img/zdrojak.svg" alt="" className="img-fluid" />
      <p>
        Zdrojak.cz is one of most known czech mags about development. Current version is based on Wordpress
					with a <abbr title="A lot of in-house plugins and tons of small modifications">specific modifications</abbr>.
				</p>

      <p>
        I joined to Zdrojak.cz
					since <a href="http://www.zdrojak.cz/clanky/novy-zdrojak-startuje-tri-dva-jedna/">rebirth</a> and
					stay as <abbr title="Only one...">main developer</abbr> to present days.
				</p>

      <p className="text-center">
        <a href="https://www.zdrojak.cz" target="_blank" className="btn btn-lg btn-hollow">Visit Zdrojak</a>
      </p>
    </div>
    <div>
      <a href="https://www.testomato.com">
        <img src="/img/work/zdrojak.png" alt="" className="img-fluid" />
      </a>
    </div>
  </article>;

const Sphido = () =>
  <article className="sphido">
    <a href="http://www.sphido.org" target="_sphido">
      <img src="/img/sphido.svg" alt="Sphido Logo" className="img-responsive" />
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
    <h3>Plugins</h3>
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
      <li><a href="https://www.zdrojak.cz">www.zdrojak.cz</a></li>
      <li><a href="https://blog.testomato.com/">blog.testomato.com</a></li>
      <li><a href="http://www.tempo-reality.cz/">www.tempo-reality.cz</a></li>
      <li>and more&hellip;</li>
    </ul>
  </article>;

const TimeTrack = () =>
  <article className="time-track">

    <h2>Simple Time Track</h2>

    <p>
      is successfull (17K+ users / 4.9 <img src="/img/star.svg" alt="Star" className="img-responsive" />)&nbsp;
				<a href="https://chrome.google.com/webstore/detail/simple-time-track/hbhcgdpbdenjjpekdajanfgchlgacdea">
        time tracking plugin for Google Chrome
				</a>&hellip; and it's <a href="https://github.com/OzzyCzech/Simple-Time-Track" target="_blank">open source</a>.
			</p>

    <p className="text-center">
      <a href="https://chrome.google.com/webstore/detail/simple-time-track/hbhcgdpbdenjjpekdajanfgchlgacdea"
        target="_blank" className="btn btn-lg btn-hollow">Visit Chrome Web Store</a>
    </p>
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
  <Layout active="work" css={work}>
    <Head>
      <title>Work</title>
    </Head>
    <Testomato />
    <Zdrojak />
    <Sphido />
    <Wordpress />
    <TimeTrack />
    <AndMore />
  </Layout>
)