import type { PageLoad } from './$types';

export const load = (async () => {
	return {
		meta: {
			title: 'Works &ndash; Rizqy Hidayat'
		}
	};
}) satisfies PageLoad;
