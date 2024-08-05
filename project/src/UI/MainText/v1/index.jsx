export default () => {
	return (
		<div className="overflow-hidden bg-white">
			<div className="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
				<div className="absolute top-0 bottom-0 left-3/4 hidden w-screen  lg:block" />
				<div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
					<div>
						<h2 className="text-base font-semibold uppercase tracking-wide text-red-700">
							Интернет магазин
						</h2>
						<h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-6xl">
							РемСтройПро
						</h3>
					</div>
				</div>
				<div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
					<div className="relative lg:col-start-2 lg:row-start-1">
						<svg
							className="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block"
							width="404"
							height="384"
							fill="none"
							viewBox="0 0 404 384"
							aria-hidden="true"
						>
							<defs>
								<pattern
									id="de316486-4a29-4312-bdfc-fbce2132a2c1"
									x="0"
									y="0"
									width="20"
									height="20"
									patternUnits="userSpaceOnUse"
								>
									<rect
										x="0"
										y="0"
										width="4"
										height="4"
										className="text-gray-200"
										fill="currentColor"
									/>
								</pattern>
							</defs>
							<rect
								width="404"
								height="384"
								fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
							/>
						</svg>
						<div className="mt-16 relative mx-auto max-w-prose text-base lg:max-w-none">
							<figure>
								<div className="aspect-w-12 aspect-h-7 lg:aspect-none">
									<img
										className="rounded-lg object-cover object-center shadow-lg"
										src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/pages/serv_4.jpg"
										alt="интернет магазин стройматериалов"
										width="1184"
										height="1376"
									/>
								</div>
							</figure>
						</div>
					</div>
					<div className="mt-8 lg:mt-0">
						<div className="mx-auto max-w-prose text-base lg:max-w-none">
							<p className="prose prose-cyan mx-auto text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
								Интернет-магазин “РемСтройПро” – ваш надежный партнер в мире
								строительных материалов и инструментов!
							</p>
						</div>
						<div className="prose prose-cyan mx-auto mt-3 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
							<p>
								Наша компания специализируется на продаже качественных строительных
								материалов, изоляционных продуктов, отделочных материалов,
								инструментов, сантехники и электротоваров. Мы предлагаем широкий
								ассортимент продукции, который удовлетворит потребности как
								профессиональных строителей, так и домашних мастеров.
							</p>
							<h3>Преимущества покупок в “РемСтройПро”</h3>
							<ul>
								<li>
									<strong>Широкий ассортимент:</strong> у нас вы найдете все
									необходимое для строительства, ремонта и отделки.
								</li>
								<li>
									<strong>Высокое качество:</strong> мы сотрудничаем только с
									проверенными поставщиками и брендами.
								</li>
								<li>
									<strong>Удобство покупок:</strong> оформить заказ можно в любое
									время онлайн, а наша быстрая доставка обеспечит своевременное
									получение товаров.
								</li>
								<li>
									<strong>Профессиональные консультации:</strong> специалисты
									всегда готовы помочь вам с выбором материалов и инструментов.
								</li>
								<li>
									<strong>Конкурентные цены:</strong> мы предлагаем лучшие цены на
									рынке, регулярно проводим акции и предоставляем скидки.
								</li>
							</ul>
							<p>
								Мы стремимся сделать процесс покупки максимально удобным и приятным
								для наших клиентов. Воспользуйтесь нашим интернет-магазином для
								быстрого и удобного заказа необходимых товаров. Если у вас возникнут
								вопросы, наши консультанты всегда готовы помочь вам по телефону или
								в чате.
							</p>
							<p>
								Спасибо, что выбрали “РемСтройПро”! Мы ценим ваше доверие и готовы
								сделать все возможное, чтобы ваши проекты были успешными и
								качественными.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
