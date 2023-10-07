import NextHead from 'next/head';

export interface HeadProps {
	title?: string;
	desc?: string;
	image?: string;
}

export default function Head({title, desc, image}: HeadProps) {
	return (
		<NextHead>
			<meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />
			<meta charSet='UTF-8' />
			<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			<meta httpEquiv='X-UA-Compatible' content='IE=7' />
			<meta name='robots' content='follow, index' />

			<meta property='https://ogp.me/ns#title' content={title || 'Steed Woodworking'} />
			<meta property='https://ogp.me/ns#type' content='website' />
			<meta property='https://ogp.me/ns#url' content='https://steedwoodworking.co.za' />
			<meta property='https://ogp.me/ns#locale' content='en_ZA' />
			<meta property='https://ogp.me/ns#image' content={image || 'https://steedwoodworking.co.za/og-image.png'} />
			<meta property='https://ogp.me/ns#description' content={desc || 'Hand-made solid wood items & furniture'} />
			<meta name='description' content={desc || 'Hand-made solid wood items & furniture'} />

			<meta
				name='keywords'
				content='woodwork, woodworking, carpenter, furniture, maker, custom woodworking, woodworker for hire, steed woodworking, steed wood, matthew stead, steed, woodworker south africa'
			/>

			<title>{title || 'Steed Woodworking'}</title>

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
		</NextHead>
	);
}
