import {PropsWithChildren} from 'react';
import Image from 'next/image';
import styles from '../../styles/layouts/index.module.scss';
import icon from '../../public/icon.png';

interface Props extends PropsWithChildren {}

export default function Layout({children}: Props) {
	return (
		<>
			<nav
				className={`${styles.nav} bg-beige shadow shadow-slate-300 px-4 py-3 flex flex-row flex-nowrap md:justify-normal justify-evenly align-middle`}>
				<div id='logo-and-name' className='flex md:flex-row flex-col flex-nowrap justify-between items-center md:gap-3 gap-0'>
					<div id='logo' className='relative'>
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
					</div>
					<div id='name' className='h-full'>
						<h1 className='text-custom-brown-dark uppercase font-argos text-[1.5rem] tracking-widest mt-1.5'>Steed</h1>
						<h2 className='text-custom-brown-dark uppercase font-argos text-[0.7rem] tracking-tighter -mt-1'>Woodworking</h2>
					</div>
				</div>
			</nav>
			<main>{children}</main>
		</>
	);
}
