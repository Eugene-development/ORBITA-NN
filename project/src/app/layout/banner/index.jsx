'use client'
import { Banner } from '@/UI'

import { contentBanner } from './staticData'
import { useStoreBanner } from '@/store/banner'

export default () => {
	const { currentVisibleBanner, changeVisibleBanner } = useStoreBanner.visibleBanner()

	return (
		<Banner
			data={contentBanner.data}
			changeVisibleBanner={changeVisibleBanner}
			currentVisibleBanner={currentVisibleBanner}
		/>
	)
}
