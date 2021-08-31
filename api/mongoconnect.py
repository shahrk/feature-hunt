import pymongo
client = pymongo.MongoClient("mongodb://dbuser:<password>@cluster0-shard-00-00.5q2t1.mongodb.net:27017,cluster0-shard-00-01.5q2t1.mongodb.net:27017,cluster0-shard-00-02.5q2t1.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-mmm09m-shard-0&authSource=admin&retryWrites=true&w=majority")
