import {PropsWithChildren} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/layouts/index.module.scss';
import icon from '../../public/icon.png';

interface Props extends PropsWithChildren {}

export default function Layout({children}: Props) {
	return (
		<>
			<nav
				className={`${styles.nav} bg-beige shadow shadow-slate-300 px-4 py-3 flex flex-row flex-nowrap md:justify-normal justify-evenly md:gap-x-12 gap-x-4`}>
				<div id='about' className='md:order-1 order-2 flex flex-col justify-center'>
					<Link href='/about' className='link'>
						<h3 className=''>About</h3>
					</Link>
				</div>
				<div id='contact' className='md:order-2 order-3 flex flex-col justify-center'>
					<Link href='/contact' className='link'>
						<h3>Contact</h3>
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
						<h3>Gallery</h3>
					</Link>
				</div>
				<div id='socials' className='order-5 flex flex-col justify-center'>
					<Link href='/socials' className='link'>
						<h3>Socials</h3>
					</Link>
				</div>
			</nav>
			<main>{children}</main>
		</>
	);
}
