import type {GetStaticProps, InferGetStaticPropsType} from 'next';
import {SSRConfig} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import i18nConfig from '../next-i18next.config.js';
import Head from '../components/Head';
import Layout from '../components/layouts';
import {useEffect, useRef} from 'react';

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
	const welcomeRef = useRef<HTMLDivElement | null>();
	const restRef = useRef<HTMLDivElement | null>();

	const marginTop = () => {
		if (welcomeRef.current && restRef.current) {
			const welcome = welcomeRef.current.getBoundingClientRect();
			const newMargin = welcome.height;
			restRef.current.setAttribute('style', `margin-top: ${newMargin-110}px;`);
		}
	};

	useEffect(() => {
		window.onresize = () => marginTop();
		marginTop();
	}, []);

	return (
		<Layout {...props}>
			<Head />
			<div
				id='welcome'
				ref={(e) => (welcomeRef.current = e)}
				className='w-full max-h-1/3 pt-32 text-center bg-blue-100 fixed z-0 top-0'>
				<div className='text my-16'>
					<h1 className='font-argos text-4xl md:text-5xl font-bold '>Welcome</h1>
					<span className='text-sm font-semibold font-gothic'>
						This website is still under contruction, but please take a look around so long
					</span>
				</div>
				<div className='relative w-full'>
					<svg
						id='back'
						className='w-full absolute bottom-0'
						viewBox='0 0 1200 127'
						fill='none'
						transform='scale(-1, 2)'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M0 17.5804L50 27.4048C100 37.2292 200 56.878 300 59.3341C400 61.7902 500 47.0536 600 32.317C700 17.5804 800 2.84382 900 0.387716C1000 -2.06838 1100 7.75602 1150 12.6682L1200 17.5804V106H1150C1100 106 1000 106 900 106C800 106 700 106 600 106C500 106 400 106 300 106C200 106 100 106 50 106H0V17.5804Z'
							fill='#656e32'
						/>
					</svg>
					<svg
						id='front'
						className='w-full'
						viewBox='0 0 1200 126'
						fill='none'
						transform='scale(1, 2)'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M0 17.5804L50 27.4048C100 37.2292 200 56.878 300 59.3341C400 61.7902 500 47.0536 600 32.317C700 17.5804 800 2.84382 900 0.387716C1000 -2.06838 1100 7.75602 1150 12.6682L1200 17.5804V106H1150C1100 106 1000 106 900 106C800 106 700 106 600 106C500 106 400 106 300 106C200 106 100 106 50 106H0V17.5804Z'
							fill='#8b993d'
						/>
					</svg>
				</div>
			</div>
			<div
				id='-rest-of-page'
				ref={(e) => (restRef.current = e)}
				className='py-32 bg-beige-dark relative z-20'></div>
		</Layout>
	);
}
