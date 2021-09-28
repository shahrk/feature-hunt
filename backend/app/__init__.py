''' flask app with mongo '''
import os
import json
import datetime
from bson.objectid import ObjectId
from flask import Flask
from flask_pymongo import PyMongo
from flask_cors import CORS

mongo = None
def init_db(app, db, uri=os.environ.get('DB')):
    global mongo
    app.config["MONGO_URI"] = uri
    print(app.config["MONGO_URI"])
    mongo = PyMongo(app)
    print("here1")


def create_app():
    return Flask(__name__)  
    
# create the flask object
app = create_app()
CORS(app)
init_db(app,1)
print("here")
from app.controllers import *

app
  






