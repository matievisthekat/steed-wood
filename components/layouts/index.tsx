import {PropsWithChildren, useEffect, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {SSRConfig, useTranslation} from 'next-i18next';
import i18nConfig from '../../next-i18next.config.js';
import styles from '../../styles/layouts/index.module.scss';
import icon from '../../public/icon.png';

interface Props extends PropsWithChildren, SSRConfig {}

export default function Layout(props: Props) {
	const {t, i18n} = useTranslation('common');
	const router = useRouter();
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
		<>
			<header
				className={`${styles.header} sticky bg-beige shadow shadow-slate-300 px-4 py-3 flex flex-row flex-wrap w-full`}>
				<nav className='flex flex-row flex-nowrap md:w-4/5 w-full md:justify-normal justify-evenly md:gap-x-12 gap-x-4'>
					<div id='about' className='md:order-1 order-2 flex flex-col justify-center'>
						<Link href='/about' className='link'>
							<h3 className=''>{t('navbar.about')}</h3>
						</Link>
					</div>
					<div id='contact' className='md:order-2 order-3 flex flex-col justify-center'>
						<Link href='/contact' className='link'>
							<h3>{t('navbar.contact')}</h3>
						</Link>
					</div>
					<div
						id='logo-and-name'
						className='md:order-first order-3 flex md:flex-row flex-col flex-nowrap justify-between items-center md:gap-3 gap-0'>
						<div id='logo' className='relative'>
							<Link href='/'>
								<Image
									src={icon}
									width={64}
									height={64}
									alt='Horse head logo'
									quality={80}
									placeholder='blur'
									style={{objectFit: 'cover'}}
									className='rounded-full border-2 border-custom-brown-light border-dashed'
									priority
								/>
							</Link>
						</div>
						<div id='name' className='h-full'>
							<Link href='/'>
								<h1 className='text-custom-brown-dark uppercase font-argos text-[1.5rem] tracking-widest mt-1.5'>
									Steed
								</h1>
								<h2 className='text-custom-brown-dark uppercase font-argos text-[0.7rem] tracking-tighter -mt-1'>
									Woodworking
								</h2>
							</Link>
						</div>
					</div>
					<div id='gallery' className='order-4 flex flex-col justify-center'>
						<Link href='/gallery' className='link'>
							<h3>{t('navbar.gallery')}</h3>
						</Link>
					</div>
					<div id='socials' className='order-5 flex flex-col justify-center'>
						<Link href='/socials' className='link'>
							<h3>{t('navbar.socials')}</h3>
						</Link>
					</div>
				</nav>
				{i18n?.language !== prefLang && (
					<div id='extra' className='mx-auto md:w-min max-h-14 md:mt-0 mt-2'>
						<button
							id='change-lang'
							className='px-3 py-2 bg-slate-100 active:translate-y-0.5 active:bg-slate-50 transition-colors border-2 border-dotted border-blue-500 hover:bord-erblue-600'
							onClick={() => {
								i18n.changeLanguage(prefLang);
								router.push(
									{
										pathname: router.pathname,
										query: router.query
									},
									router.asPath,
									{locale: prefLang, scroll: false, shallow: true}
								);
							}}>
							Change language to {t(prefLang)}?
						</button>
					</div>
				)}
			</header>
			<main>{props.children}</main>
			<footer className='bg-slate-200'>
				<div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
					<div className='grid row-gap-10 mb-8 lg:grid-cols-6'>
						<div className='grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4'>
							<div>
								<p className='font-medium tracking-wide text-gray-600'>Category</p>
								<ul className='mt-2 space-y-2 text-gray-800'>
									<li>
										<a
											href='/'
											className='transition-colors duration-300 hover:text-gray-900'>
											News
										</a>
									</li>
									<li>
										<a
											href='/'
											className='transition-colors duration-300 hover:text-gray-900'>
											World
										</a>
									</li>
									<li>
										<a
											href='/'
											className='transition-colors duration-300 hover:text-gray-900'>
											Games
										</a>
									</li>
									<li>
										<a
											href='/'
											className='transition-colors duration-300 hover:text-gray-900'>
											References
										</a>
									</li>
								</ul>
							</div>
							<div>
								<p className='font-medium tracking-wide text-gray-600'>Apples</p>
								<ul className='mt-2 space-y-2'>
									<li>
										<a
											href='/'
											className='text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200'>
											Web
										</a>
									</li>
									<li>
										<a
											href='/'
											className='text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200'>
											eCommerce
										</a>
									</li>
									<li>
										<a
											href='/'
											className='text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200'>
											Business
										</a>
									</li>
									<li>
										<a
											href='/'
											className='text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200'>
											Entertainment
										</a>
									</li>
									<li>
										<a
											href='/'
											className='text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200'>
											Portfolio
										</a>
									</li>
								</ul>
							</div>
							<div>
								<p className='font-medium tracking-wide text-gray-600'>Cherry</p>
								<ul className='mt-2 space-y-2'>
									<li>
										<a
											href='/'
											className='text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200'>
											Media
										</a>
									</li>
									<li>
										<a
											href='/'
											className='text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200'>
											Brochure
										</a>
									</li>
									<li>
										<a
											href='/'
											className='text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200'>
											Nonprofit
										</a>
									</li>
									<li>
										<a
											href='/'
											className='text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200'>
											Educational
										</a>
									</li>
									<li>
										<a
											href='/'
											className='text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200'>
											Projects
										</a>
									</li>
								</ul>
							</div>
							<div>
								<p className='font-medium tracking-wide text-gray-600'>Business</p>
								<ul className='mt-2 space-y-2'>
									<li>
										<a
											href='/'
											className='text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200'>
											Infopreneur
										</a>
									</li>
									<li>
										<a
											href='/'
											className='text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200'>
											Personal
										</a>
									</li>
									<li>
										<a
											href='/'
											className='text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200'>
											Wiki
										</a>
									</li>
									<li>
										<a
											href='/'
											className='text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200'>
											Forum
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className='md:max-w-md lg:col-span-2'>
							<span className='text-base font-medium tracking-wide text-gray-600'>Subscribe for updates</span>
							<form className='flex flex-col mt-4 md:flex-row'>
								<input
									placeholder='Email'
									required
									type='text'
									className='flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline'
								/>
								<button
									type='submit'
									className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'>
									Subscribe
								</button>
							</form>
							<p className='mt-4 text-sm text-gray-500'>
								Bacon ipsum dolor amet short ribs pig sausage prosciuto chicken spare ribs salami.
							</p>
						</div>
					</div>
					<div className='flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row'>
						<p className='text-sm text-gray-500'>© Copyright 2020 Lorem Inc. All rights reserved.</p>
						<div className='flex items-center mt-4 space-x-4 sm:mt-0'>
							<a href='/' className='text-gray-500 transition-colors duration-300 hover:text-teal-accent-400'>
								<svg viewBox='0 0 24 24' fill='currentColor' className='h-5'>
									<path d='M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z' />
								</svg>
							</a>
							<a href='/' className='text-gray-500 transition-colors duration-300 hover:text-teal-accent-400'>
								<svg viewBox='0 0 30 30' fill='currentColor' className='h-6'>
									<circle cx='15' cy='15' r='4' />
									<path d='M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z' />
								</svg>
							</a>
							<a href='/' className='text-gray-500 transition-colors duration-300 hover:text-teal-accent-400'>
								<svg viewBox='0 0 24 24' fill='currentColor' className='h-5'>
									<path d='M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z' />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
