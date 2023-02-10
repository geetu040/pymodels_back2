import React from 'react'

export const CategoricalOutput = ({ classes, output, c }) => {
	return (<div className='py-10'>

		{classes.map((classes_, i_)=>{
			let output_ = output[i_];
			return <div key={i_} className='py-10 '>
				<button className={`
						mx-auto  block
						text-xl
						border border-1
						px-6 py-2
						
						font-bold
						rounded-md
						border-${c}-900
					`}>Prediction:
					<span className={`px-2 mx-1 bg-${c}-200 font-bold py-1`}>
						<strong>{classes_[output_.indexOf(Math.max(...output_))]}</strong>
					</span></button>
				<div
					className='pt-10 mt-5 img-class-graph flex justify-center mx-auto'
					style={{
						width: `${25 * 3}%`,
						maxWidth: "100%",
						// minHeight: "390px"
					}}
				>
					{output_.map((o, i) => {
						return (
							<div
								key={i}
								className={`
									w-[100%]
									space-y-5
									flex flex-col items-center justify-end
								`}
							>
								<div
									style={{
										height: `${300 * o}px`,
									}}
									className={`
										w-[70%]
										relative
										bg-${c}-400
										shadow-xl
										shadow-${c}-600/50
										rounded-t-sm
										border
										border-${c}-900
										`}
								>
									<span
										className='font-bold w-[100%] absolute top-[-22px] left-[0px]'
									>
										{Math.round(100 * o)}%
									</span>
								</div>
								<h2 className='text-xl'>{classes_[i]}</h2>
							</div>
						)
					})}
				</div>
			</div>
		})}


	</div>)
}
