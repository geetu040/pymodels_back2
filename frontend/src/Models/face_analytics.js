import ImgClassifier from "./base/img_classifier";

export default class FaceAnalytics extends ImgClassifier {

	constructor () {
		super();

		// SETTING BASE DATA
		this.setBase(
			// name
			"face_analytics",
			// title
			"Face Analytics",
			// model_api
			0,
			// description
			"Take a picture and let the model examine if it is a man or a woman, young or old. Change facial expressions, give it a smile and see if the model can capture your smile?",
		);

		// SETTING PAGE DATA
		this.setPage(
			// classes
			[	// multi binary outputs
				['Female', 'Male'],
				['Not Smiling', 'Smiling'],
				['Aged', 'Young'],
			],
			// img_size
			[128, 128],
			// img_format
			"jpg",
			// total_imgs
			6,
			// output_mode
			"multiple_binary"
		);

	}
}