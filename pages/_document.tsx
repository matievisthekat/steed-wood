import {Html, Head, Main, NextScript} from 'next/document';

export default function Document() {
	return (
		<Html lang='en_ZA'>
			<Head>
				<meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />
				<meta charSet='UTF-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta httpEquiv='X-UA-Compatible' content='IE=7' />
				<meta name='robots' content='follow, index' />

				<link rel='shortcut icon' href='/favicon.png' type='image/png' />
				{/* Preloading fonts */}
				<link
					rel='preload'
					href='/fonts/Argos-Bold/Argos-Bold.ttf'
					as='font'
					type='font/truetype'
					crossOrigin='use-credentials'
				/>
				<link
					rel='preload'
					href='/fonts/Argos-Bold/Argos-Bold.woff'
					as='font'
					type='font/woff'
					crossOrigin='use-credentials'
				/>
				<link
					rel='preload'
					href='/fonts/Argos-Bold/Argos-Bold.woff2'
					as='font'
					type='font/woff2'
					crossOrigin='use-credentials'
				/>
				<link
					rel='preload'
					href='/fonts/Argos-Bold/Argos-Bold.otf'
					as='font'
					type='font/otf'
					crossOrigin='use-credentials'
				/>
				<link
					rel='preload'
					href='/fonts/Argos-Bold/Argos-Bold.eot'
					as='font'
					type='font/eot'
					crossOrigin='use-credentials'
				/>
				<link
					rel='preload'
					href='/fonts/Argos-Bold/Argos-Bold.svg'
					as='font'
					type='font/svg'
					crossOrigin='use-credentials'
				/>

				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='use-credentials' />
				<link
					href='https://fonts.googleapis.com/css2?family=Gothic+A1:wght@100;200;300;400;500;600;700;800&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
