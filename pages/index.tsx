import type {GetStaticProps, InferGetStaticPropsType} from 'next';
import {SSRConfig} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import i18nConfig from '../next-i18next.config.js';
import Head from '../components/Head';
import Layout from '../components/layouts';
import {useEffect, useState} from 'react';

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
	return (
		<Layout {...props}>
			<Head />
		</Layout>
	);
}
