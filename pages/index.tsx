import type {GetStaticProps, InferGetStaticPropsType} from 'next';
import {SSRConfig} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import i18nConfig from '../next-i18next.config.js';
import Head from '../components/Head';
import Layout from '../components/layouts';

interface Props extends SSRConfig {}

export const getStaticProps: GetStaticProps<Props> = async ({locale}) => ({
	props: {
		...(await serverSideTranslations(locale ?? i18nConfig.i18n.defaultLocale, ['common']))
	}
});

export default function Home(props: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<Layout {...props}>
			<Head />
		</Layout>
	);
};
