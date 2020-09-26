import Document, {Head, Html, Main, NextScript} from 'next/document'
import Header from '../components/header'
import Footer from '../components/footer'
import React from "react";

export default class MyDocument extends Document {

	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return {...initialProps}
	}

	render() {

		const pathname = this.props.__NEXT_DATA__.page; // get active pathname...
		const page = this.props.__NEXT_DATA__.page.replace(/[^\w\-]+/g, '');

		return (
			<Html>
				<Head>
					<meta name="google-site-verification" content="4LFYmB-l6Y6CTN9Cto7z8EiPwQy-ecopaMP-6pxQUKo"/>
					<meta name="author" content="All: Roman Ožana; e-mail: roman@omdesign.cz"/>
					<link rel="shortcut icon" href="/favicon.png"/>
					<link rel="author" href="/humans.txt"/>

					<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css"/>
				</Head>

				<body className={'font-sans leading-normal tracking-normal grid gap-1 min-h-screen ' + (page ? page : 'home')}>
				<Header active={pathname}/>
				<main className="grid items-center"><Main/></main>
				<Footer active={pathname}/>
				<NextScript/>
				</body>
			</Html>
		)
	}
}