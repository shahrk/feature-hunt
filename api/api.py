import time
from flask import Flask
import pymongo
import pprint

from bson.json_util import dumps

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}
@app.route('/projects')
def get_projects():
    client = pymongo.MongoClient("mongodb://abc:pqrs@cluster0-shard-00-00.5q2t1.mongodb.net:27017,cluster0-shard-00-01.5q2t1.mongodb.net:27017,cluster0-shard-00-02.5q2t1.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-mmm09m-shard-0&authSource=admin&retryWrites=true&w=majority")
    db = client.DB1
    result = db.products.find()
    client.close()    
    return dumps(result)
