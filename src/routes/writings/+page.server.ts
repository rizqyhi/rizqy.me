import dayjs from 'dayjs';
import rssToJson from '$lib/rssToJson';

type blogPost = {
	title: string;
	link: string;
	published: number;
};

const MEDIUM_FEED_URL = 'https://medium.com/feed/@rizqyhi';
const WP_FEED_URL = 'https://rizqy.me/feed/';

export async function load() {
	const mediumPosts = await rssToJson(MEDIUM_FEED_URL);
	const wpPosts = await rssToJson(WP_FEED_URL);
	const posts = [...mediumPosts.items, ...wpPosts.items].sort((a, b) => b.published - a.published);
	const yearlyPosts: { year: number; items: blogPost[] }[] = [];

	posts.forEach((post) => {
		const postYear = dayjs(post.published).year();
		const yearIndex = yearlyPosts.findIndex((x) => x.year === postYear);

		if (yearIndex === -1) {
			return yearlyPosts.push({ year: postYear, items: [post] });
		}

		return yearlyPosts[yearIndex].items.push(post);
	});

	return {
		posts: yearlyPosts,
		meta: {
			title: 'Writings &ndash; Rizqy Hidayat'
		}
	};
}
