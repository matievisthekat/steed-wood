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
	const [selectedLang, setSelectedLang] = useState(i18nConfig.i18n.defaultLocale);

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

	const changeLang = (lang: string) => {
		i18n.changeLanguage(lang);
		router.push(
			{
				pathname: router.pathname,
				query: router.query
			},
			router.asPath,
			{locale: lang, scroll: false, shallow: true}
		);
	};

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
							onClick={() => changeLang(prefLang)}>
							{t('layout.change_lang', {lng: prefLang})} {t(prefLang)}?
						</button>
					</div>
				)}
			</header>
			<main>{props.children}</main>
			<footer className={`${styles.footer} px-4 pt-16 mx-auto w-full md:px-24 lg:px-8`}>
				<div className='flex flex-row flex-wrap justify-center align-middle mb-8'>
					<div className=''>
						<span className='text-base font-medium tracking-wide text-gray-200'>Choose a language:</span>
						<form
							className='flex flex-col mt-4 md:flex-row'
							onSubmit={(e) => {
								e.preventDefault();
								changeLang(selectedLang);
							}}>
							<select
								name='langs'
								id='langs'
								value={selectedLang}
								onChange={(e) => setSelectedLang(e.target.value)}
								className='flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-slate-200 border border-gray-300 rounded shadow-sm md:mr-2 md:mb-0'>
								{i18nConfig.i18n.locales.map((l, i) => (
									<option key={i} value={l}>
										{t(l)}
									</option>
								))}
							</select>
							<button
								type='submit'
								className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-slate-600 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'>
								Change
							</button>
						</form>
					</div>
				</div>
				<div className='flex flex-col justify-between pt-5 pb-10 border-t border-gray-300 sm:flex-row'>
					<p className='text-sm text-gray-200'>
						© Copyright 2023 Steed Woodworking (Pty) Ltd. All rights reserved.
					</p>
					<div className='flex items-center mt-4 space-x-4 sm:mt-0'>
						<Link target='_blank' href='https://tiktok.com/@steed.wood'>
							<svg viewBox='0 0 512 512' className='h-8'>
								<defs>
									<style></style>
									<linearGradient
										gradientUnits='userSpaceOnUse'
										id='linear-gradient'
										x1='-1.347'
										x2='510.699'
										y1='513.347'
										y2='1.301'>
										<stop offset='0' stopColor='#111' />
										<stop offset='1' stopColor='#323232' />
									</linearGradient>
									<linearGradient
										gradientUnits='userSpaceOnUse'
										id='linear-gradient-2'
										x1='153.06'
										x2='368.112'
										y1='376.967'
										y2='161.914'>
										<stop offset='0' stopColor='#b5053c' />
										<stop offset='0.233' stopColor='#c90441' />
										<stop offset='0.737' stopColor='#f0014b' />
										<stop offset='1' stopColor='#ff004f' />
									</linearGradient>
									<linearGradient
										gradientUnits='userSpaceOnUse'
										id='linear-gradient-3'
										x1='136.192'
										x2='362.722'
										y1='366.084'
										y2='139.555'>
										<stop offset='0' stopColor='#00b2c9' />
										<stop offset='0.283' stopColor='#00c8d4' />
										<stop offset='0.741' stopColor='#00e6e4' />
										<stop offset='1' stopColor='#00f1ea' />
									</linearGradient>
									<linearGradient
										gradientUnits='userSpaceOnUse'
										id='linear-gradient-4'
										x1='9.279'
										x2='510.704'
										y1='506.873'
										y2='5.448'>
										<stop offset='0' stopColor='#dde3e4' />
										<stop offset='1' stopColor='#fcf7f7' />
									</linearGradient>
								</defs>
								<title />
								<path
									style={{fill: 'url(#linear-gradient)'}}
									d='M256,0C114.615,0,0,114.615,0,256S114.615,512,256,512,512,397.385,512,256,397.385,0,256,0Z'
								/>
								<path
									style={{fill: 'url(#linear-gradient-2)'}}
									d='M393.729,187.531a72.364,72.364,0,0,1-72.365-72.364h-51.7V317.615a43.964,43.964,0,1,1-31.547-42.221V225.138a93.308,93.308,0,1,0,80.839,92.477l1.5-102.332a123.5,123.5,0,0,0,73.267,23.946Z'
								/>
								<path
									style={{fill: 'url(#linear-gradient-3)'}}
									d='M380.062,173.448A72.364,72.364,0,0,1,307.7,101.083H256V303.531a43.964,43.964,0,1,1-31.547-42.22V211.054a93.308,93.308,0,1,0,80.839,92.477L306.8,201.2a123.5,123.5,0,0,0,73.267,23.945Z'
								/>
								<path
									style={{fill: 'url(#linear-gradient-4)'}}
									d='M380.062,186.237a72.365,72.365,0,0,1-44.615-28.176,72.346,72.346,0,0,1-26.375-42.894H269.667V317.615a44.015,44.015,0,0,1-81.653,22.815,44.018,44.018,0,0,1,36.439-79.119V224.328a93.3,93.3,0,0,0-72.236,150.841,93.3,93.3,0,0,0,153.075-71.638L306.8,201.2a123.5,123.5,0,0,0,73.267,23.945Z'
								/>
							</svg>
						</Link>
						<Link target='_blank' href='https://www.instagram.com/steed.wood/'>
							<svg className='h-8' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<rect x='2' y='2' width='28' height='28' rx='6' fill='url(#paint0_radial_87_7153)' />
								<rect x='2' y='2' width='28' height='28' rx='6' fill='url(#paint1_radial_87_7153)' />
								<rect x='2' y='2' width='28' height='28' rx='6' fill='url(#paint2_radial_87_7153)' />
								<path
									d='M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z'
									fill='white'
								/>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z'
									fill='white'
								/>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z'
									fill='white'
								/>
								<defs>
									<radialGradient
										id='paint0_radial_87_7153'
										cx='0'
										cy='0'
										r='1'
										gradientUnits='userSpaceOnUse'
										gradientTransform='translate(12 23) rotate(-55.3758) scale(25.5196)'>
										<stop stopColor='#B13589' />
										<stop offset='0.79309' stopColor='#C62F94' />
										<stop offset='1' stopColor='#8A3AC8' />
									</radialGradient>
									<radialGradient
										id='paint1_radial_87_7153'
										cx='0'
										cy='0'
										r='1'
										gradientUnits='userSpaceOnUse'
										gradientTransform='translate(11 31) rotate(-65.1363) scale(22.5942)'>
										<stop stopColor='#E0E8B7' />
										<stop offset='0.444662' stopColor='#FB8A2E' />
										<stop offset='0.71474' stopColor='#E2425C' />
										<stop offset='1' stopColor='#E2425C' stopOpacity='0' />
									</radialGradient>
									<radialGradient
										id='paint2_radial_87_7153'
										cx='0'
										cy='0'
										r='1'
										gradientUnits='userSpaceOnUse'
										gradientTransform='translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)'>
										<stop offset='0.156701' stopColor='#406ADC' />
										<stop offset='0.467799' stopColor='#6A45BE' />
										<stop offset='1' stopColor='#6A45BE' stopOpacity='0' />
									</radialGradient>
								</defs>
							</svg>
						</Link>
						<Link target='_blank' href='https://www.facebook.com/steed.woodwork'>
							<svg className='h-8' viewBox='126.445 2.281 589 589' xmlns='http://www.w3.org/2000/svg'>
								<circle cx='420.945' cy='296.781' r='294.5' fill='#3c5a9a' />
								<path
									d='M516.704 92.677h-65.239c-38.715 0-81.777 16.283-81.777 72.402.189 19.554 0 38.281 0 59.357H324.9v71.271h46.174v205.177h84.847V294.353h56.002l5.067-70.117h-62.531s.14-31.191 0-40.249c0-22.177 23.076-20.907 24.464-20.907 10.981 0 32.332.032 37.813 0V92.677h-.032z'
									fill='#ffffff'
								/>
							</svg>
						</Link>
						<Link target='_blank' href='https://www.youtube.com/@steed.woodwork'>
							<svg className='h-8' enable-background='new 0 0 512 512' version='1.1' viewBox='0 0 512 512'>
								<g id='Layer_1'>
									<circle cx='256' cy='256' fill='#BB0000' r='238.2' />
								</g>
								<g id='Layer_2'>
									<g id='Layer_2_1_'>
										<path
											d='M255.4,364.6c-33.5,0.1-67-0.3-100.4-2.1    c-10.8-0.7-21.7-1.5-31.6-6.9c-6.6-3.6-11.7-8.5-15-15.6c-5.4-11.7-7.1-24-8.1-36.6c-2.2-25.9-2.2-51.9-1.1-77.8    c0.5-13.7,1-27.7,4.3-41.2c1.2-5.2,3-10.4,5.5-15.4c5.8-11.5,15.8-17.3,28-19.6c10.2-2.1,20.6-1.9,31-2.3    c35.1-1.5,70.4-2.2,105.5-1.8c27,0.3,54.2,1,81.4,2.3c8.4,0.4,16.7,0.5,24.7,3.6c10.8,4,18.8,10.8,23.2,21.8    c4.3,10.6,5.9,21.5,6.7,32.8c2.5,30.6,2.5,61.1,0.5,91.6c-0.7,10.3-1.4,20.6-4.1,30.7c-6,23.2-20.6,32.4-42,33.7    c-22.8,1.5-45.5,2.3-68.3,2.6C282.3,364.8,268.9,364.6,255.4,364.6z M222.5,300.4c30.5-16.6,60.5-33.1,91-49.8    c-30.6-16.7-60.6-33.2-91-49.8C222.5,234.2,222.5,267.1,222.5,300.4z'
											fill='none'
											stroke='#FAFAFA'
											stroke-miterlimit='10'
											stroke-width='15'
										/>
										<path
											d='M222.5,300.4c0-33.3,0-66.1,0-99.6    c30.3,16.6,60.4,33.1,91,49.8C282.9,267.4,252.8,283.7,222.5,300.4z'
											fill='none'
											stroke='#FAFAFA'
											stroke-miterlimit='10'
											stroke-width='15'
										/>
									</g>
								</g>
							</svg>
						</Link>
					</div>
				</div>
			</footer>
		</>
	);
}
