import time
import certifi
from flask import Flask, Response
from flask import request
import json
import pymongo
from bson.objectid import ObjectId
from flask_cors import CORS
from bson.json_util import dumps
import yaml
import os
import sys

sys.path.insert(1, os.getcwd())

app = Flask(__name__)
CORS(app)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}
@app.route('/products', methods=['GET', 'POST'])
def get_projects():
    CONFIG = yaml.safe_load(open("config.yaml","r"))["DATABASE"]
    uri = "mongodb://%s:%s@%s" % (CONFIG["USERNAME"], CONFIG["PASSWORD"], CONFIG["HOST"])
    client = pymongo.MongoClient(uri,  tlsCAFile=certifi.where())
    db = client.DB1
    if request.method == 'GET':
        result = db.products.find()
    elif request.method == 'POST':
        data = request.json
        for id, feature in enumerate(data['features']):
            feature['_id'] = ObjectId()
        print(data)
        if data is None or data == {}:
            return Response(response=json.dumps({"Error": "Please provide connection information"}),
                        status=400,
                        mimetype='application/json')
        result = db.products.insert_one(data).inserted_id
    client.close()
    return dumps(result)
@app.route('/<productname>', methods=['GET', 'POST'])    
def get_feature(productname):
    CONFIG = yaml.safe_load(open("config.yaml","r"))["DATABASE"]
    uri = "mongodb://%s:%s@%s" % (CONFIG["USERNAME"], CONFIG["PASSWORD"], CONFIG["HOST"])
    client = pymongo.MongoClient(uri,  tlsCAFile=certifi.where())
    db = client.DB1
    if request.method == 'GET':
        result = db.products.find({"name":productname},{"features":1})
    client.close()
    return dumps(result)
@app.route('/<productname>/features', methods=['GET', 'POST'])    
def features(productname):
    CONFIG = yaml.safe_load(open("config.yaml","r"))["DATABASE"]
    uri = "mongodb://%s:%s@%s" % (CONFIG["USERNAME"], CONFIG["PASSWORD"], CONFIG["HOST"])
    client = pymongo.MongoClient(uri,  tlsCAFile=certifi.where())
    db = client.DB1
    if request.method == 'POST':
        data = request.json
        data['_id'] = ObjectId()
        print(data)
        if data is None or data == {}:
            return Response(response=json.dumps({"Error": "Please provide connection information"}),
                        status=400,
                        mimetype='application/json')
        result = db.products.find_one_and_update({"name": productname}, {"$push": {"features": data}})
    elif request.method == 'GET':
        result = db.products.find({"name":productname},{"features":1})
    client.close()
    return dumps(result)
