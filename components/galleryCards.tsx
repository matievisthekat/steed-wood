import {StaticImageData} from 'next/image';
import cedarCandleHolderTall from '../public/img/gallery/cedar-candleholder-tall.png';
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
	title: string;
	slug: string;
	shortDesc: string;
	img: StaticImageData;
	alt: string;
	forSale?: boolean;
}

const gallery: GalleryItem[] = [
	{
		title: 'Cedar Candle Holder Set',
		slug: 'cedar-candle-holders',
		shortDesc: 'A set of large candle holders made from aromatic Cedar wood',
		img: cedarCandleHolderTall,
		alt: 'Purple cedar wood candle holder'
	},
	{
		title: 'Oregon Pine Chair',
		slug: 'oregon-pine-chair',
		shortDesc: 'Made from recovered Oregon Pine, this chair involved a lot of complicated joinery',
		img: oregonPineChair,
		alt: 'Upholstered chair made from Oregon Pine'
	},
	{
		title: 'Yellowwood Lamp',
		slug: 'yellowwood-lamp',
		shortDesc: "Beautiful figured Yellowwood and Pine lamp. Made with yellowwood from my Oupa's garden",
		img: yellowWoodLamp,
		alt: 'Yellowwood lamp with pine base',
		forSale: true
	},
	{
		title: 'Yellowwood & Bubinga Lamp',
		slug: 'yellowwood-bubinga-lamp',
		shortDesc: "Yellowwood from my Oupa's garden with a Bubinga base. One of my favourite lamps by far",
		img: yellowWoodBubingaLamp,
		alt: 'Yellowwood lamp with a bubinga base',
		forSale: true
	},
	{
		title: 'Imbuia & Bubinga Lamp',
		slug: 'imbuia-bubinga-lamp',
		shortDesc:
			'Lamp made from Imbuia (Brazillian Walnut) and Bubinga. The Imbuia was a gift from my Oupa so it is quite sentimental',
		img: imbuiaLamp,
		alt: 'Imbuia lamp with bubinga base'
	},
	{
		title: 'Cedar & Bubinga Lamp',
		slug: 'cedar-bubinga-lamp',
		shortDesc: 'Vintage-style lamp made from aromatic Cedar and Bubinga',
		img: cedarLamp,
		alt: 'Cedar wood lamp with bubinga base',
		forSale: true
	},
	{
		title: 'Medicine Cabinet',
		slug: 'medicine-cabinet',
		shortDesc: 'A small medicine cabinet made from Oregon Pine. No complex joinery in this one',
		img: medicineCabinet,
		alt: 'Oregon pine medicine cabinet with mirror'
	},
	{
		title: 'Serviette Holder',
		slug: 'serviette-holder',
		shortDesc: 'A simple serviette holder made from Pine planks and dowels',
		img: servietteHolder,
		alt: 'Simple serviette holder',
		forSale: true
	},
	{
		title: 'Hexangonal Box',
		slug: 'hexagonal-box',
		shortDesc:
			"A simple hexagonal box made from Pine. Some maths needed to figure out the angles on this one, but it wasn't too bad",
		img: hexagonBox,
		alt: 'Hexagonal box made from pine wood'
	},
	{
		title: 'Small Pine Bench',
		slug: 'small-pine-bench',
		shortDesc: 'A very simple Pine bench I made a long time ago. Mortise and tenon joints for each of the legs',
		img: smallBench,
		alt: 'Small pine bench'
	},
	{
		title: 'Plywood Chest',
		slug: 'plywood-chest',
		shortDesc: 'A practical Chest made from Pine Plywood. With built-in drawer boxes inside',
		img: chest,
		alt: 'Pine plywood chest'
	}
];

export default gallery;
