import React, { useState } from 'react'

// COMPONENTS
import { Brief } from "../Components/Brief"
import { Loader } from '../Components/Loader'
// INPUTS
import { ImageInput } from "../Components/Inputs/ImageInput"
import { TextInput } from "../Components/Inputs/TextInput"
import { SelectInput } from "../Components/Inputs/SelectInput"
// OUTPUTS
import { CategoricalOutput } from "../Components/Outputs/CategoricalOutput"
import { RecommendedOutput } from "../Components/Outputs/RecommendedOutput"

export const Model = ({ model, props }) => {

	document.title = model.title + " - " + props.document_title
	const c = props.c;


	const [loading, set_loading] = useState(false);
	const [output, set_output] = useState(null);

	props = {
		...props,
		loading, set_loading,
		output, set_output,
	}

	return (
		<div className={`text-${c}-900 py-10 bg-${c}-500 w-[100%] min-h-[100vh]`}>
			<div className={`rounded py-6 bg-${c}-100 my-20 text-center w-[90%] div-classifier mx-auto`}>

				<Brief model={model} props={props} />

				{/* INPUTS */}
				{model.inputs.map((input, i) => {
					if (input.type === "image") {
						return <ImageInput key={i} input={input} model={model} props={props} />
					};
					if (input.type === "text") {
						return <TextInput key={i} input={input} model={model} props={props} />
					};
					if (input.type === "select") {
						return <SelectInput key={i} input={input} model={model} props={props} />
					};
					return <></>
				})}

				{/* LOADER */}
				{loading && <Loader />}

				{/* OUTPUTS */}
				{output && model.output.type === "categorical" && <CategoricalOutput classes={model.output.classes} output={output} c={props.c} />}
				{output && model.output.type === "recommended" && <RecommendedOutput output={output} c={props.c} />}

			</div> </div>)
}
