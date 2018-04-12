import Head from 'next/head'

export default ({children, css = ''}) => (
	<div className="page">
		<Head>
			<meta charSet="utf-8"/>
			<title>Roman Ožana</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width"/>
			<meta name="robots" content="all"/>
			<meta name="author" content="All: Roman Ozana; e-mail: ozana@omdesign.cz"/>
			<meta name="google-site-verification" content="4LFYmB-l6Y6CTN9Cto7z8EiPwQy-ecopaMP-6pxQUKo"/>
			<link rel="shortcut icon" href="/static/favicon.png"/>
			<link rel="author" href="/static/humans.txt"/>
			<style dangerouslySetInnerHTML={{__html: css}}/>
			<script async src="https://www.googletagmanager.com/gtag/js?id=UA-5420131-1"></script>
			<script dangerouslySetInnerHTML={{__html: `if (document.location.hostname === 'omdesign.cz') {window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);} gtag('js', new Date());gtag('config', 'UA-5420131-1');}`}}/>
		</Head>

		{children}

	</div>
)