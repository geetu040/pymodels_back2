from fastapi import FastAPI

# Importing Models and Schemas
from src.movie_reviews.main import movie_reviews, Schema as MovieReviewsSchema
from src.cat_and_dog.main import cat_and_dog, Schema as CatAndDogSchema
from src.face_analytics.main import face_analytics, Schema as FaceAnalytics
from src.book_rec.main import book_rec, Schema as BookRecSchema
from src.movie_rec.main import movie_rec, Schema as MovieRecSchema
from src.movie_2022_rec.main import movie_2022_rec, Schema as Movie2022RecSchema

# Initializing App
app = FastAPI()

# Allowing Cross Origins
from fastapi.middleware.cors import CORSMiddleware
origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

print(" ........... App Started ........... ")

# Endpoints

@app.get("/")
def index():
	return "Welcome to the API of PyModelsAI"

@app.post("/movie_reviews")
def endpoint_movie_reviews(req: MovieReviewsSchema):
    return movie_reviews(req)

@app.post("/cat_and_dog")
def endpoint_cat_and_dog(req: CatAndDogSchema):
    return cat_and_dog(req)

@app.post("/face_analytics")
def endpoint_face_analytics(req: CatAndDogSchema):
    return face_analytics(req)

@app.post("/book_rec")
def endpoint_book_rec(req: BookRecSchema):
    return book_rec(req)

@app.post("/movie_rec")
def endpoint_movie_rec(req: MovieRecSchema):
    return movie_rec(req)

@app.post("/movie_2022_rec")
def endpoint_movie_2022_rec(req: Movie2022RecSchema):
    return movie_2022_rec(req)