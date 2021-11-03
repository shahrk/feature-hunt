# pylint: disable=pointless-string-statement,undefined-variable,line-too-long

from flask import Flask, render_template, request, url_for, redirect, session
import pymongo
import bcrypt
import json
from os import environ

app = Flask(__name__)
from auth_controller import *

app.secret_key = "testing"
client = pymongo.MongoClient("mongodb+srv://bot:bot123@cluster0.xph5e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db = client.get_database('feature-hunt')
records = db.user
product_records = db.product

if __name__ == "__main__":
    app.run(debug=True, port=environ.get("PORT", 5000) , host='0.0.0.0')

