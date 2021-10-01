"""
Copyright (C) 2021 Feature Hunt - All Rights Reserved
You may use, distribute and modify this code under the terms of the MIT license.
You should have received a copy of the XYZ license with
this file. If not, please write to: featurehuntteam@gmail.com
"""

''' flask app with mongo '''
import os
import json
import datetime
from bson.objectid import ObjectId
from flask import Flask
from flask_pymongo import PyMongo
from flask_cors import CORS

def create_app():
    return Flask(__name__)  
    
# create the flask object
app = create_app()
CORS(app)
app.config['MONGO_URI'] = os.environ.get('DB')
mongo = PyMongo(app)

from app.controllers import *
