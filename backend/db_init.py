import pymongo

client = pymongo.MongoClient("mongodb+srv://bot:bot123@cluster0.xph5e.mongodb.net/feature-hunt?retryWrites=true&w=majority")
db = client.get_database('feature-hunt')
records = db.users
product_records = db.products