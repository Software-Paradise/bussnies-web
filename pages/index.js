import Head from 'next/head'
import Image from 'next/image'
import { LandingLayout } from '../layouts'
import { TopScreen, InfoScreen } from '../screens'

export default function Home() {
	return (
		<div>
			<Head>
				<title>AlySystem</title>
				<meta charSet="utf-8" />
				<meta name="google" content="notranslate" />
				<meta
					name="description"
					content="Desarrollo de aplicaciones basadas en la tencología blockchain."
				/>
				<link rel="icon" href="/favicon.ico" />
				<meta name="theme-color" content="#1d1d1d" />
				<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
				<meta
					name="viewport"
					content="width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1"
				/>
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta
					name="apple-mobile-web-app-status-bar-style"
					content="#2d2d2d"
				/>
				<meta
					name="apple-mobile-web-app-title"
					content="AlySystem"></meta>
				<link
					rel="apple-touch-icon"
					sizes="192x192"
					href="/192.png"></link>
				<meta name="format-detection" content="telephone=no" />
				<meta name="msapplication-TileColor" content="#2d2d2d"></meta>
				<meta name="msapplication-TileImage" content="/192.png"></meta>
			</Head>
			<main className="font-sans h-screen">
				<LandingLayout>
					<TopScreen />
					<InfoScreen />
				</LandingLayout>
			</main>
			<footer></footer>
		</div>
	)
}
