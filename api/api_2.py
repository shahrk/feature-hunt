import time
from flask import Flask
import pymongo
from flask_cors import CORS
import certifi
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
@app.route('/products')
def get_projects():
    CONFIG = yaml.safe_load(open("config.yaml","r"))["DATABASE"]
    uri = "mongodb://%s:%s@%s" % (CONFIG["USERNAME"], CONFIG["PASSWORD"], CONFIG["HOST"])
    client = pymongo.MongoClient(uri,  tlsCAFile=certifi.where())
    
    db = client.DB1
    result = db.products.find()
    client.close()
    return dumps(result)
@app.route('/<productname>')    
def get_feature(productname):
    CONFIG = yaml.safe_load(open("config.yaml","r"))["DATABASE"]
    uri = "mongodb://%s:%s@%s" % (CONFIG["USERNAME"], CONFIG["PASSWORD"], CONFIG["HOST"])
    client = pymongo.MongoClient(uri,  tlsCAFile=certifi.where())
    
    db = client.DB1
    result = db.products.find({"name":productname},{"features":1})
    client.close()
    return dumps(result)