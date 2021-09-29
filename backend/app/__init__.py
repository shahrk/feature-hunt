''' flask app with mongo '''
import os
import json
import datetime
from bson.objectid import ObjectId
from flask import Flask
from flask_pymongo import PyMongo
from flask_cors import CORS


# create the flask object
app = Flask(__name__)
# add mongo url to flask config, so that flask_pymongo can use it to make connection
CORS(app)
app.config['MONGO_URI'] = os.environ.get('DB')
mongo = PyMongo(app)

from .controllers import *
