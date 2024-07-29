import { CheckIcon } from '@heroicons/react/20/solid'
// const cards = [
//   {
//     name: 'Быстро',
//     description: 'Доставим до вашего объекта своим транспортом с грузчиками. ',
//     icon: PhoneIcon,
//   },
//   {
//     name: 'Выгодно',
//     description: 'Предложим цену на стройматериалы ниже, чем у конкурентов.',
//     icon: LifebuoyIcon,
//   },
//   {
//     name: 'Надёжно',
//     description: 'Качество стройматериалов ведущих мировых производителей.',
//     icon: NewspaperIcon,
//   },
// ]
const cards = [
  {
    name: 'Стройматериалы',
    description: 'Все материалы для строительства и ремонта зданий и помещений.',
    icon: CheckIcon,
  },
  {
    name: 'Изоляция',
    description: 'Всё для защиты конструкций от внешнего воздействия среды.',
    icon: CheckIcon,
  },
  {
    name: 'Отделка',
    description: 'Всё для отделки поверхностей внутри и снаружи помещений.',
    icon: CheckIcon,
  },
  {
    name: 'Инструмент',
    description: 'Всё для автоматизации и облегчения труда при проведении работ.',
    icon: CheckIcon,
  },
  {
    name: 'Сантехника',
    description: 'Всё для проведения внутренних и наружных сантехнических работ.',
    icon: CheckIcon,
  },
  {
    name: 'Электротовары',
    description: 'Всё для качественного и безопасного устройства электрики.',
    icon: CheckIcon,
  },
]

export default () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 scroll-py-16 sm:py-20">
      {/* <img
        alt="стройматериалы"
        src="http://kranika.ru/img/services/category-covers/410696102.jpeg"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      /> */}
      <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6">
        <div className="mx-auto max-w-4xl lg:mx-0">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-7xl"> 
          <span className='sm:text-9xl'>Стройматериалы</span> <br/> в Нижнем Новгороде </h1>
          <p className="mt-6 text-sm sm:text-lg leading-6 text-gray-300">
            Стройматериалы в Нижнем Новгороде по доступным ценам в нашем интернет-магазине. Быстрая доставка, широкий ассортимент продукции и отличное обслуживание.
          </p>
          {/* <p className="mt-2 text-lg leading-8 text-gray-300">
            Стройте с нами – стройте с компанией Орбита-Строй!
          </p> */}
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-6 sm:mt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div key={card.name} className="flex gap-x-4 rounded-xl bg-white/5 p-5 ring-1 ring-inset ring-white/10">
              <card.icon aria-hidden="true" className="h-7 w-5 flex-none text-red-700" />
              <div className="leading-7">
                <h3 className="text-base font-semibold text-white">{card.name}</h3>
                <p className="text-sm sm:text-base mt-2 text-gray-300">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
