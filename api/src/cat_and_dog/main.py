import numpy as np
import tensorflow as tf
import io, base64, requests
from pydantic import BaseModel

# SCHEMA
class Schema(BaseModel):
	resized_img_base64:str = None,
	img_url:str = None

# Request Handler
def cat_and_dog(req):
	resized_img_base64 = req.resized_img_base64
	img_url = req.img_url
	output = predict(resized_img_base64, img_url)
	return output

model_path = "./src/cat_and_dog/model_85.9.h5"
"""
This Model has an accuracy of 85.9%
"""

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
	img = img / 255.
	pred = model.predict(img)[0, 0]
	pred = float(pred)
	return [round(1-pred, 3), round(pred, 3)]