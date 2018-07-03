import Document, {Head, Main, NextScript} from 'next/document'
import Header from '../components/header'
import Footer from '../components/footer'
import '../css/_css.js'

export default class MyDocument extends Document {
	render() {
		const pathname = this.props.__NEXT_DATA__.pathname; // get active pathname...
		const page = this.props.__NEXT_DATA__.pathname.replace(/[^\w\-]+/g, '');

		return (
				<html>
				<Head>
					<title>Roman Ožana</title>
					<meta name="viewport" content="initial-scale=1.0, width=device-width"/>
					<meta name="robots" content="all"/>
					<meta name="author" content="All: Roman Ozana; e-mail: ozana@omdesign.cz"/>
					<meta name="google-site-verification" content="4LFYmB-l6Y6CTN9Cto7z8EiPwQy-ecopaMP-6pxQUKo"/>
					<link rel="shortcut icon" href="/static/favicon.png"/>
					<link rel="author" href="/static/humans.txt"/>
					<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.1/css/bootstrap-reboot.css"/>
					<link rel="stylesheet" href="/_next/static/style.css"/>
				</Head>

				<body className={page ? page : 'home'}>

				<Header active={pathname}/>

				<main id="__next" dangerouslySetInnerHTML={{__html: this.props.html}}></main>

				<Footer active={pathname}/>

				<div id="__next-error" dangerouslySetInnerHTML={{__html: this.props.errorHtml}}></div>

				<NextScript/>
				</body>

				</html>
		)
	}
}