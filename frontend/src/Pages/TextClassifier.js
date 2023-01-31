import { useState } from "react"
import { Categorical } from "../Components/Outputs/Categorical";
import { Loader } from "../Components/Loader";

export const TextClassifier = ({ props }) => {

	// MAIN STATES
	const page = window.location.href.split("/").pop()
	const opt = props.options[page];
	const c = props.c;
	document.title = props.document_title + " - " + opt.title

	// PAGE STATES
	const [text, set_text] = useState("");
	const [loading, set_loading] = useState(false);
	const [output, set_output] = useState(null);

	// FUNCTIONS
	const predict = async () => {
		if (text.replace(/\s/g, '') === "") {
			return;
		}

		set_loading(true);
		set_output(null);

		opt.predict(
			{ text: text },
			(output) => {
				set_output(output);
				set_loading(false);
			}
		)
	}
	const load_text = () => {
		let loaded_text = opt.samples[Math.floor(Math.random()*opt.samples.length)];
		set_text(loaded_text)
	}

	return (<>

		<div className="w-[80%] border bg-blue-300 border-blue-900 mx-auto text-center">

			<h1 className='font-semibold my-4 text-4xl'>{opt.title}</h1>
			<p className='px-6 text-xl my-4'>{opt.desc}</p>

			{/* TEXT */}
			<textarea
				className={`
				border border-blue-900 resize-none w-[100%]
				`}
				cols="30"
				rows="10"
				placeholder="Write a Review Here"
				value={text}
				onChange={(cursor) => { set_text(cursor.target.value) }}
			>
			</textarea>

			{/* LOAD */}
			<button className="" onClick={load_text}>Load Text</button>

			{/* BROWSE */}
			<input
				type="file"
				onChange={event => {
					set_text("");
					let file = event.target.files[0];
					if (file) {
						let fr = new FileReader()
						fr.readAsText(file);
						fr.onload = () => {
							set_text(fr.result);
						}
					}
				}}
			/>

			<br />
			
			{/* PREDICT */}
			<button onClick={predict}>Predict</button>

			<br />

			{/* LOADER */}
			{loading && <Loader />}

			{/* OUTPUT */}
			{output && <Categorical classes={opt.classes} output={output} c={c} />}


		</div>

	</>)
}
