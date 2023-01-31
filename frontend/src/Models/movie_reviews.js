import TextClasifier from "./base/text_classifier";

export default class MovieReviews extends TextClasifier {
	constructor () {
		super();

		// SETTING BASE DATA
		this.setBase(
			// name
			'movie_reviews',
			// title
			"Movie Reviews Sentiment Analysis",
			// model_api
			0,
			// description
			"FILL THIS LATER",
		)

		// SETTING PAGE DATA
		this.setPage(
			// n_classes
			2,
			// classes
			['Negative', 'Positive'],
			// samples
			samples,
		)
	}
}

const samples = ["great movie", "love it", "hate it", "worst movie ever", "gonna watch it again and again", "It was actually a really stupid movie, never going to wathch it again"];