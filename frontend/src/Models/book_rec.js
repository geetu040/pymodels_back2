import Recommender from "./base/recommender";

export default class BookRec extends Recommender {
	constructor () {
		super();

		// SETTING BASE DATA
		this.setBase(
			// name
			'book_rec',
			// title
			"Book Recommender System",
			// model_api
			0,
			// description
			"Search a book out of 640 available books and find similar books recommended by our Machine Learning Model. Books have been clustered on the basis of ratings provided by other users and thus uses collaboration based filtering.",
		)

		// SETTING PAGE DATA
		this.setPage(
			// n_rec
			5,
			// max_rec
			20,
			// min_rec
			1,
			// titles
			titles
		)
	}
}

const titles = ["1984", "1st to Die: A Novel", "2nd Chance", "4 Blondes", "A Bend in the Road", "A Case of Need", "A Child Called \\It\\\": One Child's Courage to Survive\"", "A Civil Action", "A Fine Balance", "A Great Deliverance", "A Heartbreaking Work of Staggering Genius", "A Is for Alibi (Kinsey Millhone Mysteries (Paperback))", "A Lesson Before Dying (Vintage Contemporaries (Paperback))", "A Man in Full", "A Map of the World", "A Painted House", "A Patchwork Planet", "A Prayer for Owen Meany", "A Thin Dark Line (Mysteries &amp; Horror)", "A Thousand Acres (Ballantine Reader's Circle)", "A Time to Kill", "A Virtuous Woman (Oprah's Book Club (Paperback))", "A Walk to Remember", "A Widow for One Year", "A Wrinkle In Time", "A Wrinkle in Time", "A Year in Provence", "ANGELA'S ASHES", "About a Boy", "Absolute Power", "Acceptable Risk", "Accident", "Airframe", "All Around the Town", "All I Really Need to Know", "All That Remains (Kay Scarpetta Mysteries (Paperback))", "All the Pretty Horses (The Border Trilogy, Vol 1)", "Along Came a Spider (Alex Cross Novels)", "American Gods", "Angela's Ashes (MMP) : A Memoir", "Angela's Ashes: A Memoir", "Angels", "Angels &amp; Demons", "Angus, Thongs and Full-Frontal Snogging: Confessions of Georgia Nicolson", "Animal Dreams", "Animal Farm", "Anne Frank: The Diary of a Young Girl", "Anne of Avonlea (Anne of Green Gables Novels (Paperback))", "Anne of Green Gables (Anne of Green Gables Novels (Paperback))", "Anne of the Island", "Artemis Fowl (Artemis Fowl, Book 1)", "Ashes to Ashes", "At Home in Mitford (The Mitford Years)", "Atonement : A Novel", "B Is for Burglar (Kinsey Millhone Mysteries (Paperback))", "Back Roads", "Bag of Bones", "Balzac and the Little Chinese Seamstress : A Novel", "Bastard Out of Carolina", "Beach House", "Beach Music", "Before I Say Good-Bye", "Bel Canto: A Novel", "Beloved", "Beloved (Plume Contemporary Fiction)", "Betrayal in Death", "Big Stone Gap: A Novel (Ballantine Reader's Circle)", "Big Trouble", "Billy Straight : A Novel", "Birthright", "Bittersweet", "Black House", "Black Notice", "Black and Blue", "Blessings", "Blue Diary", "Body of Evidence (Kay Scarpetta Mysteries (Paperback))", "Body of Lies", "Brave New World", "Breath, Eyes, Memory", "Breathing Lessons", "Bridget Jones's Diary", "Bridget Jones: The Edge of Reason", "By the Light of the Moon", "C Is for Corpse (Kinsey Millhone Mysteries (Paperback))", "CAT'S EYE", "Call of the Wild", "Carnal Innocence", "Carolina Moon", "Cat &amp; Mouse (Alex Cross Novels)", "Catering to Nobody", "Cause of Death", "Certain Prey", "Charlotte's Web (Trophy Newbery)", "Chicken Soup for the Soul (Chicken Soup for the Soul)", "Chicken Soup for the Woman's Soul (Chicken Soup for the Soul Series (Paper))", "Chocolat", "Choke", "Chosen Prey", "Christine", "Chromosome 6", "Circle of Friends", "Clear and Present Danger (Jack Ryan Novels)", "Cold Mountain", "Cold Mountain : A Novel", "Cold Sassy Tree", "Confessions of a Shopaholic (Summer Display Opportunity)", "Confessions of an Ugly Stepsister : A Novel", "Congo", "Contact", "Contagion", "Couplehood", "Cradle and All", "Crazy for You", "Cruel &amp; Unusual (Kay Scarpetta Mysteries (Paperback))", "Cry Wolf", "Cujo", "D Is for Deadbeat (Kinsey Millhone Mysteries (Paperback))", "Daddy", "Daddy's Little Girl", "Daisy Fay and the Miracle Man", "Dance upon the Air (Three Sisters Island Trilogy)", "Dances With Wolves", "Dark Paradise", "Dark Rivers of the Heart", "Dawn (Cutler)", "Debt of Honor (Jack Ryan Novels)", "Deception Point", "Deck the Halls (Holiday Classics)", "Degree of Guilt", "Deja Dead", "Desperation", "Digital Fortress : A Thriller", "Disclosure", "Divine Secrets of the Ya-Ya Sisterhood: A Novel", "Dolores Claiborne", "Don't Stand Too Close to a Naked Man", "Don't Sweat the Small Stuff and It's All Small Stuff : Simple Ways to Keep the Little Things from Taking Over Your Life (Don't Sweat the Small Stuff Series)", "Dragonfly in Amber", "Dreamcatcher", "Drowning Ruth", "Drowning Ruth (Oprah's Book Club)", "Dude, Where's My Country?", "Dust to Dust", "Dying for Chocolate (Culinary Mysteries (Paperback))", "E Is for Evidence: A Kinsey Millhone Mystery (Kinsey Millhone Mysteries (Paperback))", "Easy Prey", "Echoes", "Ellen Foster", "Empire Falls", "Ender's Game (Ender Wiggins Saga (Paperback))", "Engaging The Enemy", "Envy", "Evening Class", "Everything's Eventual : 14 Dark Tales", "Exclusive", "Executive Orders (Jack Ryan Novels)", "F Is for Fugitive (Kinsey Millhone Mysteries (Paperback))", "FORREST GUMP (Movie Tie in)", "Face the Fire (Three Sisters Island Trilogy)", "Fahrenheit 451", "Faking It", "Fall On Your Knees (Oprah #45)", "Falling Angels", "False Memory", "Family Album", "Fast Food Nation: The Dark Side of the All-American Meal", "Fast Women", "Fat Tuesday", "Fatal Cure", "Fatherhood", "Fear Nothing", "Final Target", "Fine Things", "Fingersmith", "Five Days in Paris", "Five Quarters of the Orange", "Flesh and Blood", "Forever... : A Novel of Good and Evil, Love and Hope", "Fortune's Rocks : A Novel", "Foucault's Pendulum", "Four Blind Mice", "Four Past Midnight", "Four To Score (A Stephanie Plum Novel)", "Fried Green Tomatoes at the Whistle Stop Cafe", "From Potter's Field", "From the Corner of His Eye", "Full House (Janet Evanovich's Full Series)", "Full Tilt (Janet Evanovich's Full Series)", "G Is for Gumshoe (Kinsey Millhone Mysteries (Paperback))", "GARDEN OF SHADOWS (Dollanger Saga (Paperback))", "Gerald's Game", "Girl in Hyacinth Blue", "Girl with a Pearl Earring", "Girl, Interrupted", "Good Omens", "Good in Bed", "Guardian Angel", "Guilty as Sin", "H Is for Homicide (Kinsey Millhone Mysteries (Paperback))", "Hannibal", "Hard Eight : A Stephanie Plum Novel (A Stephanie Plum Novel)", "Harry Potter and the Chamber of Secrets (Book 2)", "Harry Potter and the Goblet of Fire (Book 4)", "Harry Potter and the Order of the Phoenix (Book 5)", "Harry Potter and the Prisoner of Azkaban (Book 3)", "Harry Potter and the Sorcerer's Stone (Book 1)", "Harry Potter and the Sorcerer's Stone (Harry Potter (Paperback))", "Heart of the Sea (Irish Trilogy)", "Heartbeat", "Heartbreaker", "Hearts In Atlantis", "Heaven and Earth (Three Sisters Island Trilogy)", "Hemlock Bay", "Here on Earth", "Hide &amp; Seek", "Hideaway", "High Fidelity", "High Five (A Stephanie Plum Novel)", "Holes (Yearling Newbery)", "Homecoming", "Homeport", "Hornet's Nest", "Hot Six : A Stephanie Plum Novel (A Stephanie Plum Novel)", "House of Sand and Fog", "How Stella Got Her Groove Back", "How to Be Good", "How to Make an American Quilt", "I Capture the Castle", "I Is for Innocent", "I Know This Much Is True", "I Know This Much Is True (Oprah's Book Club)", "I Know Why the Caged Bird Sings", "I'll Be Seeing You", "Icebound", "Icy Sparks", "In Her Shoes : A Novel", "Inner Harbor (Quinn Brothers (Paperback))", "Insomnia", "Intensity", "Interview with the Vampire", "Into Thin Air : A Personal Account of the Mt. Everest Disaster", "Into the Wild", "Invasion", "Irish Hearts", "Isle of Dogs", "It", "It Was on Fire When I Lay Down on It", "It's Always Something", "J Is for Judgment", "Jack &amp; Jill (Alex Cross Novels)", "Jemima J: A Novel About Ugly Ducklings and Swans", "Jewel", "Jewel (Oprah's Book Club)", "Jewels of the Sun (Irish Trilogy)", "Journey", "Jurassic Park", "K Is for Killer (Kinsey Millhone Mysteries (Paperback))", "Kaleidoscope", "Key of Knowledge (Key Trilogy (Paperback))", "Key of Light (Key Trilogy (Paperback))", "Key of Valor (Roberts, Nora. Key Trilogy, 3.)", "Kiss the Girls", "L Is for Lawless", "Ladder of Years", "Lamb : The Gospel According to Biff, Christ's Childhood Pal", "Last Chance Saloon", "Last Man Standing", "Left Behind: A Novel of the Earth's Last Days (Left Behind No. 1)", "Let Me Call You Sweetheart", "Life of Pi", "Lightning", "Like Water for Chocolate : A Novel in Monthly Installments with Recipes, Romances, and Home Remedies", "Like Water for Chocolate: A Novel in Monthly Installments With Recipes, Romances and Home Remedies", "Little Altars Everywhere: A Novel", "Lord of the Flies", "Love in the Time of Cholera (Penguin Great Books of the 20th Century)", "Loves Music, Loves to Dance", "Lucky : A Memoir", "M Is for Malice", "Macgregor Brides (Macgregors)", "Macgregor Grooms (Macgregors)", "Master of the Game", "Matilda", "Me Talk Pretty One Day", "Men Are from Mars, Women Are from Venus: A Practical Guide for Improving Communication and Getting What You Want in Your Relationships", "Mercy", "Message from Nam", "Message in a Bottle", "Middlesex: A Novel", "Midnight", "Midnight Bayou", "Midnight in the Garden of Good and Evil", "Midnight in the Garden of Good and Evil: A Savannah Story", "Midwives: A Novel", "Mind Prey", "Mirror Image", "Misery", "Miss Julia Speaks Her Mind : A Novel", "Montana Sky", "Moo", "Moonlight Becomes You", "Morality for Beautiful Girls (No.1 Ladies Detective Agency)", "Mortal Fear", "Mortal Prey", "Mr. Murder", "My Gal Sunday", "Mystic River", "N Is for Noose", "Needful Things", "Nerd in Shining Armor", "Neverwhere", "Nickel and Dimed: On (Not) Getting By in America", "Nicolae: The Rise of Antichrist (Left Behind No. 3)", "Night", "Night Prey", "Night Sins", "Night Whispers", "Nightmares &amp; Dreamscapes", "Nights in Rodanthe", "On the Street Where You Live", "One Door Away from Heaven", "One True Thing", "One for the Money (A Stephanie Plum Novel)", "One for the Money (Stephanie Plum Novels (Paperback))", "Oryx and Crake", "Outlander", "Over the Edge", "P Is for Peril", "Paradise", "Patriot Games (Jack Ryan Novels)", "Pay It Forward", "Peace Like a River", "Pet Sematary", "Phantoms", "Pigs in Heaven", "Plainsong (Vintage Contemporaries)", "Pleading Guilty", "Plum Island", "Point of Origin", "Politically Correct Bedtime Stories: Modern Tales for Our Life and Times", "Pop Goes the Weasel", "Possession : A Romance", "Postmortem", "Practical Magic", "Presumed Innocent", "Pretend You Don't See Her", "Pride and Prejudice", "Primary Colors: A Novel of Politics", "Prodigal Summer", "Purity in Death", "Q Is for Quarry", "Rebecca", "Red Dragon", "Red Storm Rising", "Remember Me", "Riptide", "Rising Sun", "Rising Tides", "River's End", "River, Cross My Heart", "Rose Madder", "Roses Are Red (Alex Cross Novels)", "Rules of Prey", "SHIPPING NEWS", "STONES FROM THE RIVER", "Sacred Sins", "Saint Maybe", "Sanctuary", "Saving Faith", "Scarlet Feather", "Scarlett : The Sequel to Margaret Mitchell's \\Gone With the Wind\\\"\"", "Schindler's List", "Sea Glass: A Novel", "Sea Swept (Quinn Brothers (Paperback))", "Seabiscuit", "Seabiscuit: An American Legend", "Secret History", "Secrets", "Seize the Night", "Seven Habits Of Highly Effective People", "Seven Up (A Stephanie Plum Novel)", "Shadowfires", "Shattered", "She's Come Undone (Oprah's Book Club (Paperback))", "She's Come Undone (Oprah's Book Club)", "Shell Seekers", "Shopaholic Takes Manhattan (Summer Display Opportunity)", "Shopaholic Ties the Knot", "Sick Puppy", "Silence of the Lambs", "Silent Witness", "Skeleton Crew", "Skipping Christmas", "Slammerkin", "Sleepers", "Slow Waltz in Cedar Bend", "Small Town Girl", "Smilla's Sense of Snow", "Snow Falling on Cedars", "Sole Survivor", "Song of Solomon (Oprah's Book Club (Paperback))", "Songs in Ordinary Time (Oprah's Book Club (Paperback))", "Sophie's World: A Novel About the History of Philosophy", "Southern Cross", "Sphere", "Standoff", "Stanislaski Brothers (Silhouette Promo)", "Still Waters", "Stillwatch", "Strangers", "Stupid White Men ...and Other Sorry Excuses for the State of the Nation!", "Sudden Prey", "Summer Pleasures", "Summer Sisters", "Suzanne's Diary for Nicholas", "Taltos: Lives of the Mayfair Witches", "Tara Road", "Tears of the Giraffe (No.1 Ladies Detective Agency)", "Tears of the Moon (Irish Trilogy)", "Tell Me Lies (Tell Me Lies)", "Tell No One", "Temptation", "That Camden Summer", "The Accidental Tourist", "The Alchemist: A Fable About Following Your Dream", "The Alibi", "The Alienist", "The Andromeda Strain", "The Angel of Darkness", "The Bachelor (Warner Books Contemporary Romance)", "The Bad Beginning (A Series of Unfortunate Events, Book 1)", "The Bad Place", "The Beach House", "The Bean Trees", "The Blind Assassin", "The Blue Nowhere : A Novel", "The Body Farm", "The Bonesetter's Daughter", "The Bonfire of the Vanities", "The Book of Ruth (Oprah's Book Club (Paperback))", "The Bourne Identity", "The Bourne Ultimatum", "The Boy Next Door", "The Brethren", "The Bridges of Madison County", "The Burden of Proof", "The Cardinal of the Kremlin (Jack Ryan Novels)", "The Catcher in the Rye", "The Celestine Prophecy (Celestine Prophecy)", "The Chamber", "The Cider House Rules", "The Clan of the Cave Bear (Earth's Children (Paperback))", "The Client", "The Clinic (Alex Delaware Novels (Paperback))", "The Color Purple", "The Color of Water: A Black Man's Tribute to His White Mother", "The Copper Beech", "The Cradle Will Fall", "The Crimson Petal and the White", "The Da Vinci Code", "The Dark Half", "The Deep End of the Ocean", "The Devil Wears Prada : A Novel", "The Diary of Ellen Rimbauer: My Life at Rose Red", "The Divine Secrets of the Ya-Ya Sisterhood: A Novel", "The Dogs of Babel (Today Show Book Club #12)", "The Door to December", "The Drawing of the Three (The Dark Tower, Book 2)", "The Edge", "The Empty Chair", "The English Patient", "The Eyre Affair: A Novel", "The Fellowship of the Ring (The Lord of the Rings, Part 1)", "The Firm", "The First Counsel", "The Five People You Meet in Heaven", "The General's Daughter", "The Genesis Code", "The Gift", "The Girl Who Loved Tom Gordon", "The Girls' Guide to Hunting and Fishing", "The Giver (21st Century Reference)", "The Glass Lake", "The God of Small Things", "The Golden Compass (His Dark Materials, Book 1)", "The Great Gatsby", "The Green Mile", "The Guardian", "The Gunslinger (The Dark Tower, Book 1)", "The Handmaid's Tale", "The Hitchhiker's Guide to the Galaxy", "The Hobbit : The Enchanting Prelude to The Lord of the Rings", "The Honk and Holler Opening Soon", "The Horse Whisperer", "The Hot Zone", "The Hours : A Novel", "The Hours: A Novel", "The House of the Spirits", "The Hundred Secret Senses", "The Hunt for Red October", "The Idiot Girls' Action Adventure Club", "The Jester", "The Joy Luck Club", "The Killing Game: Only One Can Win...and the Loser Dies", "The King of Torts", "The Kiss", "The Kitchen God's Wife", "The Last Precinct", "The Last Time They Met : A Novel", "The Long Road Home", "The Loop", "The Lost World", "The Lottery Winner : Alvirah And Willy Stories", "The Lovely Bones: A Novel", "The Mists of Avalon", "The Most Wanted", "The Mulberry Tree", "The Mummy or Ramses the Damned", "The Murder Book", "The Nanny Diaries: A Novel", "The Next Accident", "The No. 1 Ladies' Detective Agency (Today Show Book Club #8)", "The Notebook", "The Other Boleyn Girl", "The Partner", "The Pelican Brief", "The Perfect Storm : A True Story of Men Against the Sea", "The Pillars of the Earth", "The Pilot's Wife : A Novel", "The Plains of Passage (Earth's Children (Paperback))", "The Poisonwood Bible", "The Poisonwood Bible: A Novel", "The Prince of Tides", "The Promise", "The Queen of the Damned (Vampire Chronicles (Paperback))", "The Rainmaker", "The Rapture of Canaan", "The Reader", "The Red Tent (Bestselling Backlist)", "The Reef", "The Regulators", "The Reptile Room (A Series of Unfortunate Events, Book 2)", "The Rescue", "The Return Journey", "The Return of the King (The Lord of the Rings, Part 3)", "The Robber Bride", "The Runaway Jury", "The Sands of Time", "The Saving Graces: A Novel", "The Search", "The Secret Garden", "The Secret Life of Bees", "The Shipping News : A Novel", "The Simple Truth", "The Smoke Jumper", "The Stone Diaries", "The Street Lawyer", "The Subtle Knife (His Dark Materials, Book 2)", "The Sum of All Fears (Jack Ryan Novels)", "The Summerhouse", "The Summons", "The Surgeon", "The Sweet Potato Queens' Book of Love", "The Switch", "The Tale of the Body Thief (Vampire Chronicles (Paperback))", "The Talisman", "The Tao of Pooh", "The Testament", "The Thorn Birds", "The Tommyknockers", "The Two Towers (The Lord of the Rings, Part 2)", "The Ugly Duckling", "The Vampire Lestat (Vampire Chronicles, Book II)", "The Villa", "The Virgin Suicides", "The Wedding", "The Weight of Water : A Novel Tag: Author of Resistance and Strange Fits of Passion", "The Winner", "The Witching Hour (Lives of the Mayfair Witches)", "The Witness", "The Woman Next Door", "Thinner", "Three Fates", "Three Junes", "Three To Get Deadly : A Stephanie Plum Novel (A Stephanie Plum Novel)", "Timeline", "Tis : A Memoir", "To Kill a Mockingbird", "To the Nines: A Stephanie Plum Novel", "Tom Clancy's Op-Center (Tom Clancy's Op Center (Paperback))", "Touching Evil", "Toxin", "Tribulation Force: The Continuing Drama of Those Left Behind (Left Behind No. 2)", "Truly, Madly Manhattan", "Tuesdays with Morrie: An Old Man, a Young Man, and Life's Greatest Lesson", "Turtle Moon", "Two for the Dough", "Under the Tuscan Sun", "Unnatural Exposure", "Unspeakable", "Vanished", "Vector", "Vinegar Hill (Oprah's Book Club (Paperback))", "Violets Are Blue", "Violin", "Voyager", "Waiting to Exhale", "Wanderlust", "Watchers", "Watership Down", "We Were the Mulvaneys", "We'll Meet Again", "Weep No More My Lady", "Welcome to Temptation", "Welcome to the World, Baby Girl!", "What Looks Like Crazy On An Ordinary Day", "What to Expect When You're Expecting (Revised Edition)", "When the Wind Blows", "Where the Heart Is (Oprah's Book Club (Paperback))", "Where the Red Fern Grows", "While I Was Gone", "While My Pretty One Sleeps", "Whirlwind (Tyler, Book 1)", "Whispers", "White Oleander : A Novel", "White Oleander : A Novel (Oprah's Book Club)", "Wicked: The Life and Times of the Wicked Witch of the West", "Wifey", "Wild Animus", "Winter Moon", "Winter Solstice", "Wish You Well", "Without Remorse", "Wuthering Heights", "Year of Wonders", "You Belong To Me", "Zen and the Art of Motorcycle Maintenance: An Inquiry into Values", "Zoya", "\\O\\\" Is for Outlaw\""];