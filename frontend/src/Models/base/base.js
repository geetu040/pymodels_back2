export default class Base {
	setBase (name, title, model_api, desc) {
		this.api_base_urls = [
			"https://geetu040-pymodels.hf.space/",
			"http://127.0.0.1:8000/",
		];
		this.data_folder = "data";

		this.name = name;
		this.title = title;
		this.model_api = this.api_base_urls[model_api] + this.name;
		this.desc = desc;
	}
	predict (data, callback) {
		fetch(this.model_api,
		{
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			method: "POST",
			body: JSON.stringify(data)
		})
		.then(function(res){ return res.json(); })
		.then((res)=>{
			let output = res
			callback(output);
		}).catch((error)=>{
			let output = null;
			callback(output);
		})
	}
	getCodeLink () {
		// EXAMPLE URL
		"https://github.com/geetu040/pymodels/tree/main/work/text_classifier/movie_reviews";

		const GITHUB = "https://github.com";
		const OWNER = "geetu040";
		const REPO = "pymodels";
		const BRANCH = "main";
		const MODEL_TYPE = this.type;
		const MODEL_NAME = this.name;
		
		return `${GITHUB}/${OWNER}/${REPO}/tree/${BRANCH}/work/${MODEL_TYPE}/${MODEL_NAME}`;
	}
}