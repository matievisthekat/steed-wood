import type {GetStaticProps, InferGetStaticPropsType} from 'next';
import Image from 'next/image';
import {SSRConfig} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import i18nConfig from '../next-i18next.config.js';
import Head from '../components/Head';
import Layout from '../components/layouts';

import me from '../public/img/me.jpg';
import hills from '../public/hills.svg';

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
			<div id='welcome' className='w-full max-h-1/3 pt-32 text-center bg-[#bae6fdff] relative'>
				<div className='text-center'>
					<div className='md:-mt-20 mt-0 w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
						<h1 className='font-argos text-3xl md:text-5xl font-bold '>Welcome</h1>
						<span className='text-sm font-semibold font-gothic'>
							This website is still under contruction, but please take a look around so long
						</span>
					</div>
					<Image src={hills} alt='Hills with two trees' className='w-full' />
				</div>
			</div>
			<div className='sm:px-16 px-10 py-10 bg-beige-dark flex sm:flex-nowrap flex-wrap gap-6'>
				<div className=''>
					<Image
						src={me}
						placeholder='blur'
						width={470}
						alt='Matthew Stead'
						className='rounded border-custom-brown-dark border-2 mx-auto w-full'
					/>
				</div>
				<div>
					<p className='font-gothic mb-2'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptatibus sunt architecto consequuntur
						tempora odio odit vel atque nemo. Repellat delectus quo necessitatibus neque consectetur excepturi
						cumque itaque adipisci rerum!
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur architecto provident officia quae,
						aspernatur consectetur debitis! Corporis voluptas corrupti, dolores quos porro facilis repellendus
						praesentium earum modi magni sequi accusamus!
					</p>
				</div>
			</div>
		</Layout>
	);
}
