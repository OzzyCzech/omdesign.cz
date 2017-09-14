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
				<link rel="me" type="text/html" href="https://plus.google.com/102792250956539127203"/>
				<link rel="shortcut icon" href="/favicon.ico"/>
				<link rel="author" href="/humans.txt"/>
				<style dangerouslySetInnerHTML={{__html: css}}/>
			</Head>

			{children}

		</div>
)