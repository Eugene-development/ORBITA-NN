// import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

// const features = [
// 	{
// 		name: 'Push to deploy.',
// 		description:
// 			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
// 		icon: CloudArrowUpIcon
// 	},
// 	{
// 		name: 'SSL certificates.',
// 		description:
// 			'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
// 		icon: LockClosedIcon
// 	},
// 	{
// 		name: 'Database backups.',
// 		description:
// 			'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
// 		icon: ServerIcon
// 	}
// ]

export default ({ features, service }) => {
	return (
		<div className="overflow-hidden bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl md:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
					<div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
						<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-2xl">
							<h2 className="text-base font-semibold leading-7 text-red-600">
								Услуга компании
							</h2>

							<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
								{service.title}
							</p>
							<p className="mt-6 text-lg leading-8 text-gray-600">
								{service.description}
							</p>
							<dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
								{features.map((feature) => (
									<div key={feature.name} className="relative pl-9">
										<dt className="inline font-semibold text-gray-900">
											<feature.icon
												className="absolute left-1 top-1 h-5 w-5 text-red-600"
												aria-hidden="true"
											/>
											{feature.name}
										</dt>{' '}
										<dd className="inline">{feature.description}</dd>
									</div>
								))}
							</dl>
						</div>
					</div>
					{service.image && (
						<div className="sm:px-6 lg:px-0">
							<div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
								<img
									src={service.image}
									alt="Услуга"
									width={2432}
									height={1442}
									className="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10"
								/>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
