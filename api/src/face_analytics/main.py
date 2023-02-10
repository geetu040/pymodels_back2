import numpy as np
import tensorflow as tf
import io, base64, requests
from pydantic import BaseModel

# SCHEMA
class Schema(BaseModel):
	resized_img_base64:str = None,
	img_url:str = None

# Request Handler
def face_analytics(req):
	resized_img_base64 = req.resized_img_base64
	img_url = req.img_url
	output = predict(resized_img_base64, img_url)
	return output

model_path = "./src/face_analytics/model.h5"
model = tf.keras.models.load_model(model_path)

def predict(img_data, img_url):
	if img_url == None:
		content = img_data.replace(" ", "+")
		converted = bytes(content, "utf-8")
		img = base64.decodebytes(converted)
	else:
		img = requests.get(img_url).content

	img = io.BytesIO(img)
	img = tf.keras.preprocessing.image.load_img(img, target_size=model.input_shape[1:])
	img = np.array(img)
	img = img.reshape(1, *img.shape)
	img = tf.keras.applications.inception_v3.preprocess_input(img)
	pred = model.predict(img)

	return [[round(j, 3) for j in i] for i in np.hstack([(1-pred).T, pred.T]).tolist()]
	return [
		[0.3, 0.7],
		[0.2, 0.8],
		[0.9, 0.1],
	]