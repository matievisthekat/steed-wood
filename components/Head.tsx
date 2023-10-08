import NextHead from 'next/head';

export interface HeadProps {
	title?: string;
	desc?: string;
	image?: string;
}

export default function Head({title, desc, image}: HeadProps) {
	return (
		<NextHead>
			<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			<meta property='https://ogp.me/ns#title' content={title || 'Steed Woodworking'} />
			<meta property='https://ogp.me/ns#type' content='website' />
			<meta property='https://ogp.me/ns#image' content={image || 'https://steedwoodworking.co.za/og-image.png'} />
			<meta property='https://ogp.me/ns#description' content={desc || 'Hand-made solid wood items & furniture'} />
			<meta name='description' content={desc || 'Hand-made solid wood items & furniture'} />

			<meta
				name='keywords'
				content='woodwork, woodworking, carpenter, furniture, maker, custom woodworking, woodworker for hire, steed woodworking, steed wood, matthew stead, steed, woodworker south africa'
			/>

			<title>{title || 'Steed Woodworking'}</title>
		</NextHead>
	);
}
