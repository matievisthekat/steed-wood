import type {GetStaticProps} from 'next';
import {SSRConfig, useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import i18nConfig from '../../next-i18next.config';
import Head from '../../components/Head';
import Layout from '../../components/layouts/index';
import GalleryCard from '../../components/GalleryCard';

import gallery from '../../components/galleryCards';

interface Props extends SSRConfig {}

async function getAllTranslationsServerSide(locale: string) {
	return serverSideTranslations(locale, ['common', 'gallery'], i18nConfig, i18nConfig.i18n.locales);
}

export const getStaticProps: GetStaticProps<Props> = async ({locale}) => ({
	props: {
		...(await getAllTranslationsServerSide(locale ?? i18nConfig.i18n.defaultLocale))
	}
});

export default function Gallery(props: Props) {
	const {t} = useTranslation('gallery');
	return (
		<Layout {...props}>
			<Head title='Gallery | SW' desc='View my projects. Photos, videos, and  more!' />
			<div id='gallery' className='mx-auto px-2 py-8 flex flex-row flex-wrap gap-2 justify-evenly align-middle'>
				{gallery.map((g, i) => (
					<GalleryCard key={i} {...g} t={t} />
				))}
			</div>
		</Layout>
	);
}
