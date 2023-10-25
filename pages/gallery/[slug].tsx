import {GetStaticProps} from 'next';
import {SSRConfig, useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import i18nConfig from '../../next-i18next.config';
import {useRouter} from 'next/router';
import Layout from '../../components/layouts';
import Head from '../../components/Head';

import gallery from '../../components/galleryCards';

interface Props extends SSRConfig {}

async function getAllTranslationsServerSide(locale: string) {
	return serverSideTranslations(locale, ['common'], i18nConfig, i18nConfig.i18n.locales);
}

export const getStaticProps: GetStaticProps<Props> = async ({locale}) => ({
	props: {
		...(await getAllTranslationsServerSide(locale ?? i18nConfig.i18n.defaultLocale))
	}
});

export function getStaticPaths() {
	return {
		paths: gallery.map((g) => ({params: {slug: g.slug}})),
		fallback: 'blocking'
	};
}

export default function GalleryItemPage() {
	const {t} = useTranslation('common');
	const router = useRouter();
	const item = gallery.find((g) => g.slug === router.query.slug);

	return (
		<Layout>
			<Head
				title={`${item ? t(`${item.slug}.title`) : 'Not Found'} | SW`}
				desc='View my projects. Photos, videos, and  more!'
			/>
			{!item && (
				<div id='message' className='mx-auto text-center my-48 p-6'>
					<h1 className='font-argos font-bold text-xl'>{t('errors.404')}</h1>
				</div>
			)}
		</Layout>
	);
}
