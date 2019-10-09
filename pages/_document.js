import Document, {Head, Main, NextScript} from 'next/document'
import Header from '../components/header'
import Footer from '../components/footer'

export default class MyDocument extends Document {

	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return {...initialProps}
	}

	render() {

		const pathname = this.props.__NEXT_DATA__.page; // get active pathname...
		const page = this.props.__NEXT_DATA__.page.replace(/[^\w\-]+/g, '');

		return (
			<html>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
				<meta name="google-site-verification" content="4LFYmB-l6Y6CTN9Cto7z8EiPwQy-ecopaMP-6pxQUKo"/>
				<meta name="author" content="All: Roman Ozana; e-mail: roman@omdesign.cz"/>
				<link rel="shortcut icon" href="/favicon.png"/>
				<link rel="author" href="/humans.txt"/>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap-reboot.css"/>
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