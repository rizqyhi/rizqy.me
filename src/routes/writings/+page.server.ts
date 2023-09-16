import { parse } from 'rss-to-json';

const MEDIUM_FEED_URL = 'https://medium.com/feed/@rizqyhi';

export async function load() {
	const mediumPosts = await parse(MEDIUM_FEED_URL);

	return {
		posts: mediumPosts.items
	};
}
