import time
from flask import Flask
import pymongo
from flask_cors import CORS

from bson.json_util import dumps

app = Flask(__name__)
CORS(app)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}
@app.route('/products')
def get_projects():
    client = pymongo.MongoClient("mongodb://admin:admin123@cluster0-shard-00-00.5q2t1.mongodb.net:27017,cluster0-shard-00-01.5q2t1.mongodb.net:27017,cluster0-shard-00-02.5q2t1.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-mmm09m-shard-0&authSource=admin&retryWrites=true&w=majority")
    db = client.DB1
    result = db.products.find()
    client.close()
    return dumps(result)
@app.route('/<productname>')    
def get_feature(productname):
    client = pymongo.MongoClient("mongodb://admin:admin123@cluster0-shard-00-00.5q2t1.mongodb.net:27017,cluster0-shard-00-01.5q2t1.mongodb.net:27017,cluster0-shard-00-02.5q2t1.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-mmm09m-shard-0&authSource=admin&retryWrites=true&w=majority")
    db = client.DB1
    result = db.products.find({"name":productname},{"features":1})
    client.close()
    return dumps(result)