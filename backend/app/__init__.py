"""
Copyright (C) 2021 Feature Hunt - All Rights Reserved
You may use, distribute and modify this code under the terms of the MIT license.
You should have received a copy of the XYZ license with
this file. If not, please write to: featurehuntteam@gmail.com
"""
# pylint: disable=wrong-import-position,pointless-string-statement,undefined-variable,line-too-long

''' flask app with mongo '''
import os
import json
import datetime
from flask import Flask, render_template, request, url_for, redirect, session
import pymongo
import bcrypt
from bson.objectid import ObjectId
from flask_pymongo import PyMongo
from flask_cors import CORS

def create_app():
    return Flask(__name__)  
    
# create the flask object
app = create_app()
CORS(app)
app.config['MONGO_URI'] = os.environ.get('DB')
mongo = PyMongo(app)

app.secret_key = "testing"
records = mongo.db.users


from app.controllers import *

#if __name__ == "__main__":
#    app.run(debug=True)

