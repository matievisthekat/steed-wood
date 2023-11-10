import Link from 'next/link';
import Image from 'next/image';
import {GalleryItem} from './galleryCards';
import {TFunction} from 'next-i18next';

export default function GalleryCard({cover, slug, forSale, t}: GalleryItem & {t: TFunction}) {
	return (
		<Link href={`/gallery/${slug}`} title={t(`${slug}.shortDesc`)}>
			<div
				className='relative rounded-md drop-shadow-md transition-all hover:drop-shadow-xl shadow-black hover:cursor-pointer w-44 md:w-52'
				data-id={slug}>
				<Image
					src={cover}
					alt={t(`${slug}.alt`)}
					placeholder='blur'
					className={`rounded-md ${forSale && 'border border-red-600'}`}
				/>
				{forSale && (
					<span
						id='for-sale'
						className='absolute top-0 right-0 text-red-600 rounded-md font-light text-sm font-poppins px-1 py-0.5'>
						{t('for-sale')}
					</span>
				)}
				<div
					id='padded'
					className='bg-gradient-to-t from-beige-dark from-20% via-beige via-75% to-transparent absolute bottom-0 left-0 right-0 top-46 p-2 pt-4 rounded-br-md rounded-bl-md'>
					<h2 className='font-poppins w-5/6 text-ellipsis line-clamp-1 font-bold text-sm border-b border-b-slate-800 mb-2'>
						{t(`${slug}.title`)}
					</h2>
					<p className='font-poppins w-full text-ellipsis line-clamp-2 text-sm'>{t(`${slug}.shortDesc`)}</p>
				</div>
			</div>
		</Link>
	);
}
