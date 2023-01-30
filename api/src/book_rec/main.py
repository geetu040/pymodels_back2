from src.base.recommender import recommender
from src.base.recommender import Schema

import json
data_path = "./src/book_rec/data.json"
with open(data_path, 'rb') as f:
	data = json.load(f)

# Request Handler
def book_rec(req):
	# Sending to Base
	return recommender(req, data)