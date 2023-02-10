import TextClasifier from "./base/text_classifier";

export default class MovieReviews extends TextClasifier {
	constructor () {
		super();

		// SETTING BASE DATA
		this.setBase(
			// name
			'movie_reviews',
			// title
			"Movie Reviews Sentiment Analysis",
			// model_api
			0,
			// description
			"Enter a movie review and let the model predict if it is a positive review or a negative one. You can review in a word, two words or more than 5000 words, there is no limit, but as the review length increases, the computation takes time respectively.",
		)

		// SETTING PAGE DATA
		this.setPage(
			// classes
			[['Negative', 'Positive']],	// binary output
			// samples
			samples,
		)
	}
}

const samples_from_data = [
	`Hilarious, clean, light-hearted, and quote-worthy. What else can you ask for in a film? This is my all-time, number one favorite movie. Ever since I was a little girl, I've dreamed of owning a blue van with flames and an observation bubble.The cliché characters in ridiculous situations are what make this film such great fun. The wonderful comedic chemistry between Stephen Furst (Harold) and Andy Tennant (Melio) make up most of my favorite parts of the movie. And who didn't love the hopeless awkwardness of Flynch? Don't forget the airport antics of Leon's cronies, dressed up as Hari Krishnas: dancing, chanting and playing the tambourine--unbeatable! The clues are genius, the locations are classic, and the plot is timeless.A word to the wise, if you didn't watch this film when you were little, it probably won't win a place in your heart today. But nevertheless give it a chance, you may find that "It doesn't matter what you say, it doesn't matter what you do, you've gotta play."`,
	`So im not a big fan of Boll's work but then again not many are. I enjoyed his movie Postal (maybe im the only one). Boll apparently bought the rights to use Far Cry long ago even before the game itself was even finsished. People who have enjoyed killing mercs and infiltrating secret research labs located on a tropical island should be warned, that this is not Far Cry... This is something Mr Boll have schemed together along with his legion of schmucks.. Feeling loneley on the set Mr Boll invites three of his countrymen to play with. These players go by the names of Til Schweiger, Udo Kier and Ralf Moeller.Three names that actually have made them selfs pretty big in the movie biz. So the tale goes like this, Jack Carver played by Til Schweiger (yes Carver is German all hail the bratwurst eating dudes!!) However I find that Tils acting in this movie is pretty badass.. People have complained about how he's not really staying true to the whole Carver agenda but we only saw carver in a first person perspective so we don't really know what he looked like when he was kicking a**.. However, the storyline in this film is beyond demented. We see the evil mad scientist Dr. Krieger played by Udo Kier, making Genetically-Mutated-soldiers or GMS as they are called. Performing his top-secret research on an island that reminds me of "SPOILER" Vancouver for some reason. Thats right no palm trees here. Instead we got some nice rich lumberjack-woods. We haven't even gone FAR before I started to CRY (mehehe) I cannot go on any more.. If you wanna stay true to Bolls shenanigans then go and see this movie you will not be disappointed it delivers the true Boll experience, meaning most of it will suck.There are some things worth mentioning that would imply that Boll did a good work on some areas of the film such as some nice boat and fighting scenes. Until the whole cromed/albino GMS squad enters the scene and everything just makes me laugh.. The movie Far Cry reeks of scheisse (that's poop for you simpletons) from a fa,r if you wanna take a wiff go ahead.. BTW Carver gets a very annoying sidekick who makes you wanna shoot him the first three minutes he's on screen.`,
	`Bela Lugosi appeared in several of these low budget chillers for Monogram Studios in the 1940's and The Corpse Vanishes is one of the better ones.Bela plays a mad scientist who kidnaps young brides and kills them and then extracts fluid from their bodies so he can keep his ageing wife looking young. After a reporter and a doctor stay the night at his home and discover he is responsible for the brides' deaths, the following morning they report these murders to the police and the mad scientist is shot and drops dead shortly afterwards.You have got almost everything in this movie: the scientist's assistants consist of an old hag, a hunchback and dwarf (her sons), a thunderstorm and spooky passages in Bela's house. Bela and his wife find they sleep better in coffins rather than beds in the movie.The Corpse Vanishes is worth a look, especially for Bela Lugosi fans. Great fun.Rating: 3 stars out of 5.`,
	`NO SPOILERS!!After Hitchcock's successful first American film, Rebecca based upon Daphne DuMarier's lush novel of gothic romance and intrigue, he returned to some of the more familiar themes of his early British period - mistaken identity and espionage. As the U.S. settled into World War II and the large scale 'war effort' of civilians building planes, weaponry and other necessary militia, the booming film entertainment business began turning out paranoid and often jingoistic thrillers with war time themes. These thrillers often involved networks of deceptive and skilled operators at work in the shadows among the good, law abiding citizens. Knowing the director was at home in this espionage genre, producer Jack Skirball approached Hitchcock about directing a property he owned that dealt with corruption, war-time sabotage and a helpless hero thrust into a vortex of coincidence and mistaken identity. The darker elements of the narrative and the sharp wit of literary maven Dorothy Parker (during her brief stint in Hollywood before returning to her bohemian roots in NYC) who co-authored the script were a perfect match for Hitchcock's sensibilities.This often neglected film tells the story of the unfortunate 25 year old Barry Kane (Robert Cummings) who, while at work at a Los Angeles Airplane Factory, meets new employee Frank Frye (Norman Lloydd) and moments later is framed for committing sabotage. Fleeing the authorities who don't believe his far-fetched story he meets several characters on his way to Soda City Utah and finally New York City. These memorable characters include a circus caravan with a car full of helpful 'freaks' and a popular billboard model Patricia Martin (Priscilla Lane) who, during the worst crisis of his life as well as national security, he falls madly in love with! Of course in the land of Hitchcock, Patricia, kidnapped by the supposed saboteur Barry, falls for her captor thus adding romantic tension to the mix.In good form for this outing, Hitchcock brews a national network of demure old ladies, average Joes, and respectable businessmen who double as secret agent terrorists that harbor criminals, pull guns and detonate bombs to keep things moving. It's a terrific plot that takes its time moving forward and once ignited, culminates in one of Hitchcock's more memorable finales. Look for incredibly life like NYC tourist attractions (all of which were recreated by art directors in Hollywood due to the war-time 'shooting ban' on public attractions). While Saboteur may not be one of Hitchcock's most well known films, it's a popular b-movie that is certainly solid and engaging with plenty of clever plot twists and as usual - terrific Hitchcock villains. Remember to look for Hitchcock's cameo appearance outside a drug store in the second half of the film. Hitchcock's original cameo idea that was shot (him fighting in sign language with his 'deaf' wife) was axed by the Bureau of Standards and Practices who were afraid of offending the deaf!`,
	`It tries to be the epic adventure of the century. And with a cast like Shô Kasugi, Christopher Lee and John-Rhys Davies it really is the perfect B-adventure of all time. It's actually is a pretty fun, swashbuckling adventure that, even with it's flaws, captures your interest. It must have felt as the biggest movie ever for the people who made it. Even if it's made in the 90s, it doesn't have a modern feel. It more has the same feeling that a old Errol Flynn movie had. Big adventure movie are again the big thing in Hollywood but I'm afraid that the feeling in them will never be the same as these old movies had. This on the other hand, just has the real feeling. You just can't hate it. I think it's an okay adventure movie. And I really love the soundtrack. Damn, I want the theme song.`,
	`It is easy to tell early in this movie exactly what will happen, and who will die. It is about 4 women and a man who on a vacation. This was made during the end of the ultra Nazi seventies, when blonde women were supposedly ultra American survivors and brunettes were all deserving of death.This movie, like the others of that era, contrives to bring this about, and the viewer knows this. There is no mystery or suspense. The people squabble, but everything is so predictable for the prejudices of the time, it is laughable.The five people happen upon two savage young characters, and go nuts. Everyone is nuts, so that the director-writer team can justify their Nazi propaganda.For some reason, the guy is attracted to the blonde, who is really not much to look at, and ignores a super hot looking brunette that any heterosexual man would go nuts over. One must remember that in the seventies, movies were meant to appeal to women and not men.Totally crap and totally depressing.`,
	`Luckily for Bill Murray this is such a light-weight project since he pretty much has to carry it. Meatballs is the story of low-rent Camp Northstar and how its counselors deal with the campers as well as one another. Then there is much made of their wealthy rivals from across the lake named Camp Mohawk which culminates in a two-day Olympiad competition. Above it all is Bill Murray clowning around and making a pretty memorable film debut.The film is sprinkled with medium-sized laughs, chuckles, and more than a few guffaws along the way. The biggest laughs come from the pranks played on the nerdy camp director. Three of them involve the counselors moving his bed outside in various locations while he's sleeping. Morty, or "Micky" as everyone calls him, wakes up along the side of a road, strung up in some trees several feet above the ground, and finally floating on a raft in the middle of the lake! There are also some funny moments involving the counselors hitting on one another, but this is a PG rated film with little in the way of raunchiness.The film takes a serious note involving a shy camper named Rudy who is played by Chris Makepeace. Of course it's up to Murray to teach the kid how to open up, and give him the confidence he needs to run a marathon during the Olympiad. The sentimentality of Rudy's situation seems tacked on to a great degree. Notice how when Murray first sees the kid sitting alone in the grass after getting off the bus he tells him, "you must be the short depressed kid we ordered." Makes you wonder if that line was really in the script or Murray was just ad-libbing while the cameras were rolling. In other words, Murray might as well have said to Makepeace, "you must be that actor we hired to play the stereotypical lonely kid you see in most summer camp films who doesn't fit in." But before it's all over, Murray's performance makes this plot device more than bearable. He really seems to have some good chemistry with Makepeace.The film culminates with the games between the two rival camps. Very little of the events we are shown are even slightly believable, but "it just doesn't matter". This is a pretty good film on many levels. Don't let the absurd 5.6 rating this film is currently getting scare you off. Murray will keep you laughing throughout. Just be warned..... avoid the sequels!!!! Especially the one with Corey Feldman!! 8 of 10 stars.The Hound.`,
	`A young girl becomes a war-time marine's pen-pal, and when he visits at war's end expecting someone a bit more "available," comic complications ensue. All ultimately works out well, naturally, but not before everyone involved has thoroughly chewed the scenery. Errol Flynn's dead-on impression of Humphrey Bogart from "Casablanca" is a highlight, as are various send-ups of his own swashbuckling image (the "jumping" scene in the kitchen with Forrest Tucker is a riot). It is Tucker, though, who "tucks" the movie under his arm, lowers his head and barrels over the goal line. He demonstrates the comic flair more fully developed twenty years later in "F-Troop" and imparts a liveliness and energy that Flynn repeatedly plays off to raise his own performance. Eleanor Parker does a fine job as the woman being pursued, and little Patti Brady charms as Tucker's actual pen-pal friend. A fine, lightweight "coming home" comedy in a genteel setting that children and romantics of all ages should find entertaining.`,
];
const samples_manual = ["great movie", "love it", "hate it", "worst movie ever", "gonna watch it again and again", "It was actually a really stupid movie, never going to wathch it again"];
// const samples_manual = []
const samples = samples_from_data.concat(samples_manual)