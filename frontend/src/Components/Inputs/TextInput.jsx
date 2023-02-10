import React, {useState} from 'react'

export const TextInput = ({ input, model, props }) => {

	const c = props.c;

	const [text, set_text] = useState("");


	// FUNCTIONS
	const predict = async () => {
		if (text.replace(/\s/g, '') === "") {
			return;
		}

		props.set_loading(true);
		props.set_output(null);

		model.predict(
			{ text: text },
			(output) => {
				props.set_output(output);
				props.set_loading(false);
			}
		)
	}
	const load_text = () => {
		let loaded_text = input.samples[Math.floor(Math.random()*input.samples.length)];
		set_text(loaded_text)
	}

	// STYLES
	const btnStyle = `
		w-1/4 my-2 bg-${c}-400 cursor-pointer
		rounded text-${c}-900 border px-3 py-2 font-semibold
		border border-${c}-600
		shadow-2xl hover:bg-${c}-500
	`

	return (<>

		{/* TEXT */}
		<textarea
			className={`
				border border-${c}-900 resize-none w-[95%]
				rounded p-3 bg-${c}-200  my-5
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

	</>)
}
