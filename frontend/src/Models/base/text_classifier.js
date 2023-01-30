import Base from "./base"

export default class TextClasifier extends Base {
	setPage (n_classes, classes) {

		this.n_classes = n_classes;
		this.classes = classes;

		this.type = "text_classifier";

	}
}