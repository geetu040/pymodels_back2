import json
from pydantic import BaseModel

# SCHEMA
class Schema(BaseModel):
	title: str
	n: int = 5

# Request Handler
def recommender(req, data):
	title = req.title
	n = req.n
	output = predict(title, n, data)
	return output

def predict(title, n, data):
	index = data['titles'].index(title)
	recs = data['recs'][index][:n]
	output = []

	for rec in [[index, 0]] + recs:
		i, score = rec
		new_rec = {
			"title": data['titles'][i],
			"score": score,
			"img": None,
			"info": None
		}
		if (data['imgs']):
			new_rec['img'] = data['imgs'][i]
		if (data['infos']):
			new_rec['info'] = data['infos'][i],
		
		if type(new_rec['info']) == tuple:
			new_rec['info'] = new_rec['info'][0]

		output.append(new_rec)

	return output