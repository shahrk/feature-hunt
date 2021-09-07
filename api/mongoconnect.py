import pymongo
from pprint import pprint
client = pymongo.MongoClient("mongodb://admin:admin123@cluster0-shard-00-00.5q2t1.mongodb.net:27017,cluster0-shard-00-01.5q2t1.mongodb.net:27017,cluster0-shard-00-02.5q2t1.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-mmm09m-shard-0&authSource=admin&retryWrites=true&w=majority")
db = client.DB1
result = db.products.find({"name":"feature-hunt"},{"features":1})
for i in result:
    print (i)
client.close()