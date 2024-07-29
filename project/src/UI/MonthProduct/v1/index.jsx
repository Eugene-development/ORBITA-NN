import Button from './Button'

// const monthProduct = [
// 	{
// 		id: 261,
// 		value: 'ГВЛВ "Кнауф" 10 мм (1200*2500)',
// 		price: 790,
// 		unit: 'шт',
// 		link: '/shop/product/gvlv-knauf-10-mm-12002500',
// 		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%B3%D0%B2%D0%BB.jpg'
// 	},
// 	{
// 		id: 121,
// 		value: 'Линокром ТКП сланец серый (10 м2)',
// 		price: 1700,
// 		unit: 'шт',
// 		link: '/shop/product/linokrom-tkp-slanec-seryi-10-m',
// 		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%BB%D0%B8%D0%BD%D0%BE%D0%BA%D1%80%D0%BE%D0%BC.jpg'
// 	},
// 	{
// 		id: 123,
// 		value: 'Линокром ТПП (15 м2)',
// 		price: 2340,
// 		unit: 'шт',
// 		link: '/shop/product/linokrom-tpp-15-m2',
// 		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%BB%D0%B8%D0%BD%D0%BE%D0%BA%D1%80%D0%BE%D0%BC.jpg'
// 	},
// 	{
// 		id: 223,
// 		value: 'Брус строганный 50*40*3000',
// 		price: 165,
// 		unit: 'шт',
// 		link: '/shop/product/brus-strogannyi-50403000',
// 		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%B1%D1%80%D1%83%D1%81%D1%8C%D1%8F.jpg'
// 	},
// ]

