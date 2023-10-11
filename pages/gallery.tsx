import type {GetStaticProps} from 'next';
import Image, {StaticImageData} from 'next/image';
import {SSRConfig} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import i18nConfig from '../next-i18next.config.js';
import Head from '../components/Head';
import Layout from '../components/layouts';

import gallery from './galleryCards';
import Link from 'next/link.js';

interface Props extends SSRConfig {}

async function getAllTranslationsServerSide(locale: string) {
	return serverSideTranslations(locale, ['common'], i18nConfig, i18nConfig.i18n.locales);
}

export const getStaticProps: GetStaticProps<Props> = async ({locale}) => ({
	props: {
		...(await getAllTranslationsServerSide(locale ?? i18nConfig.i18n.defaultLocale))
	}
});

export default function Gallery(props: Props) {
	return (
		<Layout {...props}>
			<Head title='Gallery | SW' desc='View my projects. Photos, videos, and  more!' />
			<div id='gallery' className='mx-auto px-12 py-8 flex flex-row flex-wrap gap-6'>
				{gallery.map((g, i) => (
					<GalleryCard {...g} />
				))}
			</div>
		</Layout>
	);
}

interface GalleryCardProps {
	title: string;
	shortDesc: string;
	slug: string;
	img: StaticImageData;
	alt: string;
}

function GalleryCard(props: GalleryCardProps) {
	return (
		<Link href={`/gallery/${props.slug}`}>
			<div
				className='relative bg-white rounded drop-shadow-md transition-all hover:drop-shadow-xl shadow-black hover:cursor-pointer'
				data-id={props.slug}>
				<Image src={props.img} alt={props.alt} width={250} placeholder='blur' className='rounded' />
				<div id='padded' className='absolute bottom-0 left-0 right-0 top-46 p-2'>
					<h2 className='font-poppins w-5/6 text-ellipsis line-clamp-1 font-bold text-sm border-b border-b-slate-800 mb-2'>{props.title}</h2>
					<p className='font-poppins w-full text-ellipsis line-clamp-2 text-sm'>{props.shortDesc}</p>
				</div>
			</div>
		</Link>
	);
}
