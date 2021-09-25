import pymongo
from pprint import pprint
import certifi
import yaml
import os
import sys

sys.path.insert(1, os.getcwd())

CONFIG = yaml.safe_load(open("config.yaml","r"))["DATABASE"]

uri = "mongodb://%s:%s@%s" % (CONFIG["USERNAME"], CONFIG["PASSWORD"], CONFIG["HOST"])
client = pymongo.MongoClient(uri,  tlsCAFile=certifi.where())
db = client.DB1
result = db.products.find({"name":"feature-hunt"},{"features":1})
for i in result:
    print (i)
client.close()