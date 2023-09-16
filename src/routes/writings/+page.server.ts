import { parse } from 'rss-to-json';

const MEDIUM_FEED_URL = 'https://medium.com/feed/@rizqyhi';
const WP_FEED_URL = 'https://rizqy.me/feed/';

export async function load() {
	const mediumPosts = await parse(MEDIUM_FEED_URL);
	const wpPosts = await parse(WP_FEED_URL);

	return {
		posts: [...mediumPosts.items, ...wpPosts.items]
	};
}
