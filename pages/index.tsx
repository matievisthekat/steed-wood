import type {GetStaticProps, InferGetStaticPropsType} from 'next';
import {SSRConfig} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import i18nConfig from '../next-i18next.config.js';
import Head from '../components/Head';
import Layout from '../components/layouts';
import {useEffect, useState} from 'react';

interface Props extends SSRConfig {}

export const getStaticProps: GetStaticProps<Props> = async ({locale}) => ({
	props: {
		...(await serverSideTranslations(locale ?? i18nConfig.i18n.defaultLocale, ['common']))
	}
});

export default function Home(props: InferGetStaticPropsType<typeof getStaticProps>) {
	const [prefLang, setPrefLang] = useState(i18nConfig.i18n.defaultLocale);

	useEffect(() => {
		const userLang = window.navigator.language || window.navigator.languages[0];
		const matchLang = i18nConfig.i18n.locales.find(
			(l) =>
				l === userLang || l.toLowerCase().replace('-', '_').split('_')[0] === userLang.toLowerCase().split('_')[0]
		);
		if (matchLang) {
			setPrefLang(matchLang.replace('-', '_'));
		}
	}, []);

	return (
		<Layout {...props}>
			<Head />
		</Layout>
	);
}
