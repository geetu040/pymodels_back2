import Base from "./base"

export default class TextClasifier extends Base {
	setPage (n_classes, classes, samples) {

		this.n_classes = n_classes;
		this.classes = classes;
		this.samples = samples;

		this.type = "text_classifier";

	}
}