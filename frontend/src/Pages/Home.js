import React from 'react'
import { Link } from 'react-router-dom';

export const Home = ({ props }) => {
	const c = props.c;
	const models = Object.values(props.options)

	document.title = `${props.document_title} - Home`

	return (<div className={`
			min-h-[100vh] bg-${c}-100 py-16 w-100 text-center text-${c}-900 space-y-16 pb-[10%]
		`}>
		<div className='space-x-2 flex w-[100%] justify-center items-center'>
			<img className='w-10' src="/favicon.ico" alt='Icon' /> 
			<h1 className='font-semibold text-4xl sm:text-6xl'> {props.document_title}</h1>
		</div>
		
		{models.map((opt, i)=>{
			return (
				<div className={`
					rounded w-[80%]
					bg-${c}-200
					shadow-xl
					shadow-${c}-900/50
					space-y-4
					py-8 px-5
					${(i%2===0)?"ml-[4%]":"ml-[16%]"}
				`} key={opt.title}>
				<h1 className='text-3xl font-semibold'>{opt.title}</h1>
				<p className='text-xl'>{opt.desc}</p>
				<div className='
					flex flex-col sm:flex-row sm:space-y-0 space-y-3
					w-[80%] justify-around items-center mx-auto py-3
				'>
					<button className={`shadow-md shadow-${c}-900/50 text-lg font-semibold px-5 py-1 text-${c}-200 border border-${c}-900 rounded bg-${c}-500`}>
						<Link to={`/${opt.name}`}>Play the Model</Link></button>
					<button className={`shadow-md shadow-${c}-900/50 text-lg font-semibold px-5 py-1 text-${c}-200 border border-${c}-900 rounded bg-${c}-500`}>
						<a href={opt.getCodeLink()} target="notebook">See The Code</a></button>
				</div>
			</div>)
		})}

		{/* FOR TAILWIND CSS */}
		<div hidden className={`
		bg-blue-900 text-blue-900 bg-blue-100 shadow-blue-900 border-blue-900 bg-blue-200 bg-blue-400 shadow-blue-600/50 shadow-blue-900/50 text-blue-200 bg-blue-500 text-blue-100 bg-blue-300 bg-blue-800 font-blue-900 border-blue-100 text-blue-50 border-blue-50 shadow-blue-500 bg-blue-700 bg-blue-600 border-blue-600 hover:bg-blue-500 text-blue- placeholder:text-blue-900
		`}></div>

	</div>)
}
