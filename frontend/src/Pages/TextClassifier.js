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

	// STYLES
	const btnStyle = `
		w-1/3 my-2 bg-${c}-400 cursor-pointer
		rounded text-${c}-900 border px-3 py-2 font-semibold
		border border-${c}-600
		shadow-2xl hover:bg-${c}-500
	`

	return (<>

		<div className={`w-[100%] py-10 px-10 text-${c}-900 min-h-screen border bg-${c}-100 border-${c}-900 mx-auto text-center`}>

			<h1 className='font-bold my-4 text-4xl'>{opt.title}</h1>
			<p className='px-6 text-xl my-7'>{opt.desc}</p>

			{/* TEXT */}
			<textarea
				className={`
				border border-${c}-900 resize-none w-[100%]
				rounded p-3 bg-${c}-200
				text-${c}- placeholder:text-${c}-900 placeholder:italic
				shadow-2xl
				`}
				cols="30"
				rows="10"
				placeholder="Write a Review Here"
				value={text}
				onChange={(cursor) => { set_text(cursor.target.value) }}
			>
			</textarea>

			<div className="flex justify-evenly items-center">
				{/* LOAD */}
				<button className={`${btnStyle}`} onClick={load_text}>Load Text</button>

				{/* BROWSE */}
				<label htmlFor="tc-file-input" className={`
					${btnStyle} 
				`} >
					Upload File
					<input
						hidden
						id="tc-file-input"
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
				</label>
			</div>

			
			{/* PREDICT */}
			<button className={`${btnStyle} text-xl`} onClick={predict}>Predict</button>
			<br />

			{/* LOADER */}
			{loading && <Loader />}

			{/* OUTPUT */}
			{output && <Categorical classes={opt.classes} output={output} c={c} />}


		</div>

	</>)
}
