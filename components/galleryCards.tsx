import {StaticImageData} from 'next/image';
import cedarCandleHolderThree from '../public/img/gallery/cedar-candleholder-three.png';
import oregonPineChair from '../public/img/gallery/oregon-pine-chair.png';
import yellowWoodLamp from '../public/img/gallery/yellow-wood-lamp.png';
import yellowWoodBubingaLamp from '../public/img/gallery/yellow-wood-bubinga-lamp.png';
import imbuiaLamp from '../public/img/gallery/imbuia-lamp.png';
import cedarLamp from '../public/img/gallery/cedar-lamp.png';
import medicineCabinet from '../public/img/gallery/medicine-cabinet.png';
import servietteHolder from '../public/img/gallery/serviette-holder.png';
import hexagonBox from '../public/img/gallery/hexagon-box.png';
import smallBench from '../public/img/gallery/small-bench.png';
import chest from '../public/img/gallery/chest.png';

export interface GalleryItem {
	slug: string;
	cover: StaticImageData;
	alt: string;
	forSale?: boolean;
}

const gallery: GalleryItem[] = [
	{
		slug: 'cedar-candle-holders',
		cover: cedarCandleHolderThree,
		alt: 'Purple cedar wood candle holder'
	},
	{
		slug: 'oregon-pine-chair',
		cover: oregonPineChair,
		alt: 'Upholstered chair made from Oregon Pine'
	},
	{
		slug: 'yellowwood-lamp',
		cover: yellowWoodLamp,
		forSale: true,
		alt: 'Yellowwood lamp with pine base'
	},
	{
		slug: 'yellowwood-bubinga-lamp',
		cover: yellowWoodBubingaLamp,
		forSale: true,
		alt: 'Yellowwood lamp with a bubinga base'
	},
	{
		slug: 'imbuia-bubinga-lamp',
		cover: imbuiaLamp,
		alt: 'Imbuia lamp with bubinga base'
	},
	{
		slug: 'cedar-bubinga-lamp',
		cover: cedarLamp,
		forSale: true,
		alt: 'Cedar wood lamp with bubinga base'
	},
	{
		slug: 'medicine-cabinet',
		cover: medicineCabinet,
		alt: 'Oregon pine medicine cabinet with mirror'
	},
	{
		slug: 'serviette-holder',
		cover: servietteHolder,
		forSale: true,
		alt: 'Simple serviette holder'
	},
	{
		slug: 'hexagonal-box',
		cover: hexagonBox,
		alt: 'Hexagonal box made from pine wood'
	},
	{
		slug: 'small-pine-bench',
		cover: smallBench,
		alt: 'Small pine bench'
	},
	{
		slug: 'plywood-chest',
		cover: chest,
		alt: 'Pine plywood chest'
	}
];

export default gallery;