const monthProduct = [
		{
			id: '123',
			value: 'Линокром ТПП (15 м2)',
			price: '2520',
			unit: 'шт',
			description: 'При заказе через сайт дополнительная скидка 5%',
			link: '/shop/product/linokrom-tpp-15-m2',
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%BB%D0%B8%D0%BD%D0%BE%D0%BA%D1%80%D0%BE%D0%BC.jpg'
		},
		{
			id: '964',
			value: 'Эпп Технониколь 1180*580*30-l',
			price: '206',
			unit: 'шт',
			description: 'При заказе через сайт дополнительная скидка 5%',
			link: '/shop/product/epp-xps30-200-texnopleks-118058030-l',
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/XPS-%D0%A2%D0%95%D0%A5%D0%9D%D0%9E%D0%9F%D0%9B%D0%95%D0%9A%D0%A1.png'
		},
		{
			id: '69',
			value: 'Утеплитель Техноблок 1200х600х50',
			price: '1680',
			unit: 'шт',
			description: 'При заказе через сайт дополнительная скидка 5%',
			link: '/shop/product/uteplitel-texnoblok-standart-120060050-mm-0288-m3',
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/nt[yj,kjr.jpg'
		},
		{
			id: '2393',
			value: 'Мастика гидроизоляционная 20 кг. "Альфатехмаст"',
			price: '2050',
			unit: 'шт',
			description: 'При заказе через сайт дополнительная скидка 5%',
			link: '/shop/product/mastika-gidroizolyacionnaya-20-kg-alfatexmast',
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/qxoqQpTjJzhnAIzNEo9kjXtMHpNxo5oXEOfRYwGq.jpg'
		},
		{
			id: '2958',
			value: 'Краска моющаяся для наружных и внутренних работ Pelligrina',
			price: '2100',
			unit: '15кг',
			description: 'При заказе через сайт дополнительная скидка 5%',
			link: '/shop/product/kraskka-peligrinna',
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/peligrinnakraska.jpg'
		},
		{
			id: '434',
			value: 'Штукатурная смесь "ЕК" TT 30 фасадная (25 кг)',
			price: '315',
			unit: 'шт',
			description: 'При заказе через сайт дополнительная скидка 5%',
			link: '/shop/product/stukaturnaya-smes-ek-tt-30-fasadnaya-25-kg',
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-TT30.png'
		},
		{
			id: '161',
			value: 'Пена пистолетная "KUDO home 65" всесезонная',
			price: '448',
			unit: 'шт',
			description: 'При заказе через сайт дополнительная скидка 5%',
			link: '/shop/product/pena-pistoletnaya-kudo-home-65-vsesezonnaya',
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/96cddb9d3879573617bbb8e8fdccfc3b.jpg'
		},
		{
			id: '315',
			value: 'Клей для плитки эластичный "Церезит СМ 16" (25 кг)',
			price: '1173',
			unit: 'шт',
			description: 'При заказе через сайт дополнительная скидка 5%',
			link: '/shop/product/klei-dlya-plitki-elasticnyi-cerezit-sm-16-25-kg',
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D1%81%D0%BC16.jpeg'
		},
		{
			id: '436',
			value: 'Штукатурная смесь KNAUF ROTBAND белая (30 кг)',
			price: '530',
			unit: 'шт',
			description: 'При заказе через сайт дополнительная скидка 5%',
			link: '/shop/product/stukaturnaya-smes-knauf-rotband-belaya-30-kg',
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/020_original.jpg'
		},
		{
			id: '200',
			value: 'Доска обрезная обработанная',
			price: '17500',
			unit: 'м.куб.',
			description: 'При заказе через сайт дополнительная скидка 5%',
			link: '/shop/products/doska-obreznaya-obrabotannaya',
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%B4%D0%BE%D1%81%D0%BA%D0%B0.jpg'
		},
		{
			id: '345',
			value: 'Кабель ВВГ ПНГ-ls 2*2,5 гост плоский',
			price: '69',
			unit: 'шт',
			description: 'При заказе через сайт дополнительная скидка 5%',
			link: '/shop/product/kabel-vvg-png-ls-225-gost-ploskii-arzamasskii-kabelnyi-zavod',
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/2%D0%BD%D0%B02.5.jpeg'
		},
		{
			id: '1654',
			value: 'Труба д20 l-4m серая',
			price: '195',
			unit: 'шт',
			description: 'При заказе через сайт дополнительная скидка 5%',
			link: '/shop/product/truba-d20-l-4m-seraya',
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/ki77k2qf8lk4N8oWkfjflmkvOUhbn8CmX0TfEJ4A.jpg'
		},
		{
			id: '1687',
			value: 'Труба д25 l-4m. серая',
			price: '497',
			unit: 'шт',
			description: 'При заказе через сайт дополнительная скидка 5%',
			link: '/shop/product/truba-d25-l-4m-seraya',
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/vayfYRfvBskPU7aAU9eQ6TuEwa9zNehdHOLv14Zi.jpg'
		},
		{
			id: '91',
			value: 'Пенопласт ПСБ-С-15 1000*1000*100',
			price: '240',
			unit: 'шт',
			description: 'При заказе через сайт дополнительная скидка 5%',
			link: '/shop/product/penoplast-psb-s-15-10001000100',
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%BF%D0%B5%D0%BD%D0%BE%D0%BF%D0%BB%D0%B0%D1%81%D1%82.jpg'
		},
		{
			id: '2959',
			value: 'Клей для ячеистых блоков kleben block',
			price: '312',
			unit: 'шт',
			description: 'При заказе через сайт дополнительная скидка 5%',
			link: '/shop/product/lkey-dla-blokov',
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/818304731.webp'
		}
		// {
		// 	id: '307',
		// 	value: 'Клей для плитки KNAUF FLIESEN (25 кг)',
		// 	price: '455',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/klei-dlya-plitki-knauf-flizenkleber-25-kg',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D1%84%D0%BB%D0%B8%D0%B7%D0%B5%D0%BD.webp'
		// },
		// {
		// 	id: '1748',
		// 	value: 'Грунтовка KNAUF Тифенгрунт 10л.',
		// 	price: '1190',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/gruntovka-tifengrunt-10l',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/saRoC4NYpSCQwOak4vzX8D4hJeKuJ9ftTLfp6ixk.jpg'
		// },
		// {
		// 	id: '534',
		// 	value: 'Грунтовка для впитывающих оснований "CERESIT CT 17" (10 л)',
		// 	price: '1020',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/gruntovka-dlya-vpityvayushhix-osnovanii-cerezit-st-17-10-l',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/5.png'
		// },
		// {
		// 	id: '310',
		// 	value: 'Клей для пеногазобетона "FINITEX KF 17" престиж (25 кг)',
		// 	price: '260',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/klei-dlya-penogazobetona-finitex-kf-17-prestiz-25-kg',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%BF%D0%B5%D0%BD%D0%BE%D0%B3%D0%B0%D0%B7.jpg'
		// },
		// {
		// 	id: '1566',
		// 	value: 'ЦСП 3200*1250 (10мм)',
		// 	price: '2000',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/csp-32001250-10mm',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/wZELb17Oyadmk5gfUtaMK39XagKoWwt6iCw2ROpv.jpeg'
		// },
		// {
		// 	id: '954',
		// 	value: 'Бетонконтакт "CERESIT CT 19" (15 кг)',
		// 	price: '1750',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/betonkontakt-cerezit-st-19-15-kg',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/betonokontakt_ceresit_st19_5_l.jpg'
		// },
		// {
		// 	id: '456',
		// 	value: 'Шпаклевка готовая "SHEETROCK" (28 кг)',
		// 	price: '2600',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/spaklevka-gotovaya-sitrok-28-kg',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/0cd4304d4a0030c87bf95154fe6dbaf8.jpg'
		// },
		// {
		// 	id: '446',
		// 	value: 'Шпаклевка финишная "VETONIT LR+" (20 кг)',
		// 	price: '960',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/spaklevka-finisnaya-vetonit-lr-20-kg',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%B2%D0%B5%D1%82.jpg'
		// },
		// {
		// 	id: '1661',
		// 	value: 'Утеплитель Технониколь Роклайт 1200*600*50',
		// 	price: '1300',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/uteplitel-texnonikol-roklait-120060050',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/c2eHGTqI7cLLb0g8nf4vlbuB6KENnH59Ukii45om.jpg'
		// },
		// {
		// 	id: '345',
		// 	value: 'Кабель ВВГ ПНГ-ls 2*2,5 гост плоский',
		// 	price: '65',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/kabel-vvg-png-ls-225-gost-ploskii-arzamasskii-kabelnyi-zavod',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/2%D0%BD%D0%B02.5.jpeg'
		// },
		// {
		// 	id: '999',
		// 	value: 'Вагонка евро ель (ав) (13*90*6000)',
		// 	price: '254',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/vagonka-evro-el-av-13906000',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/6d31cfdd66e3b68441275e5bd3968168.jpeg'
		// },
		// {
		// 	id: '1003',
		// 	value: 'Имитация бруса ель ав (185*21*6000)',
		// 	price: '535',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/imitaciya-brusa-el-av-185216000',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/Imitacija-Brusa-copy.jpg'
		// },
		// {
		// 	id: '450',
		// 	value: 'Шпаклевка "ек" vh-80 фасадная белая (20 кг)',
		// 	price: '597',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/spaklevka-ek-vh-80-fasadnaya-belaya-20-kg',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-VH80.png'
		// },
		// {
		// 	id: '2810',
		// 	value: 'Цемент м500 Евроцемент 40 кг',
		// 	price: '368',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/cement-m500-evrocement-40-kg',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/AdAW50jMkTFDo4nUhEaxZUdxUkShNu2kf6HS4cMo.png'
		// },
		// {
		// 	id: '965',
		// 	value: 'ЭПП xps30-200 Техноплекс 1180*580*50-l',
		// 	price: '292',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/epp-xps30-200-texnopleks-118058050-l',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/XPS-%D0%A2%D0%95%D0%A5%D0%9D%D0%9E%D0%9F%D0%9B%D0%95%D0%9A%D0%A1.png'
		// },
		// {
		// 	id: '964',
		// 	value: 'ЭПП xps30-200 Техноплекс 1180*580*30-l',
		// 	price: '187',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/epp-xps30-200-texnopleks-118058030-l',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/XPS-%D0%A2%D0%95%D0%A5%D0%9D%D0%9E%D0%9F%D0%9B%D0%95%D0%9A%D0%A1.png'
		// },
		// {
		// 	id: '522',
		// 	value: 'Грунтовка универсальная "ЕК" g200 (10 л)',
		// 	price: '667',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/gruntovka-universalnaya-ek-g200-10-l',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-G200.png'
		// },
		// {
		// 	id: '523',
		// 	value: 'Грунтовка универсальная "ЕК" g200 (5л)',
		// 	price: '353',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/gruntovka-universalnaya-ek-g200-5-l',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-G200.png'
		// },
		// {
		// 	id: '463',
		// 	value: 'Наливной пол "ЕК" level 2.0 быстротвердеющий влагостойкий (20кг)',
		// 	price: '377',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/nalivnoi-pol-ek-level-20-bystrotverdeyushhii-vlagostoikii-20-kg',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-level-2.0.png'
		// },
		// {
		// 	id: '464',
		// 	value: 'Наливной пол "ЕК" level 2.1 быстротвердеющий (20кг)',
		// 	price: '376',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/nalivnoi-pol-ek-level-21-bystrotverdeyushhii-20-kg',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-level-2.1.png'
		// },
		// {
		// 	id: '1541',
		// 	value: 'Гкл "Кнауф" даногипс 9,5мм (1,2х2,5)',
		// 	price: '310',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/gkl-knauf-danogips-95mm-12x25',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/m5NgzpdlHX02sqR1Mqu3YrUQJwqqDGUOuAeYV75Z.jpeg'
		// },
		// {
		// 	id: '1543',
		// 	value: 'Гклв "Кнауф" даногипс 12,5мм (1,2х2,5)',
		// 	price: '423',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/gklv-knauf-danogips-125mm-12x25',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/lvfXJZnJe2ASRUHpI5X2dxVN30ZPHmVRFh0MDJyi.jpeg'
		// },
		// {
		// 	id: '1543',
		// 	value: 'Гклв "Кнауф" даногипс 9,5мм (1,2х2,5)',
		// 	price: '412',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/gklv-knauf-danogips-95mm-12x25',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/D2JsbwgeZcA0z4OLW242TuXbW5KFsDYQMR59VFSE.jpeg'
		// },
		// {
		// 	id: '261',
		// 	value: 'ГВЛВ "Кнауф" 10 мм (1200*2500)',
		// 	price: '710',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/gvlv-knauf-10-mm-12002500',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%B3%D0%B2%D0%BB.jpg'
		// },
		// {
		// 	id: '1661',
		// 	value: 'Утеплитель Технониколь роклайт 1200*600*50',
		// 	price: '1075',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/uteplitel-texnonikol-roklait-120060050',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/c2eHGTqI7cLLb0g8nf4vlbuB6KENnH59Ukii45om.jpg'
		// },
		// {
		// 	id: '235',
		// 	value: 'Фанера 10мм, сорт 3/4 (1,525*1,525)',
		// 	price: '739',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/fanera-10mm-sort-34-15251525',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D1%84%D0%B0%D0%BD%D0%B5%D1%80%D0%B0.jpg'
		// },
		// {
		// 	id: '965',
		// 	value: 'Эпп технониколь 1180*580*50-l',
		// 	price: '320',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/epp-xps30-200-texnopleks-118058050-l',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/XPS-%D0%A2%D0%95%D0%A5%D0%9D%D0%9E%D0%9F%D0%9B%D0%95%D0%9A%D0%A1.png'
		// }
		// {
		// 	id: '307',
		// 	value: 'Клей для плитки "Кнауф" флизенклебер (25 кг)',
		// 	price: '448',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/klei-dlya-plitki-knauf-flizenkleber-25-kg',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D1%84%D0%BB%D0%B8%D0%B7%D0%B5%D0%BD.webp'
		// },
		// {
		// 	id: '121',
		// 	value: 'Линокром ткп сланец серый (10 м2)',
		// 	price: '1700',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/linokrom-tkp-slanec-seryi-10-m',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%BB%D0%B8%D0%BD%D0%BE%D0%BA%D1%80%D0%BE%D0%BC.jpg'
		// },
		// {
		// 	id: '1826',
		// 	value: 'Профнастил с-21 ral 8017 1054*2000',
		// 	price: '850',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/profnastil-s-21-ral-8017-10542000',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/rvvzF15GbXg2v7TOeDZIyunJBLtXDBSHCaI1NQEJ.jpg'
		// }
		// {
		// 	id: '228',
		// 	value: 'Плита осб-3 2500*1250*9мм Kronospan ГОСТ (влагостойкая)',
		// 	price: '480',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/plita-osb-3-250012509mm-Kronospan-gost-vlagostoikaya',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/ilejI7dCV3zr72h4VudvlNrQLKBgHsrYwKd1HoAL.jpeg'
		// },
		// {
		// 	id: '1421',
		// 	value: 'Плита ОСБ-3 2500*1250*12мм Kronospan ГОСТ (влагостойкая)',
		// 	price: '750',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/plita-osb-3-2500125012mm-kronospan-gost-vlagostoikaya',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/14ztRKlEjShs6Hnr5L5moOWqn7cOCpDhgEbYd7uG.jpeg'
		// },
		// {
		// 	id: '470',
		// 	value: 'Смесь сухая универсальная м-150 (25 кг)',
		// 	price: '104',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/smes-suxaya-universalnaya-m-150-25-kg',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/m150-500x500.png'
		// },
		// {
		// 	id: '',
		// 	value: 'Поликарбонат сотовый прозрачный 4мм (г. Богородск)',
		// 	price: '5525',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/polikarbonat-sotovyi-prozracnyi-4mm',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/lSHy2nYTCubCyXeSrG38YM8CD4DPL88MeYQzrSSw.png'
		// },
		// {
		// 	value: 'Утеплитель Технониколь роклайт 1200*600*100',
		// 	price: '1190 рубля',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/uteplitel-texnonikol-roklait-1200600100'
		// },
		// {
		// 	id: '431',
		// 	value: 'Штукатурная смесь "ЕК" TG 40 (30кг) беж',
		// 	price: '448',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/stukaturnaya-smes-ek-tg-40-30-kg',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-TG40.png'
		// },
		// {
		// 	id: '432',
		// 	value: 'Штукатурная смесь "ЕК" TG 40 (30кг) white',
		// 	price: '532',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/stukaturnaya-smes-ek-tg-40-waite-30-kg',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-TG40-WHITE.png'
		// },
		// {
		// 	id: '436',
		// 	value: 'Штукатурная смесь "Кнауф Ротбанд" белая (30 кг)',
		// 	price: '549',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/stukaturnaya-smes-knauf-rotband-belaya-30-kg',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/020_original.jpg'
		// },
		// {
		// 	id: '448',
		// 	value: 'Шпаклевка гипсовая "ЕК" к 300 (25 кг)',
		// 	price: '612',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/spaklevka-gipsovaya-ek-k-300-20-kg',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-K300.png'
		// },
		// {
		// 	id: '464',
		// 	value: 'Наливной пол "ЕК" level 2.1 быстротвердеющий (20 кг)',
		// 	price: '390',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/nalivnoi-pol-ek-level-21-bystrotverdeyushhii-20-kg',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-level-2.1.png'
		// },
		// {
		// 	id: '466',
		// 	value: 'Cмесь для пола "Юнис" горизонт универсальный (20 кг)',
		// 	price: '385',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/cmes-dlya-pola-yunis-gorizont-universalnyi-20-kg',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D1%8E%D1%83.jpg'
		// },
		// {
		// 	id: '267',
		// 	value: 'Клей для плитки "ЕК" 3000 (25кг)',
		// 	price: '391',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/klei-dlya-plitki-ek-3000-25kg',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-3000-UNIVERSAL.png'
		// },
		// {
		// 	id: '314',
		// 	value:
		// 		'Клей для плитки и керамогранита "Церезит" см 14 extra" для улицы и теплых полов (25 кг)',
		// 	price: '760',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/klei-dlya-plitki-i-keramogranita-cerezit-sm-14-extra-dlya-ulicy-i-teplyx-polov-25-kg',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D1%81%D0%BC14.jpg'
		// },
		// {
		// 	id: '473',
		// 	value: 'Пескобетон м-300 (25 кг) Престиж',
		// 	price: '180',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/peskobeton-m-300-25-kg',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%BF%D0%B5%D1%81.jpg'
		// },
		// {
		// 	id: '520',
		// 	value: 'Грунтовка универсальная концентрированная "ЕК" g100 (10 л)',
		// 	price: '1266',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/gruntovka-universalnaya-koncentrirovannaya-ek-g100-10-l',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-G100.png'
		// },
		// {
		// 	id: '2946',
		// 	value: 'Плита осб-3 2500*1250*6мм Kronospan ГОСТ (влагостойкая)',
		// 	price: '532',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/plita-osb-3-250012506mm-kronospan-gost-vlagostoykaya',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/YBbav3JxXOKl8hYDTen6CzCa1TUlMBagzDxTXlFO.png'
		// },
		// {
		// 	id: '343',
		// 	value: 'Кабель ВВГ  3*2,5 ГОСТ',
		// 	price: '106',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/kabel-vvg-png-ls-325-ploskii-gost-arzamasskii-kabelnyi-zavod',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/2.5.jpg'
		// }
		// {
		// 	id: '965',
		// 	value: 'Эпп Технониколь 1180*580*50-l',
		// 	price: '348',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/epp-xps30-200-texnopleks-118058050-l',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/XPS-%D0%A2%D0%95%D0%A5%D0%9D%D0%9E%D0%9F%D0%9B%D0%95%D0%9A%D0%A1.png'
		// },
		// {
		// 	id: '964',
		// 	value: 'Эпп Технониколь 1180*580*30-l',
		// 	price: '200',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/epp-xps30-200-texnopleks-118058030-l',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/XPS-%D0%A2%D0%95%D0%A5%D0%9D%D0%9E%D0%9F%D0%9B%D0%95%D0%9A%D0%A1.png'
		// },
		// {
		// 	id: '70',
		// 	value: 'Утеплитель техновент стандарт (1200*600*50 мм), 0,216 м3',
		// 	price: '1658',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/uteplitel-texnovent-standart-120060050-mm-0216-m3',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D1%82%D0%B5%D1%85%D0%BD%D0%BE%D0%B2%D0%B5%D0%BD%D1%82.jpg'
		// },
		// {
		// 	id: '218',
		// 	value: 'Брус строганный 50*20*3000',
		// 	price: '91',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/brus-strogannyi-402030001',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%B1%D1%80%D1%83%D1%81%D1%8C%D1%8F.jpg'
		// },
		// {
		// 	id: '223',
		// 	value: 'Брус строганный 50*40*3000',
		// 	price: '165',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/brus-strogannyi-50403000',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%B1%D1%80%D1%83%D1%81%D1%8C%D1%8F.jpg'
		// },
		// {
		// 	value: 'Эпп xps30-200 техноплекс 1180*580*30-l',
		// 	price: '179 рублей',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/epp-xps30-200-texnopleks-118058030-l'
		// }
		// {
		// 	value: 'Эпп xps30-200 техноплекс 1180*580*20-l',
		// 	price: '130 рублей',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/epp-xps30-200-texnopleks-118058050-l'
		// },
		// {
		//     value: 'Пена пистолетная kudo proff 65+ всесезон',
		//     price: '420 рублей',
		//     description: 'При заказе через сайт дополнительная скидка 5%',
		//     link: '/shop/product/pena-pistoletnaya-kudo-proff-65-vsesezon'
		// },
		// {
		//     value: 'Утеплитель изобокс 50 мм',
		//     price: '825 рублей',
		//     description: 'При заказе через сайт дополнительная скидка 5%',
		//     link: '/shop/product/uteplitel-izoboks-50-mm'
		// },
		// {
		//     value: 'Утеплитель изобокс 100 мм',
		//     price: '890 рублей',
		//     description: 'При заказе через сайт дополнительная скидка 5%',
		//     link: '/shop/product/uteplitel-izoboks-100mm'
		// },
		// {
		//     value: 'Утеплитель Техноблок 1200х600х100',
		//     price: '1290 рублей',
		//     description: 'При заказе через сайт дополнительная скидка 5%',
		//     link: '/shop/product/uteplitel-texnoblok-standart-1200600100mm-0288-m3'
		// },
		// {
		//     value: 'Утеплитель Техноблок 1200х600х50',
		//     price: '1290 рублей',
		//     description: 'При заказе через сайт дополнительная скидка 5%',
		//     link: '/shop/product/uteplitel-texnoblok-standart-120060050-mm-0288-m3'
		// },
		// {
		//     value: 'Утеплитель роклайт 100 мм',
		//     price: '1180 рублей',
		//     description: 'Акция действует 23 и 24 июля',
		//     link: '/shop/products/mineralno-bazaltovye-utepliteli'
		// },
		// {
		//     value: 'Пенопласт 25 плотности 100мм',
		//     price: '215 рублей',
		//     description: 'При заказе через сайт дополнительная скидка 5%',
		//     link: '/shop/products/penoplast'
		// },
		// {
		//     value: 'Клей для плитки "Вебер ветонит" изи фикс (25 кг)',
		//     price: '330 рублей',
		//     description: 'При заказе через сайт дополнительная скидка 5%',
		//     link: '/shop/product/klei-dlya-plitki-veber-vetonit-izi-fiks-25-kg'
		// },
		// {
		//     value: 'Софит-izol в (пароизоляция) 1,6м (35 м2)',
		//     price: '635 рублей',
		//     description: 'При заказе через сайт дополнительная скидка 5%',
		//     link: '/shop/product/sofit-izol-v-paroizolyaciya-16m-35-m2'
		// },
		// {
		//     value: 'Софит-izol d (гидро-пароизоляция) 1,5м (70 м2)',
		//     price: '635 рублей',
		//     description: 'При заказе через сайт дополнительная скидка 5%',
		//     link: '/shop/product/sofit-izol-d-gidro-paroizolyaciya-15m-70-m2'
		// },
		// {
		// 	id: '431',
		// 	value: 'Штукатурная смесь "ЕК" tg 40 (30 кг)',
		// 	price: '460',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/stukaturnaya-smes-ek-tg-40-30-kg',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-TG40.png'
		// }
		// {
		// 	id: '432',
		// 	value: 'Штукатурная смесь "ЕК" tg 40 waite (30 кг)',
		// 	price: '424',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/stukaturnaya-smes-ek-tg-40-waite-30-kg',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-TG40-WHITE.png'
		// },
		// {
		// 	id: '434',
		// 	value: 'Штукатурная смесь "ек" TT 30 фасадная (25 кг)',
		// 	price: '260',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/stukaturnaya-smes-ek-tt-30-fasadnaya-25-kg',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-TT30.png'
		// }
		// {
		// 	id: '463',
		// 	value: 'Наливной пол "ЕК" level 2.0 быстротвердеющий (20 кг)',
		// 	price: '396',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/nalivnoi-pol-ek-level-20-bystrotverdeyushhii-vlagostoikii-20-kg',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-level-2.0.png'
		// },
		// {
		//     value: 'Пена пистолетная "kudo home 65" всесезонная',
		//     price: '410 рублей',
		//     description: 'При заказе через сайт дополнительная скидка 5%',
		//     link: '/shop/product/pena-pistoletnaya-kudo-home-65-vsesezonnaya'
		// },
		// {
		//     value: 'Пена монтажная kudo',
		//     price: '330 рублей',
		//     description: 'При заказе через сайт дополнительная скидка 5%',
		//     link: '/shop/product/pena-montaznaya-kudo'
		// },
		// {
		//     value: 'Доска',
		//     price: '16350 рублей за куб',
		//     description: 'Только наличный платёж',
		//     link: '/shop/products/doska-obreznaya-obrabotannaya'
		// },
	];

export default () => {
	return (
		<section className="font-display">
			<div className="py-8 px-4 mx-auto max-w-screen-2xl sm:py-16 lg:px-6">
				<div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-16">
					<h2 className="mb-4 text-xl sm:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
						Стройматериалы по сниженным ценам
					</h2>
					<p className="font-light text-gray-500 dark:text-gray-400 sm:text-xl">
						Так же вы получите <strong className="text-red-700">дополнительный бонус</strong>{' '}
						к цене при заказе через наш интернет магазин стройматериалов.
					</p>
				</div>
				<div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 xl:gap-8 md:space-y-0">
					{monthProduct.map(({ id, img, value, price, unit }) => (
						<div
							key={id}
							className="p-6 bg-white rounded  dark:bg-gray-800 shadow-xl shadow-gray-400"
						>
							<div className="mx-auto flex justify-center items-center mb-2 w-20 h-20 rounded lg:h-56 lg:w-56 ">
								<img src={img} alt={value} />
							</div>
							<h3 className="mb-2 text-xl font-bold dark:text-white">
								{price} р/{unit}
							</h3>
							<p className="font-light text-sm text-gray-500 dark:text-gray-400">
								{value}
							</p>
							<Button
								productID={id}
								productName={value}
								productPrice={price}
								productUnit={unit}
								productCount="1"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
