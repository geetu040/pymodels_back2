import Base from "./base"

export default class TextClasifier extends Base {
	setPage (classes, samples) {

		this.classes = classes;
		this.samples = samples;

		this.type = "text_classifier";

	}
}