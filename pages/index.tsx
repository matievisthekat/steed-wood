import type {GetStaticProps, InferGetStaticPropsType} from 'next';
import Image from 'next/image';
import {SSRConfig, useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import i18nConfig from '../next-i18next.config.js';
import Head from '../components/Head';
import Layout from '../components/layouts';
import GalleryCard from '../components/GalleryCard';

import gallery from '../components/galleryCards';
import me from '../public/img/me.jpg';
import hills from '../public/hills.svg';

interface Props extends SSRConfig {}

async function getAllTranslationsServerSide(locale: string) {
	return serverSideTranslations(locale, ['common', 'index', 'gallery'], i18nConfig, i18nConfig.i18n.locales);
}

export const getStaticProps: GetStaticProps<Props> = async ({locale}) => ({
	props: {
		...(await getAllTranslationsServerSide(locale ?? i18nConfig.i18n.defaultLocale))
	}
});

export default function Home(props: InferGetStaticPropsType<typeof getStaticProps>) {
	const {t} = useTranslation('index');
	const {t: galleryT} = useTranslation('gallery');
	const showcaseItems = gallery.filter((g) =>
		['medicine-cabinet', 'yellowwood-bubinga-lamp', 'cedar-candle-holders'].includes(g.slug)
	);

	return (
		<Layout {...props}>
			<Head />
			<section id='welcome' className='w-full max-h-1/3 pt-32 text-center bg-[#bae6fdff] relative'>
				<div className='text-center'>
					<div className='md:-mt-20 mt-0 w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
						<h1 className='font-argos text-3xl md:text-5xl font-bold '>{t('welcome')}</h1>
						<span className='text-sm font-semibold font-gothic'>{t('under_construction')}</span>
					</div>
					<Image src={hills} alt='Hills with two trees' className='w-full' priority />
				</div>
			</section>
			<section className='px-16 md:px-10 py-10 bg-beige-dark flex sm:flex-nowrap flex-wrap gap-6'>
				<div className=''>
					<Image
						src={me}
						placeholder='blur'
						width={400}
						alt='Matthew Stead'
						className='rounded border-custom-brown-dark border-2 mx-auto w-full'
					/>
				</div>
				<div className='md:text-lg font-medium'>
					<p className='font-gothic mb-4 md:mt-3'>
						{t('i_am')} <br />
						{t('wood_passion')}
					</p>
					<p>{t('variety')}</p>
				</div>
			</section>
			<section className='px-10 md:px-24 py-10 bg-beige-off-dark'>
				<h3 className='text-xl font-semibold underline mb-3'>{t('take_a_look')}</h3>
				<div className='flex flex-row flex-wrap mx-auto max-w-1/2 gap-3 px-4'>
					{showcaseItems.map((s, i) => (
						<GalleryCard key={i} cover={s.cover} slug={s.slug} alt={s.alt} t={galleryT} />
					))}
				</div>
			</section>
		</Layout>
	);
}
