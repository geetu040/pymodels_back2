// REACT UTILITIES
import { useState } from "react";
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";

// PAGES
import { Home } from "./Pages/Home";
import { ImgClassifier } from "./Pages/ImgClassifier";
import { Recommender } from "./Pages/Recommender";
import { TextClassifier } from "./Pages/TextClassifier";

// COMPONENTS
import { Navbar } from "./Components/Navbar";

// MODELS
import CatAndDog from "./Models/cat_and_dog";
import MovieRec from "./Models/movie_rec";
import BookRec from "./Models/book_rec"
import MovieReviews from "./Models/movie_reviews";

// CREATING MODEL INSTANCES
const models = [
	new CatAndDog(),
	new MovieReviews(),
	new BookRec(),
	new MovieRec(),
]

const options = {}
for (let i in models) {
	options[models[i].name] = models[i];
}

// MAIN APP
export default function App() {
	const theme_colors = [
		"blue", "red", "yellow", "purple",
		"green", "slate", "teal", "lime"
	];
	const isPortrait = (window.innerHeight > window.innerWidth);
	const document_title = "PyModels.AI";

	const [c, set_c] = useState("blue")
	
	const props = {
		// constants
		theme_colors,
		isPortrait,
		document_title,
		options,
		// states
		c, set_c,
	}

	return (<BrowserRouter> <Routes>

		<Route path="/" element={<>
			<Navbar props={props} />
			<Home props={props} />
		</>}/>

		{models.map((model, i)=>{ return (

			<Route key={i} path={`/${model.name}`} element={<>
				<Navbar props={props} />

				{model.type === "img_classifier" &&
					<ImgClassifier props={props} />
				}
				{model.type === "recommender" &&
					<Recommender props={props} />
				}
				{model.type === "text_classifier" &&
					<TextClassifier props={props} />
				}

			</>}/>

		)})}


	</Routes> </BrowserRouter>);
}