import type {GetStaticProps, InferGetStaticPropsType} from 'next';
import {SSRConfig, useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import i18nConfig from '../next-i18next.config.js';
import Head from '../components/Head';
import Layout from '../components/layouts';

interface Props extends SSRConfig {}

async function getAllTranslationsServerSide(locale: string) {
	return serverSideTranslations(locale, ['common'], i18nConfig, i18nConfig.i18n.locales);
}

export const getStaticProps: GetStaticProps<Props> = async ({locale}) => ({
	props: {
		...(await getAllTranslationsServerSide(locale ?? i18nConfig.i18n.defaultLocale))
	}
});

export default function Home(props: InferGetStaticPropsType<typeof getStaticProps>) {
	const {t} = useTranslation('common');

	return (
		<Layout {...props}>
			<Head title='Route not found | SW' />
			<div id='message' className='mx-auto text-center my-48 p-6'>
				<h1 className='font-argos font-bold text-xl'>{t('errors.404')}</h1>
			</div>
		</Layout>
	);
}
